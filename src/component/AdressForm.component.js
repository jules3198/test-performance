import React, {Component} from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import  UserService from "../Services/user-service";


const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};


class NewAdressComponent extends  Component{


    constructor(props) {
        super(props);
        this.state= {
            code_postal: '',
            nom_commune: ''
        }
        
    }

    onChangeNameCommune(e) {
        this.setState({
            nom_commune: e.target.value
        });
    }

    onChangeCodePostal(e) {
        this.setState({
            code_postal: e.target.value
        });
    }


    async handleSubmit(e) {
        e.preventDefault();
        this.form.validateAll();
        if (this.checkBtn.context._errors.length === 0) {
            let response = await UserService.postData(this.state);
            console.log(response)
        }

    }

    render() {
        return (
            <div className="container-fluid" style={{ padding: "5rem" }}>
                <div className="row">
                    <div className="col-md-12">
                          <Form
                    onSubmit={(e)=>{this.handleSubmit(e)}}
                    ref={c => {
                        this.form = c;
                    }}
                >
                    {!this.state.successful && (
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                    <label style={{ float: "left"}} htmlFor="nom_commune">Nom commune</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="nom_commune"
                                        value={this.state.nom_commune}
                                        onChange={(e)=>{this.onChangeNameCommune(e)}}
                                        validations={[required]}
                                    />
                                    </div>

                                    <div className="form-group">
                                        <label style={{ float: "left"}} htmlFor="code_postal">Code postal</label>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            name="code_postal"
                                            value={this.state.code_postal}
                                            onChange={(e)=>{this.onChangeCodePostal(e)}}
                                            validations={[required]}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <button className="btn btn-primary btn-block">Ajouter nouvelle adresse</button>
                            </div>
                        </div>
                    )}

                    {this.state.message && (
                        <div className="form-group">
                            <div
                                className={
                                    this.state.successful
                                        ? "alert alert-success"
                                        : "alert alert-danger"
                                }
                                role="alert"
                            >
                                {this.state.message}
                            </div>
                        </div>
                    )}
                    <CheckButton
                        style={{ display: "none" }}
                        ref={c => {
                            this.checkBtn = c;
                        }}
                    />
                </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export  default  NewAdressComponent;