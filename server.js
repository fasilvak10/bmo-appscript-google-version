function getDataForSearch() {
  const ss = SpreadsheetApp.openById('1uZkee1xkkIdGRcm78uYbzTZwjjlmAy41tQ28e8LtjNE');
  const ws = ss.getSheetByName("Ingreso LEC");
  
  const g = ws.getRange(2, 1, ws.getLastRow() - 1, ws.getLastColumn()).getValues();

  const arreglo = g.map(function (i) {
    var id = i[0];
    var expediente = i[3];
    var razon = i[4];
    var cuit = i[5];
    var tipoTramite = i[6];

    return [id, razon, expediente, cuit]
  });

  return arreglo;

}

function deleteById(id) {
  const ss = SpreadsheetApp.openById('1uZkee1xkkIdGRcm78uYbzTZwjjlmAy41tQ28e8LtjNE');;
  const ws = ss.getSheetByName("Ingreso LEC");
  const cuitIds = ws.getRange(2, 1, ws.getLastRow() - 1, 1).getValues().map(r => r[0].toString().toLowerCase());
  const posIndex = cuitIds.indexOf(id.toString().toLowerCase())
  const rowNumber = posIndex === -1 ? 0 : posIndex + 2;
  ws.deleteRow(rowNumber);
}

function getEmpresaById() {
  const ss = SpreadsheetApp.openById('1uZkee1xkkIdGRcm78uYbzTZwjjlmAy41tQ28e8LtjNE');
  const ws = ss.getSheetByName("Ingreso LEC");
  const cuitIds = ws.getRange(2, 1, ws.getLastRow() - 1, 1).getValues().map(r => r[0].toString().toLowerCase());
  const posIndex = cuitIds.indexOf(id.toString().toLowerCase())
  const rowNumber = posIndex === -1 ? 0 : posIndex + 2;
  const empresaInfo = ws.getRange(rowNumber, 1, 1, 20).getValues()[0];
  
  return {
    razonID: empresaInfo[0],
    razonSocial: empresaInfo[4],
    expediente: empresaInfo[3],
    tipoDeTramite: empresaInfo[5]
  }

}

function editEmpresaById(id, empresaInfo) {

  const ss = SpreadsheetApp.openById('1uZkee1xkkIdGRcm78uYbzTZwjjlmAy41tQ28e8LtjNE');
  const ws = ss.getSheetByName("Ingreso LEC");
  const cuitIds = ws.getRange(2, 1, ws.getLastRow() - 1, 1).getValues().map(r => r[0].toString().toLowerCase());
  const posIndex = cuitIds.indexOf(id.toString().toLowerCase())
  const rowNumber = posIndex === -1 ? 0 : posIndex + 2;

  ws.getRange(rowNumber, 4, 1, 3).setValues([[
    empresaInfo.expediente,
    empresaInfo.razonSocial,
    empresaInfo.tipoDeTramite
  ]]);
  return true;
}

function addEmpresa(empresaInfo) {
  const ss = SpreadsheetApp.openById('1uZkee1xkkIdGRcm78uYbzTZwjjlmAy41tQ28e8LtjNE');
  const ws = ss.getSheetByName("Ingreso LEC");
  const uniqueIds = ws.getRange(2, 1, ws.getLastRow() - 1, 1).getValues();

  var maxNum = 0;
  uniqueIds.forEach(r => {
    maxNum = r[0] > maxNum ? r[0] : maxNum

  });
  const newId = maxNum + 1

  ws.appendRow([newId,
    empresaInfo.razonSocial,
    empresaInfo.expediente,
    empresaInfo.tipoDeTramite
  ]);

}
