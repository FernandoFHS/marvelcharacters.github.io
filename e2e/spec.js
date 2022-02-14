describe('Testes da página de busca', function() {
  it('Acessando a página', function() {
    browser.get('http://localhost:4000');
  });
  it('Verificação do titulo da página', function() {
    expect(browser.getTitle()).toEqual('Personagens Marvel');
  });
});