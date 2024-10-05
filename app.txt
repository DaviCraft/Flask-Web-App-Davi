from flask import Flask, render_template, request, jsonify
import pandas as pd
from modules.data_processing import process_data

app = Flask(__name__)

# Carica i dati finanziari
data_path = 'data/financial_data.csv'
df = pd.read_csv(data_path)

@app.route('/')
def index():
    processed_data = process_data(df)
    return render_template('index.html', tables=[processed_data.to_html(classes='table table-striped')])

@app.route('/filter', methods=['POST'])
def filter_data():
    date_from = request.form.get('date_from')
    date_to = request.form.get('date_to')
    filtered_df = df[(df['Date'] >= date_from) & (df['Date'] <= date_to)]
    processed_data = process_data(filtered_df)
    return jsonify({'html': processed_data.to_html(classes='table table-striped')})

if __name__ == "__main__":
    app.run(debug=True)
