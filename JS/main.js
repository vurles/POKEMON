
//const resultadoNombres = nombrePokemones(data); // guardo en la constante el resultado de mi función nombrePokemones (lo que está retornando)
//console.log(resultadoNombres);

// evento click del botón para mostrar nombres ejemplo ale
//document.getElementById('btn').addEventListener('click', () => {

 /*document.getElementById('root').innerHTML = ''; // limpio el div cada vez que se hace click

 for (let i = 0; i < resultadoNombres.length; i++) {
   document.getElementById('root').innerHTML += '<p>' + resultadoNombres[i] + '</p>'; // imprimo en el HTML cada nombre que está dentro de cada posición del arreglo.
 }

}) */
 // mi turno de implementar lo aprendido
/*const typePokemon = tipoPokemon(data);

document.getElementById('eba').addEventListener('click', () => {
	for (let i = 0; i < typePokemon.length; i++){
		document.getElementById('pru').innerHTML += '<p>' + typePokemon[i] + '</p>';
	}
})
*/
// mostrar tarjetas como nos enseño la ale
//const resultadoNombres = nombrePokemones(data); // funcion donde me muestra los nombres de los pokemones que talves ocupe
//const huevoPokemon = filtroHuevo(data, condition); //filtro pokemon por tipo huevo

const data = POKEMON.pokemon;
const containerPokemon = document.getElementById('root');// donde contendre mis cartas con pokemon
//const selectEgg = document.getElementById('egg');// selecc con kilometros pokemon
const selectType = document.getElementById('type');//select de los tipos pokemon
const ordenando = document.getElementById('ordenar');

const showData = (data) => {
	let result = '';
	//console.log(DATA)
   data.forEach(element => {
	 // element --> DATA[i]
	 //console.log(element.house);
	 
  
		 result = containerPokemon.innerHTML += `
		 <div>
			 <div class="card">
			 <div class="box">
				 <div class="img">
					 <img src="${element.img}">
				 </div>
				 <h2>${element.name}<br><span>${element.num}</span></h2>
				 <p> TIPO : ${element.type[0]}</p><br>
				 <p>DEBILIDAD : ${element.weaknesses[0]}</p>
			 </div>
			 </div>
		 </div>` 
	 } 
   );
   return result;
 }
 
//FILTRADO CON EGG 
/*selectEgg.addEventListener('change', () => {
	let condition = selectEgg.value;
	let filtered = filtroHuevo(data,condition);
	
	// limpio div
	containerPokemon.innerHTML = '';
  
	filtered.forEach(element => {
	  containerPokemon.innerHTML += `
	  <div>
		<div class="card">
		  <div class="box">
			<div class="img">
				<img src="${element.img}">
			</div>
			<h2>${element.name}<br><span>${element.egg}</span></h2>
			<p>TIPO : ${element.type}</p>
			<p>DEBILIDAD : ${element.weaknesses}</p>
		  </div>
		</div>
	  </div>` 
	})
  });*/
// fin filtrar por huevo

// comienzo de filtrado por tipo de pokemon hwhwhwhwh

// agarro mi select con los tipos de pokemon y le digo que escuche el evento 'cambio' 
  selectType.addEventListener("change", () => {
    let condition = selectType.value;// hago una variable condition y le paso el valor de mi select con .value  
	let filterResult = filterPokemon(data, condition);// llamo a mi funcion que esta en data
	
	containerPokemon.innerHTML = "";
	
    filterResult.forEach(element => {
        if (element.weaknesses[1] === '' && element.type[1] === ''){
		containerPokemon.innerHTML +=  `
		<div>
		  <div class="card">
			<div class="box">
			  <div class="img">
				  <img src="${element.img}">
			  </div>
			  <h2>${element.name}<br><span>${element.num}</span></h2>
			  <p> TIPO : ${element.type[0]}</p><br>
			  <p>DEBILIDAD : ${element.weaknesses[0]}</p>
			</div>
		  </div>
		</div>` 
        } else if (element.weaknesses[1]=== '' && element.type[1] !== ''){
			containerPokemon.innerHTML +=  `
			<div>
			  <div class="card">
				<div class="box">
				  <div class="img">
					  <img src="${element.img}">
				  </div>
				  <h2>${element.name}<br><span>${element.num}</span></h2>
				  <p>TIPO : ${element.type[0]}</p><br>
				  <p>TIPO :${element.type[1]}</p><br>
				  <p>DEVILIDAD : ${element.weaknesses[0]}</p>
				</div>
			  </div>
			</div>` 
			
        } else if (element.weaknesses[1]!== '' && element.type[1] === ''){
			containerPokemon.innerHTML +=  `
			<div>
			  <div class="card">
				<div class="box">
				  <div class="img">
					  <img src="${element.img}">
				  </div>
				  <h2>${element.name}<br><span>${element.num}</span></h2>
				  <p>TIPO : ${element.type[0]}</p>
				  <p>DEVILIDAD : ${element.weaknesses[0]}</p>
				  <p>DEVILIDAD : ${element.weaknesses[1]}</p>
				</div>
			  </div>
			</div>` 
			
        } else {
			containerPokemon.innerHTML +=  `
			<div>
			  <div class="card">
				<div class="box">
				  <div class="img">
					  <img src="${element.img}">
				  </div>
				  <h2>${element.name}<br><span>${element.num}</span></h2>
				  <p>TIPO : ${element.type[0]}</p><br>
				  <p>TIPO : ${element.type[1]}</p><br>
				  <p>DEVILIDAD : ${element.weaknesses[0]}</p><br>
				  <p>DEVILIDAD : ${element.weaknesses[1]}</p>
				</div>
			  </div>
			</div>` 
			

        }
    })
});

ordenando.addEventListener('change', ()=>{
 let condition = ordenando.value;
 let orderAZ = orderPokemon(data,condition);

 containerPokemon=innerHTML='';

 orderAZ.forEach(element =>{
	 containerPokemon.innerHTML += `
	 <div>
	 <div class="card">
		 <div class="box">
		 <div class="img">
			 <img src="${element.img}">
		 </div>
		 <h2>${element.name}<br><span>${element.egg}</span></h2>
		 <p>TIPO : ${element.type}</p>
		 <p>DEBILIDAD : ${element.weaknesses}</p>
		 </div>
	 </div>
	 </div>` 
 })

});


  window.onload = showData(data);


