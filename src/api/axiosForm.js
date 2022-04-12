import axios from 'axios';
/* const API_URL = "https://ute-online-exam.herokuapp.com/api"; */
const API_URL="http://localhost:8000/api";
export default {
    createForm(data){
        console.log(data);
        return axios
        .post(API_URL + "/tests", data)
        .then(response =>{
            console.log(response.data); 
            return response.data;
        })
    },
   /*  getForms(userId){
        return axios
        .get(API_URL + "getforms/" +userId)
        .then(response =>{
            return response.data;
        })
    }, */
    getForm(formId){
        return axios
        .get(API_URL + "form/"+formId)
        .then(response =>{
          //  console.log(response.data);
            return response.data;   
        })
    },
    

};