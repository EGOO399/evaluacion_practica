const items = document.getElementById('items')
const templateProductos = document.getElementById('template-Productos').content
const fragment = document.createDocumentFragment()
let nuevosProductos = {}





document.addEventListener('DOMContentLoaded', () => {
    fetchData ()  
    //para guardar la info en localStorge
    if(localStorage.getItem('nuevosProductos')){
        productos = JSON.parse(localStorage.getItem('nuevosProductos'))
        pintarCarrito ()

    }
    
})



//para acceder al api.json
const fetchData = async () => {
    try{
        const res = await fetch('api.json')
        const data = await res.json()
        //console.log(data)
        pintarProductos(data)
    }catch (error){
        console.log(error)
    }
}
//para mostrar los datos en la tabla de inventario
const pintarProductos = data => {
    data.forEach(producto => {
        templateProductos.querySelector('th').textContent = producto.id
        templateProductos.querySelector('.no1').textContent = producto.nombre
        templateProductos.querySelector('.no2').textContent = producto.marca
        templateProductos.querySelector('.no3').textContent = producto.proveedor
        templateProductos.querySelector('span').textContent = producto.precio
        templateProductos.querySelector('.s1').textContent = producto.cantidad
        templateProductos.querySelector('.no6').textContent = producto.descripcion

        const clone = templateProductos.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)

  

} 



