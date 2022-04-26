<template>
       <div class="" v-if="nav1">
          <div class="flex gap-4">
              

        <router-link to="/payment_gateways"  class="inline-flex items-center px-8 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Dismiss
        </router-link>
        <button disabled="disabled" class="inline-flex items-center px-8 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Save as Draft
        </button>
          <button type="button" disabled class="inline-flex items-center px-8 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-200 ">
            Submit
          </button>
    </div>
        </div>

        <div class="" v-if="nav2">
          <div class="flex gap-4">
             

       <router-link to="/payment_gateways"  class="inline-flex items-center px-8 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Dismiss
        </router-link>
        <button disabled="disabled" class="inline-flex items-center px-8 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Save as Draft
        </button>
          <button type="button" disabled class="inline-flex items-center px-8 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-200 ">
            Submit
          </button>
    </div>
        </div>

          <div class="" v-if="nav3">
          <div class="flex gap-4">

        <router-link to="/payment_gateways"  class="inline-flex items-center px-8 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Dismiss
        </router-link>
          <button disabled="disabled" class="inline-flex items-center px-8 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Save as Draft
        </button>
          <button type="button" @click="proceed3"  class="inline-flex items-center px-8 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-800 hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Submit
          </button>
    </div>
        </div>


</template>

<script>
import { useRouter } from 'vue-router'
export default {

    data() {
        return {
            nav1: false,
            nav2: false,
            nav3: false,
        }
    },
    methods: {
        proceed1(){
            this.$emit('proceed-next', true)
        },
         proceed2(){
            this.$emit('proceed-next', false)
        },

        proceed3() {
           this.$emit('on-click', {modal: true}) 
        },

        checkRouter (routes) {
            if(routes === '/configure-chargebee-payments' || routes === '/configure-chargebee-payments/'){
            this.nav1 = true;
            this.$store.dispatch('changeStep', {step: 'step1'})
        }else {
            this.nav1 = false
        }

        if(routes === '/operations-ownership' || routes === '/operations-ownership/') {
            this.nav2 = true
              this.$store.dispatch('changeStep', {step: 'step2'})
        }else {
            this.nav2 = false
        }

          if(routes === '/settelment' || routes === '/settelment/') {
            this.nav3 = true
              this.$store.dispatch('changeStep', {step: 'step3'})
        }else {
            this.nav3 = false
        }


        }
    },
       created(){

         
   this.checkRouter(this.$route.path)
 
     
    },
    watch: {
        $route(newRoute) {
            
            this.checkRouter(newRoute.path)

        


        }
    }
}
</script>