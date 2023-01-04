const idP = document.getElementById("idproducto");
const nameP = document.getElementById("nameproducto");
const cantP = document.getElementById("cantidadproducto");
const preP = document.getElementById("precioproducto");
const bA1 = document.getElementById("b1");
const listable = document.getElementById("listTable");
const eliminar2 = document.getElementById("eliminar");
const salida2 = document.getElementById("salida");

const editidP = document.getElementById("idEdit");
const editnameP = document.getElementById("nameEdit");
const editcantP = document.getElementById("cantEdit");
const editpreP = document.getElementById("precioEdit");
const editbA1 = document.getElementById("b11");

const cant = document.getElementById("cant");
const subtot = document.getElementById("subtot");
const desc = document.getElementById("desc");
const tot = document.getElementById("tot");

bA1.onsubmit = function (e) {
  e.preventDefault();
  const newproducto = new Producto(
    idP.value,
    nameP.value,
    cantP.value,
    preP.value
  );
  console.log(newproducto);

  const newfila = listable.insertRow();

  const c1 = newfila.insertCell();
  const c2 = newfila.insertCell();
  const c3 = newfila.insertCell();
  const c4 = newfila.insertCell();

  c1.innerHTML = idP.value;
  c2.innerHTML = nameP.value;
  c3.innerHTML = cantP.value;
  c4.innerHTML = preP.value;

  calcularDescuento();

  idP.value = "";
  nameP.value = "";
  cantP.value = "";
  preP.value = "";

  newfila.setAttribute("data-bs-toggle", "modal");
  newfila.setAttribute("data-bs-target", "#exampleModal");
  newfila.onclick = function (e) {
    filaselec = e.currentTarget.rowIndex - 1;
    const filaclick = listable.rows[filaselec];
    console.log(filaclick);

    const c1 = filaclick.cells[0];
    const c2 = filaclick.cells[1];
    const c3 = filaclick.cells[2];
    const c4 = filaclick.cells[3];
    editidP.value = c1.innerHTML;
    editnameP.value = c2.innerHTML;
    editcantP.value = c3.innerHTML;
    editpreP.value = c4.innerHTML;
  };
};

function calcularDescuento() {
  if (listable.rows.length === 0) {
    cant.innerHTML = 0;
    subtot.innerHTML = 0;
    desc.innerHTML = 0;
    tot.innerHTML = 0;
    return;
  }

  const subtotalProductos = [...listable.rows]
    .map(
      (p) => parseFloat(p.cells[2].innerHTML) * parseFloat(p.cells[3].innerHTML)
    )
    .reduce((a, b) => a + b);

  if (listable.rows.length < 3) {
    cant.innerHTML = listable.rows.length;
    subtot.innerHTML = subtotalProductos;
    desc.innerHTML = 0;
    tot.innerHTML = subtotalProductos;
    return;
  }

  cant.innerHTML = listable.rows.length;
  subtot.innerHTML = subtotalProductos;
  desc.innerHTML = subtotalProductos * 0.1;
  tot.innerHTML = subtotalProductos - subtotalProductos * 0.1;

  console.log(subtotalProductos);
}

let filaselec = -1;
b11.onclick = function (e) {
  const filaclick = listable.rows[filaselec];
  console.log(filaclick);

  const c1 = filaclick.cells[0];
  const c2 = filaclick.cells[1];
  const c3 = filaclick.cells[2];
  const c4 = filaclick.cells[3];

  c1.innerHTML = editidP.value;
  c2.innerHTML = editnameP.value;
  c3.innerHTML = editcantP.value;
  c4.innerHTML = editpreP.value;

  calcularDescuento();

  filaselec = -1;
};

eliminar2.onclick = function (e) {
  listable.deleteRow(filaselec);
  filaselec = -1;

  calcularDescuento();
};
