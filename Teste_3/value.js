const valor = document.querySelector('#input_value').value

const valor_final = valor.replace('R$','').trim().replace(',','.')

console.log(valor_final)

