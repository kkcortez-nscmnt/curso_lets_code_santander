import React from 'react';

class App3 extends React.Component{
    constructor(props){
        super(props);
        this.state = {nome: ''}; // declaração de estado
        this.changeName = this.changeName.bind(this);
    }

    changeName = function(event){ // podemos usar a notação de flecha =>{}, evitando a exigencia do bind
        this.setState({nome: event.target.value})
    }
    render(){
        return(
            <>
            Nome: <input type= 'text' value={this.state.nome} onChange={this.changeName}></input>
            <p>
                Olá { this.state.nome}
            </p>
            </>

        );
    }

}

export default App3