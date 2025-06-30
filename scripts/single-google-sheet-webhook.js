function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents)
    console.log("Received data:", data)

    // Get the spreadsheet by ID (replace with your actual spreadsheet ID)
    const spreadsheetId = "YOUR_SPREADSHEET_ID_HERE" // You need to replace this
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId)

    // Use ONE sheet for all form submissions
    let sheet = spreadsheet.getSheetByName("All Form Submissions")
    if (!sheet) {
      sheet = spreadsheet.insertSheet("All Form Submissions")
      // Add headers for all possible fields
      sheet
        .getRange(1, 1, 1, 10)
        .setValues([
          [
            "Timestamp",
            "Form Type",
            "Name",
            "Email",
            "Phone",
            "Subject",
            "Message",
            "Preferred Date",
            "Position",
            "Resume Filename",
          ],
        ])
    }

    // Determine form type
    let formType = "Unknown"
    if (data.formType) {
      formType = data.formType
    } else if (data.email && !data.name) {
      formType = "newsletter"
    }

    // Add the data to the sheet
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      formType,
      data.name || "",
      data.email || "",
      data.phone || "",
      data.subject || "",
      data.message || "",
      data.preferredDate || "",
      data.position || "",
      data.resumeFilename || "",
    ])

    return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT)
  } catch (error) {
    console.error("Error processing webhook:", error)
    return ContentService.createTextOutput("Error: " + error.toString()).setMimeType(ContentService.MimeType.TEXT)
  }
}

// Declare SpreadsheetApp and ContentService
const SpreadsheetApp = SpreadsheetApp
const ContentService = ContentService
