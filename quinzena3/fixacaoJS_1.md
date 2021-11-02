```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 const bonusPorCarro = qtdeCarrosVendidos * 100
 const porcentagemDaVenda = valorTotalVendas * 0.05
 const salarioDoFuncinario = 2000 + bonusPorCarro + porcentagemDaVenda
 return salarioDoFuncinario
}
```