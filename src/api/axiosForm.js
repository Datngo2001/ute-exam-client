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
            .get("form/" + formId)
            .then(response => {
                //  console.log(response.data);
                return response.data;
            })
    },
};