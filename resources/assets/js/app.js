import Vue from 'vue';
import axios from 'axios';
import Form from './core/Form';
import Example from './components/Example';
import Notification from './components/Notification.vue'
import Coupon from './components/Coupon.vue';

window.axios = axios;                                       //global declaration for using in various files,to avoid import in all files

window.Form = Form;                                         //global declaration for using in various files,to avoid import in all files

let restore = {                                     // we can use this as global store variables or we can use any modules or any (continue on next line)
                                                            // components then import it and use here...this is used for "shared state 1-1"
    user : {
        name : 'niki',
    }
}

new Vue({
    el : '#app',

    components : {
        Example,Notification,Coupon
    },

    data : {
        skills : [],
        form : new Form({                                   //created a new form instance class with passing form data...
            name : '',
            description : '',
        }),
        foo : 'bar',                                        //for 24th episode this is declared as unique object data as foo    [it cannot share data]
        restore,                                 //for 24th episode this is declared as same object data as store_user_name [it can share data]
        // store_user_name,
        coupon :   'HSJS123'                              //for 24th episode this is declared as same object data as store_user_name [it can share data]
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

new Vue({
    el : '#dummy',

    data: {
        foo : 'otherbar',                                   //for 24th episode this is declared as unique object data as foo    [it cannot share data]
        restore                                     //for 24th episode this is declared as same object data as store_user_name [it can share data]
    }
})
