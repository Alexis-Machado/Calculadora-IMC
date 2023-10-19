function calcularIMC() {
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;
    var edad = document.getElementById("edad").value;
    var sexo = document.getElementById("sexo").value;

    // Verificar si los campos son números
    if (isNaN(altura) || isNaN(peso) || isNaN(edad)) {
        alert("Por favor, ingrese valores numéricos válidos.");
        return;
    }

    // Calcular IMC
    var imc = peso / ((altura / 100) ** 2);

    // Determinar la categoría de peso
    var categoria = "";
    if (sexo === "M") {
        if (imc < 18) {
            categoria = "Delgadez";
        } else if (imc >= 18 && imc <= 25) {
            categoria = "Peso normal";
        } else if (imc > 25 && imc <= 30) {
            categoria = "Sobrepeso";
        } else {
            categoria = "Obesidad";
        }
    } else if (sexo === "H") {
        if (imc < 20) {
            categoria = "Delgadez";
        } else if (imc >= 20 && imc <= 25) {
            categoria = "Peso normal";
        } else if (imc > 25 && imc <= 30) {
            categoria = "Sobrepeso";
        } else {
            categoria = "Obesidad";
        }
    } else {
        categoria = "Categoría no definida para Prefiero no decirlo";
    }

    // Mostrar resultado
    var resultado = "El índice de masa corporal es: " + imc.toFixed(2) + "<br>";
    resultado += "Categoría de peso: " + categoria + "<br><br>";
    resultado += "Más información: El índice de masa corporal (IMC) es un número que se calcula con base en el peso y la estatura de la persona. El IMC sirve para estimar la cantidad de grasa corporal que tiene una persona y determinar si su peso está dentro del rango normal, o si tiene sobrepeso, obesidad o delgadez. El IMC se expresa en kg/m2 y se considera ideal un valor entre 18 y 25 en las mujeres, y entre 20 y 25 en los hombres.";
    document.getElementById("resultado").innerHTML = resultado;
}