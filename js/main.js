// Función para elegir una opción del listado (valida si se ingresa texto, decimal o "Cancel")
function selectOption(textOption, numOptions) {
    let option;
    do {
        option = prompt(textOption);
        if (option === null) {
            let confirmCancel = confirm("¿Desea terminar el programa?");
            if (confirmCancel) {
                alert("Gracias, nos vemos pronto.");
                cancelOption = true;
                return false;
            }
        } else {
            option = parseFloat(option);
            if (!isNaN(option) && Number.isInteger(option) && option >= 1 && option <= numOptions) {
                alert("Seleccionaste la opción " + option);
                return option;
            } else {
                alert("Por favor, ingrese una opción válida (del 1 al " + numOptions + ")");
            }
        }
    } while (true);
}
// Función para transformar mediante un factor, el valor de una magnitud definida (Kilómetro, Centímetro, etc.) a una magnitud de trabajo (valida si se ingresa texto o "Cancel")
function measureConversionTo(magnitud, factor) {
    let measure;
    do {
        measure = prompt("Ingrese los " + magnitud + " que desea convertir")
        if (measure === null) {
            let confirmCancel = confirm("¿Desea terminar el programa?");
            if (confirmCancel) {
                alert("Gracias, nos vemos pronto.");
                cancelOption = true;
                return false;
            }
        } else {
            measure = parseFloat(measure);
            if (isNaN(measure)) {
                alert("Por favor ingrese un valor numérico válido");
            } else {
                alert("Desea convertir " + measure + magnitud);
                return measure * factor;
            }
        }
    } while (true);
}

// Mensaje de bienvenida al transformador de unidades de distancia del sistema internacional
alert("Bienvenido al convertidor de distancias del sistema internacional");

// Variable para definir si el usuario quiere o no reiniciar el bucle Do While
let restartOption;
// Variable "bandera" para cancelar programa si se cancela alguna de las funciones selectOption o measureConversionTo
let cancelOption;

do {

    // Se asigna a la variable measureOption la opción que se seleccione, es decir, magnitud que se va a ingresar y transformar
    let measureOption = selectOption("Por favor ingrese la medida que desea convertir:\n1. Kilómetros\n2. Hectómetros\n3. Decámetros\n4. Metros\n5. Decímetros\n6. Centímetros\n7. Milímetros", 7);

    console.log(measureOption);

    // Si la variable measureOption NO ES FALSE, no se cancela el programa y se solicita el ingreso del valor a transformar
    if (measureOption !== false) {

        // Declaración de variables
        let measureNorm;
        let measureOrig;
        let measureIn;
        let newMeasureOption;
        let conversionTo;
        let measureOut;

        switch (measureOption) {
            case 1:
                // Se asigna a la variable measure la medida que se desea transformar, convertida a una magnitud genérica (metros). Esto se repite para cada magnitud que se seleccione con la variable measureOption.
                measureNorm = measureConversionTo(" Kilómetros ", 1000);
                measureOrig = (measureNorm / 1000);
                measureIn = " Kilómetros";
                break;
            case 2:
                measureNorm = measureConversionTo(" Hectómetros ", 100);
                measureOrig = (measureNorm / 100);
                measureIn = " Hectómetros";
                break;
            case 3:
                measureNorm = measureConversionTo(" Decámetros ", 10);
                measureOrig = (measureNorm / 10);
                measureIn = " Decámetros";
                break;
            case 4:
                measureNorm = measureConversionTo(" Metros ", 1);
                measureOrig = (measureNorm / 1);
                measureIn = " Metros";
                break;
            case 5:
                measureNorm = measureConversionTo(" Decímetros ", 0.1);
                measureOrig = (measureNorm / 0.1);
                measureIn = " Centímetros";
                break;
            case 6:
                measureNorm = measureConversionTo(" Centímetros ", 0.01);
                measureOrig = (measureNorm / 0.01);
                measureIn = " Decímetros";
                break;
            case 7:
                measureNorm = measureConversionTo(" Milímetros ", 0.001);
                measureOrig = (measureNorm / 0.001);
                measureIn = " Milímetros";
                break;
        }

        console.log(measureIn);
        console.log(measureOrig);
        console.log(measureNorm);

        // Si la variable measure NO ES FALSE, no se cancela el programa y se solicita el ingreso de la magnitud de salida
        if (measureNorm !== false) {

            newMeasureOption = selectOption("Por favor ingrese la medida que desea obtener:\n1. Kilómetros\n2. Hectómetros\n3. Decámetros\n4. Metros\n5. Decímetros\n6. Centímetros\n7. Milímetros", 7);

            console.log(newMeasureOption);

            switch (newMeasureOption) {
                case 1:
                    conversionTo = 1000;
                    measureOut = " Kilómetros ";
                    break;
                case 2:
                    conversionTo = 100;
                    measureOut = " Hectómetros ";
                    break;
                case 3:
                    conversionTo = 10;
                    measureOut = " Decámetros ";
                    break;
                case 4:
                    conversionTo = 1;
                    measureOut = " Metros ";
                    break;
                case 5:
                    conversionTo = 0.1;
                    measureOut = " Centímetros ";
                    break;
                case 6:
                    conversionTo = 0.01;
                    measureOut = " Decímetros ";
                    break;
                case 7:
                    conversionTo = 0.001;
                    measureOut = " Milímetros ";
                    break;
            }

            console.log(conversionTo);
            console.log(measureOut);

            if (newMeasureOption !== false) {
                // El programa arroja una ventana con el resultado
                alert(measureOrig + measureIn + " son " + (measureNorm / conversionTo) + measureOut);

                restartOption = confirm("¿Desea realizar otra conversion?");

                if (restartOption == true) {
                    cancelOption = false;
                }

                console.log(restartOption);
                console.log(cancelOption);
            }
        }
    }

} while (cancelOption == false && restartOption == true);