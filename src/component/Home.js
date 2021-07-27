import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import LoginComponent from "./Login.component";
import RegisterComponent from "./Register.component";
import AdressListComponent from './AdressList.component';
import authService from '../Services/auth-service';

class Home extends Component {


    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

     disconnect () {
        authService.logout();
        this.setState({redirect: true})
    }

    render() {
       
         if (this.state.redirect === true) {
            return <Redirect to='/' />
          }
        return (
            <div className="container-fluid">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-12">
                            <div style={{ float: 'right'}}>
                                <button onClick={() => { this.disconnect() }}>Se déconnecter</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div style={{float: "left"}}>
                            <h1> Liste des compsant</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: '3rem'}}>
                        <div className="col-md-12">
                            <AdressListComponent />
                        </div>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>                 
                
        )
    }
}
export default Home;
