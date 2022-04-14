const verificarProduto = function (opcao) {
    let: resultado ="<br><h3>Opção selecionado</h3><br><br>"
  switch (opcao) {
    case "hb1":
        resultado += "Hamburguer Simples custa R$ 30,00"
      console.log("Hamburguer Simples custa R$ 30,00");
      break;

    case "hb2":
      resultado += "Hamburguer Duplo custa R$ 45,00 "
      console.log("Hamburguer Duplo custa R$ 45,00 ");
      
      break;

    case "hb3":
      resultado += "Hamburguer Triplo  custa R$ 55,00"
      console.log("Hamburguer Triplo  custa R$ 55,00");
      
      break;

    default:
      console.log("Opção inválida");
      break;
  }
  document.getElementById('resultado').innerHTML = resultado
}
