const currentTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Torna Presto";
});
window.addEventListener("focus", () => {
  document.title = currentTitle;
});

function validate() {
    let a = parseFloat(document.forms["eq"]["aterm"].value);
    let b = parseFloat(document.forms["eq"]["bterm"].value);
    let c = parseFloat(document.forms["eq"]["cterm"].value);

    if (a === 0) {
        if (b === 0) {
            document.getElementById("equazione").innerHTML = "Equazione non valida";
            return;
        }
        let eq1 = -c / b;
        document.getElementById("equazione").innerHTML = "Eq di primo grado, X1 = " + eq1.toFixed(2);
        document.getElementById("vertice").innerHTML = "";
        document.getElementById("fuoco").innerHTML = "";
        document.getElementById("direttrice").innerHTML = "";
    } else {
        let delta = b * b - 4 * a * c;

        // Calcolo vertice parabola: Vx = -b/(2a), Vy = -delta/(4a)
        let Vx = -b / (2 * a);
        let Vy = -delta / (4 * a);

        // Fuoco: (Vx, Vy + 1/(4a))
        let fuocoX = Vx;
        let fuocoY = Vy + 1 / (4 * a);

        // Direttrice: y = Vy - 1/(4a)
        let direttrice = Vy - 1 / (4 * a);

        let vertice = `Vertice: x = ${Vx.toFixed(2)} , y = ${Vy.toFixed(2)}`;
        let fuoco = `Fuoco: x = ${fuocoX.toFixed(2)} , y = ${fuocoY.toFixed(2)}`;
        let direttriceStr = `Direttrice: y = ${direttrice.toFixed(2)}`;

        if (delta < 0) {
            document.getElementById("equazione").innerHTML = `Delta < 0, nessuna soluzione reale (delta = ${delta.toFixed(2)})`;
            document.getElementById("vertice").innerHTML = vertice;
            document.getElementById("fuoco").innerHTML = fuoco;
            document.getElementById("direttrice").innerHTML = direttriceStr;
        } else {
            let x1 = (-b - Math.sqrt(delta)) / (2 * a);
            let x2 = (-b + Math.sqrt(delta)) / (2 * a);
            document.getElementById("equazione").innerHTML = `Delta = ${delta.toFixed(2)}<br>X1 = ${x1.toFixed(2)} ; X2 = ${x2.toFixed(2)}`;
            document.getElementById("vertice").innerHTML = vertice;
            document.getElementById("fuoco").innerHTML = fuoco;
            document.getElementById("direttrice").innerHTML = direttriceStr;
        }
    }
}

function fisica() {
    let Gravità = parseFloat(document.forms["pr"]["gravità"].value);
    let S0 = parseFloat(document.forms["pr"]["S0"].value);
    let V0 = parseFloat(document.forms["pr"]["V0"].value);
    let angoloGradi = parseFloat(document.forms["pr"]["angolo"].value);
    let angolo = angoloGradi * Math.PI / 180; // converti in radianti

    let V0x = V0 * Math.cos(angolo);
    let V0y = V0 * Math.sin(angolo);

    // Risolvi l'equazione del moto verticale per trovare il tempo di volo (S = 0)
    // equazione: S = S0 + V0y * t - 0.5 * g * t^2 = 0
    let a = -0.5 * Gravità;
    let b = V0y;
    let c = S0;

    let discriminante = b * b - 4 * a * c;

    if (discriminante < 0) {
        document.getElementById("tempo_volo").innerHTML = "Nessuna soluzione reale per il tempo di volo.";
        document.getElementById("tempo_spostamento").innerHTML = "";
        document.getElementById("V_finale").innerHTML = "";
        return;
    }

    let t1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    let t2 = (-b - Math.sqrt(discriminante)) / (2 * a);

    // Il tempo di volo è il tempo positivo più grande
    let tempo_volo = Math.max(t1, t2);

    let spostamento = V0x * tempo_volo;
    let V_finale = V0y - Gravità * tempo_volo; // velocità verticale finale (negativo se scende)

    document.getElementById("tempo_volo").innerHTML = "Tempo di volo = " + tempo_volo.toFixed(2) + " s";
    document.getElementById("tempo_spostamento").innerHTML = "Spostamento orizzontale = " + spostamento.toFixed(2) + " m";
    document.getElementById("V_finale").innerHTML = "Velocità verticale finale = " + V_finale.toFixed(2) + " m/s";
}

function curva() {
    let Gravità = parseFloat(document.forms["cu"]["gravità"].value);
    let raggio = parseFloat(document.forms["cu"]["raggio"].value);
    let attrito = parseFloat(document.forms["cu"]["attrito"].value);

    // Velocità massima: Vmax = sqrt(mu * g * r)
    let Vmax = Math.sqrt(attrito * Gravità * raggio);

    document.getElementById("curva").innerHTML = "Velocità massima (m/s): " + Vmax.toFixed(2);
}

