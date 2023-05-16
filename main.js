alert('Hello World!')

let nome = prompt("Qual o seu nome?")
let option;

while(option != 2){
  option = Number(prompt(`
  "Olá" ${nome}! Vamos fazer cálculos matemáticos rápidos?"

  1. Sim
  2. Não
  `))

  switch(option) {
    case 1:
      let firstNumber = prompt("Digite o primeiro número")
      let secondNumber = prompt("Digite o segundo número")
      
      firstNumber = Number(firstNumber)
      secondNumber = Number(secondNumber)

      const sum = firstNumber + secondNumber
      const sub = firstNumber - secondNumber
      const multi = firstNumber * secondNumber
      const div = firstNumber / secondNumber
      const restDiv = firstNumber % secondNumber

      alert("A soma dos dois números é: " + sum)
      alert("A subtração dos dois números é: " + sub)
      alert("A multiplicação dos dois números é: " + multi)
      alert("A divisão dos dois números é: " + div)
      alert("O resto da divisão dos dois números é: " + restDiv)

      if (firstNumber == secondNumber) {
        alert("Os números inseridos para o cálculo são iguais.")
      } else if (firstNumber != secondNumber) {
        alert ("Os números inseridos para o cálculo são diferentes.")
      }
      
      if (sum % 2 === 0) {
        alert("A soma dos dois números é par: " + (firstNumber + secondNumber))
      } else {
        alert("A soma dos dois números é impar: " + (firstNumber + secondNumber))
      }

      if (typeof sum == "número") {
        alert('O valor é do tipo number')
        } else {
          alert('O valor não é do tipo number. Ele é uma string')
      }

      const isBoolean = true
      if (typeof isBoolean == 'boolean') {
        alert('É um booleano')
      } else {
        alert('Não é um booleano')
      }
      break;

    case 2:
      alert("Até mais!")
      break;
      
    default:
      alert("opção inválida! Tente novamente.")
  }
}