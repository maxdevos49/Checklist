export const configuration = {
    "api_version": 0.1,
    "name": "Default Checklist",
    "description": "This is default checklist description.",
    "steps": [
        {
            "name": "Step 1",
            "options": [
                {
                    "name": "Option 1",
                    "description": [
                        { "p":"This is the description of option 1."},
                        { "code":"This is a code example."},
                        { "note":"This is a important note example."},
                        { "a": {"name": "Name", "link": "https://www.link.com"}},
                        { "raw": "This is a raw example"}
                    ]
                },
                {
                    "name": "Option 2",
                    "description": [
                        { "p":"This is the description of option 2."},
                    ]
                }
            ]
        },
        {
            "name": "Step 2",
            "options": [
                {
                    "name": "Option 1 of step 2",
                    "description": [
                        { "p":"This is the description of option 1."},
                    ]
                },
                {
                    "name": "Option 2",
                    "description": [
                        { "p":"This is the description of option 2."},
                    ]
                }
            ]
        }
    ]
}

