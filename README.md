# Automated Data Extraction & Web Form Filling (Python & JavaScript)
This project demonstrates a hybrid automation workflow that extracts structured training data from Excel using Python, then automatically fills a multi-row training form in a web page using JavaScript DOM automation.

The example uses mock HTML and dummy data, and does not interact with any third-party or government system.

🚀 Features
---
✔ Excel Data Extraction (Python)

- Reads a structured list of trainings from a sheet

- Extracts only the relevant rows (e.g., row 18 to 36)

- Handles irregular table formatting

- Normalizes dates into browser-friendly formats

- Produces a clean JSON output ready for autofill

✔ Web Form Autofill (JavaScript)

- Dynamically adds rows to the training form

- Fills text inputs, date inputs, number fields, and dropdowns

- Dispatches DOM events so the form behaves as if filled manually

- Works on any HTML form with the expected field names

✔ Browser Workflow

- Python generates JSON from Excel

- JSON is passed into the browser console (or injected via Selenium)

- JavaScript fills the web form automatically

🧩 How It Works (Conceptual)
---

1. Python reads the Excel sheet and converts the training rows into a JSON list.

2. You open the mock training form in your browser.

3. You paste the JavaScript autofill script into the browser console, passing the JSON data.

4. The script automatically:

- Adds the required number of rows

- Fills each training entry

- Selects dropdowns correctly

- Triggers real DOM events

This simulates how automation can assist with repetitive form-filling tasks.

🛠 Technologies Used
---

- Python

  - Pandas

  - openpyxl

- JavaScript

  - DOM manipulation

  - Event dispatching

- HTML

  - Mock training form

- Automation Concepts

  - Data parsing

  - Browser scripting

  - Workflow automation

📘 Disclaimer
---
This project is for educational and demonstration purposes only.  
All data, HTML, and code samples are fully sanitized and do not relate to any real system.  
No login pages, private systems, or restricted portals are accessed.  

📎 Author Notes
---
This automation project was originally created to explore:

- Extracting complex data from structured Excel files

- Automating multi-row browser forms

- Integrating Python and JavaScript in a real workflow

It evolved into a clean, reusable automation framework suitable for learning and portfolio demonstration.

🧑‍💻 2. Python Script: extract_training_data.py (safe version)

This version extracts a sample training dataset and prints JSON.

(It uses row indices instead of headers to simulate your original workflow.)

🌐 3. JavaScript Script: autofill_training_form.js (safe version)

This version fills a mock HTML table (not tied to any real website).

🧪 4. Mock HTML Form: mock_training_form.html

A safe generic version of the training table you automated.
