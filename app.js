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
        var outputText1="vertice x = " + Math.round(Vx * 100) / 100 +" vertice y = " + Math.round(Vy * 100) / 100;
        if (delta < 0){
            outputText="Delta è minore di 0 poichè é : " + delta;
        }else{
            var x1=(-b-Math.sqrt(b**2-4*a*c))/(2*a);
            var x2=(-b+Math.sqrt(b**2-4*a*c))/(2*a);
            outputText="delta = " +delta+ " X1 == " + Math.round(x1 * 100) / 100 +  " ; " + "X2 == " + Math.round(x2 * 100) / 100  ;
        }
    }
    document.getElementById("equazione").innerHTML = outputText;
    document.getElementById("vertice").innerHTML = outputText1;
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
    var tipo = document.forms["ur"]["tipo"].value;
    var massa_1 =document.forms["ur"]["massa_1"].value;
    var massa_2 =document.forms["ur"]["massa_2"].value;
    var Vel_1 =document.forms["ur"]["Vel_1"].value;
    var Vel_2 =document.forms["ur"]["Vel_2"].value;
    if (tipo=="si"){
        var velocità_1_finale=((massa_1-massa_2)*Vel_1+(2*massa_2*Vel_2))/(massa_1+massa_2);
        var velocità_2_finale=((massa_2-massa_1)*Vel_1+(2*massa_1*Vel_2))/(massa_1+massa_2);
        outputText="velocità finale 1 " + velocità_1_finale + "velocità finale 2" + velocità_2_finale; 
    }else{
        var velocità_finale_anaelastica= (massa_1*Vel_1+massa_2*Vel_2)/(massa_1+massa_1);
        outputText1="velocità finale " + velocità_finale_anaelastica;        
    }
    document.getElementById("velocità_finale_elastico").innerHTML = outputText;
    document.getElementById("velocità_finale_anaelastico").innerHTML = outputText1;
}
