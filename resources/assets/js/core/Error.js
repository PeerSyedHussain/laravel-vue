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

export default Errors;