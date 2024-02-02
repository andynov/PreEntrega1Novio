import './Loading.css'

export const Loading = () => {
    return (
      <>
        <div id="contenedor">
          <div className="contenedor-loader">
            <div className="loader1"></div>
            <div className="loader2"></div>
            <div className="loader3"></div>
            <div className="loader4"></div>
        </div>
        <div className="cargando">Loading...</div>  
        </div>
      </>
    )
  }