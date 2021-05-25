export const configuration = {
    "api_version": 0.1,
    "name": "SuperHiTech Basic Setup Checklist",
    "description": "",
    "steps": [
        {
            "name": "Step 1",
            "options": [
                {
                    name: "Windows Updates",
                    description: [
                        { note: "Be sure to include all optional updates. Check again after restarting." }
                    ]
                },
                {
                    name: "OEM Driver Utility",
                    description: [
                        { a: { name: "Dell Support Assist", link: "https://downloads.dell.com/serviceability/catalog/SupportAssistInstaller.exe" } },
                        { a: { name: "HP Support Assistant", link: "https://www8.hp.com/us/en/campaigns/hpsupportassistant/hpsupport.html" } },
                        { a: { name: "Lenovo Vantage", link: "https://www.microsoft.com/en-us/p/lenovo-vantage/9wzdncrfj4mv?activetab=pivot:overviewtab" } },
                        { a: { name: "Intel Driver Utility", link: "https://downloadcenter.intel.com" } },
                    ]
                },
                {
                    name: "Ninite",
                    description: [
                        { p: "Downloads:" },
                        { a: { name: "Ninite Standard", link: "https://ninite.com/.net4.8-adoptjavax11-adoptjavax8-chrome-vlc/ninite.exe" } },
                        { a: { name: "Ninite Standard + Google Drive", link: "https://ninite.com/.net4.8-adoptjavax11-adoptjavax8-chrome-googlebackupandsync-vlc/ninite.exe" } },
                        { a: { name: "Ninite Standard + Open Office", link: "https://ninite.com/.net4.8-adoptjavax11-adoptjavax8-chrome-openoffice-vlc/ninite.exe" } },
                        { a: { name: "Ninite Standard + Libre Office", link: "https://ninite.com/.net4.8-adoptjavax11-adoptjavax8-chrome-libreoffice-vlc/ninite.exe" } },
                    ]
                },
                {
                    name: "Adobe Acrobat DC",
                    description: [
                        { p: "Download:" },
                        { a: { name: "Adobe Acrobat DC", link: "https://get.adobe.com/reader/" } },
                        { note: "Uncheck bundled bloatware before downloading." }
                    ]
                },
                {
                    name: "Storage Sense",
                    description: []
                },
                {
                    name: "Default Applications",
                    description: [
                        { p: "Set the default applications as the following:" },
                        { p: "Default Video Player -> VLC" },
                        { p: "Default Audio Player -> VLC" },
                        { p: "Default Browser -> Chrome" },
                    ]
                }
            ]
        },
        {
            "name": "Step 2",
            "options": [
                {
                    name: "System File Check",
                    description: [
                        { p: "Run the following in a Admin Powershell or CMD prompt:" },
                        { code: "sfc /scannow" }
                    ]
                },
                {
                    name: "Check Disk",
                    description: [
                        { p: "Run the following in a Admin Powershell or CMD prompt:" },
                        { code: "chkdsk /r" }
                    ]
                }, {
                    name: "Restore Point",
                    description: []
                }, {
                    name: "Physical Cleaning and Inspection",
                    description: []
                }
            ]
        }
    ]
}

// export const configuration = {
//     "api_version": 0.1,
//     "name": "Default Checklist",
//     "description": "This is default checklist description.",
//     "steps": [
//         {
//             "name": "Step 1",
//             "options": [
//                 {
//                     "name": "Option 1",
//                     "description": [
//                         { "p":"This is the description of option 1."},
//                         { "code":"This is a code example."},
//                         { "note":"This is a important note example."},
//                         { "a": {"name": "Name", "link": "https://www.link.com"}},
//                         { "raw": "This is a raw example"}
//                     ]
//                 },
//                 {
//                     "name": "Option 2",
//                     "description": [
//                         { "p":"This is the description of option 2."},
//                     ]
//                 }
//             ]
//         },
//         {
//             "name": "Step 2",
//             "options": [
//                 {
//                     "name": "Option 1 of step 2",
//                     "description": [
//                         { "p":"This is the description of option 1."},
//                     ]
//                 },
//                 {
//                     "name": "Option 2",
//                     "description": [
//                         { "p":"This is the description of option 2."},
//                     ]
//                 }
//             ]
//         }
//     ]
// }

