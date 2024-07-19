import sqlite3

def reset_database():
    # Create database connection
    con = sqlite3.connect('UHCDatabase.db')
    cur = con.cursor()

    # Verify the tables have been created
    res = cur.execute("SELECT name FROM sqlite_master WHERE type='table';")

    # Look at the names of the created tables
    table_names = res.fetchall()

    # Delete information from each table
    for table in table_names:
        query = f'DELETE FROM {table[0]}'
        cur.execute(query)
        print(f"{table} deleted")

    # Drop each table
    for table in table_names:
        query = f'DROP TABLE {table[0]}'
        cur.execute(query)
        print(f"{table} dropped")

    # Commit changes and close the database connection
    con.commit()
    con.close()

if __name__ == "__main__":
    reset_database()