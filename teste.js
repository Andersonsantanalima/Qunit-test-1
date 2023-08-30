QUnit.test("teste com autocomplete",function(assert){
    assert.ok(true,"teste ok")
})

QUnit.test("area de funcao",function(assert){
    assert.ok(true,"teste ok")
    document.writeln("A area do círculo de raio " + raio + " é igual a " + area);
})
  // efetua a leitura do raio
  var raio = parseFloat(window.prompt("Informe o raio do círculo:"));
  // calcula a área
  var area = Math.PI * Math.pow(raio, 2);
  // mostra o resultado
  document.writeln("A area do círculo de raio " +
    raio + " é igual a " + area);