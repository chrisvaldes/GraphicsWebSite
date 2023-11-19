import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../style/navBar.css"

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  //const [isScrollFixed, setIsScrollFixed] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      } 
    };

    window.addEventListener('scroll', handleScroll); 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobileMenuOpen]);

  return (
    <> 
      <nav className='navbar'>
          <div className="left image" >
            <img src='https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png' style={{height : "50px", margin : "1.5rem 0  0 5rem"}} alt='Logo'/>
          </div> 
           
          <ul className="center " style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <li>
              <Link className='link' to="/Home">Home</Link>
            </li>  
            <li>
              <Link className='link' to="/About">About</Link>
            </li> 
            <li>
              <Link className='link' to="/Services">Services</Link>
            </li> 
            <li>
              <Link className='link' to="/Contact">Contact</Link>
            </li>
          </ul> 
          <div>
            <Link to="/"  className='logout'> logOut</Link>
            <Link className="right menu"  onClick={toggleMobileMenu}  ><i class="material-icons">menu</i></Link> 
          </div>
      </nav> 

      {isMobileMenuOpen && (
        <section style={{ position: 'fixed', zIndex: '1100', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <nav>
            <div className="nav-wrapper">
              <ul className="center" style={{ flexDirection: 'column' }}>
                <li style={{width : "100%"}}>
                  <Link to="/Home" style={{marginTop : "4rem"}}>Home</Link>
                </li>
                <li style={{width : "100%"}}>
                  <Link to="/About">About</Link>
                </li> 
                <li>
                  <Link to="/Services">Services</Link>
                </li> 
                <li>
                  <Link to="/Contact">Contact</Link>
                </li> 
              </ul>
            </div>
          </nav>
        </section>
      )}
    </>
  );
}

export default NavBar; 