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
                  <li style={{ fontSize: 20, cursor: "pointer", marginTop: 12, color: "white" }}>
                    cart <sup>0</sup>
                  </li>
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
