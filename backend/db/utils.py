import sqlite3

def get_db_connection():
    db_file_loc = 'UHCDatabase.db'
    # Connect to the database through sqlite3
    con = sqlite3.connect(str(db_file_loc))
    return con
