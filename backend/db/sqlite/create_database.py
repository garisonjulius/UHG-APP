import sqlite3

def create_db_tables():
    # Create database connection
    con = sqlite3.connect('UHCDatabase.db')

    # Run the database schema to create the tables
    with open('./backend/db/sqlite/schema.sql') as fp:
        con.executescript(fp.read())

    # Commit changes and close the database connection
    con.commit()
    con.close()

if __name__ == "__main__":
    create_db_tables()