function urti() {
    let massa_1 = parseFloat(document.forms["ur"]["massa_1"].value);
    let massa_2 = parseFloat(document.forms["ur"]["massa_2"].value);
    let Vel_1 = parseFloat(document.forms["ur"]["Vel_1"].value);
    let Vel_2 = parseFloat(document.forms["ur"]["Vel_2"].value);

    // Urto elastico (1D)
    let v1_finale = ((massa_1 - massa_2) * Vel_1 + 2 * massa_2 * Vel_2) / (massa_1 + massa_2);
    let v2_finale = ((massa_2 - massa_1) * Vel_2 + 2 * massa_1 * Vel_1) / (massa_1 + massa_2);

    // Urto anelastico (completamente anelastico)
    let v_finale_anelastico = (massa_1 * Vel_1 + massa_2 * Vel_2) / (massa_1 + massa_2);

    document.getElementById("velocità_finale_elastico").innerHTML = 
        "Velocità finale elastico: v1 = " + v1_finale.toFixed(2) + " m/s, v2 = " + v2_finale.toFixed(2) + " m/s";
    document.getElementById("velocità_finale_anaelastico").innerHTML = 
        "Velocità finale anelastico: v = " + v_finale_anelastico.toFixed(2) + " m/s";
}

function circonferenza() {
    let aCirc = parseFloat(document.forms["Circ"]["aCirc"].value);
    let bCirc = parseFloat(document.forms["Circ"]["bCirc"].value);
    let termineNotoCirc = parseFloat(document.forms["Circ"]["terminenotoCirc"].value);

    // Raggio = sqrt((a^2)/4 + (b^2)/4 - termineNoto)
    let raggioCirc = Math.sqrt((aCirc * aCirc) / 4 + (bCirc * bCirc) / 4 - termineNotoCirc);

    document.getElementById("raggio_circonferenza").innerHTML = "Raggio = " + raggioCirc.toFixed(2);
    document.getElementById("centri_circonferenza").innerHTML = 
        "Centro: x = " + (-aCirc / 2).toFixed(2) + " , y = " + (-bCirc / 2).toFixed(2);
}

function ellisse() {
    let aEll = parseFloat(document.forms["Ell"]["aEll"].value);
    let bEll = parseFloat(document.forms["Ell"]["bEll"].value);

    if (aEll > bEll) {
        let termine_c = Math.sqrt(aEll * aEll - bEll * bEll);
        let eccentricita = termine_c / aEll;

        document.getElementById("fuochi_dove").innerHTML = "Fuochi asse x";
        document.getElementById("eccentricità_ellisse").innerHTML = "Eccentricità = " + eccentricita.toFixed(2);
        document.getElementById("c_ellisse").innerHTML = "Termine c = " + termine_c.toFixed(2);
    } else {
        let termine_c = Math.sqrt(bEll * bEll - aEll * aEll);
        let eccentricita = termine_c / bEll;

        document.getElementById("fuochi_dove").innerHTML = "Fuochi asse y";
        document.getElementById("eccentricità_ellisse").innerHTML = "Eccentricità = " + eccentricita.toFixed(2);
        document.getElementById("c_ellisse").innerHTML = "Termine c = " + termine_c.toFixed(2);
    }
}

function iperbole() {
    let aIpe = parseFloat(document.forms["Ipe"]["aIpe"].value);
    let bIpe = parseFloat(document.forms["Ipe"]["bIpe"].value);
    let comeIpe = parseInt(document.forms["Ipe"]["comeIpe"].value);

    let termine_c = Math.sqrt(aIpe * aIpe + bIpe * bIpe);
    let eccentricita = termine_c / aIpe;

    let asintotoPos = (bIpe / aIpe).toFixed(2);
    let asintotoNeg = (-bIpe / aIpe).toFixed(2);

    let outputAsintoti = `Asintoti: y = ±${asintotoPos}x`;

    if (comeIpe > 0) {
        document.getElementById("fuochi_dove_iperbole").innerHTML = "Fuochi asse x";
    } else {
        document.getElementById("fuochi_dove_iperbole").innerHTML = "Fuochi asse y";
    }

    document.getElementById("eccentricità_iperbole").innerHTML = "Eccentricità = " + eccentricita.toFixed(2);
    document.getElementById("c_iperbole").innerHTML = "Termine c = " + termine_c.toFixed(2);
    document.getElementById("asintoti").innerHTML = outputAsintoti;
}
