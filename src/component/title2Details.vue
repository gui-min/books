<template>
    <main>
        <span>title2</span>
    </main>
</template>

<script>
    export default{
        data(){
            return {
                list: ""
            }
        },
        mounted(){
            if(this.$route.params.n == 0){
                // this.$http.get("./data/my.json")
                // .then((response)=>{
                //     console.log(response)
                //     this.list=response.data.img 
                // })
            }else if(this.$route.params.n == 1){

            }else if(this.$route.params.n == 2){

            }else{

            }     
        }
    }

    
</script>