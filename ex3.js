

class DNI {

    /**
     * 
     * @param {string} titular Indica el titular del Dni
     * @param {string} numero  Código en formato 12345678A
     * @param {string} caducidad  Fecha de caducidad del DNI, en format año-mes-dia
     */
    constructor(titular, numero, caducidad) {
        this.titular = titular;
        this.numero = /^0-9A-Z$/;
        this.caducidad = new Date(caducidad);
    }

    // Nos devuelve 'true' o 'false' indicando si el DNI está caducado o no
    estaCaducado() {
        return this.caducidad < new Date();
    }

    // Debe devolver 'true' si el DNI está bien formado, o 'false' en caso contrario
    esDniFormatoValido() {
        return !!this.numero;
    }

    // Dado un número de DNI, nos calcula la letra. Buscar por Internet como calcular la letra de un DNI
    calculaLetraDni(dni) {
        // Calcula el resto de dividir el número de DNI entre 23
        const resto = this.numero % 23;
  
        // Utiliza la tabla para obtener la letra correspondiente
        const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        const letra = letras[resto];
 
        return letra;

    }
}

const midni = new DNI("Pedro Vallés", "1234567A", "1990-10-10");
console.log(midni.estaCaducado());
console.log(midni.esDniFormatoValido());

