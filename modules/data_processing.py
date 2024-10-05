import pandas as pd

def process_data(df):
    # Esempio di elaborazione dei dati: filtrare e ordinare i dati
    df = df[['Date', 'Close', 'Volume']]
    df['Date'] = pd.to_datetime(df['Date'])
    df = df.sort_values(by='Date', ascending=False)
    return df
