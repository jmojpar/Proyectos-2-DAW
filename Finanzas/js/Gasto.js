class Gasto {
    constructor(importe, descripcion) {
        this.importe = Number(importe);
        this.descripcion = descripcion;
    }
    // Getter importe
    get getImporte() {
        return this.importe;
    }

    // Setter importe
    /**
     * @param {number} newImporte
     */
    set setImporte(newImporte) {
        this.importe = newImporte;
    }

    // Getter descripcion
    get getDescripcion() {
        return this.descripcion;
    }

    // Setter descripcion
    /**
     * @param {string} newDescripcion
     */
    set setDescripcion(newDescripcion) {
        this.descripcion = newDescripcion;
    }
}
