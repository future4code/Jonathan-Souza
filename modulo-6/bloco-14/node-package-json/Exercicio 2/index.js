// Exercicio 2

switch(process.argv[2]){
	case "add":
		const soma = parseInt(process.argv[3]) + parseInt(process.argv[4])
        console.log(soma);
		break;
	case "sub":
		const subtracao = parseInt(process.argv[3]) - parseInt(process.argv[4])
        console.log(subtracao);
		break;
	case "mult":
		const multiplica = parseInt(process.argv[3]) * parseInt(process.argv[4])
        console.log(multiplica);
		break;
	case "div":
		const divisao = parseInt(process.argv[3]) / parseInt(process.argv[4])
        console.log(divisao);
		break;
}
