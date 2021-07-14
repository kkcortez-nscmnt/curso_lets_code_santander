import React from 'react';

class App4 extends React.Component{
    constructor(props){
        super(props);
        this.state = {nome:undefined, txtNome:''}; // declaração de estado
        //this.changeName = this.changeName.bind(this);
    }

    changetxtName = (event)=>{ // podemos usar a notação de flecha =>{}, evitando a exigencia do bind
        this.setState({txtNome: event.target.value})
    }

    persistName =() =>{
        this.setState({nome: this.state.txtNome});
    }

    render(){
        if(!this.state.nome){
            return (
                <>
                Nome: <input type= 'text' value={this.state.nome} onChange={this.changetxtName}></input>
                <button onClick ={this.persistName}>Salvar</button>
                </>
            );
        }
        {
            return(
                <>
                
                <p>
                    Olá { this.state.nome}
                </p>
                </>
    
            );
        }
        
    }

}

export default App4