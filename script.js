function soma(){
    var inputs = document.getElementsByTagName('input');
    var input1 = inputs [0];
    var input2 = inputs [1];
    var valor1 = parseFloat(input1.value);
    var valor2 = parseFloat(input2.value);

    if (valor1 === 0 && valor2 === 0 ) {
        alert('Um dos campos está vazio');
        return;
    }
    window.alert("O Valor da somas é :" + (valor1 + valor2));
    input1.value='';
    input2.value='';
}
function subtracao(){
    var inputs = document.getElementsByTagName('input');
    var input1 = inputs [0];
    var input2 = inputs [1];
    var valor1 = parseFloat(input1.value);
    var valor2 = parseFloat(input2.value);

    if (valor1 === 0 && valor2 === 0 ) {
        alert('Um dos campos está vazio');
        return;
    }
    window.alert("O Valor da subtração é :" + (valor1 - valor2));
    input1.value='';
    input2.value='';
}
function multiplicacao(){
    var inputs = document.getElementsByTagName('input');
    var input1 = inputs [0];
    var input2 = inputs [1];
    var valor1 = parseFloat(input1.value);
    var valor2 = parseFloat(input2.value);

    if (valor1 === 0 && valor2 === 0 ) {
        alert('Um dos campos está vazio');
        return;
    }
    window.alert("O Valor da multiplicacao é :" + (valor1 * valor2));
    input1.value='';
    input2.value='';
}
function divisao(){
    var inputs = document.getElementsByTagName('input');
    var input1 = inputs [0];
    var input2 = inputs [1];
    var valor1 = parseFloat(input1.value);
    var valor2 = parseFloat(input2.value);

    if (valor1 === 0 && valgor2 === 0 ) {
        alert('Um dos campos está vazio');
        return;
    }
    window.alert("O Valor da divisao é :" + (valor1 / valor2));
    input1.value='';
    input2.value='';
}