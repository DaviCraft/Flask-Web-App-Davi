# Flask-Web-App-Davi
The Flask Web-App Davi is a platform designed to test fundamental modules and scripts

Struttura del progetto 

```
financial_app/
    |-- app.py
    |-- /static/
    |     |-- style.css
    |     |-- script.js
    |-- /templates/
    |     |-- index.html
    |-- /data/
    |     |-- financial_data.csv
    |-- /modules/
    |     |-- data_processing.py
    |-- README.md
```

**Descrizione delle cartelle**

- **app.py**: Il file principale che gestisce l'app Flask.
- **/static/**: Contiene i file CSS, JavaScript, immagini e altri file statici.
- **/templates/**: Contiene i file HTML per la visualizzazione delle pagine.
- **/data/**: Contiene i file di dati, in questo caso un CSV con i dati finanziari.
- **/modules/**: Contiene i moduli Python per l'elaborazione dei dati.
- **README.md**: Un file di introduzione che spiega il progetto, come utilizzarlo e i suoi componenti principali.

## Descrizione del Progetto

Questa è un'applicazione web sviluppata utilizzando Flask, che permette agli utenti di visualizzare e filtrare dati finanziari. L'app utilizza un file CSV per caricare i dati, che vengono elaborati e resi visibili all'utente tramite un'interfaccia intuitiva. È stata progettata per essere semplice, interattiva e facilmente espandibile.


## Come Utilizzare il Progetto

NB: Il termine "bash" è un tipo di shell, cioè un'interfaccia che permette di eseguire comandi su un computer.  In pratica, puoi pensare a bash come al Prompt dei Comandi di Windows o Anaconda Prompt: sono tutti terminali che puoi usare per dare istruzioni al computer.


1. **Installa le Dipendenze**
   Assicurati di avere Python installato e utilizza il seguente comando per installare le dipendenze:
   ```bash
   pip install flask pandas
   ```

2. **Esegui l'Applicazione**
   Avvia il server Flask utilizzando:
   ```bash
   python app.py
   ```
   L'app sarà disponibile su un server locale `http://xxx.xxx.xxx/`.

## Funzionamento dell'Applicazione

- **Pagina Principale**: La pagina principale mostra i dati finanziari sotto forma di tabella. Gli utenti possono filtrare i dati utilizzando un intervallo di date.
- **Filtraggio Dati**: L'utente può inserire una data di inizio e una data di fine per filtrare i dati. Una volta premuto il pulsante "Filtra", l'applicazione utilizza una richiesta AJAX per aggiornare la tabella senza ricaricare l'intera pagina.

## Moduli Principali

- **`app.py`**: Contiene il server principale che gestisce le rotte dell'applicazione e interagisce con i vari moduli per elaborare i dati.
- **`data_processing.py`**: Un modulo separato che contiene la logica per l'elaborazione dei dati, come il filtraggio e l'ordinamento.
- **`index.html`**: Il file HTML per la pagina principale dell'applicazione, che contiene anche i campi per il filtraggio e la visualizzazione della tabella.
- **JavaScript (script.js)**: Gestisce l'interattività della pagina, in particolare l'invio della richiesta di filtraggio dei dati tramite AJAX.

## Cosa Fare e Cosa Evitare

### Cosa Fare
- **Personalizza il File CSV**: Modifica `financial_data.csv` nella cartella `/data/` per inserire i tuoi dati finanziari.
- **Espandi l'Applicazione**: Aggiungi nuove funzionalità, come grafici interattivi o altri metodi di visualizzazione dei dati.

### Cosa Evitare
- **Non Usare il Server di Sviluppo in Produzione**: L'app è attualmente configurata per l'ambiente di sviluppo. Non utilizzare il server Flask in produzione; usa un server WSGI come Gunicorn.
- **Non Modificare File Statici Mentre l'App È in Esecuzione**: Cambiamenti nei file statici (CSS, JS) potrebbero non essere aggiornati correttamente finché non ricarichi manualmente il browser.

## Contribuire
Sentiti libero di creare delle Pull Request o aprire delle Issue per suggerire nuove funzionalità o miglioramenti.

## Licenza
Questo progetto è distribuito sotto la licenza MIT. Vedi il file LICENSE per ulteriori dettagli.
```

4. **Spiegazione del Funzionamento**

- **Flask** gestisce l'intero backend dell'applicazione. Quando un utente accede all'endpoint `'/'`, viene eseguita la funzione `index()` che carica ed elabora i dati.
- I dati vengono elaborati nel modulo `data_processing.py`, che si trova nella cartella `/modules/` per una migliore organizzazione e separazione della logica.
- Sono stati aggiunti campi di input e un pulsante per filtrare i dati in base a un intervallo di date. Quando l'utente clicca sul pulsante "Filtra", viene fatta una richiesta AJAX per aggiornare la tabella con i dati filtrati.
- **jQuery** è stato aggiunto per gestire l'interattività della pagina, consentendo di filtrare i dati senza ricaricare l'intera pagina.
- **Bootstrap** viene utilizzato per stilizzare l'interfaccia, rendendo la tabella e i filtri visivamente gradevoli.
- **CSS personalizzato** è stato aggiunto per migliorare l'aspetto dell'app e per centrare meglio gli elementi.

5. **Esecuzione dell'App**

Per avviare l'applicazione, esegui il comando:
```bash
python app.py
```
L'app sarà disponibile su `http://127.0.0.1:5000/`.

6. **Note Finali**

Questa versione dell'applicazione ha più interattività, consentendo agli utenti di filtrare i dati finanziari in base alle date scelte. Inoltre, l'interfaccia è stata migliorata con Bootstrap e jQuery per rendere l'esperienza utente più dinamica e intuitiva.
