import React, {Component} from 'react';
import  UserService from "../Services/user-service";
import Modal from "./modal/Modal";
class AdressListComponent extends  Component{


    constructor(props) {
        super(props);
        this.state = {
            nom_commune: "",
            code_postal: "",
            data: [],
            isOpen: false
        }
    }

    async componentDidMount() {
        let data = await UserService.getData();
        this.setState({data : data})
      }
    async onDelete(id) {
        alert(id)
        let response = await UserService.deleteData(id);
        await this.componentDidMount();
    }  

      renderTableData() {
        return this.state.data.map((music) => {
           const { id, nom_commune , code_postal } = music //destructuring
           return (
            <tr key={id}>
                <td>{nom_commune}</td>
                <td>{code_postal}</td>
                <td> 
                    <button onClick={(e)=>{this.onDelete(id)}}>X</button>
                </td>
           </tr>
           )
        })
     }
        render()
        {
            const state = {
                nom_commune: "",
                code_postal: ""
            }
            return (
                <div className="card card-container" style={{ padding: "5rem" }}>
                    <button className="btn btn-primary" onClick={()=> {this.setState({isOpen : true});}} style={{ marginBottom: "3rem", width: "200px"}}>nouvelle adresse</button>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>Nom commune</th>
                            <th>Code postal</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                            this.renderTableData()
                           }
                        </tbody>
                    </table>

                    <Modal state={state} title="Nouvelle Adresse" show={this.state.isOpen} disabled={()=> {this.setState({isOpen: false})}} />
                </div>
            )
        }
    }

    export default AdressListComponent;




















