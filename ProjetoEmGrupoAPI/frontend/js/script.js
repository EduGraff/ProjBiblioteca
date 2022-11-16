const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item"))
    .forEach((item, index) => {
        item.onmouseover = () => {
            menu.dataset.activeIndex = index;
        }
    });


function openModalClient(mn) {
    let modal = document.getElementById(mn);

    fechaDivCliente();

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    modal.style.zIndex = 4;
}


function closeModal(mn) {

    fechaDivCliente();
    fechaDivEmprestimo();
    fechaDivLivro();

    let modal = document.getElementById(mn)

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'none';
    modal.style.zIndex = 0;
}


//Abre Forms Clientes

function openFormClienteCad(mn) {

    //fechaDiv();
    fechaDivCliente();

    let contentFormClientCad = document.getElementById(mn);

    if (typeof contentFormClientCad == 'undefined' || contentFormClientCad === null)
        return;

    contentFormClientCad.style.display = contentFormClientCad.style.display === 'none' ? 'block' : 'none';
    contentFormClientCad.style.zIndex = 3;


}

function campoNullCadCliente() {

    nomeCliente = document.getElementById('nomeCliente').value
    emailCliente = document.getElementById('emailCliente').value
    tel1Cliente = document.getElementById('tel1Cliente').value
    

    if (nomeCliente == "" || emailCliente == "" || tel1Cliente == "") {
        window.alert("Falta preencher um ou mais campos!");
    }
    else {
        cadastrarCliente();
    }


}

function campoNullAttCliente() {

    idclienteAtt = document.getElementById('id-clienteAtt').value
    nomeAtt = document.getElementById('nomeAtt').value
    emailAtt = document.getElementById('emailAtt').value
    tel1Att = document.getElementById('tel1Att').value
   

    if (idclienteAtt == "" || nomeAtt == "" || emailAtt == "" || tel1Att == "") {
        window.alert("Falta preencher um ou mais campos!")
    }
    else {
        AtualizarCliente()
    }
}

function campoNullDelCliente() {
    idclienteDelete = document.getElementById('id-clienteDelete')

    if (idclienteDelete == "") {
        window.alert("Falta preencher um ou mais campos!")
    }
    else {
        DeletarCliente()
    }
}

function campoNullCadLivro() {
    nomeLivro = document.getElementById('nomeLivro').value
    autor = document.getElementById('autor').value
    quantPaginas = document.getElementById('quantPaginas').value
    editora = document.getElementById('editora').value
    edicao = document.getElementById('edicao').value


    if (nomeLivro == "" || autor == "" || quantPaginas == "" || editora == "" || edicao == "") {
        window.alert("Falta preencher um ou mais campos!");
    }
    else {
        cadastrarLivros()
    }
}

function campoNullAttLivro() {
    idLivroAtt = document.getElementById('id-livroAtt').value
    nomeLivroAtt = document.getElementById('nomeLivroAtt').value
    autorAtt = document.getElementById('autorAtt').value
    quantPaginasAtt = document.getElementById('quantPaginasAtt').value
    editoraAtt = document.getElementById('editoraAtt').value
    edicaoAtt = document.getElementById('edicaoAtt').value


    if (idLivroAtt == "" || nomeLivroAtt == "" || autorAtt == "" || quantPaginasAtt == "" || editoraAtt == "" || edicaoAtt == "") {
        window.alert("Falta preencher um ou mais campos!");
    }
    else {
        atualizarLivros()
    }
}

function campoNullDelLivro() {
    idLivroDel = document.getElementById('id-livroDel').value

    if (idLivroDel == "") {
        window.alert("Falta preencher um ou mais campos!");
    }
    else {
        deletarLivros()
    }
}

function campoNullCadEmprestimo(){
    idClienteEmp = document.getElementById('id-clienteEmp').value
    idLivroEmp = document.getElementById('id-livroEmp').value

    if (idClienteEmp == "" || idLivroEmp == "") {
        window.alert("Falta preencher um ou mais campos!");
    }
    else {
        cadastrarEmprestimos()
    }   
}

function campoNullAttEmprestimo(){
    idEmprestimoEmpAtt = document.getElementById('id-emprestimoAtt').value
    idClienteEmpAtt = document.getElementById('id-clienteEmpAtt').value
    idLivroEmpAtt = document.getElementById('id-livroEmpAtt').value

    if (idEmprestimoEmpAtt=="" || idClienteEmpAtt == "" || idLivroEmpAtt == "") {
        window.alert("Falta preencher um ou mais campos!");
    }
    else {
        atualizarEmprestimos()
    }   
}



function campoNullDellEmprestimo(){
    idEmprestimoEmpDel = document.getElementById('id-emprestimoDel').value
    
    if (idEmprestimoEmpDel=="") {

        window.alert("Falta preencher um ou mais campos!");
    }
    else {
        deletarEmprestimos()
    }   
}

