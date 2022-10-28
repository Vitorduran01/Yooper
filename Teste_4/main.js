const produtos = [
  {
     "id":1,
     "name":"Jaleco",
     "description":"Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
     "price":"R$ 801,10",
     "available":true
  },
  {
     "id":2,
     "name":"Avental",
     "description":"Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
     "price":"R$ 50,01",
     "available":false
  },
  {
     "id":3,
     "name":"Touca",
     "description":"Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
     "price":"R$ 30,50",
     "available":true
  },
  {
     "id":4,
     "name":"Fronha",
     "description":"Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
     "price":"R$ 200,10",
     "available":true
  },
  {
     "id":5,
     "name":"Embalagem",
     "description":"Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
     "price":"R$ 63,90",
     "available":true
  },
  {
     "id":6,
     "name":"Porta talher",
     "description":"Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
     "price":"R$ 20,50",
     "available":true
  },
  {
     "id":7,
     "name":"Porta absorvente",
     "description":"Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
     "price":"R$ 380,20",
     "available":true
  }
]

const valor = document.querySelector('#valor')
const prod = document.querySelector('#quan_prod')
const ids = document.querySelector('#ids')
let valor_final = 0
let array_id = []

produtos.map((elem)=> {
  array_id.push(elem.id)
  const valor_formato = elem.price.replace('R$','').trim().replace(',', '.')
  valor_final += Number(valor_formato)
})

  let valor_format = Number(valor_final).toLocaleString('pt-br', {minimumFractionDigits: 2});

  ids.append(`Ids dos produtos:[ ${array_id} ]`)  
  valor.append(`Valor total: R$ ${valor_format}`)
  prod.append(`Quantidade: ${produtos.length} produtos` )