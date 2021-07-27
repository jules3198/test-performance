import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8082/api/postal_code';

class  UserService {
    getData(){
    return new Promise((resolve, reject) => {
        const myInit = {
            method: 'GET',
            headers: authHeader()
        };

        const myRequest = new Request(API_URL+'/all', myInit);

        fetch(myRequest)
        .then((response => response.json()))
        .then((data) => {
            resolve(data)
        })
        .catch(function(e){
            console.log(e);
            reject([]);
        });
    })
    }


    postData(data) {  
        const myInit = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: authHeader()
        };
        const myRequest = new Request(API_URL+'/new', myInit);
        return new Promise((resolve,reject) => {
            fetch(myRequest)
            .then((response => response.json()))
            .then((data) => {
                resolve(data)
            })
            .catch(function(e){
                console.log(e);
                reject([]);
            });

        })
    }

    deleteData(id) {
        const myInit = {
            method: 'DELETE',
            headers: authHeader
        };
        const myRequest = new Request(API_URL+'/'+id, myInit);
        return new Promise((resolve,reject) => {
            fetch(myRequest)
            .then((response => response.json()))
            .then((data) => {
                resolve(data)
            })
            .catch(function(e){
                console.log(e);
                reject([]);
            });

        })
    }
}
export default  new UserService();