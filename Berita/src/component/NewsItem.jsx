 import image from '../assets/Hot-News.jpg'

  const NewsItem= ({title, description, src, url}) => {
    return(
      <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"305px", maxHeight:"450px"}}>
  <img src={src?src:image} style={{height:"190px", width:"288px"}} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"Lihat lebih banyak untung melihat selengkapnya"}</p>
    <a href={url} className="btn text-light bg-danger">Lihat lebih banyak</a>
  </div>
</div>
    )
  }

  export default NewsItem