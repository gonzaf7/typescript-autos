"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, modelo, año, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.precio = precio;
    }
    Vehiculo.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Vehiculo.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Vehiculo.prototype.setAño = function (año) {
        this.año = año;
    };
    Vehiculo.prototype.setPrecio = function (precio) {
        this.precio = precio;
    };
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Vehiculo.prototype.getAño = function () {
        return this.año;
    };
    Vehiculo.prototype.getPrecio = function () {
        return this.precio;
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
var Superdeportivo = /** @class */ (function (_super) {
    __extends(Superdeportivo, _super);
    function Superdeportivo(marca, modelo, año, precio, posMotor, techibrida) {
        var _this = _super.call(this, marca, modelo, año, precio) || this;
        _this.posMotor = posMotor;
        _this.techibrida = techibrida;
        return _this;
    }
    return Superdeportivo;
}(Vehiculo));
exports.Superdeportivo = Superdeportivo;
var Motocicleta = /** @class */ (function (_super) {
    __extends(Motocicleta, _super);
    function Motocicleta(marca, modelo, año, precio, maxVelocidad) {
        var _this = _super.call(this, marca, modelo, año, precio) || this;
        _this.maxVelocidad = maxVelocidad;
        return _this;
    }
    return Motocicleta;
}(Vehiculo));
exports.Motocicleta = Motocicleta;
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion(marca, modelo, año, precio, capCarga, nroEjes) {
        var _this = _super.call(this, marca, modelo, año, precio) || this;
        _this.capCarga = capCarga;
        _this.nroEjes = nroEjes;
        return _this;
    }
    return Camion;
}(Vehiculo));
exports.Camion = Camion;
var Cliente = /** @class */ (function () {
    function Cliente(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    return Cliente;
}());
exports.Cliente = Cliente;
var cliente1 = new Cliente('Ruben', 'Penarrieta', 25);
var cliente2 = new Cliente('Rafael', 'Santos', 43);
var cliente3 = new Cliente('Gonzalo', 'Alfaro', 27);
var cliente4 = new Cliente('Rayo', 'McQueen', 34);
var cliente5 = new Cliente('Dominic', ' Toretto', 45);
var cliente6 = new Cliente('Jason', 'Stan', 90);
var lamborghini = new Superdeportivo('Lamborghini', 'Huracan', 2019, 340000, 'Motor Trasero', 'No');
var yamaha = new Motocicleta('Yamaha', 'YZR', 2017, 19500, 250);
var volvo = new Camion('Volvo', 'FH16', 2018, 140000, '8,5 Tn', 4);
var ferrari = new Superdeportivo('Ferrari', 'LaFerrari', 2019, 500000, 'Motor Trasero', 'Si');
var ducati = new Motocicleta('Ducati', 'Panigale', 2018, 12000, 220);
var scania = new Camion('Scania', 'R500', 2018, 125000, '25 Tn', 8);
var Venta = /** @class */ (function () {
    function Venta(producto, cliente) {
        this.producto = producto;
        this.cliente = cliente;
    }
    Venta.prototype.setProducto = function (producto) {
        this.producto = producto;
    };
    Venta.prototype.setCliente = function (cliente) {
        this.cliente = cliente1;
    };
    Venta.prototype.getProducto = function () {
        return this.producto;
    };
    Venta.prototype.getCliente = function () {
        return this.cliente;
    };
    return Venta;
}());
exports.Venta = Venta;
var venta1 = new Venta(lamborghini, cliente3);
var venta2 = new Venta(yamaha, cliente2);
var venta3 = new Venta(volvo, cliente1);
var venta4 = new Venta(ferrari, cliente4);
var venta5 = new Venta(ducati, cliente5);
var venta6 = new Venta(scania, cliente6);
console.log(venta5);
var TiendaImportadora = /** @class */ (function () {
    function TiendaImportadora(nombre) {
        this.nombreTienda = nombre;
        this.ventas = [];
    }
    TiendaImportadora.prototype.realizarVenta = function (venta) {
        this.ventas.push(venta);
    };
    TiendaImportadora.prototype.calcularVentaSuperdeportivos = function () {
        var suma = 0;
        for (var i = 0; i < this.ventas.length; i++) {
            var vehi = this.ventas[i].getProducto();
            if (vehi instanceof Superdeportivo) {
                suma += vehi.getPrecio();
            }
        }
        return suma;
    };
    TiendaImportadora.prototype.calcularVentaMotos = function () {
        var suma = 0;
        for (var i = 0; i < this.ventas.length; i++) {
            var vehi = this.ventas[i].getProducto();
            if (vehi instanceof Motocicleta) {
                suma += vehi.getPrecio();
            }
        }
        return suma;
    };
    TiendaImportadora.prototype.calcularVentaCamiones = function () {
        var suma = 0;
        for (var i = 0; i < this.ventas.length; i++) {
            var vehi = this.ventas[i].getProducto();
            if (vehi instanceof Camion) {
                suma += vehi.getPrecio();
            }
        }
        return suma;
    };
    TiendaImportadora.prototype.totalVentas = function () {
        var suma = 0;
        for (var i = 0; i < this.ventas.length; i++) {
            var vehi = this.ventas[i].getProducto();
            suma += vehi.getPrecio();
        }
        return suma;
    };
    return TiendaImportadora;
}());
exports.TiendaImportadora = TiendaImportadora;
var tienda1 = new TiendaImportadora('Prestige Imports');
tienda1.realizarVenta(venta1);
tienda1.realizarVenta(venta2);
tienda1.realizarVenta(venta3);
tienda1.realizarVenta(venta4);
tienda1.realizarVenta(venta5);
tienda1.realizarVenta(venta6);
var ingresosSuperdeportivos = tienda1.calcularVentaSuperdeportivos();
console.log(" Los ingresos de la venta de vehiculos Superdeportivos es " + ingresosSuperdeportivos + 'USD');
var ingresosMotos = tienda1.calcularVentaMotos();
console.log(" Los ingresos de la venta de Motocicletas es " + ingresosMotos + 'USD');
var ingresosCamiones = tienda1.calcularVentaCamiones();
console.log(" Los ingresos de la venta de Camiones es " + ingresosCamiones + 'USD');
console.log("Total Ventas ", tienda1.totalVentas() + 'USD');
