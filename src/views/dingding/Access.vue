<template>
  <div class="about">
    <h1>This is a ding page: {{ code }}</h1>
  </div>
</template>
<script>

  export default {
        name: 'ding',
        data() {
            return {
                code: "0",
                
                
            
            }
        },
        mounted() {
          this.code=this.dd;
        

            
        },
        created() {
            // this.getStatisticsDurable();
            // this.getDing();
		},
        methods: {
           
        },
        filters: {
         percentageConversion: function (value) {
           if (!value) return '0'
           return (value*100).toFixed(2).toString()+'%'
  }
}

    }
</script>
