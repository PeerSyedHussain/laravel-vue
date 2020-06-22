import Errors from './Error';


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


export default Form;