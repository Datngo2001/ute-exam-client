import axiosClient from './_axiosClient';

export default {
    createForm(data) {
        console.log(data);
        return axiosClient
            .post("tests", data)
            .then(response => {
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
    getForm(formId) {
        return axiosClient
            .get("tests/" + formId)
            .then(response => {
                //  console.log(response.data);
                return response.data;
            })
    },
    submitResponse(data){
      /*   console.log(data);
        return axios
        .post(API_URL + "submit", data)
        .then(response =>{
            console.log(response.data); 
            return response.data;
        }) */
    },
};