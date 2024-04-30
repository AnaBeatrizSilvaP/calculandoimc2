function calcularImc(){

    var nome = document.ElementyById ("nome").value
    var peso = parseFloat(document.getElementyByID("peso").value)
    var altura = parseFloat(document.getElementyById("altura").value)
}
if (isNaN(peso)|| isNaN(altura)){
    alert ("Por favor, insira valo9res numéricos para peso e altura.")
    return

}

///////////////////////////////////////////////////////////////////

// IMC = peso / (altura * altura)

//////////////////////////////////////////////////////////////////

if(imc < 18,5){
    Classificação = "Magreza"
}