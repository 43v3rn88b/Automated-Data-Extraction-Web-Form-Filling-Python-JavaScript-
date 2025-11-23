(async () => {
    console.log("Starting autofill…");

    // 🚀 Your extracted JSON (replace with your actual JSON)
    const trainings = [
        {
            "title": "Introduction to Selenium",
            "from": "09/01/2025",
            "to": "09/02/2025",
            "hours": "6",
            "type": "TECHNICAL",
            "sponsor": "Simplilearn"
        },
        {
            "title": "Introduction to Data Analytics",
            "from": "07/30/2025",
            "to": "07/30/2025",
            "hours": "3",
            "type": "TECHNICAL",
            "sponsor": "Simplilearn"
        }
    ];

    // Helper: converts mm/dd/yyyy → yyyy-mm-dd (for <input type=date>)
    function toISO(dateStr) {
        const [m, d, y] = dateStr.split("/");
        return `${y}-${m.padStart(2, "0")}-${d.padStart(2, "0")}`;
    }

    // Helper: small wait
    const delay = (ms) => new Promise(res => setTimeout(res, ms));

    for (let i = 0; i < trainings.length; i++) {
        const t = trainings[i];
        console.log("Adding row", i + 1, t.title);

        // Click Add Row for rows AFTER the first one
        if (i > 0) {
            document.querySelector("#addRowLearning").click();
            await delay(200);
        }

        // Get all current rows
        const rows = document.querySelectorAll("#learning-table-tbody tr");
        const row = rows[rows.length - 1]; // last row

        const inputs = row.querySelectorAll("input, select");

        // Fill fields in correct order
        for (let field of inputs) {
            switch (field.name) {
                case "LD_title":
                    field.value = t.title;
                    field.dispatchEvent(new Event("input", { bubbles: true }));
                    break;

                case "LD_from":
                    field.value = toISO(t.from);
                    field.dispatchEvent(new Event("change", { bubbles: true }));
                    break;

                case "LD_to":
                    field.value = toISO(t.to);
                    field.dispatchEvent(new Event("change", { bubbles: true }));
                    break;

                case "LD_hours_number":
                    field.value = t.hours;
                    field.dispatchEvent(new Event("input", { bubbles: true }));
                    break;

                case "LD_type":
                    // Normalize value to proper case
                    const typeNormalized = (t.type || "").trim().toLowerCase();
                    const map = {
                        "managerial": "Managerial",
                        "supervisory": "Supervisory",
                        "technical": "Technical",
                        "administrative": "Administrative"
                    };

                    if (map[typeNormalized]) {
                        field.value = map[typeNormalized];
                        field.dispatchEvent(new Event("change", { bubbles: true }));
                    } else {
                        console.warn("⚠ Unknown L&D type:", t.type);
                    }
                    break;


                case "LD_conducted_by":
                    field.value = t.sponsor;
                    field.dispatchEvent(new Event("input", { bubbles: true }));
                    break;
            }
        }

        await delay(100);
    }

    console.log("🎉 L&D Autofill Complete!");
})();
