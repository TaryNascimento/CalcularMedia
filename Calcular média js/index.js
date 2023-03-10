const numero1 = parseInt (document.getElementById("numero1").value);

const numero2 = parseInt (document.getElementById("numero2").value);

const numero3 = parseInt (document.getElementById("numero3").value);

const btCalcular = document.getElementById("btCalcular");

const calcular = () => {

    const media = (numero1 + numero2 + numero3)/3;

    alert(`A média dos três valores é: ${media}`);

}






btCalcular.onclick = calcular;