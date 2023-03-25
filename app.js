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
        Vx=-b/a;
        Vy=-(b*b-a*a*c)/(4*a);
        var vertice="vertice x = " + Math.round(Vx * 100) / 100 +" vertice y = " + Math.round(Vy * 100) / 100;
        var fuoco="fuoco x = " + Math.round(-1 * Vx * 100) / 100 + " fuoco y = "+ Math.round((-delta/4*a) * 100) / 100;
        var direttrice="Eq direttrice = " + Math.round((-1*((1+delta)/4*a)) * 100) / 100
        if (delta < 0){
            outputText="Delta è minore di 0 poichè é : " + delta;
        }else{
            var x1=(-b-Math.sqrt(b**2-4*a*c))/(2*a);
            var x2=(-b+Math.sqrt(b**2-4*a*c))/(2*a);
            outputText="delta = " + delta + " X1 == " + Math.round(x1 * 100) / 100 +  " ; " + "X2 == " + Math.round(x2 * 100) / 100  ;
        }
    }
    document.getElementById("equazione").innerHTML = outputText;
    document.getElementById("vertice").innerHTML = vertice;
    document.getElementById("fuoco").innerHTML = fuoco;
    document.getElementById("direttrice").innerHTML = direttrice;
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
    V_finale=V0+Gravità*tempo_volo;
    outputText="Tempo di volo = "+Math.round(tempo_volo * 100) / 100;
    outputText2="Spostamento = "+Math.round(spostamento * 100) / 100;
    outputText3= " Velocità finale = " +Math.round(V_finale * 100) / 100
    document.getElementById("tempo_volo").innerHTML = outputText;
    document.getElementById("tempo_spostamento").innerHTML = outputText2;
    document.getElementById("V_finale").innerHTML = outputText3;
}
function curva(){
    var Gravità = document.forms["cu"]["gravità"].value;
    var raggio =document.forms["cu"]["attrito"].value;
    var attrito =document.forms["cu"]["raggio"].value;
    var Vmax=Math.sqrt(Gravità*attrito*raggio)
    outputText="vel max m/s " + Math.round(Vmax * 100) / 100;
    document.getElementById("curva").innerHTML = outputText;
}
function urti(){
    var massa_1 =document.forms["ur"]["massa_1"].value;
    var massa_2 =document.forms["ur"]["massa_2"].value;
    var Vel_1 =document.forms["ur"]["Vel_1"].value;
    var Vel_2 =document.forms["ur"]["Vel_2"].value;
    var velocità_1_finale=((massa_1-massa_2)*Vel_1+(2*massa_2*Vel_2))/(massa_1+massa_2);
    var velocità_2_finale=((massa_2-massa_1)*Vel_1+(2*massa_1*Vel_2))/(massa_1+massa_2);
    outputText="velocità finale prima :" + velocità_1_finale + " velocità finale seconda : " + velocità_2_finale; 
    var velocità_finale_anaelastica= (massa_1*Vel_1+massa_2*Vel_2)/(massa_1+massa_1);
    outputText1="velocità finale anelastica :" + velocità_finale_anaelastica;
    document.getElementById("velocità_finale_elastico").innerHTML = outputText;
    document.getElementById("velocità_finale_anaelastico").innerHTML = outputText1;
}
function circonferenza() {
    var aCirc =document.forms["Circ"]["aCirc"].value;
    var bCirc =document.forms["Circ"]["bCirc"].value;
    var termnotoCirc =document.forms["Circ"]["terminenotoCirc"].value;
    var raggioCirc = Math.sqrt((aCirc*aCirc)/4+(bCirc*bCirc)/4-termnotoCirc)
    outputText="raggio = " + Math.round(raggioCirc * 100) / 100;
    outputText1="centro x = " +  Math.round(-aCirc/2 * 100) / 100 + " centro y = " + Math.round(-bCirc/2 * 100) / 100;
    document.getElementById("raggio_circonferenza").innerHTML = outputText;
    document.getElementById("centri_circonferenza").innerHTML = outputText1;
}
function ellisse() {
    var aEll=document.forms["Ell"]["aEll"].value;
    var bEll =document.forms["Ell"]["bEll"].value;
    if (aEll > bEll){
        outputText="fuochi asse x "
        var termine_c = Math.sqrt((aEll*aEll)-(bEll*bEll));
        var eccentricità_ellisse= termine_c*aEll;
        outputText1="eccentricità = " + Math.round(eccentricità_ellisse/2 * 100) / 100;
        outputText2="termine c = " + Math.round(termine_c/2 * 100) / 100;  
    }else{
        outputText="fuochi asse y"
        var termine_c = Math.sqrt(-(aEll*aEll)+(bEll*bEll));
        var eccentricità_ellisse= termine_c*bEll;
        outputText1="eccentricità = " + Math.round(eccentricità_ellisse/2 * 100) / 100;
        outputText2="termine c = " + Math.round(termine_c/2 * 100) / 100;  
    }
    document.getElementById("fuochi_dove").innerHTML = outputText;
    document.getElementById("eccentricità_ellisse").innerHTML = outputText1;
    document.getElementById("c_ellisse").innerHTML = outputText2;
}
function iperbole() {
    var aIpe=document.forms["Ipe"]["aIpe"].value;
    var bIpe =document.forms["Ipe"]["bIpe"].value;
    var comeIpe =document.forms["Ipe"]["comeIpe"].value;
    var termine_c = Math.sqrt((aIpe*aIpe)+(bIpe*bIpe));
    outputText2="termine c = " + Math.round(termine_c/2 * 100) / 100; 
    var asintoto_x=Math.round((-bIpe/aIpe) * 100) / 100 +"x" 
    var asintoto_y=Math.round((bIpe/aIpe)/2 * 100) / 100 +"y"
    outputText3= "asintoto x = " + asintoto_x +" asintoto y = " + asintoto_y; 
    if (comeIpe>0){
        outputText="fuochi asse x "
        var eccentricità_ellisse= termine_c*aIpe;
        outputText1="eccentricità = " + Math.round(eccentricità_ellisse/2 * 100) / 100;
    }else{
        outputText="fuochi asse y"
        var eccentricità_ellisse= termine_c*bIpe;
        outputText1="eccentricità = " + Math.round(eccentricità_ellisse/2 * 100) / 100;
    } 
    document.getElementById("fuochi_dove_iperbole").innerHTML = outputText;
    document.getElementById("eccentricità_iperbole").innerHTML = outputText1;
    document.getElementById("c_iperbole").innerHTML = outputText2;
    document.getElementById("asintoti").innerHTML = outputText3;
}