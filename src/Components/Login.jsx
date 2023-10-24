const Login = () => {

const handleSubmit= e => {
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;
  const user = { email,password};
  console.log (user);
  
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