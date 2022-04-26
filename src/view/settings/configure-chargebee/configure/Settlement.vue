<template>
       <section>
<!-- 
         <settlement-success></settlement-success> -->

         <div class=" p-10 max-w-7xl ">
            <div class="grid grid-cols-12 ">
                <!-- left -->
           
                    <aside class="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-2 hidden md:block" >
      <nav class="space-y-1 nav " :class="scroll ? 'fixed pt-40' : 'static'" >
        <!-- Current: "bg-gray-50 text-indigo-700 hover:text-indigo-700 hover:bg-white", Default: "text-gray-900 hover:text-gray-900 hover:bg-gray-50" -->
        <button  class="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium" aria-current="page">
         
          <svg class="text-indigo-500 group-hover:text-indigo-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span class="truncate">
         Underwriting Data
          </span>
        </button>
  
        <a href="#additional_contact" class="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium">
          <!-- Heroicon name: outline/key -->
          <svg class="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
          </svg>
          <span class="truncate">
            Bank Account
          </span>
        </a>
  
       
  
       
      </nav>
    </aside>
  
         
            <!-- left ends -->
            <!-- right -->
             <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
     
  
      <form action="#" method="POST" id="create_customer">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="bg-white py-6 px-4 space-y-6 sm:p-6">
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">Additional Underwriting Data</h3>

               <p class="text-xs text-gray-400 mt-1">Fill in additional underwriting details</p>
            </div>
  
            <div class="grid grid-cols-8 gap-6 ">
                <div class="col-span-6 ">

                                <div class="form-control">
            <label for="location" class="label">Billing Descriptor</label>
               <div class="mt-1">
              <input type="text" name="bill" id="bill" class="input">
            </div>
            <p class="help-text" id="email-description">This is the business name that will show up on your customers' bank or credit/debit card 
statements. Choose something they will recognize to help prevent disputes. (Max 200 characters).</p>
          </div>
                
                </div>
                <div class="col-span-6 sm:col-span-4">

                                <div class="form-control">
            <label for="location" class="label">Refund Policy </label>
            <select id="location" name="location" class="select">
              <option>Select one</option>
              
            </select>
            <p class="help-text" id="email-description">Select one of the values for your refund policy. If none of the values match your business model, Select other.</p>
          </div>
                
                </div>
                <div class="col-span-3"></div>

                 <div class="col-span-6 sm:col-span-4">

                              
             <div class="form-control">
             <label for="price" class="label">Average Single Transaction Amount</label>
             <div class="mt-1 relative rounded-md shadow-sm">
               <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                 <span class="text-gray-500 sm:text-sm"> $ </span>
               </div>
               <input type="text" name="price" id="price" class="input pl-7 pr-12" placeholder="0.00">
               <div class="absolute inset-y-0 right-0 flex items-center">
                 <label for="currency" class="sr-only">USD</label>
                 <select id="currency" name="currency" class="input-select">
                   <option>USD</option>
                   <option>CAD</option>
                   <option>EUR</option>
                 </select>
               </div>
               
             </div>
              <p class="help-text">Divide the total value of all transactions by the number of transactions or sales.</p>
           </div>
           
            
                
                
                </div>

                 <div class="col-span-6 sm:col-span-4">

                             <div class="form-control">
             <label for="price" class="label">Maximum Single Transaction Amount</label>
             <div class="mt-1 relative rounded-md shadow-sm">
               <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                 <span class="text-gray-500 sm:text-sm"> $ </span>
               </div>
               <input type="text" name="price" id="price" class="input pl-7 pr-12" placeholder="0.00">
               <div class="absolute inset-y-0 right-0 flex items-center">
                 <label for="currency" class="sr-only">USD</label>
                 <select id="currency" name="currency" class="input-select">
                   <option>USD</option>
                   <option>CAD</option>
                   <option>EUR</option>
                 </select>
               </div>
             </div>
              <p class="help-text">Contact bank for the accurate details.</p>
           </div>
                
                </div>

                 <div class="col-span-6 sm:col-span-4">

                             <div class="form-control">
             <label for="price" class="label">Approximate Annual Sales Volume</label>
             <div class="mt-1 relative rounded-md shadow-sm">
               <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                 <span class="text-gray-500 sm:text-sm"> $ </span>
               </div>
               <input type="text" name="price" id="price" class="input pl-7 pr-12" placeholder="0.00">
               <div class="absolute inset-y-0 right-0 flex items-center">
                 <label for="currency" class="sr-only">USD</label>
                 <select id="currency" name="currency" class="input-select">
                   <option>USD</option>
                   <option>CAD</option>
                   <option>EUR</option>
                 </select>
               </div>
             </div>
           </div>
                
                </div>
             

        
  
            
  
  
             
            </div>
          </div>
          
        </div>
      </form>

  
        <form action="#" method="POST" id="container"  ref="container">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="bg-white py-6 px-4 space-y-6 sm:p-6">
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900"> Distribution of Credit Card Volume</h3>
              <p class="text-xs text-gray-400 mt-1">Depends on how you operate your business. Enter a value between 0 and 100</p>
            </div>

            <p class="text-base py-2">By Business Type</p>
            <div class="space-y-4">
              <div class="flex ">
                <p class="text-sm w-1/3">Business to Business</p>
                <button type="button" class="btn-outline px-6 py-3 text-sm text-gray-500 ">Value between 0 and 100</button>
              </div>


              <div class="flex ">
                <p class="text-sm w-1/3">Business to Consumer</p>
                <button type="button" class="btn-outline px-6 py-3 text-sm text-gray-500 ">Value between 0 and 100</button>
              </div>

              <div class="flex ">
                <p class="text-sm w-1/3">Other</p>
                <button type="button" class="btn-outline px-6 py-3 text-sm text-gray-500 ">Value between 0 and 100</button>
              </div>
            </div>

             <p class="text-base py-2">By Mode of Business</p>
            <div class="space-y-4">
              <div class="flex ">
                <p class="text-sm w-1/3 pr-20">Offline transactions with card (instore)</p>
                <button type="button" class="btn-outline px-6 py-3 text-sm text-gray-500 ">Value between 0 and 100</button>
              </div>


              <div class="flex ">
                <p class="text-sm w-1/3 pr-20">Online transactions with
