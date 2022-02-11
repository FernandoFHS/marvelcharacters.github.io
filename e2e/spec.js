describe('Testes da página inicial', function() {
  it('Verificar titulo da página', function() {
    browser.get('http://localhost:4000');
    expect(browser.getTitle()).toEqual('Personagens Marvel');
  });
});