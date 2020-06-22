class Errors {
    constructor(){
        this.errors = { };
    }

    has(field){
        // console.log(field)
        if(this.errors.hasOwnProperty('errors')){
            if(this.errors.errors.hasOwnProperty(field)){
                return this.errors.errors[field]
            }
        }
    }
    get(field){
        // console.log('get',this.errors.hasOwnProperty('errors'));
        // console.log('field',field)
        if(this.errors.hasOwnProperty('errors')){
            // console.log(this.errors.errors[field][0])
            // return this.errors.errors[field][0]
            if(this.errors.errors.hasOwnProperty(field)){
                return this.errors.errors[field][0]
            }
        }
    }
    any(){
    //    console.log(this.errors)
        if(this.errors.hasOwnProperty('errors')){
            // console.log(Object.keys(this.errors.errors).length)
            return Object.keys(this.errors.errors).length > 0
        }
    }

    record(errors){                                         //it receives the errors as params...
        this.errors = errors;                               //it records the errors inside the errors object...
    }

    clear(field){                                           //it receives the field as form fields...
        // console.log('check',this.errors.hasOwnProperty('errors'))
        if(this.errors.hasOwnProperty('errors')){           // if errors,has the errors object then it allows...
            // console.log('1',this.errors.errors)
            delete this.errors.errors[field]                //delete the particular field value within the errors object...

            return ;                                        //return the fun...
            // console.log(this.errors)
        }

        this.errors = {}                                    //it makes the error to empty object...
    }
}

class Form {

    constructor(data){                                      // it receives the data as form data details from the form instance...

        // console.log('data',data)

        this.originalData = data                            //assign a local variable with form data...

        for(let field in data){                             //for loop with field as varibles in data 

            this[field] = data[field]                       //assign this.name = data.name

        }
        
        this.errors = new Errors()                          //creates the new Errors instance inside the form...
    }

    reset(){                                                //here the form complete reset fun...

        for(let field in this.originalData){                // for loop with field as variable in this.originalData coming from form construcor method...
            
            this[field] = ''                                //it sets the fiels to null or ''...

        }

        this.errors.clear();                                //it calls the errors class inside clear fun to clear all the errors...

    }

    data(){                                                 //it calls from submit return fun...

        let data = {}                                       //assign empty object

        for(let field in this.originalData){                // for loop with field as variable in this.originalData coming from form construcor method...
            data[field] = this[field]                       //data[name] = this[name]
        }

        return data;                                        //return data object...
    }

    post(url){                                              //it calls from submit fun,simply like post,delete,get,put anything with url...
        return this.submit('post',url)                      //returns the submit fun within the form class,with the parameter of requestType and url...
    }

    delete(url){                                            //call simply like post,delete,get,put anything with url
        return this.submit('DELETE',url)                    //returns the submit fun within the form class,with the parameter of requestType and url...
    }


    submit(requestType,URL){                                //here it receives type & url...
        return new Promise((resolve,reject) => {            //it returns the Promise function with 2Params like resolve and reject...

            axios[requestType](URL,this.data())             //here axios with type & url,with passing the form data..
            .then((response) => {                           //it calls when success with receiving the response as params... 
                this.onSuccess(response.data)               //then,it calls the onSuccess fun with passing the params of response.data...

                resolve(response.data)                      //then,after reset fun,it calls the resolve method with passing params of response.data...
            })
            .catch((error) => {                             //it calls when error with receiving the error as params... 
                this.onFail(error.response.data)            //then,it calls the onFail fun with passing the params of error.response.data...

                reject(error.response.data)                 //then,after onFail fun,it calls the reject method with passing params of error.response.data...
            })

        });

    }

    onSuccess(data){                                        //it receives the data as params...
        this.reset();                                       //this reset the form...
    }

    onFail(errors){                                         //it receives the error as params...
        this.errors.record(errors)                          //this calls the error class inside record fun with passing errors as params..
    }
}



new Vue({
    el : '#app',

    data : {
        skills : [],
        form : new Form({                                   //created a new form instance class with passing form data...
            name : '',
            description : '',
        })
    },
    mounted(){
        axios.get('/skills').then(function(response){
            // console.log(response.data);

            this.skills = response.data;
            // console.log(this.skills)
        })
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