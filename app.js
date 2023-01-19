const currentTitle = document.title;
window.addEventListener("blur",() => {
  document.title="Torna Presto";
});
window.addEventListener("focus",() =>{
  document.title=currentTitle;
});

function validate() {
    var a = document.forms["eq"]["aterm"].value;
    var b = document.forms["eq"]["bterm"].value;
    var c = document.forms["eq"]["cterm"].value;
    if (a == 0) {
        var eq1 = (-c/b)
        var outputText = "Eq di primo grado , X1 ==" + eq1;
    }else{
        var delta = (b**2-4*a*c)
        if (delta < 0){
            outputText="Delta è minore di 0 poichè é : " + delta;
        }else{
            var x1=(-b-Math.sqrt(b**2-4*a*c))/(2*a);
            var x2=(-b+Math.sqrt(b**2-4*a*c))/(2*a);
            outputText="delta = " +delta+ " X1 == " + x1 +  " ; " + "X2 == " + x2  ;
        }
    }
    document.getElementById("equazione").innerHTML = outputText;
}
function fisica() {
    Gravità = document.forms["pr"]["gravità"].value;
    S0 =document.forms["pr"]["S0"].value;
    V0 =document.forms["pr"]["V0"].value;
    angolo1 =(document.forms["pr"]["angolo"].value);
    angolo= angolo1/57;
    V0x=V0*Math.cos(angolo);
    V0y=V0*Math.sin(angolo);
    tempo_volo = (-V0y-Math.sqrt(V0y*V0y-4*(-0.5*Gravità)*(S0)))/(2*-0.5*Gravità);
    spostamento = V0x*tempo_volo
    outputText="Tempo di volo = "+(tempo_volo);
    outputText2="Spostamento = "+(spostamento)
    document.getElementById("tempo_volo").innerHTML = outputText;
    document.getElementById("tempo_spostamento").innerHTML = outputText2;
}

