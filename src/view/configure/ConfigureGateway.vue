<template>
    
       <configure-header :pageTitle="'Chargebee Payments'" :breadcrumb="'Configure Chargebee/Payment Gateways'"></configure-header>

       <!-- This example requires Tailwind CSS v2.0+ -->
<div class="px-6 min-h-screen">


    <!-- timeline -->
    <div class="mt-5 bg-white rounded-md shadow-md py-8 px-14 space-y-5 items-center" v-if="cbGolive !== 'success'">
        <p class="text-sm text-gray-500">Your Chargebee Payments application is Under Review. You will be notified on the change in status within 24-48 hrs. <br>For assistance, look at our FAQ page, the documentation page, or write to support@chargebee.com.</p>
    
    <div class="flex  justify-between items-center">

       <!-- timeline -->
   <nav aria-label="Progress" class="w-2/3" >
  <ol role="list" class="flex items-center" >
    <li class="relative pr-8 sm:pr-20 w-full">
      <!-- Completed Step -->
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="h-0.5 w-full bg-indigo-600"></div>
      </div>
      <a href="#" class="relative w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full hover:bg-indigo-900">
        <!-- Heroicon name: solid/check -->
        <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
        <div class=" absolute w-64 top-10 left-0 space-y-2">
        <p class="text-sm">Configure</p>
        <p class="text-xs text-gray-500">Configuration done and application submitted to the legal team</p>
        </div>
      </a>
    </li>

    <li class="relative pr-8 sm:pr-20 w-full">
      <!-- Completed Step -->
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="h-0.5 w-full   bg-indigo-600 " :class="goLiveLine ? '' : 'border-dotted border-b-2'"></div>
      </div>
      <a href="#" class="relative w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full hover:bg-indigo-900">
        <!-- Heroicon name: solid/check -->
        <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
        <div class=" absolute w-64 top-10 left-0 space-y-2">
            <p class="text-sm">Review</p>
        <p class="text-xs text-gray-500">Your application has been submitted and is currenlty being reviewed by our Legal team.</p>
        </div>
      </a>
    </li>

    <li class="relative pr-8 sm:pr-20">
      <!-- Current Step -->
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        
      </div>
      <a href="#" class="relative w-8 h-8 flex items-center justify-center bg-white border-2 border-indigo-600 rounded-full" aria-current="step">
        <span class="h-2.5 w-2.5 bg-indigo-600 rounded-full" aria-hidden="true"></span>
          <div class=" absolute w-64 top-10 left-0 space-y-2">
            <p class="text-sm">Go Live</p>
        <p class="text-xs text-gray-500">You can start accepting payments </p>
        </div>
      </a>
    </li>

   

   
  </ol>
</nav>
       <!-- timeleine -->

       <div>
           <img src="./../../assets/images/review-vector.svg" class="h-52" alt="">
       </div>

    </div>

    </div>

    <!-- paymentgateway -->
    <div class="flex flex-shrink- pt-10 gap-x-44" v-else>
        <div class="w-1/5">
         
                <div class="bg-white  shadow-md  rounded-lg flex w-40 h-32 items-center justify-center">
                <img src="./../../assets/images/chargebee-payments.svg" class="h-8"  alt="">
            </div>
             <p class="text-sm pt-4">Manage the configuration you have set for Chargebee Payments</p>
             <p class="text-sm text-blue-500 py-4"><router-link to="/configure-chargebee-payments"> Merchant Configuration</router-link></p>
             <p class="text-xs text-red-500">Archive</p>
         
           
        </div>

        <div class="">
            <p>Payment methods</p>

             <div class="bg-white shadow overflow-hidden sm:rounded-md ">
      <ul role="list" class="list-group ">
            <li >
       
              <a  class="block hover:bg-gray-50">
                <div class="list-group--card">
                  <div class="list-group--body">
                    <div class="truncate">
                      <div class="flex text-sm">
                       <div>
                            <p class="list-group__title" >
                          Cards</p>
                        
                       </div>
                      
                      </div>
                      <div class="mt-2 flex">
                        <div class="list-group__subtext">
                      
                            <p> <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
