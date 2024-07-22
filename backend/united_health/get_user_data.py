import sqlite3

def get_user_information(username : str) -> dict:
    return _get_table_information('Users', username)

def get_health_information(username : str) -> dict:
    return _get_table_information('UserHealthInformation', username)


def _get_table_information(table_name : str, username : str) -> dict:
    conn = sqlite3.connect('UHCDatabase.db')
    cursor = conn.cursor()

    # Use a parameterized query to fetch information for the specified user
    cursor.execute(f'SELECT * FROM {table_name} WHERE uid = ?', (username,))

    # extract column names
    column_names = [d[0] for d in cursor.description]

    # Initialize info as None to handle case where no user is found
    info = None

    # Fetch the user information
    row = cursor.fetchone()
    if row:
        info = dict(zip(column_names, row))


    # Close the cursor and the connection
    cursor.close()
    conn.close()

    # Return the user information as JSON
    return info