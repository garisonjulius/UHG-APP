import sqlite3

def verify_tables_dropped():
    """Reset the UHC Database by removing all tables."""
    # Connect to the databse
    con = sqlite3.connect('UHCDatabase.db')
    cur = con.cursor()

    # Verify that there are no tables in the database
    res = cur.execute("SELECT name FROM sqlite_master")

    # Look at the names of the created tables
    table_names = res.fetchall()
    if (len(table_names) == 0):
        print("No tables created.")
    else:
        print(f"This database currently has '{len(table_names)}' tables.\n")

    # Close connection
    con.commit()
    con.close()

if __name__ == "__main__":
    verify_tables_dropped()