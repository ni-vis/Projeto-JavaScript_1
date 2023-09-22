function calc_horas_extras() {
  let bruto = Number(document.getElementById("bruto").value)
  let uteis = Number(document.getElementById("uteis").value)
  let finais = Number(document.getElementById("finais").value)

  // hora trabalhada
  let valor_hora = bruto / 200
  // horas extras normais
  let total_uteis = valor_hora * uteis
  // horas extras aos finais de semana com acréscimo de 50%
  let total_finais = valor_hora * finais * 1.5
  // valor total a receber 
  let valorTotal = total_uteis + total_finais
  
  document.getElementById("resposta").innerHTML = `
    <p>Valor de horas trabalhadas: R$ ${valor_hora.toFixed(2)}</p>
    <p>Valor por quantidade de horas extras em dias uteis: R$ ${total_uteis.toFixed(2)}</p>
    <p>Valor por quantidade de horas extras em finais de semana: R$ ${total_finais.toFixed(2)}</p>
    <p>Valor total a receber: R$ ${valorTotal.toFixed(2)}</p>
  `
}
function aumento_salario() {
  let salario_atual = Number(document.getElementById("salario_atual").value);
  let resposta = document.getElementById("resposta");
  let novo_salario;

  if (salario_atual <= 1200) {
    var aumento = salario_atual * 0.16; // Aumento de 16%
    novo_salario = salario_atual * 1.16;
    resposta.innerHTML = `<p>Valor do aumento: R$ ${aumento.toFixed(2)}</p>
    <p>Valor do novo salário: R$ ${novo_salario.toFixed(2)}</p>`
  } else if (salario_atual <= 2100) {
    novo_salario = salario_atual * 1.13; // Aumento de 13%
    resposta.innerHTML = `<p>Valor do aumento: R$ ${(novo_salario - salario_atual).toFixed(2)}</p>
    <p>Valor do novo salário: R$ ${novo_salario.toFixed(2)}</p>`
  } else if (salario_atual <= 3000) {
    novo_salario = salario_atual * 1.10; // Aumento de 10%
    resposta.innerHTML = `<p>Valor do aumento: R$ ${(novo_salario - salario_atual).toFixed(2)}</p>
    <p>Valor do novo salário: R$ ${novo_salario.toFixed(2)}</p>`
  } else {
    novo_salario = salario_atual * 1.05; // Aumento de 5%
    resposta.innerHTML = `<p>Valor do aumento: R$ ${(novo_salario - salario_atual).toFixed(2)}</p>
    <p>Valor do novo salário: R$ ${novo_salario.toFixed(2)}</p>`;
  }
}
function transporte() {
  var funcionarios = Number(document.getElementById("funcionarios").value);
  var dias = Number(document.getElementById("dias").value);
  var custo_mensal;
  var valor_dias;
  var resposta = document.getElementById("resposta"); // Defina a variável resposta aqui

  if (dias <= 0 || funcionarios <= 0) {
    alert(`O número de pessoas e dias deve ser maior que 0 (ZERO)`)
  } else if (funcionarios <= 50) {
    valor_dias = funcionarios * 4.50; // 0 a 49 pessoas
    custo_mensal = valor_dias * dias
    resposta.innerHTML = `<p> O valor do transporte para ${funcionarios} pessoa(s) por ${dias} dia(s) será de: R$ ${custo_mensal.toFixed(2)}</p>`
  } else if (funcionarios <= 100) {
    valor_dias = funcionarios * 4.10; // 50 a 99 pessoas
    custo_mensal = valor_dias * dias
    resposta.innerHTML = `<p> O valor do transporte para ${funcionarios} pessoa(s) por ${dias} dia(s) será de: R$ ${custo_mensal.toFixed(2)}</p>`
  } else if (funcionarios <= 150) {
    valor_dias = funcionarios * 3.80; // 100 a 149 pessoas
    custo_mensal = valor_dias * dias
    resposta.innerHTML = `<p> O valor do transporte para ${funcionarios} pessoa(s) por ${dias} dia(s) será de: R$ ${custo_mensal.toFixed(2)}</p>`
  } else {
    valor_dias = funcionarios * 3.60; // 150 a +
    custo_mensal = valor_dias * dias
    resposta.innerHTML = `<p> O valor do transporte para ${funcionarios} pessoa(s) por ${dias} dia(s) será de: R$ ${custo_mensal.toFixed(2)}</p>`
  }
}
function horas() {
  var horario = document.getElementById("horario");

  var dataAtual = new Date();
  var data = dataAtual.toLocaleDateString()
  var hora = dataAtual.toLocaleTimeString()
  
  horario.innerText = `Data: ${data} - Hora: ${hora}` 

}
horas()
setInterval(horas,1000)
