import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {   
    return(
        <div>
           <Link to='/'>Logo</Link>       
           <Link to='/'>Home</Link>       
           <Link to='/categoria/gorras'>Gorras</Link>       
           <Link to='/categoria/remeras'>Remeras</Link>       
           <Link to='/cart'>Carrito</Link>     
                  
        </div>
    )
}
