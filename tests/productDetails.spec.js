const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails).toBe('function');
  });
  it('Verifica se é um array e se tem dois itens e seus tipos', ()=>{
    const test = productDetails('Alcool gel', 'Máscara');
    expect(Array.isArray(test)).toBe(true);
    expect(test.length).toBe(2);
    expect(typeof test[0]).toBe('object');
    expect(typeof test[1]).toBe('object');
  })
  it('Verifica se os objetos são diferentes', ()=>{
    const test = productDetails('Alcool gel', 'Máscara');
    expect(test[0]).not.toBe(test[1]);
    const test1 = productDetails('Alquingel', 'Mascra');
    expect(test1[0]).not.toBe(test1[1]);
    const test2 = productDetails('Vacina', 'Sabão');
    expect(test2[0]).not.toBe(test2[1]);
  })
  it('Verifica se os productIds terminam com 123',()=>{
    const test = productDetails('Alcool gel', 'Máscara');
    const ids1 = test[0].details.productId;
    const sliced1 = ids1.slice(-3);
    expect(sliced1).toBe('123')
    const ids2 = test[1].details.productId;
    const sliced2 = ids2.slice(-3);
    expect(sliced2).toBe('123')
  })
    
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    // Teste se o retorno da função é um array.
    // Teste se o array retornado pela função contém dois itens dentro.
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    // Teste se os dois productIds terminam com 123.
  
});
