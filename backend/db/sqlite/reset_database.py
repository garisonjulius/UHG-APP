import sqlite3

def create_db_tables():
    # Create database connection
    con = sqlite3.connect('UHCDatabase.db')

    # Delete information from each table

    # Drop each table

    # Commit changes and close the database connection
    con.commit()
    con.close()

if __name__ == "__main__":
    create_db_tables()