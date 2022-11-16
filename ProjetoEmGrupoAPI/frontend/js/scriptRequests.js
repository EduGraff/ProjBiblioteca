var url = 'http://localhost:3000/'

function cadastrarCliente(){

    let body =
	{
		'nomeCliente' :         document.getElementById('nomeCliente').value,
		'emailCliente':         document.getElementById('emailCliente').value,
		'telefone1'   :         document.getElementById('tel1Cliente').value,
		'telefone2'   :         document.getElementById('tel2Cliente').value
	};

    fetch(url + "cadastrarClientes",
	{
		'method': 'POST',
		'redirect': 'follow',
		'headers':
		{
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		'body': JSON.stringify(body)
	})
    .then((response) =>
	{
		if(response.ok)
		{
			return response.text()
		}
		else
		{
			return response.text().then((text) =>
			{
				throw new Error(text)
			})
		}
	})
	//trata resposta
	.then((output) =>
	{
		console.log(output)
		alert('Cadastro efetuado! :D')
	})
	//trata erro
	.catch((error) =>
	{
		console.log(error)
		alert('Não foi possível efetuar o cadastro! :(')
	})

}

function atualizarCliente(){

	var idCliente = document.getElementById('id-clienteAtt').value;

	alert(idCliente);

    let body =
	{
		'nomeCliente' :         document.getElementById('nomeAtt').value,
		'emailCliente':         document.getElementById('emailAtt').value,
		'telefone1'   :         document.getElementById('tel1Att').value,
		'telefone2'   :         document.getElementById('tel2Att').value
	};

    fetch(url + "atualizarClientes/" + idCliente,
	{
		'method': 'PUT',
		'redirect': 'follow',
		'headers':
		{
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		'body': JSON.stringify(body)
	})
    .then((response) =>
	{
		if(response.ok)
		{
			return response.text()
		}
		else
		{
			return response.text().then((text) =>
			{
				throw new Error(text)
			})
		}
	})
	//trata resposta
	.then((output) =>
	{
		console.log(output)
		alert('Cliente atualizado efetuado! :D')
	})
	//trata erro
	.catch((error) =>
	{
		console.log(error)
		alert('Não foi possível atualizar o cliente! :(')
	})
    
}

function deletarCliente(){

	var idCliente = document.getElementById('id-clienteDelete').value;

	alert(idCliente);

	let body =
	{
		'idCliente' :         document.getElementById('id-clienteDelete').value
	};

    fetch(url + "deletarCliente/" + idCliente,
	{
		'method': 'DELETE',
		'redirect': 'follow',
		'headers':
		{
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		'body': JSON.stringify(body)
	})
    .then((response) =>
	{
		if(response.ok)
		{
			return response.text()
		}
		else
		{
			return response.text().then((text) =>
			{
				throw new Error(text)
			})
		}
	})
	//trata resposta
	.then((output) =>
	{
		console.log(output)
		alert('Cliente deletado com sucesso! :D')
	})
	//trata erro
	.catch((error) =>
	{
		console.log(error)
		alert('Não foi possível deletar o cliente! :(')
	})
    
}

function listarCliente(){

    fetch(url + 'clientes')
	.then(response => response.json())
	.then((clientes) =>
	{
		//pega div que vai conter a lista de usuarios
		let listaClientes = document.getElementById('lista-clientes')
		
		//limpa div
		while(listaClientes.firstChild)
		{
			listaClientes.removeChild(listaClientes.firstChild)
		}
		
		//preenche div com usuarios recebidos do GET
		for(let cliente of clientes)
		{
			//cria div para as informacoes de um usuario
			let divCliente = document.createElement('div')
			divCliente.setAttribute('class', 'form')

			let divId = document.createElement('input')
			divId.placeholder = 'ID Cliente'
			divId.value = cliente.id
			divCliente.appendChild(divId)
			
			//pega o nome do usuario
			let divNome = document.createElement('input')
			divNome.placeholder = 'Nome Cliente'
			divNome.value = cliente.nomeCliente
			divCliente.appendChild(divNome)
			
			//pega o email do usuario
			let divEmail = document.createElement('input')
			divEmail.placeholder = 'Email'
			divEmail.value = cliente.emailCliente
			divCliente.appendChild(divEmail)
			
			//pega os telefones do usuario
			let divTelefone1 = document.createElement('input')
			divTelefone1.placeholder = 'Telefone 1'
			divTelefone1.value = cliente.telefone1
			divCliente.appendChild(divTelefone1)

            let divTelefone2 = document.createElement('input')
			divTelefone2.placeholder = 'Telefone 2'
			divTelefone2.value = cliente.telefone2
			divCliente.appendChild(divTelefone2)
			
            /*
			//cria o botao para remover o usuario
			let btnRemover = document.createElement('button')
			btnRemover.innerHTML = 'Remover'
			btnRemover.onclick = u => remover(usuario.id)
			btnRemover.style.marginRight = '5px'
			
			//cria o botao para atualizar o usuario
			let btnAtualizar = document.createElement('button')
			btnAtualizar.innerHTML = 'Atualizar'
			btnAtualizar.onclick = u => atualizar(usuario.id, divNome, divEmail, divCpf)
			btnAtualizar.style.marginLeft = '5px'
            
			
			//cria a div com os dois botoes
			let divBotoes = document.createElement('div')
			divBotoes.style.display = 'flex'
			divBotoes.appendChild(btnRemover)
			divBotoes.appendChild(btnAtualizar)
			divUsuario.appendChild(divBotoes)
            */
			
			//insere a div do usuario na div com a lista de usuarios
			listaClientes.appendChild(divCliente)
		}
	})
    
}

//REQUEST LIVROS

function cadastrarLivros(){

    let body =
	{
		'nomeLivro'   :         document.getElementById('nomeLivro').value,
		'autor'       :         document.getElementById('autor').value,
		'quantPaginas':         document.getElementById('quantPaginas').value,
		'editora'     :         document.getElementById('editora').value,
		'edicao'      :         document.getElementById('edicao').value
	};

    fetch(url + "cadastrarLivros",
	{
		'method': 'POST',
		'redirect': 'follow',
		'headers':
		{
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		'body': JSON.stringify(body)
	})
    .then((response) =>
	{
		if(response.ok)
		{
			return response.text()
		}
		else
		{
			return response.text().then((text) =>
			{
				throw new Error(text)
			})
		}
	})
	//trata resposta
	.then((output) =>
	{
		console.log(output)
		alert('Cadastro efetuado! :D')
	})
	//trata erro
	.catch((error) =>
	{
		console.log(error)
		alert('Não foi possível efetuar o cadastro! :(')
	})

}

function atualizarLivros(){

	var idLivro = document.getElementById('id-livroAtt').value;

    let body =
	{
		'nomeLivro'   :         document.getElementById('nomeLivroAtt').value,
		'autor'       :         document.getElementById('autorAtt').value,
		'quantPaginas':         document.getElementById('quantPaginasAtt').value,
		'editora'     :         document.getElementById('editoraAtt').value,
		'edicao'      :         document.getElementById('edicaoAtt').value
	};

    fetch(url + "atualizarLivros/" + idLivro,
	{
		'method': 'PUT',
		'redirect': 'follow',
		'headers':
		{
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		'body': JSON.stringify(body)
	})
    .then((response) =>
	{
		if(response.ok)
		{
			return response.text()
		}
		else
		{
			return response.text().then((text) =>
			{
				throw new Error(text)
			})
		}
	})
	//trata resposta
	.then((output) =>
	{
		console.log(output)
		alert('Livro atualizado efetuado! :D')
	})
	//trata erro
	.catch((error) =>
	{
		console.log(error)
		alert('Não foi possível atualizar o livro! :(')
	})
    
}

function deletarLivros(){

	var idLivro = document.getElementById('id-livroDel').value

	let body =
	{
		'idLivro'   :         document.getElementById('id-livroDel').value
	};

    fetch(url + "deletarLivro/" + idLivro,
	{
		'method': 'DELETE',
		'redirect': 'follow',
		'headers':
		{
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		'body': JSON.stringify(body)
	})
    .then((response) =>
	{
		if(response.ok)
		{
			return response.text()
		}
		else
		{
			return response.text().then((text) =>
			{
				throw new Error(text)
			})
		}
	})
	//trata resposta
	.then((output) =>
	{
		console.log(output)
		alert('Livro deletado com sucesso! :D')
	})
	//trata erro
	.catch((error) =>
	{
		console.log(error)
		alert('Não foi possível deletar o livro! :(')
	})
    
}

function listarLivros(){

    fetch(url + 'livros')
	.then(response => response.json())
	.then((livros) =>
	{
		//pega div que vai conter a lista de usuarios
		let listaLivros = document.getElementById('lista-livros')
		
		//limpa div
		while(listaLivros.firstChild)
		{
			listaLivros.removeChild(listaLivros.firstChild)
		}
		
		//preenche div com usuarios recebidos do GET
		for(let livro of livros)
		{
			//cria div para as informacoes de um usuario
			let divLivros = document.createElement('div')
			divLivros.setAttribute('class', 'form')

			let divId = document.createElement('input')
			divId.placeholder = 'ID Livro'
			divId.value = livro.id
			divLivros.appendChild(divId)
			
			let divNome = document.createElement('input')
			divNome.placeholder = 'Nome'
			divNome.value = livro.nomeLivro
			divLivros.appendChild(divNome)
			
			let divAutor = document.createElement('input')
			divAutor.placeholder = 'Autor'
			divAutor.value = livro.autor
			divLivros.appendChild(divAutor)
			
			let divQuantPgs = document.createElement('input')
			divQuantPgs.placeholder = 'Quantidade páginas'
			divQuantPgs.value = livro.quantPaginas
			divLivros.appendChild(divQuantPgs)

            let divEditora = document.createElement('input')
			divEditora.placeholder = 'Editora'
			divEditora.value = livro.editora
			divLivros.appendChild(divEditora)

            let divEdicao = document.createElement('input')
			divEdicao.placeholder = 'Edicao'
			divEdicao.value = livro.edicao
			divLivros.appendChild(divEdicao)
			
			//insere a div do usuario na div com a lista de usuarios
			listaLivros.appendChild(divLivros)
		}
	})
    
}

//REQUEST EMPRÉSTIMOS

function cadastrarEmprestimos(){

    let body =
	{
		'idCliente'     :         document.getElementById('id-clienteEmp').value,
		'idLivro'       :         document.getElementById('id-livroEmp').value
	};

    fetch(url + "cadastrarEmprestimo",
	{
		'method': 'POST',
		'redirect': 'follow',
		'headers':
		{
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		'body': JSON.stringify(body)
	})
    .then((response) =>
	{
		if(response.ok)
		{
			return response.text()
		}
		else
		{
			return response.text().then((text) =>
			{
				throw new Error(text)
			})
		}
	})
	//trata resposta
	.then((output) =>
	{
		console.log(output)
		alert('Cadastro efetuado! :D')
	})
	//trata erro
	.catch((error) =>
	{
		console.log(error)
		alert('Não foi possível efetuar o cadastro! :(')
	})

}

function atualizarEmprestimos(){

    let body =
	{
		'idCliente'     :         document.getElementById('id-clienteEmpAtt').value,
		'idLivro'       :         document.getElementById('id-livroEmpAtt').value
	};

    fetch(url + "cadastrarEmprestimo",
	{
		'method': 'PUT',
		'redirect': 'follow',
		'headers':
		{
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		'body': JSON.stringify(body)
	})
    .then((response) =>
	{
		if(response.ok)
		{
			return response.text()
		}
		else
		{
			return response.text().then((text) =>
			{
				throw new Error(text)
			})
		}
	})
	//trata resposta
	.then((output) =>
	{
		console.log(output)
		alert('Emprestimo atualizado! :D')
	})
	//trata erro
	.catch((error) =>
	{
		console.log(error)
		alert('Não foi possível atualizar o emprestimo! :(')
	})
    
}

function deletarEmprestimos(){

	var idEmprestimo = document.getElementById('id-emprestimoDel').value;

	let body =
	{
		'idEmprestimo'     :       idEmprestimo
	};

    fetch(url + "deletarEmprestimo/" + idEmprestimo,
	{
		'method': 'DELETE',
		'redirect': 'follow',
		'headers':
		{
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		'body': JSON.stringify(body)
	})
    .then((response) =>
	{
		if(response.ok)
		{
			return response.text()
		}
		else
		{
			return response.text().then((text) =>
			{
				throw new Error(text)
			})
		}
	})
	//trata resposta
	.then((output) =>
	{
		console.log(output)
		alert('Empréstimo deletado com sucesso! :D')
	})
	//trata erro
	.catch((error) =>
	{
		console.log(error)
		alert('Não foi possível deletar o empréstimo! :(')
	})
    
}

function listarEmprestimos(){

    fetch(url + 'emprestimos')
	.then(response => response.json())
	.then((emprestimos) =>
	{
		//pega div que vai conter a lista de usuarios
		let listaEmprestimos = document.getElementById('lista-emprestimos')
		
		//limpa div
		while(listaEmprestimos.firstChild)
		{
			listaEmprestimos.removeChild(listaEmprestimos.firstChild)
		}
		
		//preenche div com usuarios recebidos do GET
		for(let emprestimo of emprestimos)
		{
			//cria div para as informacoes de um usuario
			let divEmprestimos = document.createElement('div')
			divEmprestimos.setAttribute('class', 'form')

            //pega o nome do usuario
			let divIdEmprestimo = document.createElement('input')
			divIdEmprestimo.placeholder = 'ID Empréstimo'
			divIdEmprestimo.value = emprestimo.id
			divEmprestimos.appendChild(divIdEmprestimo)

			let divIdCliente = document.createElement('input')
			divIdCliente.placeholder = 'ID Cliente'
			divIdCliente.value = emprestimo.idCliente
			divEmprestimos.appendChild(divIdCliente)
			
			let divIdLivro = document.createElement('input')
			divIdLivro.placeholder = 'ID Livro'
			divIdLivro.value = emprestimo.idLivro
			divEmprestimos.appendChild(divIdLivro)

			let divDataEmprestimo = document.createElement('input')
			divDataEmprestimo.placeholder = 'Data empréstimo'
			divDataEmprestimo.value = emprestimo.dataEmprestimo
			divEmprestimos.appendChild(divDataEmprestimo)

            let divDataDevolucao = document.createElement('input')
			divDataDevolucao.placeholder = 'Data devolução'
			divDataDevolucao.value = emprestimo.dataDevolucao
			divEmprestimos.appendChild(divDataDevolucao)

            let divStatus = document.createElement('input')
			divStatus.placeholder = 'Status'
			divStatus.value = emprestimo.status
			divEmprestimos.appendChild(divStatus)
			
            /*
			//cria o botao para remover o usuario
			let btnRemover = document.createElement('button')
			btnRemover.innerHTML = 'Remover'
			btnRemover.onclick = u => remover(usuario.id)
			btnRemover.style.marginRight = '5px'
			
			//cria o botao para atualizar o usuario
			let btnAtualizar = document.createElement('button')
			btnAtualizar.innerHTML = 'Atualizar'
			btnAtualizar.onclick = u => atualizar(usuario.id, divNome, divEmail, divCpf)
			btnAtualizar.style.marginLeft = '5px'
            
			
			//cria a div com os dois botoes
			let divBotoes = document.createElement('div')
			divBotoes.style.display = 'flex'
			divBotoes.appendChild(btnRemover)
			divBotoes.appendChild(btnAtualizar)
			divUsuario.appendChild(divBotoes)
            */
			
			//insere a div do usuario na div com a lista de usuarios
			listaEmprestimos.appendChild(divEmprestimos)
		}
	})
    
}