
   const productos = [
    {
        id:1,nombre: "hojas tamaño carta ",marca: "patito",proveedor: "D'Oficina ", precio: 1,cantidad:1000, descripcion:"hojas en blanco"
    },
    {
        id:2, nombre:"lapiceros rojos",marca: "bolick",proveedor:"office depot", precio: 1.12,cantidad: 2000,descripcion: "punta fina"

    },
    {
        id:3, nombre: "Reglas de 20cm", marca: "bolick", proveedor:"office depot",precio: 5.25,cantidad: 500,descripcion: "de plastico"

    },
    {
        id:4, nombre: "saca vocados", marca:"patito", proveedor:"D'Oficina ", precio:20, cantidad:100, descripcion: "color negro"

    },
    {
        id:5,nombre: "limpiadores ",marca: "limpia todo",proveedor: "utensilios s.a.",precio: 100,cantidad:400,descripcion: "el precio es por docena "
    },
    {
        id:6,nombre:"palas plasticas",marca: "recoge todo",proveedor:"utensilios s.a.",precio: 30.60,cantidad:150,descripcion: "mango de metal"

    },
    {
        id:7,nombre:"trapeadores ",marca:"limpia todo",proveedor:"utensilios s.a.",precio:10,cantidad:600,descripcion:"de color blanco"
    },
    {
        id:8,nombre:"escobas ", marca: "limpia todo",proveedor:"utensilios s.a.",precio:40.50,cantidad: 20,descripcion:"cerdas duras"
    },
    {
        id:9,nombre:"Alcohol gel",marca:"zeroback",proveedor:"wellco s.a.",precio:100,cantidad:200,descripcion:"para dispensadores de alcohol gel en la muni"
    },
    {
        id:10, nombre:"Cloro", marca: "magia Blanca ", proveedor: "magia Blanca ", precio:50.60, cantidad: 30, descripcion:"para desinfectar los baños"
    },
    {
        id:11,nombre:"Gluconato de Clorexidina al 1%",marca:"magia Blanca",proveedor:"Quimicos S.A.",precio:"200",cantidad:50,descripcion:"para desinfeccion de  áreas"


    },
]

const buscarProducto = document.querySelector('#buscarProducto');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado')
//fucion para filtrar

const filtrar = ()=>{
    //console.log(buscarProducto.value);
   resultado.innerHTML = '';

    const texto = buscarProducto.value.toLowerCase();
    for(let producto of productos){
        let nombre = producto.nombre.toLowerCase();
        if(nombre.indexOf(texto) !==-1){
            resultado.innerHTML +=`
            <li> ${producto.nombre} - marca: ${producto.marca}< /li>
            `

        }
    }
    if(resultado.innerHTML ===''){
        resultado.innerHTML +=`
        <li> producto no encontrado...< /li>
        ` 
    }

}

boton.addEventListener('click', filtrar)






// function bProductos (){
//     let cadena;
//     cadena = document.getElementById('buscarProducto').value;

//     document.querySelector('.resultado').innerHTML= "";

//     for (let p of productos ){
//         let id=p.id;
//         let nombre=p.nombre;
//         let marca=p.marca;
//         let proveedor=p.proveedor;
//         if(marca.indexOf(cadena.toUpperCase()) !== -1){
//             document.querySelector('.resultado').innerHTML+= `<li>id: 
//             ${id} nombre: ${nombre} marca: ${marca} proveedor: ${proveedor}</li>`
//         }

//     }
    
// }