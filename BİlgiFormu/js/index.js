
function kullaniciyaMerhabaDe() {
    var ad = document.getElementById("txtMerhaba").value;
    document.getElementById("merhabaMessage").innerHTML = "Merhaba " + ad;
}

document.getElementById("btnİsimGir").onclick = kullaniciyaMerhabaDe;