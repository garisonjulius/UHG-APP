import sqlite3

def insert_db_data():
    # Create database connection
    con = sqlite3.connect('UHCDatabase.db')

    # Run the database schema to insert data into database
    with open('./backend/db/sqlite/data.sql') as fp:
        con.executescript(fp.read())

    # Commit changes and close the database connection
    con.commit()
    con.close()

if __name__ == "__main__":
    insert_db_data()