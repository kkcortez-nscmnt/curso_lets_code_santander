const agenda ={
    contatos : [
        {nome: 'contato1', telefone :'telefone1', email : 'email1',},
        {nome: 'contato2', telefone :'telefone2', email : 'email2',},
        {nome: 'contato3', telefone :'telefone3', email : 'email3',},
        {nome: 'contato4', telefone :'telefone4', email : 'email4',},
    ],
    adicionar : function(contato){this.contatos.push(contato)}
}

console.log(agenda.contatos);