</svg> Prepaid cards enabled </span></p>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  <!-- <div class="list-group--icon">
                   
                    <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div> -->
                </div>
              </a>
        
    </li>

    <li >
       
      <a  class="block hover:bg-gray-50">
        <div class="list-group--card">
          <div class="list-group--body">
            <div class="truncate">
              <div class="flex text-sm">
                <p class="list-group__title" >
                 Apple Pay <span class=" italic">(coming soon)</span></p>
              
              </div>
              <div class="mt-2 flex">
                <div class="list-group__subtext">
              
                  <p >
                    Allow your customers to pay with Apple Pay. Learn more
                    
                  </p>
                </div>
              </div>
            </div>
            
          </div>
          <div class="list-group--icon pl-20">
            <!-- Heroicon name: solid/chevron-right -->
         <!-- This example requires Tailwind CSS v2.0+ -->
<button type="button" class="flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" role="switch" aria-checked="false">
  <span class="sr-only">Use setting</span>
  <span aria-hidden="true" class="pointer-events-none absolute bg-white w-full h-full rounded-md"></span>
  <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
  <span aria-hidden="true" class="bg-gray-200 pointer-events-none absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200"></span>
  <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
  <span aria-hidden="true" class="translate-x-0 pointer-events-none absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200"></span>
</button>
          </div>
        </div>
      </a>

</li>


    <li >
       
      <a  class="block hover:bg-gray-50">
        <div class="list-group--card">
          <div class="list-group--body">
            <div class="truncate">
              <div class="flex text-sm">
                <p class="list-group__title" >
                 Direct Debit (ACH/eCheck)  <span class=" italic">(coming soon)</span></p>
              
              </div>
              <div class="mt-2 flex">
                <div class="list-group__subtext">
              
                  <p >
                    Allow your customers to pay via Direct Debit (ACH/eCheck). Learn more
                    
                  </p>
                </div>
              </div>
            </div>
            
          </div>
          <div class="list-group--icon pl-20">
            <!-- Heroicon name: solid/chevron-right -->
         <!-- This example requires Tailwind CSS v2.0+ -->
<button type="button" class="flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" role="switch" aria-checked="false">
  <span class="sr-only">Use setting</span>
  <span aria-hidden="true" class="pointer-events-none absolute bg-white w-full h-full rounded-md"></span>
  <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
  <span aria-hidden="true" class="bg-gray-200 pointer-events-none absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200"></span>
  <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
  <span aria-hidden="true" class="translate-x-0 pointer-events-none absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200"></span>
</button>
          </div>
        </div>
      </a>

</li>


   <li >
       
      <a  class="block hover:bg-gray-50">
        <div class="list-group--card">
          <div class="list-group--body">
            <div class="truncate">
              <div class="flex text-sm">
                <p class="list-group__title" >
                 Google Pay   <span class=" italic">(coming soon)</span></p>
              
              </div>
              <div class="mt-2 flex">
                <div class="list-group__subtext">
              
                  <p >
                    Allow your customers to pay with Google Pay. Learn more
                    
                  </p>
                </div>
              </div>
            </div>
            
          </div>
          <div class="list-group--icon pl-20">
            <!-- Heroicon name: solid/chevron-right -->
         <!-- This example requires Tailwind CSS v2.0+ -->
<button type="button" class="flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" role="switch" aria-checked="false">
  <span class="sr-only">Use setting</span>
  <span aria-hidden="true" class="pointer-events-none absolute bg-white w-full h-full rounded-md"></span>
  <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
  <span aria-hidden="true" class="bg-gray-200 pointer-events-none absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200"></span>
  <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
  <span aria-hidden="true" class="translate-x-0 pointer-events-none absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200"></span>
</button>
          </div>
        </div>
      </a>

</li>
  

      </ul>
    </div>
        </div>
    </div>


</div>


      
</template>

<script>

import ConfigureHeader from "./ConfigureHeader.vue"

export default {
    components: {
        ConfigureHeader
    },
    data(){
        return {
            goLiveLine: false
        }
    },
    watch: {
        goLiveLine(value){
            if(value === true) {
               setTimeout(()=>{
                    this.$router.push('/payment_gateways');
                  this.$store.dispatch('cbReviewChange', {cbStatus: 'success'} )

                    

                    
               }, 2000)
            }
        }
    },
    computed: {
        cbGolive() {
            return this.$store.getters['cbReviewStatus']
        }
    },
    methods: {
        changeReview(){
            setTimeout(()=>{
                this.goLiveLine = true
                //this.$router.push('/payment_gateways')
            }, 2000)
        },

        chanagePageToPayments() {
            
        }
    },
    mounted(){
        let status = this.$store.getters['cbReviewStatus'];

       

        if(status === 'review' ){
              this.changeReview()
        }
  
       // this.chanagePageToPayments();
    }
}
</script>