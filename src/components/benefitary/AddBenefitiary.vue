<template>
      <div  class="relative w-full inline-block align-bottom bg-white rounded-lg pt-5 pb-4 text-left  shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full ">
     
      <div class=""> 
      
          <div class="flex px-20 py-5 justify-between items-center" >
              <img src="./../../../assets/images/chargebee-payments.svg" class="h-10" alt="">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 cursor-pointer hover:bg-purple-800 rounded-md hover:text-white  text-gray-400" @click="closeModal" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
          </div>

          <div class="bg-purple-900 flex items-center py-10">
              <div class="w-3/4 m-auto text-white text-center space-y-2">
                  <p class="text-2xl font-bold"> Processing Subscription Payments, Simplified!
100% Secure and Reliable</p>
<p class="text-sm">APIs backed by award winning Finix Payments, Payments Facilitator who are trusted by leading vertical SaaS and e-commerce platforms such as Passport, Zendoor and more</p>
                <p class="text-sm font-light underline">Learn More <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
</svg></p>
              </div>
          </div>

          <div class="px-20 mt-10">
              <div class="grid grid-cols-3 rounded-md shadow-md p-6 gap-x-20">
                  <div class="text-center space-y-3">
                      <p class="text-purple-700 text-2xl font-bold">One Stop</p>
                      <p class="text-sm text-gray-500">Embedded solution for Chargebee Subscriptions</p>
                  </div>
                    <div class="text-center space-y-3">
                      <p class="text-purple-700 text-2xl font-bold">24 hrs</p>
                      <p class="text-sm text-gray-500">Your Business can go live to start accepting payments in a few hours </p>
                  </div>
                    <div class="text-center space-y-3">
                      <p class="text-purple-700 text-2xl font-bold">Exclusive</p>
                      <p class="text-sm text-gray-500">For North America</p>
                  </div>
              </div>

                <div>
                    <ul class="pl-10 pt-10">
                        <li class=" list-disc text-sm text-gray-500">Chargebee Payments is wholesome payment solution for hosting your business online onto a subscription model</li>
                        <li class=" list-disc text-sm text-gray-500">Easy to Configure, hand held. Takes a few minutes to setup. </li>
                        <li class=" list-disc text-sm text-gray-500">Manage your invoices, transactions and subscriptions in one place. </li>
                        <li class=" list-disc text-sm text-gray-500">We safeguard your business from frauds and illegal transactions while you can relax and focus on your sales</li>
                        <li class=" list-disc text-sm text-gray-500">Finix Payments has $30 million investment led by Lightspeed Venture Partners and American Express Ventures. </li>
                        <li class=" list-disc text-sm text-gray-500">Not convinced yet? try our sandbox or We are always ready for a chat and answer your queries. Contact Chargebee Support</li>
                    </ul>
                </div>

          </div>

     
      </div>
      <div class="text-right px-20 py-10">
          
            <div class="flex items-center justify-end gap-x-4">
                <button type="button" class="btn-outline px-4 py-2 text-sm ">Not right now, later</button>
                <button type="button" class="btn-outline px-4 py-2 text-sm ">Share this Info</button>
                <button type="button" class="btn-outline px-4 py-2 text-sm bg-orange-500 text-white hover:bg-orange-600  focus:ring-orange-500">Try Sandbox now</button>
            </div>
           
      </div>
      
    </div>
</template>

<script>
import BaseModal from './../../components/common/BaseModal.vue'
export default {
    props:{
        modalclick: Boolean
    },
    components: {
           BaseModal
    },
  
    data(){
        return{
           modal: true
        }
    },
    methods: {
        closeModal(){
            console.log(this.closeModalz)
           // this.$emit('close-modal', false)
           this.modal = modalclick
        }
    },
    created(){
        this.modalclick = false
    }
}
</script>