// Logica
//const data = POKEMON.pokemon; //guardo en una constante el arreglo de objetos con los pokemones.
//console.log(data);

// función donde recorreré el arreglo de objetos para acceder a su propiedad name
//const nombrePokemones = (data) => {
 //console.log(data);
//let nombres = []; // arreglo vacío donde pushearé los nombres nuevos.
 //for (let i = 0; i < data.length; i++) {
 //  nombres.push(data[i].name)
 //}
 //return nombres; //retorno el arreglo de nombres para que pueda tomarlo desde el archivo main.js y hacer la visualización de datos con el DOM
//}

// hasta aqui todo bien
// implementa algo parecido ,provare con los tipos de cada 
//const tipoPokemon = (data)=> {
//	let tipo = [];
//	for(let i = 0; i < data.length; i++) {
//		tipo.push(data[i].type)
//	}
//	return tipo;// felicidad maxxima funciona!!!! :)
//}

// aplicando taller manejo data para filtrar por huevo


const filtroHuevo = (data, condition) => {
  const filtrandoHuevo = data.filter(element => {
    return element.egg === condition
  })
  return filtrandoHuevo;
};
// fin filtro huevos

const filterPokemon = (data , condition) => {
	if (condition === "0") {
			return data; 
	}
	const filteredPokemons  = data.filter(element => {
			if (element.type[0] === condition) return element.type[0] === condition;
			else if (element.type[1] === condition) return element.type[1] === condition;
	});
	return filteredPokemons;
};

//window.tipoPokemon = tipoPokemon;
//window.nombrePokemones = nombrePokemones;