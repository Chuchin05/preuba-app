

const ComponentePromesas =()=>{
    
    const [productos,Setproducto]= useState ([])
    const [loading,setLoading] = useState (true)

    useEffect(() => {
    getFetch
    .then ( res => {
        console.log("llamda a la api")
        setProducto(res)
  })
    .catch (err => console.log(err))
    .finally(()=> setLoading(false))
  }, [])


    console.log(productos);
    return(
        <>
            <h2>Soy un componente promise</h2>


            { loading ? <h1> Cargandoo ...</h1> : 
                productos.map(prod => <div key={prod.id} className="car w-50 mt-5">
                    <div className="card-header">{prod.nombre}</div>
                    <div className="card-body"><img src={prod.foto} alt="" />{prod.price}</div>
                    <div className-="card-footer"> 
                    <button className="btn btn -outline">Detalle del PRODUCTO</button> 
                    </div>
                </div>
                )
              } 
        </>
    )
}
















// const ComponentePromesa= () =>{
    
//     getFetch
//     .then(res => {
//         // throw new Error("ERROR")
//         console.log(res)
//         // return 1
//     },)
//     .then(resp => console.log(resp))
//     // el .catch maneja todos los errores 
//     .catch(err => console.log(err))
//     .finally (()=> console.log ("ESte se ejecuta si o si"))

// }


// 
// import {useEffect, useState} from 'react'
// import  {getFetch}  from "../../src/services/getFetch"

// const ComponentePromesas = () => {
//     const [product, setProduct] = useState([])
//     const [loading, setLoading] = useState(true)

//     useEffect(() => {
//         getFetch
//         .then( res => {        
//             console.log('llamada a api') // alguna accion con la respuesta  
//             setProduct(res)
//         })    
//         .catch(err => console.log(err))
//         .finally(()=> setLoading(false))       
//     },[])   
  
 
//     console.log(product)
//     return (
//         <>
//            <h2>Soy componentePromesas</h2>          
            
//             { loading ? <h1>Cargando...</h1> :         
//                     product.map(prod=> <div key={prod.id} className="card w-50 mt-5" >
//                                                 <div className="card-header">
//                                                     {prod.name}
//                                                 </div>
//                                                 <div className="card-body">
//                                                     <img src={prod.foto} alt='' />
//                                                     {prod.price}
//                                                 </div>
//                                                 <div className="card-footer">
//                                                     <button className="btn btn-outline-primary btn-block">
//                                                         detalle del producto
//                                                     </button>
//                                                 </div>
                    
//                                           </div>
//             )
//             }
//         </>
//     )
// }











// export default ComponentePromesas
//   function getPersonas(id) {
//     if (id===undefined) {
//         return personas
//     }else{
//         return personas.find( persona=> persona.id === id)
//     }
// }
//     getPersonas
//     .then( (respuesta) => {
//             // throw new Error("Error")
//             console.log("respuesta: ", respuesta)
//             // return 1
//         })
//         .catch((err) => {
//                 console.log("ourrio un error", err);
//                 return "todo ok";
//             })
//     .then((valor) => {
//         console.log("valor", valor);
