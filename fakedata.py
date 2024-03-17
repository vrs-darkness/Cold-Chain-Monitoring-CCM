import random
temp = 28
humidity = 86
pressure = 1011152
light = [0,1]
shock = [0,1]

data = { "temp" : [temp + random.uniform(-1,1) for i in range(100)],\
        "humidity" : [humidity + random.uniform(-1,1) for i in range(100)],\
            "pressure" : [pressure + random.randint(-1,5) for i in range(100)],\
                "light" : [ random.choice(light) for i in range(100)],\
                     "shock" : [random.choice(shock) for i in range(100)] }
print(data['temp'])