card (Ecommerce)</p>
                <button type="button" class="btn-outline px-6 py-3 text-sm text-gray-500 ">Value between 0 and 100</button>
              </div>

              <div class="flex ">
                <p class="text-sm w-1/3 pr-20">Card not present (Cash, transfers)</p>
                <button type="button" class="btn-outline px-6 py-3 text-sm text-gray-500 ">Value between 0 and 100</button>
              </div>
            </div>
  
        
          </div>
          
        </div>
      </form>


         <form action="#" method="POST" id="container"  ref="container">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="bg-white py-6 px-4 space-y-6 sm:p-6">
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">Bank Account For Payouts</h3>
              <p class="text-xs text-gray-400 mt-1">Fill in the bank account details where you want us to deposit funds to</p>
            </div>

                <div class="grid grid-cols-8 gap-6 ">
                <div class="col-span-6 ">

                                <div class="form-control">
            <label for="location" class="label">Bank Account Holder Name</label>
               <div class="mt-1">
              <input type="text" name="bill" id="bill" class="input">
            </div>
            <p class=" help-text">Account owner’s full name (max 40 characters).</p>
          </div>
                
                </div>

                <div class="col-span-6 ">

                                <div class="form-control">
            <label for="location" class="label">Bank Account Number</label>
               <div class="mt-1">
              <input type="text" name="bill" id="bill" class="input">
            </div>
          </div>
                
                </div>

                <div class="col-span-6 ">

                                <div class="form-control">
            <label for="location" class="label">Bank Account Routing Number</label>
               <div class="mt-1">
              <input type="text" name="bill" id="bill" class="input">
              <p class="help-text" id="email-description">Nine-digit code used by financial institutions to identify other financial institutions.</p>
            </div>
          </div>
                
                </div>

                  <div class="col-span-6 sm:col-span-4">

                                <div class="form-control">
            <label for="location" class="label">Account Type</label>
            <select id="location" name="location" class="select">
              <option>Business</option>
              
            </select>
            <p class="help-text" id="email-description">Select the type of account.</p>
          </div>
                
                </div>


                </div>
            

            </div>
            </div>
         </form>



    <div class="flex gap-x-4">
     <button @click="$router.back()"  class="btn-outline  px-2.5  ">Previous Step</button>

                  <button @click="openModal" class="inline-flex bg-purple-700 rounded px-4 py-2 text-white">Next Step</button>
               </div>

      <div class=" h-32"></div>
    </div>
            <!-- right ends -->
            </div>

        </div>


    <!-- modal 1 -->

    <base-modal v-if="modal1">
        <div  class="relative w-full inline-block align-bottom bg-white rounded-lg pt-5 pb-4 text-left  shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full ">
          

      
      <div class="px-6"> 

        <div class="space-y-3 border-b pb-3 mb-5">
        <p class="text-2xl font-medium leading-4">Review Charges and Terms & Conditions</p>
        <p class="text-sm text-gray-500">Please review your application and accept the terms and conditions.</p>
      </div>
      
        <p class="  text-base pb-2 font-semibold">Processing Rate</p>
        <p class="text-sm text-gray-400 pt-2">Please review the processing rate for every transaction. See full <span class="text-blue-400 inline-flex">Financial Disclosure <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
</svg></span></p>

        <div class="pt-4 space-y-3">

          <div>
            2.9% <span class="text-gray-400">+</span> $0.30 <span class="text-gray-400 text-sm">per Credit Card transfer</span>
          </div>

           <div>
            $0.50 <span class="text-gray-400 text-sm">per ACH transfer</span>
          </div>

        </div>


     
      </div>
       <div class="px-6 pt-8">
          <p class="  text-base pb-2 font-semibold">Terms and Conditions</p>
        <p class="text-sm text-gray-400 ">Please review your application and accept terms and conditions</p>

        <fieldset class="space-y-5">
  <legend class="sr-only">Notifications</legend>
  <div class="relative flex items-start">
    <div class="flex items-center h-5">
      <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" checked class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
    </div>
    <div class="ml-3 text-sm">
      <label for="comments" class="font-medium text-gray-400 text-xs ">By submitting your merchant application you agree and to  <span class="text-blue-400 inline-flex">Sub-Merchant Agreement <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
