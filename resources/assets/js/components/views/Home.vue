<template>
    <diV>
        <h1>Home Page</h1>
        
         <h5 class="modal-title">Jeni said...


         </h5>
              
                    <p>Modal body text goes here.</p>
    </diV>
</template>

<script>
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
    }
}
</script>