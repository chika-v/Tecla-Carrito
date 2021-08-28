class FabricaBicicletas {
    constructor(armado, pintado, material, pintura) {
        this.armado = armado || false;
        this.pintado = armado || false;
        this.material = material;
        this.pintura = pintura;
    }
    informar(mensaje) {
        console.log(mensaje)
    }
    aramar() {
        this.material = this.material - 1;
        this.informar('la bicicleta fue pintada con exito');
        this.pintado = true
    }
    pintar() {
        if (this.armado) {
        this.pintura = this.pintura - 1;
        this.informar('la bicicleta fue pintada con exito');
        this.pintado = true
        } else {
            this.informar('Para poder pintar la bicicleta hay que armarla primero')
        }
    }

    finalizada() {
        if (this.armado & this.pintado) {
            this.informar('la bicicleta esta terminada')
        } else {
            this.indormar('algun paso no se termino correctamente')
        }
    }

}

let Bennotto = new FabricaBicicletas(false, false, 10, 20);
let Leti = new FabricaBicicletas(false, false, 9, 20);

Bennotto.aramar()
Bennotto.pintar()
Leti.finalizada()