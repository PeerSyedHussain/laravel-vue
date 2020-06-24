<template>
    <diV>
        <h1>Home Page</h1>
        
            <!-- <div class='box' v-bind:key="status" v-for="status in statuses"> -->
            <div class='box' v-for="status in statuses">
                <h5 class="modal-title">{{status.user.name}}said...
                    <p>{{ status.created_at | ago | capitalize}}</p>
                </h5>
                <p>{{status.status }}</p>
            </div>
    
    </diV>
</template>

<script>
import moment from 'moment';

export default {
    data(){
        return{
            statuses : []
        }
    },
    created(){
        axios.get('/statuses')
            .then(({data}) => this.statuses = data)
        console.log('component loaded successfully')
    },
    methods : {
        postedOn(status){
            return moment(status.created_at).fromNow();
        }
    },
    filters : {
        ago(date){
             return moment(date).fromNow();
        },
        capitalize(value){
            // console.log(value)
            return value.toUpperCase()
        }
    }
}
</script>


<style lang="scss">
    .box{
        max-width:200px;
        border:1px solid #000;
        padding: 15px;
    }
</style>