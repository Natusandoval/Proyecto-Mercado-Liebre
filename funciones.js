let autos = require ("./autos")

const buscarPorPatente =  autos.find (elemento => elemento.patente == "APL123")
let marcarComoVendido = buscarPorPatente.vendido = true

let concesionaria = {
  buscarPorPatente,
  marcarComoVendido,
  autos: autos 
}

console.log (autos)