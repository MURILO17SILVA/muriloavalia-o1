import {Matematica} from "./Matematica"

describe('Testa as fucionalidade de matematica',()=>{

    test('Deve criar um numero de produtos',() =>{
        const consultar = new Matematica()
        expect(consultar.produtos)
        expect(consultar.numero)
      } )
     
      test('Deve criar numero de produtos especificados', ()=>{
        const numero=''
        const produtos=''
        const consultar= new Matematica()
     })
   
     test('Deve criar deltaBhaskara', ()=>{
      const deltaBhaskara= new Matematica()
     })

     test('Deve criar fatorial', ()=>{
        const fatorial= new Matematica()
     })

     test('Deve criar ehPrimo', ()=>{
        const ehPrimo= new Matematica()
        
    })
})
