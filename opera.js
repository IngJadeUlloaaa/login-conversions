function conv(){
    //mu
    var mu = document.getElementById('mu').value
    //lambda
    var lambda = document.getElementById('lambda').value

    //leemos
    mu = parseFloat(mu);
    lambda = parseFloat(lambda);

    //operacion
    if(mu > 0 && lambda > 0){
        p = mu / lambda;
        alert('El resultado de la Densidad es: ' + p);
    }
    else{
        alert('Los Numeros tienen que ser Naturales')
    }
}

function eficiencia(){
    //p
    var p = 0.8333;
    //porcentaje
    var porcn = document.getElementById('porct').value

    //leemos
    porcn = parseInt(porcn);

    //operacion
    if(porcn == 100){
        efi = p * porcn;
        alert('El resultado de Eficiencia es: ' + efi);
    }
    else{
        alert('El porcentaje a Introducir es 100');
    }
}

function ocioso(){
    //digito 1
    var n1 = document.getElementById('num1').value
    //p
    var p = 0.8383;

    //leemos
    n1 = parseInt(n1);

    //operacion
    if(n1 == 1){
        ocio = n1 - p;
        alert('El resultado del Sistema Ocioso es: ' + ocio);
    }
    else{
        alert('El Digito a Ingresar es 1');
    }
}


function promediosistema(){
    //digito1
    var nm1 = document.getElementById('dgt1').value
    //digito2
    var nm2 = document.getElementById('dgt2').value
    //otras variables
    var res = 1;
    //p
    work = 0.8333;

    //leemos
    nm1 = parseInt(nm1);
    nm2 = parseInt(nm2);

    //operamos
    if(nm1 == 1){
        prm = nm1 - work; //prm = 0.1667
        prm2 = prm * nm2; //prm2 = 3.0006
        prm3 = res / prm2; //prm3 = 0.333
        alert('El Resultado del Tiempo Promedio es: ' + prm3);
    }
    else{
        alert('El Digito es 1\nEl valor de µ es 18');
    }
}

function promediocola(){
    //valor p
    var pp1 = document.getElementById('p1').value // 0.8333
    //valor µ
    var pp2 = document.getElementById('p2').value // 18
    //otras variables
    var res = 1;
    var wp = 0.8333;

    //leemos
    pp1 = parseFloat(pp1);
    pp2 = parseInt(pp2);

    //operamos
    if(pp1 == 0.8333){
        rest = res - wp; // 0.1667
        mul = rest * pp2; // 3.0006
        div = pp1 / mul; // 0.2777
        alert('El Resultado de Tiempo Promedio Cola es: ' + div);
    }
    else{
        alert('El Valor p es 0.8333\nEl Valor µ es 18');
    }
}

function cantcltssistema(){
    //valor de p
    var pw1 = document.getElementById('w1').value //0.8333
    //otras variables
    var ress = 1;

    //leemos
    pw1 = parseFloat(pw1);

    //operamos
    if(pw1 == 0.8333){
        rest = ress - pw1; // 0.1667
        div = pw1 / rest; // 4.998
        alert('El Resultado de Cantidad Clientes Sistema es: ' + div);
    }
    else{
        alert('El Valor de p es 0.8333');
    }
}


function cantcltscola(){
    //valor de p
    var vlorp = document.getElementById('vp1').value // 0.8333
    //otras variables
    var resp = 1;

    //bucle
    const base = 0.8333;
    const exponente = 2;
    var x = 1;

    //leemos
    vlorp = parseFloat(vlorp);

    //operamos
    if(vlorp == 0.8333){
        for(let i = 0; i < exponente; i++){
            x = x * base; // 0.6943
        }
        resta = resp - vlorp; // 0.1667
        final = x / resta; // 4.1649
        alert('El Resultado de Clientes en la Cola es: ' + final);
    }
    else{
        alert('El Valor de p es 0.8333');
    }
}

function probabilidades(){
    //valor de p
    var pbp = document.getElementById('pb1').value // 0.8333
    //valor de (1-p)
    var valor = 0.1667;

    //bucle
    const base = 0.8333;
    const exponente = 3;
    var x = 1;

    //leemos
    pbp = parseFloat(pbp);

    //operamos
    if(pbp == 0.8333){
        for(let i = 0; i < exponente; i++){
            x = x * base; // 0.5786
        }
        fin = x * valor;
        alert('La Probabilidades de Ocurrencia es: ' + fin);
    }
    else{
        alert('El Valor de p es de 0.8333');
    }
}