import pandas as pd, json
from datetime import datetime

EXCEL_PATH = "demo_training_data.xlsx"

sheets = ["C3", "C3 (2)", "C3 (3)", "C3 (4)"]
trainings = []

def normalize_date(val):
    """Convert Excel date or text into MM/DD/YYYY format."""
    if pd.isna(val) or not str(val).strip():
        return ""
    try:
        date = pd.to_datetime(val, errors="coerce")
        if pd.isna(date):
            return str(val).strip()
        return date.strftime("%m/%d/%Y")
    except Exception:
        return str(val).strip()

for s in sheets:
    df = pd.read_excel(EXCEL_PATH, sheet_name=s, header=None)

    # Rows 18–36 (index 17–35) contain the training entries
    df_train = df.iloc[17:36, :].dropna(how="all", axis=1).iloc[:, :6]
    df_train.columns = ["TITLE", "FROM", "TO", "HOURS", "TYPE", "SPONSOR"]

    for _, row in df_train.iterrows():
        title = str(row["TITLE"]).strip()
        if not title or title.lower() == "nan":
            continue

        trainings.append({
            "title": title,
            "from": normalize_date(row.get("FROM")),
            "to": normalize_date(row.get("TO")),
            "hours": str(row.get("HOURS", "")).strip(),
            "type": str(row.get("TYPE", "")).strip(),
            "sponsor": str(row.get("SPONSOR", "")).strip()
        })

print(f"✅ Extracted {len(trainings)} training records")

with open("trainings.json", "w", encoding="utf-8") as f:
    json.dump(trainings, f, indent=2, ensure_ascii=False)

print("✅ trainings.json created successfully (MM/DD/YYYY format)")
