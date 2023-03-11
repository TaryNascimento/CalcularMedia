const numero1 = document.getElementById("n1");

const numero2 = document.getElementById("n2");

const numero3 = document.getElementById("n3");

const btCalcular = document.getElementById("btCalcular");

const calcular = () => {

    const media = (number(numero1.value) + number(numero2.value) + number(numero3.value))/3;

    alert(`A média dos três valores é: ${media}`);

}






btCalcular.onclick = calcular;
