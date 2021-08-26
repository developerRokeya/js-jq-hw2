// selector
function textChange() {
  document.getElementById("id1").innerHTML = "wellcome to our group";
}
function classText() {
  document.getElementsByClassName("btn-h2")[0].innerHTML =
    "wellcome to our group";
}

function nameText() {
  document.getElementsByName("btn-name")[0].innerHTML = "i am rokeya";
}
function tagText() {
  document.getElementsByTagName(h3)[0].innerHTML = "html heading tag";
}
function textChange() {
  document.getElementById("h2").innerHTML = Date();
}
function ssbChange() {
  var text = "welcome to ssb";
  document.getElementById("ssb").innerHTML = text.repeat(4);
}
