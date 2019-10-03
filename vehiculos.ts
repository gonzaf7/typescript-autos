
export class Vehiculo {
    private marca: string;
    private modelo: string;
    private año: number;
    private precio: number;
    public constructor(marca: string, modelo: string, año: number, precio: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.precio = precio
    }
    public setMarca(marca: string): void {
        this.marca = marca;
    }
    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }
    public setAño(año: number): void {
        this.año = año;
    }
    public setPrecio(precio: number): void {
        this.precio = precio
    }
    public getMarca(): string {
        return this.marca
    }
    public getModelo(): string {
        return this.modelo
    }
    public getAño(): number {
        return this.año
    }
    public getPrecio(): number {
        return this.precio
    }
}

export class Superdeportivo extends Vehiculo {
    private posMotor: string;
    private techibrida: string;
    public constructor(marca: string, modelo: string, año: number, precio: number, posMotor: string, techibrida: string) {
        super(marca, modelo, año, precio);
        this.posMotor = posMotor;
        this.techibrida = techibrida;
    }
}
export class Motocicleta extends Vehiculo {
    private maxVelocidad: number;
    public constructor(marca: string, modelo: string, año: number, precio: number, maxVelocidad: number) {
        super(marca, modelo, año, precio);
        this.maxVelocidad = maxVelocidad;
    }
}
export class Camion extends Vehiculo {
    private capCarga: string;
    private nroEjes: number;
    public constructor(marca: string, modelo: string, año: number, precio: number, capCarga: string, nroEjes: number) {
        super(marca, modelo, año, precio);
        this.capCarga = capCarga;
        this.nroEjes = nroEjes;

    }
}

export class Cliente {
    private nombre: string;
    private apellido: string;
    private edad: number;
    public constructor(nombre: string, apellido: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}
let cliente1: Cliente = new Cliente('Ruben', 'Penarrieta', 25);
let cliente2: Cliente = new Cliente('Rafael', 'Santos', 43);
let cliente3: Cliente = new Cliente('Gonzalo', 'Alfaro', 27);
let cliente4: Cliente = new Cliente('Rayo', 'McQueen', 34)
let cliente5: Cliente = new Cliente('Dominic', ' Toretto', 45)
let cliente6: Cliente = new Cliente('Jason', 'Stan', 90)

let lamborghini: Superdeportivo = new Superdeportivo('Lamborghini', 'Huracan', 2019, 340000, 'Motor Trasero', 'No')
let yamaha: Motocicleta = new Motocicleta('Yamaha', 'YZR', 2017, 19500, 250)
let volvo: Camion = new Camion('Volvo', 'FH16', 2018, 140000, '8,5 Tn', 4)
let ferrari: Superdeportivo = new Superdeportivo('Ferrari', 'LaFerrari', 2019, 500000, 'Motor Trasero', 'Si')
let ducati: Motocicleta = new Motocicleta('Ducati', 'Panigale', 2018, 12000, 220)
let scania: Camion = new Camion('Scania', 'R500', 2018, 125000, '25 Tn', 8)

export class Venta {
    private producto: Vehiculo;
    private cliente: Cliente;
    public constructor(producto: Vehiculo, cliente: Cliente) {
        this.producto = producto;
        this.cliente = cliente;
    }
    public setProducto(producto: Vehiculo): void {
        this.producto = producto
    }

    public setCliente(cliente: Cliente): void {
        this.cliente = cliente1
    }

    public getProducto(): Vehiculo {
        return this.producto;
    }

    public getCliente(): Cliente {
        return this.cliente;
    }

//   montodeVenta(): number {
      //  let monto = this.producto.getPrecio();
    //    console.log(monto);
  //      return monto;
//    }
}

let venta1: Venta = new Venta(lamborghini, cliente3)
let venta2: Venta = new Venta(yamaha, cliente2)
let venta3: Venta = new Venta(volvo, cliente1)
let venta4: Venta = new Venta(ferrari, cliente4)
let venta5: Venta = new Venta(ducati, cliente5)
let venta6: Venta = new Venta(scania, cliente6)

console.log(venta5);

export class TiendaImportadora {
    ventas: Venta[];
    nombreTienda: string;
    public constructor(nombre: string) {
        this.nombreTienda = nombre;
        this.ventas = [];
    }

    realizarVenta(venta: Venta): void {
        this.ventas.push(venta);
    }

    calcularVentaSuperdeportivos(): number {
        let suma = 0;
        for (let i = 0; i < this.ventas.length; i++) {
            let vehi = this.ventas[i].getProducto();
            if (vehi instanceof Superdeportivo) {
                suma += vehi.getPrecio();
            }
        }
        return suma
    }

    calcularVentaMotos(): number {
        let suma = 0;
        for (let i = 0; i < this.ventas.length; i++) {
            let vehi = this.ventas[i].getProducto();
            if (vehi instanceof Motocicleta) {
                suma += vehi.getPrecio();
            }
        }
        return suma
    }

    calcularVentaCamiones(): number {
        let suma = 0;
        for (let i = 0; i < this.ventas.length; i++) {
            let vehi = this.ventas[i].getProducto();
            if (vehi instanceof Camion) {
                suma += vehi.getPrecio();
            }
        }
        return suma
    }

    totalVentas(): number {
        let suma = 0;
        for (let i = 0; i < this.ventas.length; i++) {
            let vehi = this.ventas[i].getProducto();
            suma += vehi.getPrecio();
        }
        return suma;
    }
}

let tienda1: TiendaImportadora = new TiendaImportadora('Prestige Imports')

tienda1.realizarVenta(venta1);
tienda1.realizarVenta(venta2);
tienda1.realizarVenta(venta3);
tienda1.realizarVenta(venta4);
tienda1.realizarVenta(venta5);
tienda1.realizarVenta(venta6);

let ingresosSuperdeportivos = tienda1.calcularVentaSuperdeportivos();
console.log(" Los ingresos de la venta de vehiculos Superdeportivos es " + ingresosSuperdeportivos + 'USD');
let ingresosMotos = tienda1.calcularVentaMotos();
console.log(" Los ingresos de la venta de Motocicletas es " + ingresosMotos + 'USD');
let ingresosCamiones = tienda1.calcularVentaCamiones();
console.log(" Los ingresos de la venta de Camiones es " + ingresosCamiones + 'USD');

console.log("Total Ventas ", tienda1.totalVentas() + 'USD');
