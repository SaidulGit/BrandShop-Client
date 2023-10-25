const AddProduct = () => {
  return (
    <div>

<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Add Product</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
      <form className="card-body">
       <div className="flex gap-2">
           <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="Text" placeholder="Product image" className="input input-bordered" required />
        </div>
         <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="Text" placeholder="Name" className="input input-bordered" required />
         </div>
       </div>
       <div className="flex gap-2">
           <div className="form-control">
          <label className="label">
            <span className="label-text">Brand</span>
          </label>
          <input type="Text" placeholder="Brand name" className="input input-bordered" required />
        </div>
         <div className="form-control">
          <label className="label">
            <span className="label-text">Type</span>
          </label>
          <input type="Text" placeholder="Product type" className="input input-bordered" required />
         </div>
       </div>
       <div className="flex gap-2">
           <div className="form-control">
          <label className="label">
            <span className="label-text">price</span>
          </label>
          <input type="Text" placeholder="Prouct Price" className="input input-bordered" required />
        </div>
         <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="Text" placeholder="Product Rating" className="input input-bordered" required />
         </div>
       </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Short Description</span>
          </label>
          <input type="Text" placeholder="Short Description" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default AddProduct