from flask import Flask,render_template,json
from MongoDB import FetchData

# FetchData Obj
fd = FetchData()

app = Flask(__name__)

@app.route('/')
def login():
    return render_template('login.html')


@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

@app.route('/live')
def live():
    return render_template('live.html')

@app.route('/data')
def data():
    doc = FetchData().fetch_data()[:20]
    # print(type(doc))
    if(len(doc)!=0):
        Data = {"data"  : doc}
        return json.dumps(Data)
    else:
        Data = {"data" : "NULL"}
        return json.dumps(Data)


print(__name__)

if __name__ == "__main__":
    app.run(port=3000,debug=True)