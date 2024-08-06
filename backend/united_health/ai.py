from langchain_openai import AzureChatOpenAI
from langchain_community.document_loaders import TextLoader
from langchain_openai import AzureOpenAIEmbeddings
from langchain.indexes import VectorstoreIndexCreator
from united_health.get_user_data import *
import re

loader = TextLoader("./backend/healthplan.txt")
 
llm_model = AzureChatOpenAI(
    #azure_deployment= "gpt-35-turbo",
    azure_deployment="GPT-4o"
)
 
embeddings =  AzureOpenAIEmbeddings(model="text-embedding-ada-002")
index = VectorstoreIndexCreator(embedding=embeddings).from_loaders([loader])

def get_recommended_description(uid):
    # Context: The user's persona is Sara Hayes. She is 29, female, has a child, and has an income of $100,000. Her generic prescription spending is $50. The number of prescriptions she has is 3. The amount she has spent on emergency visits is $515. The amount she has spent on hospital benefits is $2225. She has spent $1120 on imaging. She has spent $74 on each of the specialist visits. She has spent $1500 on XRAYS. She has spent $148 on each of the doctor visits. She has had 8 labs and tests, 6 specialist visits, and 5 doctor visits. She is looking to maximize savings for her personal healthcare plan.
    # Task: Recommend a healthcare plan based on the data provided and provide reasoning for why this plan is superior. Take into account income and children when making your decision.
    # Exemplar: Please follow this example: Bob spent $15000 on generic medication last year. Since the cost of generic spending is least with the UHC Gold-X Advantage+ ($0 PCP, Adult Dental + Vision) plan, as it offers the lowest cost of $3 for generic medications before and after deductible.
    # Persona: Act like a healthcare insurance agent trying to preserve customer loyalty
    # Format: Say why you chose X plan over Y plan specifically for Sara
    user = get_user_information(uid)
    health = get_health_information(uid)

    start_phrase = f"You are a healthcare insurance agent trying to ensure member loyalty for user, {user['first_name']} {user['last_name']}. She is {user['age']}, {user['gender']}, has {user['num_children']} child(ren), and has an income of ${user['avg_annual_household_income']}. Her generic prescription spending is ${health['generic_prescription_spending']}. The number of prescription refills she has is {health['num_prescription_refills']}. The amount she has spent on emergency visits is ${health['emergency_visits_spending']}. The amount she has spent on hospital benefits is ${health['hospital_visits_spending']}. She has spent ${health['specialist_visits_spending']} on each of the specialist visits. She has spent ${health['labs_tests_spending']} on XRAYS. She has spent $148 on each of the doctor visits. She has had {health['num_labs_or_tests']} labs and tests, {health['num_specialist_visits']} specialist visits, and {health['num_doctor_visits']} doctor visits. She is looking to pay the minimum on healthcare each year. Recommend a healthcare plan based on the data provided and provide reasoning for why this plan is superior. Take into account income and children when making your decision. Please follow the format of: The reason X plan is better is because X plan offers a lower cost for category Z compared to Y and since Sara spends more on category Z, she would do well with a plan that maximizes savings there. Write the just the plan number preceded by a # followed by the explanation as formatted by the example."
    response = index.query(start_phrase, llm_model)

    return response

def _get_rid(uid):
    response = get_recommended_description(uid)

    # Regex pattern to match _word_ formatting
    pattern = r'#(\d+)'

    # Find all matches in the text
    matches = re.findall(pattern, response)

    return matches[0], response

def put_rid(uid):
    # Connect to SQLite database (change the database name and path as per your setup)
    conn = sqlite3.connect('UHCDatabase.db')
    cursor = conn.cursor()

    rid, desc = _get_rid(uid)

    # Look at current rid
    curr_rid = cursor.execute(
        "SELECT rid FROM Users "
        "WHERE UID = ? ",
        (uid, )
    )
    curr_rid = curr_rid.fetchall()[0]

    # Verify user exists
    if len(curr_rid) == 0:
        return f'Invalid user id: {uid}. User does not exist', 400

    # Check if user already has a recommended plan
    if curr_rid[0] is not None:
        return f'RID already set'

    # SQL UPDATE statement to update plan_rec_desc only if it is currently None (NULL)
    update_query = "UPDATE Users SET plan_rec_desc = ? WHERE UID = ? AND RID IS NULL"

    # Execute the update query
    cursor.execute(update_query, (index.query('Can you give a 30 word summary of just the reasoning of why the specific plan is better, be sure to write the specifc plan name title and not the number:' + desc, llm_model), uid))

    # SQL UPDATE statement to update RID only if it is currently None (NULL)
    update_query = "UPDATE Users SET RID = ? WHERE UID = ? AND RID IS NULL"

    # Execute the update query
    cursor.execute(update_query, (rid, uid))

    # Commit the transaction
    conn.commit()

    # Close the cursor and connection
    cursor.close()
    conn.close()

    # Return the rid
    response = {
        'rid': rid
    }

    return response
