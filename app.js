const home=document.getElementById('home');
const series=document.getElementById('series');
const login=document.getElementById('login');

import Home from "/Components/home.js"
import Series from "/Components/series.js"
const content = document.getElementById("content");

const catalogo = [
    {
        id:"strangerthings",
        nombre:"Stranger Things",
        primerEpisodio:"15 de julio de 2016",
        temporadas:"4",
        descripcion:"Cuando un niño desaparece, sus amigos, la familia y la policía se ven envueltos en una serie de eventos misteriosos al tratar de encontrarlo. Su ausencia coincide con el avistamiento de una criatura terrorífica y la aparición de una extraña niña.",
        autor:"Hermanos Duffer",
        url:"https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/05/stranger-things.jpg?fit=2560%2C1440&quality=50&strip=all&ssl=1"
    },
    {
        id:"euphoria",
        nombre:"Euphoria",
        temporadas:"2",
        descripcion:"Un grupo de estudiantes de secundaria navega entre drogas, relaciones sexuales, traumas, redes sociales, amor y amistad.",
        autor:"Marcell Rév; Drew Daniels; Adam Newport-Berra; André Chemetoff",
        url:"https://images.squarespace-cdn.com/content/v1/59973af5f14aa1ab06cba333/1568078311150-U19TZIVG0S5XWXBT2241/Euphoria+.jpg?format=2500w"
    },
    {
      id:"theboys",  
      nombre:"The Boys",
        primerEpisodio:"26 de julio de 2019",
        temporadas:"3",
        descripcion:"Cuando los superhéroes abusan de sus superpoderes en lugar de usarlos para el bien, unos muchachos se embarcan en una búsqueda heroica para exponer sus secretos.",
        autor:"Hermanos Duffer",
        url:"https://m.media-amazon.com/images/G/01/pv_starlight/theboys-s1-4f31a4b5-56d1-45ee-a26e-b55c48f3e99f/V2/SevenCarouselImages_S1_1920x1080_Homelander.jpg"
    },
    {
      id:"terminallist",
        nombre:"The Terminal List",
        primerEpisodio:"1 de julio de 2022",
        temporadas:"1",
        descripcion:"James Reece regresa a casa después de que todo su pelotón de Navy SEAL es emboscado, solo para descubrir que nuevas fuerzas oscuras trabajan en su contra y ponen en peligro a sus seres queridos.",
        autor:"",
        url:"https://cdn.milenio.com/uploads/media/2022/06/29/chris-pratt-taylor-kitsch-llegan.jpeg"
    },
    {
      id:"gameofthrones",
        nombre:"Game of Thrones",
        primerEpisodio:"17 de abril de 2011",
        temporadas:"8",
        descripcion:"Es la descripción de dos familias poderosas, reyes y reinas, caballeros y renegados, hombres falsos y honestos, haciendo parte de un juego mortal por el control de los Siete Reinados de Westeros y por sentarse en el trono más alto.",
        autor:"George Raymond Richard Martin",
        url:"https://fondosmil.com/fondo/8775.jpg"
    }
]

home.addEventListener('click',e=>{
    history.pushState({
        page:'Home'
      },'Home','/');
            
    });

series.addEventListener('click',e=>{
    history.pushState({
        page:'Series',
        productos:[
            {nombre:'A',precio:100},
            {nombre:'B',precio:200}
          ]
        }, "Series","/series");
    })

 

const viewing = ()=>{

    const coincidencia = catalogo.filter(item=>("/"+item.id === window.location.pathname
    ))
    
    console.log(coincidencia)
    
    if(history.length === 1){
        content.innerHTML = Home();
    }
    else if( window.location.pathname ==="/"){
        content.innerHTML = Home();
    } else if( window.location.pathname === "/series"){
        content.innerHTML = Series();
    } else if(window.location.pathname === "/login"){
        content.innerHTML = "puto"
    } else if(window.location.pathname === "/"+coincidencia[0].id){
        let templateSeries= 
        `
          <div class="container">
              <div class="p-5 mb-4 bg-light rounded-3">
              <div class="img-serie py-5">
                  <img src=${coincidencia[0].url}>
              </div>
              </div>
  
              <div class="row align-items-md-stretch">
              <div class="col-md-6">
                  <div class="h-100 p-5 text-bg-dark rounded-3">
                  <h2>${coincidencia[0].nombre}</h2>
                  <p>${coincidencia[0].descripcion}</p>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="h-100 p-5 bg-light border rounded-3">
                  <h2>Info</h2>
                  <p>Autor: ${coincidencia[0].autor}</p>
                  <p>Temporadas: ${coincidencia[0].temp}</p>
                  </div>
              </div>
          
          </div>
          ` 
        content.innerHTML = templateSeries;
    }
}

// home.addEventListener('click',e=>{
// history.pushState({
//     page:'Home'
//   },'Home','/');
    
// });

// series.addEventListener('click',e=>{
// history.pushState({
// page:'Series',
// productos:[
//     {nombre:'A',precio:100},
//     {nombre:'B',precio:200}
//   ]
// }, "Series","/series");


// })

login.addEventListener('click',e=>{
    history.pushState({
        page:'Login'
      },'Login','/login');


    });

  
    viewing()