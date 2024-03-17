import pymongo

import os
from dotenv import load_dotenv

class FetchData():
    def __init__(self) -> None:
        load_dotenv()    

    def fetch_data(self):
        uri = os.getenv("URI")
        client = pymongo.MongoClient(uri)

        db = client["TechGrad"]
        collection = db["Sensors"]
        
        documents = list(collection.find())
        
        client.close()

        return documents[0]['temperature']

# Testing
fd = FetchData()
print(fd.fetch_data())