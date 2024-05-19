let c = "";
function display(a) {
  c += document.getElementById(a).value;
  document.querySelector("#input").value = c;
  
}
