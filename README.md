<p align="center">
  <a href="https://aluiziodeveloper.com.br/">
    <img alt="Aluizio Developer" src="https://aluiziodeveloper.com.br/assets/img/icon.png" width="200" />
  </a>
</p>
<h2 align="center">
Informação sobre tecnologia, dicas, tutoriais, mini-cursos e muito mais.
</h2>

## Bills API

Implementação de uma API simples (sem considerar arquitetura ou padrão de projeto) que fornece recursos de **Bills** e **Categories**, para  exemplificar a integração do Node.js com MongoDB.

Schema Mongoose de Categories:

```
const Category = new mongoose.Schema({
	name: {
		type: String,
		required: true
	}
});
```

Schema Mongoose de Bills:

```
const Bill = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Category',
		required: true
	},
	cep: {
		type: String
	},
	status: {
		type: Boolean,
		default: false
	},
	date: {
		type: Date,
		default: Date.now 
	}
});
```

### Rodando o projeto em ambiente de desenvolvimento

Faça um clone deste repositório e instale no seu ambiente de desenvolvimento usando o seguinte comando no seu terminal (escolha um diretório apropriado):

> É necessário que você esteja com o [GIT](https://git-scm.com/) instalado na sua máquina.

```
git clone https://github.com/jorgealuizio/exemplo-nodejs-mongodb.git
```

Após clonar o conteúdo do repositório, acesse o diretório criado usando um terminal e efetue a instalação das dependências:

```
npm install
```

Após essa instalação, a aplicação já está disponível para uso, através da url ```http://localhost:3000```. Para executar a aplicação digite:

```
npm start
```


## Redes Sociais

[Site Aluizio Developer](https://aluiziodeveloper.com.br)

[YouTube](https://www.youtube.com/jorgealuizio)

[Servidor no Discord](https://discord.gg/3J87BMz5fD)

[LinkedIn](https://www.linkedin.com/in/jorgealuizio/)
