import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../pages/Usercontext'

const Navbar = () => {
  const [userauth, setuserauth]  = useAuth();

  function logout(){
    setuserauth({...userauth, user:null, token:null})
    localStorage.removeItem("auth");
  }

  return (
    <main>
      <nav className='main-nav'>
        <ul>
            <li>
                <NavLink to={"/"}>Home</NavLink>
            </li>

            { 
              userauth?.user ?(
                <div>
                  {/* <li><NavLink to={"/dashboard"}>Dashboard</NavLink></li> */}
                  <li><NavLink to={`/dashboard/${userauth?.user?.role===1 ? "admin":"user"}`}>Dashboard</NavLink></li>
                  <i className="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer", alignItems: "center",marginTop: 20, color: "white" }}></i>
                  
                  <li><NavLink onClick={logout} to={"/login"}>Logout</NavLink></li>
                </div>
              ) : (
                <div>
                  <li><NavLink to={"/register"}>SignUp</NavLink></li>
                  <li><NavLink to={"/login"}>Login</NavLink></li>
                  {/* <li><NavLink to={"/dashboard"}>Dashboard</NavLink></li> */}
              </div>
              )
            }

            
        </ul>
      </nav>
    </main>
  )
}

export default Navbar
