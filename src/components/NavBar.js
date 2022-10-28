
import CartWidget from './CartWidget.js';
import Menu from './Menu.js'


const NavBar=()=>{
    return(
<header>
<nav className="navbar  border-bottom">
  <div className="container-fluid">
  <div id='logo'><h2>Estética Afrodita</h2></div>
    <ul className="nav nav-pills nav-fill ">
  <li className="nav-item ">
    <a className="nav-link text-secondary" aria-current="page" href="#">Tratamientos</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-secondary" href="#">Productos</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-secondary" href="#">Promociones</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-secondary" href='#'>Mi cuenta</a>
  </li>
</ul>
<div id='buttons' className='d-flex'>
<CartWidget/>
<Menu/>
</div>
  </div>
</nav>
</header>
    );
}

export default NavBar;