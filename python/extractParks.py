import json

with open("../nationalpark_data.json", "r") as f:
    parkdata = json.load(f)

x = "var parks='"

for park in parkdata:
    x += park + ","

x = x[:-1]

with open("../parknames.js", "w") as f:
    f.write(x.encode("utf8"))