function openFormClienteAtt(mn) {

    fechaDivCliente();

    let contentFormClientAtt = document.getElementById(mn);

    if (typeof contentFormClientAtt == 'undefined' || contentFormClientAtt === null)
        return;

    contentFormClientAtt.style.display = contentFormClientAtt.style.display === 'none' ? 'block' : 'none';
    contentFormClientAtt.style.zIndex = 3;

}

function openFormClienteRem(mn) {

    fechaDivCliente();

    let contentFormClientRem = document.getElementById(mn);


    if (typeof contentFormClientRem == 'undefined' || contentFormClientRem === null)
        return;

    contentFormClientRem.style.display = contentFormClientRem.style.display === 'none' ? 'block' : 'none';
    contentFormClientRem.style.zIndex = 3;
}

function openFormClienteList(mn) {

    fechaDivCliente();

    let contentFormClientList = document.getElementById(mn);

    if (typeof contentFormClientList == 'undefined' || contentFormClientList === null)
        return;

    contentFormClientList.style.display = contentFormClientList.style.display === 'none' ? 'block' : 'none';
    contentFormClientList.style.zIndex = 3;
}

//Abre Forms Livros

function openFormLivroCad(mn) {

    fechaDivLivro()

    let contentFormLivroCad = document.getElementById(mn);

    if (typeof contentFormLivroCad == 'undefined' || contentFormLivroCad === null)
        return;

    contentFormLivroCad.style.display = 'Block';
    contentFormLivroCad.style.zIndex = 3;
}


function openFormLivroAtt(mn) {

    fechaDivLivro()

    let contentFormLivroAtt = document.getElementById(mn);

    if (typeof contentFormLivroAtt == 'undefined' || contentFormLivroAtt === null)
        return;

    contentFormLivroAtt.style.display = 'Block';
    contentFormLivroAtt.style.zIndex = 3;

}

function openFormLivroRem(mn) {

    fechaDivLivro()

    let contentFormLivroRem = document.getElementById(mn);


    if (typeof contentFormLivroRem == 'undefined' || contentFormLivroRem === null)
        return;

    contentFormLivroRem.style.display = 'Block';
    contentFormLivroRem.style.zIndex = 3;

}

function openFormLivroList(mn) {



    let contentFormLivroList = document.getElementById(mn);

    if (typeof contentFormLivroList == 'undefined' || contentFormLivroList === null)
        return;

    contentFormLivroList.style.display = 'Block';
    contentFormLivroList.style.zIndex = 3;

}

//Abre Forms Emprestimo

function openFormEmprestimoCad(mn) {

    fechaDivEmprestimo()

    let contentFormEmprestimoCad = document.getElementById(mn);

    if (typeof contentFormEmprestimoCad == 'undefined' || contentFormEmprestimoCad === null)
        return;

    contentFormEmprestimoCad.style.display = 'Block';
    contentFormEmprestimoCad.style.zIndex = 3;
}


function openFormEmprestimoAtt(mn) {

    fechaDivEmprestimo()

    let contentFormEmprestimoAtt = document.getElementById(mn);

    if (typeof contentFormEmprestimoAtt == 'undefined' || contentFormEmprestimoAtt === null)
        return;

    contentFormEmprestimoAtt.style.display = 'Block';
    contentFormEmprestimoAtt.style.zIndex = 3;

}

function openFormEmprestimoRem(mn) {

    fechaDivEmprestimo()

    let contentFormEmprestimoRem = document.getElementById(mn);


    if (typeof contentFormEmprestimoRem == 'undefined' || contentFormEmprestimoRem === null)
        return;

    contentFormEmprestimoRem.style.display = 'Block';
    contentFormEmprestimoRem.style.zIndex = 3;

}

function openFormEmprestimoList(mn) {

    fechaDivEmprestimo()

    let contentFormEmprestimoList = document.getElementById(mn);
    let contentFormEmprestimoCad = document.getElementById;

    if (typeof contentFormEmprestimoList == 'undefined' || contentFormEmprestimoList === null)
        return mn, mn1;

    contentFormEmprestimoList.style.display = 'Block';
    contentFormEmprestimoList.style.zIndex = 3;


}


function fechaDivCliente() {

    document.getElementById('cadClient').style.display = "none";
    document.getElementById('attClient').style.display = "none";
    document.getElementById('remClient').style.display = "none";


}

function fechaDivLivro() {

    document.getElementById('cadLivro').style.display = "none";
    document.getElementById('attLivro').style.display = "none";
    document.getElementById('remLivro').style.display = "none";


}

function fechaDivEmprestimo() {

    document.getElementById('cadEmprestimo').style.display = "none";
    document.getElementById('attEmprestimo').style.display = "none";
    document.getElementById('remEmprestimo').style.display = "none";


}