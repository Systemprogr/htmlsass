class Producto {
  constructor(idProducto, nombre, cantidad, precio) {
    this._idProducto = idProducto;
    this._nombre = nombre;
    this._cantidad = cantidad;
    this._precio = precio;
  }

  set idProducto(idProducto) {
    this._idProducto = idProducto;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  set cantidad(cantidad) {
    this._cantidad = cantidad;
  }

  set precio(precio) {
    this._precio = precio;
  }

  get idProducto() {
    return this._idProducto;
  }

  get nombre() {
    return this._nombre;
  }

  get cantidad() {
    return this._cantidad;
  }

  get precio() {
    return this._precio;
  }
}
