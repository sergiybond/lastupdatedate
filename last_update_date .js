function replaceArticledate() {
  var metaUpdatedtime = document.getElementsByTagName("META")[14].content;
  var month_name = function(dt){
  mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  return mlist[dt.getMonth()];
  }
  var monthDay = new Date(metaUpdatedtime).getDate();
  var updateYear = new Date(metaUpdatedtime).getFullYear();
  var newDisplaydate = month_name(new Date(metaUpdatedtime)) + " " + monthDay + ", " + updateYear;
document.querySelector(".entry-date").innerHTML = newDisplaydate;
}
function addLastUpdDate() {
    var newItemforinfo = document.createElement("DIV");
    var textNode = document.createTextNode("Last Updated: ");
    newItemforinfo.appendChild(textNode);
    var childrenList = document.querySelector(".entry-info");
    childrenList.insertBefore(newItemforinfo, childrenList.childNodes[2]);
    newItemforinfo.style.display = "inline-block";
    newItemforinfo.style.color = "#fff";
}
