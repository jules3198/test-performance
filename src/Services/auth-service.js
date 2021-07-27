import axios from "axios";
const API_URL = "http://localhost:8082/users/";

class  AuthService {

    login(email,password) {
        return new Promise((resolve,reject) => {
            axios.post(API_URL+"connexion",{
                email:email,
                password: password
            }).then(function (response){
                if(response.data) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                resolve(response.data);
            }).catch(err => {
                reject(err)
            })
        })
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(email,password,) {
        return new Promise((resolve,reject) => {
            axios.post(API_URL+"register",{
                email,
                password,
                roles: ["ROLE_USER"]
            }).then(function (response){
                resolve(response.data);
            }).catch( err => {
                reject(err);
            }) 
        })
    }

    getCurrentUser(){
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();