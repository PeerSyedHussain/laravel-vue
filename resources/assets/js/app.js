import Vue from 'vue';
import axios from 'axios';
import Form from './core/Form';
import Example from './components/Example';
import Notification from './components/Notification.vue'

window.axios = axios;                                       //global declaration for using in various files,to avoid import in all files

window.Form = Form;                                         //global declaration for using in various files,to avoid import in all files

new Vue({
    el : '#app',

    components : {
        Example,Notification
    },

    data : {
        skills : [],
        form : new Form({                                   //created a new form instance class with passing form data...
            name : '',
            description : '',
        })
    },
    mounted(){
        
    },

    methods: {
        onSubmit(){                                         //when the user clicks the submit btn,it calls this function ...
            this.form.post('/project')                      //here,it calls the form class inside post or get or Delete or put method with the respective url...
                .then((message) => {                        //it calls from the form submit return fun has only "success"
                    console.log(message)                    //to show the success message to the user
                })
                .catch((error) => {                         //it calls from the form submit return fun has only "errors"
                    console.log(error)                      //to show the error message to the user
                })
        },
    }
})