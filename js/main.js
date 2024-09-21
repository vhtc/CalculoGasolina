"use strict"
let pedagio = 29
let pessoas = 2
let gasolina = 6.20
let gasolinaTempo = gasolina / 2
let km = 188
let tempo = 210
let kmLEstrada = 10
let kmLCidade = 8
let litrosEstrada = km / kmLEstrada
let litrosCidade = km / kmLCidade
let consumoEstrada = litrosEstrada * gasolina
let consumoCidade = litrosCidade * gasolina
let consumoTempoEstrada = (tempo / kmLEstrada) * gasolinaTempo
let consumoTempoCidade = (tempo / kmLCidade) * gasolinaTempo
let valorTotalEstrada = consumoEstrada + consumoTempoEstrada

console.log(`L${litrosEstrada.toFixed(2)}, R$${consumoEstrada.toFixed(2)} + R$${consumoTempoEstrada.toFixed(2)} = R$${valorTotalEstrada.toFixed(2)}, Total por pessoa: ${valorTotalEstrada.toFixed(2) / pessoas}`)