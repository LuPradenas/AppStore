import React from 'react'

const Producto = ({producto,carrito,productos,addProductocarrito}) => {

const {nombre, precio,id}=producto;//objeto para listar

// Agregar productos al carrito 
const selecccionarProducto = id =>{ // recive un id y los busca en todo el state
   const producto =productos.filter(producto => producto.id===id )[0];
   addProductocarrito([
       ...carrito,
       producto
   ]);
}
 
   const eliminarProducto = id =>{ 
    const productos =carrito.filter(producto =>producto.id !== id );
   
    addProductocarrito(productos);
   };

   //console.log(producto);


    return ( 
      <div>
          <h2>{nombre}</h2>
          <p>${precio}</p>
         {productos 
         ?
         <button 
         type="button"
         onClick={()=> selecccionarProducto(id) }         
         >Comprar</button>
        :
        (
            <button 
            type="button"
            onClick={()=> eliminarProducto(id) }       
            >Eliminar</button>
        )}
      </div>


     );
}
 
export default Producto;