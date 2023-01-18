function doGet(e) {
  return HtmlService.createTemplateFromFile("form").evaluate()
  .setTitle("WebApp")
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
function setAutomatically() {
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('Data');
  let val1 = sheet.getLastRow();
  let val2 = sheet.getRange('B2').getValue();

  return [val1, val2];
}