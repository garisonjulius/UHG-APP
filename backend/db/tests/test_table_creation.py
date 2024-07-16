import sqlite3

def verify_tables_created():
    """Retrieve and print all table names in the UHC Database."""
    # Connect to the databse
    con = sqlite3.connect('UHCDatabase.db')
    cur = con.cursor()

    # Verify the tables have been created
    res = cur.execute("SELECT name FROM sqlite_master")

    # Look at the names of the created tables
    table_names = res.fetchall()
    if (len(table_names) == 0):
        print("No tables created.")
    else:
        for name in table_names:
            print(f"Tale '{name}' has been created.\n")

    # Close connection
    con.commit()
    con.close()

if __name__ == "__main__":
    verify_tables_created()