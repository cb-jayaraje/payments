<template>
 

          <div  class="">
        <div class="min-h-full flex flex-col justify-start py-12 sm:px-6 lg:px-8  ">

         

            <div class="sm:mx-auto sm:w-full sm:max-w-md  md:w-full md:max-w-xl">
              <img class="mx-auto h-16 w-auto" src="./../assets/images/chargebee-logotype1.svg" alt="Workflow">
              <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign in to your account
              </h2>
             
            </div>
          
            <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md md:w-full md:max-w-md lg:max relative">
             
              <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">

                <!--server error starts-->
            
<!--servererror ends-->

                <form class="space-y-6" @submit.prevent="submitForm">
                  <!-- This example requires Tailwind CSS v2.0+ -->


                  <p>Enter the same email id you used for registration.</p>
                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    
                    <div class="mt-1"  >
                      <input id="email" v-model.trim="userEmail" placeholder="" name="email" type="text" autocomplete="email"   class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      :class= "{'focus:outline-none focus:ring-red-500 focus:border-red-500' : error}"
                      >
                      
                    </div>
                    <div class="h-4 mt-2" v-show="error">
                      <p  class=" text-sm text-red-600" id="email-error" >Cannot be empty</p>
                    </div>
                  </div>
          
                 
                 
                
          
                  <div>
                    <!-- <button type="button" @click="onClickSignIn()" class="w-full flex justify-center py-3 px-4  border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Sign in 
                      </button> -->

                       <button type="button" @click="login"  class="w-full flex justify-center py-3 px-4  border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Sign in 
                      </button>
                  </div>
                </form>
          
                <div class="mt-6">
                  <div class="relative">
                
                    <div class="relative flex justify-center text-sm">
                      <span class="px-2 bg-white text-gray-500">
                        New to Chargebee? <a href="#" class="text-indigo-500">Join now</a>
                      </span>
                    </div>
                  </div>
          
                 
                </div>
              </div>
            </div>
          </div>
        </div>

        <base-modal v-if="!confirm">
          <div class="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full sm:p-6">
      <div class="sm:flex sm:items-start">
        <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 sm:mx-0 sm:h-10 sm:w-10">
          <!-- Heroicon name: outline/exclamation -->
          <svg class="h-6 w-6 text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">The EAP customers are made aware of the following items:</h3>
          <div class="mt-5">
            <ul class="text-sm list-inside text-gray-500 list-decimal space-y-2">
              <li>The exact features/functionalities which are in the EAP phase and ensure it is clearly visible/identifiable within the product.</li>
              <li>The fact that they may only use EAP feature for their evaluation, testing purposes.</li>
<li>TCB is not making any warranties, promises or commits about the feature/functionality and that we may discontinue/disable it at any time at our sole discretion.</li>
<li>TSince it is only for testing purposes, CB will not be taking any liability arising from customer's use of these features/functionalities.</li>
<li>TCB may use their feedback to improve the services, without any obligation (whether to pay royalty or otherwise) to the customer.</li>
              
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
        <button type="button" @click="onClickConfirm" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">Confirm</button>
        <!-- <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm">Cancel</button> -->
      </div>
    </div>
        </base-modal>

    
</template>

<script>

import BaseModal from './../components/common/BaseModal.vue'

  export default{
    components: {
      BaseModal
    },
    data(){
      return {
        userEmail: '',
        error: false,
        confirm: false,
      }
    },
    methods: {

      onClickConfirm(){
        this.confirm = true;
      },

      login(){

        if(this.userEmail == '' || !this.userEmail.includes('@')){
          this.error = true;
          return false;
        }

         this.$store.dispatch('cbUserAuth', {isUserAuth: true});
         this.$store.dispatch('userDetail/getUserInfo', {user: {email: this.userEmail}})

        this.$router.push('/')
      }
    }
  }

</script>


<style  scoped>

</style>