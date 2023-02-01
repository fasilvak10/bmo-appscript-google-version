function doGet(e) {
  Logger.log(e.parameter);
  return HtmlService.createHtmlOutputFromFile('main');

}


function userClicked(){
  Logger.log("Someone click the button")
}


