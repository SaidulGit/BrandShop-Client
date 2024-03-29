// import { useContext } from "react";
// import { AuthContext } from "../Provider/AuthProvider";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";




// const { createUser } = useContext(AuthContext)




const Register = () => {
const navigate = useNavigate()
const {createUser} = useContext(AuthContext);

 const handleRegister= e => {
  e.preventDefault();
const form = e.target;
const name = form.name.value;
const imgUrl = form.imageUrl.value;
const email = form.email.value;
const password = form.password.value;
createUser(email,password)
.then(res => res.user)
.catch(error => console.error(error))
   e.target.reset()
  navigate("/")
  Swal.fire({
    position: "top-start",
    icon: "success",
    title: "Registation Success",
    showConfirmButton: false,
    timer: 1500
  });
 }



  return (
    <div>
  
  <div>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
    </div> <br />
    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">

      <form onSubmit={handleRegister} className="card-body">
        {/* main div  */}
    <div className="flex space-x-1">
         <div>
     <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Your Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input type="text" name="imageUrl" placeholder="image url" className="input input-bordered" />
        </div>
     </div>
        <div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          </div>
        </div>
    </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button> <br />
          <p className="text-center">Allready have an account.Please <a className="text-base font-semibold text-blue-500" href="/login">Login </a></p>
          
        </div>
      </form>
     
    </div>
  </div>
     </div>
    </div>

    </div>
  )
}

export default Register