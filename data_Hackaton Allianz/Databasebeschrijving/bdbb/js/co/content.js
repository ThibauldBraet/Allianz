//Begin Zoekfunctie
	var IE4 = (document.all);
	var NS4 = !IE4;
	var win = this;
	var n   = 0;

function findInPage(str) 
{
var txt, i, found;
if (str == "")
return false;
if (NS4) 
{
if (!win.find(str))
while(win.find(str, false, true))
n++;
else
n++;
if (n == 0) alert(str + " was not found on this page.");
}
if (IE4) {
txt = win.document.body.createTextRange();
for (i = 0; i <= n && (found = txt.findText(str)) != false; i++) {
txt.moveStart("character", 1);
txt.moveEnd("textedit");
}
if (found) {
txt.moveStart("character", -1);
txt.findText(str);
txt.select();
txt.scrollIntoView();
n++;
}
else {
if (n > 0) {
n = 0;
findInPage(str);
}
else
alert(str + " is niet gevonden.");
}
}
return false;
}
// Einde Zoekfunctie 



// Zebra functie (even oneven rows tabellen)

	function(){
		$("tr:odd").css("background-image","url(img/bg_td5.jpg)");
		$("tr:even").css("background-image","url(img/bg_td13.jpg)");
	}
<!-- Einde Zebra Functie -->