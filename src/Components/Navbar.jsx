import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div>

<div className="navbar bg-green-100">
  <div className="navbar-start">
    <div className="dropdown">
      {/* <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label> */}
      {/* <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li><a>Item 3</a></li>
      </ul> */}
    </div>
    <img className="w-20 h-20 mr-2 rounded-2xl" src="https://i.ibb.co/yBgFcFR/rsz-1grey-orange-initial-design-studio-logo.png" alt="" />

    <h2 className="text-center text-2xl font-bold text-rose-300">Think <span className="text-green-300">Unlimited</span></h2>
  </div>
  <div className="navbar-center space-x-3 hidden lg:flex">
  
  <NavLink
       to="/"
       className={({ isActive, isPending }) =>
       isPending ? "pending " : isActive ? "text-red-500 underline font-bold" : ""}>Home
       </NavLink>
       <NavLink
       to="/addproduct"
       className={({ isActive, isPending }) =>
       isPending ? "pending " : isActive ? "text-red-500 underline font-bold" : ""}>Add Product
       </NavLink>
       <NavLink
       to="/mycart"
       className={({ isActive, isPending }) =>
       isPending ? "pending " : isActive ? "text-red-500 underline font-bold" : ""}>My Cart
       </NavLink>
       <NavLink
       to="/registation"
       className={({ isActive, isPending }) =>
       isPending ? "pending " : isActive ? "text-red-500 underline font-bold" : ""}>Registation
       </NavLink>



  </div>
  <div className="navbar-end">
  <NavLink
       to="/login"
       className={({ isActive, isPending }) =>
       isPending ? "pending " : isActive ? "text-red-500 btn underline font-bold" : "btn"}>Login
  </NavLink>
  </div>
</div>
    </div>
  )
}

export default Navbar