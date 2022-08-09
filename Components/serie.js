const Serie = (nombre,descripcion,episodios,url,autor) =>{
       
    let templateSeries= 
    `
    <div class="container">
        <div class="p-5 mb-4 bg-light rounded-3">
        <div class="container-fluid py-5">
            <img src=${url}>
        </div>
        </div>

        <div class="row align-items-md-stretch">
        <div class="col-md-6">
            <div class="h-100 p-5 text-bg-dark rounded-3">
            <h2>${nombre}</h2>
            <p>${descripcion}</p>
            </div>
        </div>
        <div class="col-md-6">
            <div class="h-100 p-5 bg-light border rounded-3">
            <h2>Info</h2>
            <p>Autor: ${autor}</p>
            <p>Temporadas: ${episodios}</p>
            </div>
        </div>
    
    </div>
    `

    let newDiv = document.createElement("div")
    newDiv = templateSeries;

    return newDiv
}

export default Serie