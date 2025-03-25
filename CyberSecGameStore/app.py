from flask import Flask, render_template

app = Flask(__name__)

# Sample game data
games = [
    {"name": "Cyber Strike", "price": "$29.99", "image": "images/cyber-strike.jpg"},
    {"name": "Dark Hacker", "price": "$19.99", "image": "images/dark-hacker.jpg"},
    {"name": "Phantom Botnet", "price": "$39.99", "image": "images/phantom-botnet.jpg"},
]

@app.route("/")
def home():
    return render_template("index.html", games=games)

@app.route("/hacked")
def hacked():
    return render_template("hacked.html")

if __name__ == "__main__":
    app.run(debug=True)
