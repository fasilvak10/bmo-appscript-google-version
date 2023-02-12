function doGet(e) {
  /* Logger.log(e.parameter); */
  const template = HtmlService.createTemplateFromFile("main");
  const html = template.evaluate();
  return html;
}

 function userClicked(name) {
  const id = "1WADPNAtN83jSpnOnYUN4uB4VunzwANLuabqcAkV1Vgw";
  const ss = SpreadsheetApp.openById(id);
  const ws = ss.getSheetByName("Data");

  ws.appendRow([name, new Date()]);

  Logger.log(name + ` click the button`);
} 

function obtenerContenidoHTML(page) {
  const contenidoHTML = HtmlService.createHtmlOutputFromFile(page).getContent();
  return contenidoHTML;
}

function include(file) {
  return HtmlService.createHtmlOutputFromFile(file).getContent();
}

function verificarPassword(form) {
  const id = "1WADPNAtN83jSpnOnYUN4uB4VunzwANLuabqcAkV1Vgw";
  const ss = SpreadsheetApp.openById(id);
  const ws = ss.getSheetByName("user-data");
  const userdata = ws.getDataRange().getValues();
  const wsxl = ss.getSheetByName("sales-data");
  const salesdata = wsxl.getDataRange().getDisplayValues();

  console.log(form.user);

    
  for (var i in userdata) {
    if (userdata[i][1] == form.user && userdata[i][2] == form.password) {
      var user = {
        headers: salesdata[0],
        name: userdata[i][0],
        sales: "",
      };

      for (var r in salesdata) {
        if (salesdata[r][0] == user.name) {
          user.sales = salesdata[r];
          break;
        }
      }
       return user;
    }
  }

  throw "el usuario o la contraseña son incorrectos";
}

function ab(form){
  console.log(form);
}