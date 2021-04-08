var valorEmDolarTexto = prompt("Qual o valor em dolar que você quer converter?")
var valorEmDolarNumero = parseFloat(valorEmDolarTexto)

var valorEmReal = valorEmDolarNumero * 5.50
var valorEmRealFixado = valorEmReal.toFixed(2)


alert("o valor convertido é \b" + valorEmRealFixado)

// 100 coments
// variáveis var int - float- string- 
// alert - parseInt - parseFloat - prompt 
// operações + somar * multiplicar
// comentário final



// altamente modificável para outras moedas
