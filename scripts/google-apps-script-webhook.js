function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents)
    console.log("Received data:", data)

    // Get the spreadsheet by ID (replace with your actual spreadsheet ID)
    const spreadsheetId = "YOUR_SPREADSHEET_ID_HERE" // You need to replace this
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId)

    // Handle different form types
    if (data.formType === "contact") {
      handleContactForm(spreadsheet, data)
    } else if (data.formType === "careers") {
      handleCareersForm(spreadsheet, data)
    } else if (data.formType === "visit" || data.formType === "training" || data.formType === "consulting") {
      handleScheduleForm(spreadsheet, data)
    } else if (data.email && !data.formType) {
      // Newsletter subscription (backward compatibility)
      handleNewsletterForm(spreadsheet, data)
    } else {
      console.error("Unknown form type:", data.formType)
      return ContentService.createTextOutput("Unknown form type").setMimeType(ContentService.MimeType.TEXT)
    }

    return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT)
  } catch (error) {
    console.error("Error processing webhook:", error)
    return ContentService.createTextOutput("Error: " + error.toString()).setMimeType(ContentService.MimeType.TEXT)
  }
}

function handleContactForm(spreadsheet, data) {
  let sheet = spreadsheet.getSheetByName("Contact Forms")
  if (!sheet) {
    sheet = spreadsheet.insertSheet("Contact Forms")
    // Add headers
    sheet.getRange(1, 1, 1, 5).setValues([["Timestamp", "Name", "Email", "Subject", "Message"]])
  }

  // Add the data
  sheet.appendRow([
    data.timestamp || new Date().toISOString(),
    data.name || "",
    data.email || "",
    data.subject || "",
    data.message || "",
  ])
}

function handleCareersForm(spreadsheet, data) {
  let sheet = spreadsheet.getSheetByName("Career Applications")
  if (!sheet) {
    sheet = spreadsheet.insertSheet("Career Applications")
    // Add headers
    sheet
      .getRange(1, 1, 1, 7)
      .setValues([["Timestamp", "Name", "Email", "Phone", "Position", "Message", "Resume Filename"]])
  }

  // Add the data
  sheet.appendRow([
    data.timestamp || new Date().toISOString(),
    data.name || "",
    data.email || "",
    data.phone || "",
    data.position || "",
    data.message || "",
    data.resumeFilename || "N/A",
  ])
}

function handleScheduleForm(spreadsheet, data) {
  let sheet = spreadsheet.getSheetByName("Schedule Requests")
  if (!sheet) {
    sheet = spreadsheet.insertSheet("Schedule Requests")
    // Add headers
    sheet.getRange(1, 1, 1, 6).setValues([["Timestamp", "Type", "Name", "Email", "Phone", "Preferred Date", "Message"]])
  }

  // Add the data
  sheet.appendRow([
    data.timestamp || new Date().toISOString(),
    data.formType || "",
    data.name || "",
    data.email || "",
    data.phone || "",
    data.preferredDate || "",
    data.message || "",
  ])
}

function handleNewsletterForm(spreadsheet, data) {
  let sheet = spreadsheet.getSheetByName("Newsletter Subscribers")
  if (!sheet) {
    sheet = spreadsheet.insertSheet("Newsletter Subscribers")
    // Add headers
    sheet.getRange(1, 1, 1, 2).setValues([["Timestamp", "Email"]])
  }

  // Add the data
  sheet.appendRow([data.timestamp || new Date().toISOString(), data.email || ""])
}
