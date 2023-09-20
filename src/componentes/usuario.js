


export default function Usuario (props) {
 

   
    return (
      <div>

       <div className="card" >
       <img src="..." class="card-img-top" alt="...">
        <div className="card-body">
         <h5 classname="card-title">{props.nombre}</h5>
        <p class="card-text">{props.cargo}</p>
         <a href="#" class="btn btn-primary">{props.conoceme}</a>
  </div>

  </div> 

      </div>
    )
  }



