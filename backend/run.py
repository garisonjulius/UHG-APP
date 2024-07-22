from flask import Flask
from united_health import app
from db.sqlite.ai import put_rid

 
@app.route('/')
def main():
    put_rid(3)
    return 'Setup'
 
if __name__ == '__main__':
    app.run(debug=True)

