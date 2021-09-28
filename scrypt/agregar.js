'use strict';


//metodo

let productos = []

class datosProducto {
    constructor (id,nombre,marca,proveedor,precio,cantidad,descripcion){
        this.id=id;
        this.nombre=nombre;
        this.marca=marca;
        this.proveedor=proveedor;
        this.precio=precio;
        this.cantidad=cantidad;
        this.descripcion=descripcion;
    }
}

//funcion para validar los datos 

function validarProductos(){
    if(document.getElementById('id').value == ""){
        alert('ingrese el codigo');
        return  false;
    }
    if(document.getElementById('nombre' ).value == ""){
        alert('debe ingresar un nombre');
        return false;
    }
    if(document.getElementById('marca').value == ""){
        alert('debe ingresar la marca');
        return false;
    }
    if(document.getElementById('proveedor').value == ""){
        alert('debe ingresar el proveedor');
        return false;
    }
    if(document.getElementById('precio').value == ""){
        alert("debe ingresar el precio");
        return false;

    }
    if(document.getElementById('cantidad').value == ""){
        alert("debe ingresar la cantidad ");
        return false;
    }
    if(document.getElementById('descripcion').value == ""){
        alert("descriva el producto");
        return false;
    }
    return true;
}


// funcion para poblar el arreglo

function poblarArreglo (){
    let id =document.getElementById('id').value;
    let nombre = document.getElementById('nombre').value;
    let marca = document.getElementById('marca').value;
    let proveedor = document.getElementById('proveedor').value;
    let precio = document.getElementById('precio').value;
    let cantidad = document.getElementById('cantidad').value;
    let descripcion = document.getElementById('descripcion').value;

    productos.push(new datosProducto(id,nombre,marca,proveedor,precio,cantidad,descripcion));
}

// mostrar los datos

function mostarDatos(){

    let rows = "";

    for(let index = 0; index < productos.length; index++){
        rows += '<tr>'
        rows += '<td>' + productos[index].id + '</td>'
        rows += '<td>' + productos [index].nombre + '</td>'
        rows += '<td>' + productos [index].marca + '</td>'
        rows += '<td>' + productos [index].proveedor +'</td>'
        rows += '<td> Q'+ productos[index].precio+'</td>'
        rows += '<td> UNI.' + productos[index].cantidad + '</td>'
        rows += '<td>' + productos[index].descripcion + '</td>'
        rows +='</tr>' 
    }
    document.getElementById('items').innerHTML = rows;
     localStorage.setItem('nuevos-productos', JSON.stringify(productos ))

}

// funcion principal
function addDatos (){
    //validar campos

    if(validarProductos()== false ){
        return
    }

    //poblar arreglo

    poblarArreglo();

    //mostar los datos

    mostarDatos();


    alert('agregados correctamente...');
}