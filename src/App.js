import React, { Component } from 'react';
import './App.css';

class App extends Component {

    constructor(){
        super();
        this.state = {
            correo : "",
            pass : "",
            isLogged : false
        };
        this.handleChangeCorreo = this.handleChangeCorreo.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.LogIn = this.LogIn.bind(this);
        this.LogOut = this.LogOut.bind(this);
    }

    handleChangeCorreo(event){
        this.setState({
            correo : event.target.value
        });
    }

    handleChangePass(event){
        this.setState({
            pass : event.target.value
        });
    }

    LogIn(){
        if(this.state.correo==="admin" && this.state.pass==="admin"){
            this.setState({
                isLogged : true
            });
        }
    }

    LogOut(){
        this.setState({
            isLogged : false
        })
    }

    abrirPagFederacion(url) {
        window.open("http://www.fntmmsp.com/", '_blank');
    }

    render() {
        return (
            <div className="App">
                <div className="container-fluid">
                    <div className="row ParteSuperior">
                        <div onClick={this.abrirPagFederacion} className="col-2 ParteLogo">
                            <label><b>FNTMMSP</b></label>
                        </div>
                        <div className="col-10 centrar">
                            {this.state.isLogged?
                                (
                                    <div className="row">
                                        <div className="col">
                                            <div className="row">
                                                <div className="col-7">
                                                    <div className="input-group mb-3">
                                                        <input placeholder="Escriba lo quiera buscar . . ." className="form-control" type="text" id="inputBuscador"/>
                                                        <div className="input-group-append">
                                                            <span className="input-group-text"><b>Buscar</b></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-4"></div>
                                                <div className="col-1">
                                                    <button className="btn-salir" onClick={this.LogOut}><b>Salir</b></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                ):(
                                    <div className="row">
                                        <div className="col">
                                            <div className="row">
                                                <div className="col-6"></div>
                                                <div className="col-6">
                                                    <div className="row">
                                                        <div className="col-2"></div>
                                                        <div className="col-8">
                                                            <div className="input-group">
                                                                <input type="email" value={this.state.correo} onChange={this.handleChangeCorreo} className="form-control" placeholder="Ingrese usuario o correo"/>
                                                                <input type="password" value={this.state.pass} onChange={this.handleChangePass} className="form-control" placeholder="Ingrese contraseña..."/>
                                                            </div>
                                                        </div>
                                                        <div className="col-2">
                                                            <button className="btn-entrar" onClick={this.LogIn}><b>Ingresar</b></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    {this.state.isLogged?
                        (
                            <div className="row">
                                <div className="col-md-2 ParteIzquierda">
                                    <div className="col">

                                    </div>
                                </div>
                                <div className="col-md-10 PartePrincipal">

                                </div>
                            </div>
                        ):(
                            <div className="row PartePrincipal">

                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default App;
