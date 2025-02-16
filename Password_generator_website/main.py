import random
import string
from flask import Flask, render_template, jsonify

app = Flask(__name__)

def generate_password():
    length_of_string = random.randint(8, 60)
    characters = string.ascii_letters + string.digits + string.punctuation
    return ''.join(random.choice(characters) for _ in range(length_of_string))

@app.route('/')
def home():
     return render_template('home.html')

@app.route('/generate_password')
def generate():
    password = generate_password()
    return jsonify({"password": password})


if __name__ == '__main__':
    app.run(debug=True)