</svg></span>     </label>
      <ul class="text-xs space-y-2 text-gray-400 list-disc list-outside pt-2 pl-5">
        <li class="">Certifying that all information you have provided is complete and correct. </li>
           <li class="list-item">By selecting the “Submit Application” button, you are accepting and agreeing to the Sub- Merchant Agreement between you and Fattmerchant. </li>
           <li>You agree that your selecting “Accept” is the legal euqivalent of manual signature to the Sub-Merchant Agreement and that you consent to be legally bound.</li>
      </ul>
    </div>
  </div>
  <div class="relative flex items-start">
    <div class="flex items-center h-5">
      <input id="candidates" checked aria-describedby="candidates-description" name="candidates" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
    </div>
    <div class="ml-3 text-sm">
      <label for="candidates" class="font-medium text-gray-400 text-xs ">You further agree to provide written authorzation to undergo a credit check as part of the 
<span class="text-blue-400 inline-flex">FCRA Permissible Purpose Guidelines  </span> </label>
     
    </div>
  </div>
  
</fieldset>

        </div>
     
      <div class="text-right px-6 py-10">
          
            <div class="flex items-center justify-end gap-x-4">
                <button type="button" class="btn-outline px-4 py-2 text-sm " @click="closeModal">Cancel</button>
                <button @click="$router.push('/settelment-success')" type="button" class="btn-outline px-4 py-2 text-sm bg-purple-800 text-white hover:bg-purple-900  focus:ring-purple-500 w-64">I Accept</button>
            </div>
           
      </div>
      
    </div>
    </base-modal>

    <!-- modal2 -->

    <base-modal v-if="modal2">
     <div  class="relative w-full inline-block align-bottom bg-white rounded-lg pt-5 pb-4 text-left  shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full ">
     
      <div class="px-6">
          <p class="  text-base pb-2">Terms and Conditions</p>
        <p class="text-sm text-gray-400 ">Please review your application and accept terms and conditions</p>

        <fieldset class="space-y-5">
  <legend class="sr-only">Notifications</legend>
  <div class="relative flex items-start">
    <div class="flex items-center h-5">
      <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" checked class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
    </div>
    <div class="ml-3 text-sm">
      <label for="comments" class="font-medium text-gray-400 text-xs ">By submitting your merchant application you agree and to  <span class="text-blue-400 inline-flex">Sub-Merchant Agreement <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
</svg></span>     </label>
      <ul class="text-xs space-y-2 text-gray-400 list-disc list-outside pt-2 pl-5">
        <li class="">Certifying that all information you have provided is complete and correct. </li>
           <li class="list-item">By selecting the “Submit Application” button, you are accepting and agreeing to the Sub- Merchant Agreement between you and Fattmerchant. </li>
           <li>You agree that your selecting “Accept” is the legal euqivalent of manual signature to the Sub-Merchant Agreement and that you consent to be legally bound.</li>
      </ul>
    </div>
  </div>
  <div class="relative flex items-start">
    <div class="flex items-center h-5">
      <input id="candidates" aria-describedby="candidates-description" name="candidates" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
    </div>
    <div class="ml-3 text-sm">
      <label for="candidates" class="font-medium text-gray-400 text-xs ">You further agree to provide written authorzation to undergo a credit check as part of the 
<span class="text-blue-400 inline-flex">FCRA Permissible Purpose Guidelines  </span> </label>
     
    </div>
  </div>
  
</fieldset>

        </div>

       <div class=" h-12"></div>
      <div class="text-right px-6 py-5">
          
            <div class="flex items-center justify-end gap-x-4">
                <button type="button" class="btn-outline px-4 py-2 text-sm " @click="closeModal2">Cancel</button>
                <button @click="$router.push('/settelment-success')" type="button" class="btn-outline px-4 py-2 text-sm bg-purple-800 text-white hover:bg-purple-900  focus:ring-purple-500">Accept and Submit Merchant Application</button>
            </div>
           
      </div>

        </div>
    </base-modal>


    </section>
</template>

<script>

import BaseModal from './../../../../components/common/BaseModal.vue'
import SettlementSuccess from './../../../../components/settlement/SettlementSuccess.vue'

export default {

  components: {
    BaseModal,
    SettlementSuccess
  },

  data(){
    return{
      modal1: false,
      modal2: false
    }
  },
  computed: {
    modal1(){
     return  this.$store.getters['settlement/openModal']
    }
  },

  methods: {

    openModal(){
         this.$store.dispatch('settlement/modalOpen', {modalOpen: true})
    },
    closeModal() {
      this.$store.dispatch('settlement/modalOpen', {modalOpen: false})
    },
    openModal2(){
      this.closeModal();
      this.modal2 = true
    },

    closeModal2() {
      this.modal2 = false
    }
  }
  
}
</script>