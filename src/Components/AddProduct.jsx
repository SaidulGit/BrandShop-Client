import Swal from "sweetalert2";

const AddProduct = () => {
 

  const handleAdd =  event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.image.value;
    const price = form.price.value;
    const type = form.type.value;
    const brand = form.brand.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const user = {name,photoUrl,price,description,rating,brand,type}
    console.log(user)

    fetch("https://brand-assignment-server-ombru6p5j-saidul-islams-projects.vercel.app/add",{
      method: "POST",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data =>console.log(data))
    Swal.fire({
      position: "top-start",
      icon: "success",
      title: "Product Added",
      showConfirmButton: false,
      timer: 1500
    });
  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Add Product</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <form onSubmit={handleAdd}  className="card-body">
              <div className="flex gap-2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image</span>
                  </label>
                  <input
                  id= "image"
                    type="Text"
                    placeholder="Product image"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                  id = "name"
                    type="Text"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Brand</span>
                  </label>
                  {/* <input type="Text" placeholder="Brand name" className="input input-bordered" required /> */}
                  <select id = "brand" className="select select-bordered w-full max-w-xs">
                    <option disabled>
                     Select Brand
                    </option>
                    <option>Google</option>
                    <option>Samsung</option>
                    <option>Apple</option>
                    <option>Intel</option>
                    <option>HP</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Type</span>
                  </label>
                  {/* <input
                    type="Text"
                    placeholder="Product type"
                    className="input input-bordered"
                    required
                  /> */}
                  <select id= "type" className="select select-bordered w-full max-w-xs">
                    <option disabled>
                    Product type
                    </option>
                    <option>Mobile</option>
                    <option>laptop</option>
                    <option>Tablet</option>
                    <option>Smart watch</option>
                    <option>Processor</option>
                    <option>Air Bunds</option>
                    <option>Tv</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">price</span>
                  </label>
                  <input
                  id ="price"
                    type="Text"
                    placeholder="Prouct Price"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input
                  id = "rating"
                    type="Text"
                    placeholder="Product Rating"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>
                <input
                id = "description"
                  type="Text"
                  placeholder="Short Description"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Add Product</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
