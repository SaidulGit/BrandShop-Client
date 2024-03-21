import { useContext } from "react";
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

const handleLogout = () => {
  logout()
  .then(() => {})
  .catch((error) => console.log(error));
  Swal.fire({
    position: "center-right",
    icon: "success",
    title: "Logout Success",
    showConfirmButton: false,
    timer: 1500
  });
}

  return (
    <div>
<div className="navbar bg-white fixed z-50">
  <div className="navbar-start">
    <div className="dropdown">
    </div>
   <Link to="/"> <img className="w-20 h-20 mr-2 rounded-2xl" src="https://i.ibb.co/9p8rVpG/make-a-logo-for-a-websitewebsite-name-Brand-sho.jpg" alt="" />
   </Link>

    
  </div>
  <div className="navbar-center space-x-3 hidden lg:flex">
  
  <NavLink
       to="/"
       className={({ isActive, isPending }) =>
       isPending ? "pending " : isActive ? "text-orange-400 font-bold" : ""}>Home
       </NavLink>
       <NavLink
       to="/addproduct"
       className={({ isActive, isPending }) =>
       isPending ? "pending " : isActive ? "text-orange-400  font-bold" : ""}>Add Product
       </NavLink>
       <NavLink
       to="/mycart"
       className={({ isActive, isPending }) =>
       isPending ? "pending " : isActive ? "text-orange-400  font-bold" : ""}>My Cart
       </NavLink>
       <NavLink
       to="/registation"
       className={({ isActive, isPending }) =>
       isPending ? "pending " : isActive ? "text-orange-400  font-bold" : ""}>Registation
       </NavLink>



  </div>
  <div className="navbar-end">
          <h2 className="mr-2">{user && <p>{user.email} </p>}</h2>
          {user ? (
            <>
              {" "}
              <a onClick={handleLogout} className="btn btn-success">
                Log out
              </a>{" "}
            </>
          ) : (
            <>
              {" "}
              <Link to="/login">
                <button className="btn btn-warning">Login</button>
              </Link>{" "}
            </>
          )}
        </div>
</div>

    </div>
  )
}

export default Navbar