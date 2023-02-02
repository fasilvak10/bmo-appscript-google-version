function doGet(e) {
  Logger.log(e.parameter);
  return HtmlService.createHtmlOutputFromFile("main");
  
}

function userClicked(name) {
  const id = '1WADPNAtN83jSpnOnYUN4uB4VunzwANLuabqcAkV1Vgw'
  const ss = SpreadsheetApp.openById(id);
  const ws = ss.getSheetByName('Data');
  
  ws.appendRow([name, new Date]);

  Logger.log(name+` click the button`);
}

function obtenerContenidoHTML(page){

  const contenidoHTML = HtmlService.createHtmlOutputFromFile(page).getContent();
  return contenidoHTML;
}