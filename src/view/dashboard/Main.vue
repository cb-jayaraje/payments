<template>
    
           <div class="max-w-[99%] mx-auto  sm:px-6  ">

             
             <CbReview v-if="cbStatus == 'review' " />
            

             <!-- success -->
                   <!-- configure -->
               <div v-if="cbStatus == 'configure' " class="bg-white px-4 rounded-md shadow-md py-3 flex mt-6 justify-between" >
                  
                   <div class="flex items-center gap-x-4">
                       <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 8C0 3.58172 3.58172 0 8 0H32C36.4183 0 40 3.58172 40 8V32C40 36.4183 36.4183 40 32 40H8C3.58172 40 0 36.4183 0 32V8Z" fill="#4E0EA6"/>
<path d="M19 13.8822V27.2402C19 28.2121 18.2121 29 17.2402 29C16.4965 29 15.833 28.5325 15.5829 27.8321L13.4365 21.6829M26 21C27.6569 21 29 19.6569 29 18C29 16.3431 27.6569 15 26 15M13.4365 21.6829C12.0043 21.0741 11 19.6543 11 18C11 15.7909 12.7909 14 15 14H16.8321C20.9327 14 24.4569 12.7659 26 11L26 25C24.4569 23.2341 20.9327 22 16.8321 22L15 22C14.4452 22 13.9168 21.887 13.4365 21.6829Z" stroke="#F9F4FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<div class="flex items-end gap-x-1">
  <div class="space-y-1">
    <p class="text-gray-800">Introducing Changebee Payments  🎉</p>
        <p class="text-xs text-gray-500">The embedded payments solution you can trust. Plus, it’s easy and quick to set up. <a href="#" class="text-blue-400">Learn more</a></p>

  </div>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
</svg>
</div>
                   </div>
                   
  <div class="flex gap-x-4  ">
    <button class="bg-purple-50 rounded-md text-purple-700 px-4 py-2 text-sm">Try Later</button>
    <button @click="configureNow"  class="btn-outline px-4 py-2 text-sm bg-[#6200EA] text-white hover:bg-purple-900 c">Configure now</button>
  </div>

               </div>
                  <!-- configure -->
             
             
                  
             <div v-if="cbStatus == 'success' "  class="alert bg-green-100 border border-green-400 text-green-700 mt-8">
<div class="flex">
<div class="flex-shrink-0">
 <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
</svg>
</div>
<div class="ml-3 flex-1 md:flex md:justify-between">
 <p class="description-only ">Chargebee Payments is Live! You are ready to start accepting payments </p>
 <p class="mt-3 description-only md:mt-0 md:ml-6">
   <a @click="$router.push('/configure-gateway')" class="alert-a cursor-pointer hover:underline hover:text-green-600">Payments Dashboard <span aria-hidden="true">&rarr;</span></a>
 </p>
</div>
</div>
</div>
           
                
             <!-- success -->
          

            
                  

            <h1 class="text-2xl font-semibold text-gray-900 "></h1>
            <section class="text-gray-600 body-font pt-10">
                <img class="w-full" src="./../../assets/images/main.png" alt="">
            </section>
            
            <div class=" relative hidden">

            <!--dashboard-top starts-->
            <div class="pb-2  sm:flex sm:items-center sm:justify-between relative ">

               
                
               
                <!--show dashboard div starts-->
            

                  <!--show dashboard div ends-->
      
                <div class="mt-3 flex sm:mt-0 sm:ml-4">
      
      
                    
                
              </div>
            <!--dashboard-top ends-->

        </div>
            
          </div>
         
        </div>
</template>

<script>

import CbReview from "../../components/payments/CbReview.vue"

  export default {
    components: {
      CbReview
    },
    data(){},
    computed: {
      cbStatus(){
        return this.$store.getters['cbReviewStatus']
      },
      cbReviewcomp(){
        return this.$store.getters['cbReview']
      },
      cbSuccesscomp(){
        return this.$store.getters['cbPaymentSuccess']
      },
      cbConfigure(){
        return this.$store.getters['cbConfigure']
      }
    },

    methods: {
      configureNow(){
         this.$store.dispatch('cbSandBox', {isModal: false});
         this.$router.push('/configure-chargebee-payments')
      }
    },

     mounted() {
       console.log( this.$store.getters['cbPaymentSuccess'])
    }
  }
</script>