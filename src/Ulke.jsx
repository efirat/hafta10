function Ulke({ulkeVeri}) {
  return (
    <>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="border rounded-3 p-3 h-100 d-flex flex-column align-items-center justify-content-between">
          <h3>{ulkeVeri.name.common}</h3>
          <img src={ulkeVeri.flags.png} className="img-fluid" />
        </div>
      </div>

    </>
  )
}

export default Ulke