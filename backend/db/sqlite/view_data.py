import sqlite3

def view_db_data():
    # Create database connection
    con = sqlite3.connect('UHCDatabase.db')

    # Select all table names
    cur = con.cursor()
    res = cur.execute("SELECT name FROM sqlite_master WHERE type = 'table'")

    # Look at the names of the created tables
    table_names = res.fetchall()
    if (len(table_names) == 0):
        print("No tables exist.")
    else:
        for name in table_names:
            print(f"{name[0]}'s data: ")
            query = f'SELECT * FROM {name[0]}'
            res = cur.execute(query).fetchall()
            num_rows = len(res)
            
            # Table has data
            if num_rows:
                i = 0
                for row in res:
                    print(f'Row {i}: ', row)
                    i += 1
                # Print new line for formatting
                print()
            else:
                print("Table is empty\n")

    # Commit changes and close the database connection
    con.commit()
    con.close()

if __name__ == "__main__":
    view_db_data()