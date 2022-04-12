<template>
           <div >
           
               <benefitary-list v-for="benefitiarie in benefitiaries" :key="benefitiarie.id" 
                :details="benefitiarie"
               ></benefitary-list>
         </div>
</template>

<script>
import BenefitaryList from "./BenefitaryList.vue"
    export default {
        components: {
            BenefitaryList
        },
        computed: {
              benefitiaries() {
        return this.$store.getters['beneDetails/benefitiaryDetails']
      }
        },
        created() {
            console.log("asd")
            console.dir(this.$store.getters['beneDetails/benefitiaryDetails'])
        }
    }
</script>