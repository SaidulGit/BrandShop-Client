import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const {signIn} = useContext(AuthContext)



 
const handleSubmit= e => {
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;
  const user = { email,password};
  signIn(user)
  .then(res=> res.user)
  .catch(erroe => console.error(erroe))
  Swal.fire({
    title: "SussessFul Login",
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `
    }
  });
  navigate(from, { replace: true });
  
  
}
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div> <br />
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

      <form onSubmit={handleSubmit} className="card-body">
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
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button> <br />
          <p>Don't have an account.Please <a className="text-base font-semibold text-blue-500" href="/registation">register </a></p>
          
        </div>
      </form>
     
    </div>
  </div>
     </div>
    </div>
  )
}

export default Login