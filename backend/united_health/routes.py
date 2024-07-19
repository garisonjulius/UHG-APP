import sqlite3
from united_health import app

DATABASE = 'UHCDatabase.db'

def get_db():
    """Return connection to the UHCDatabase."""
    db = sqlite3.connect(DATABASE)
    # db.row_factory = sqlite3.Row
    return db

@app.route("/")
def recommend_plan():
    """Function description."""

    return 'Home page'

@app.route("/user/<uid>", methods=['GET'])
def get_user_info(uid):
    """Function description."""

    return 'User information'

@app.route("/recommend/<uid>", methods=['GET'])
def get_recommended_plan_info(uid):
    """Function description."""

    return 'Rid info'

@app.route("/plan/<pid>", methods=['GET'])
def get_plan_info(pid):
    """Function description."""

    return 'pid info'
