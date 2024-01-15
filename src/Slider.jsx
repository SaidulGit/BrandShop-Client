import React from 'react'

const Slider = () => {
  return (
    <div>
        <div className="carousel w-full h-[600px] mx-auto">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://fairelectronics.com.bd/media/wysiwyg/Home-Ref-WM-KV_PC_1440-640-pix.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://people.com/thmb/LcocawLIutUA8DREs9IHRtLJqKE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(2999x0:3001x2)/apple-watches-airpods-ipads-and-more-apple-tech-is-on-sale-at-target-today-tout-a0ef0583df6f4fb5a3cf06361a2d1be4.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://cdn.arstechnica.net/wp-content/uploads/2022/01/intel-12th-gen-desktop-1.jpeg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://d2cdo4blch85n8.cloudfront.net/wp-content/uploads/2019/10/New-Google-Pixel-Buds-and-Nest-Products-Featured-image-1568x882.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    </div>
  )
}

export default Slider