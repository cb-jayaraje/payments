<template>
       <section>

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
          Business Structure
          </span>
        </button>
  
        <a href="#additional_contact" class="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium">
          <!-- Heroicon name: outline/key -->
          <svg class="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
          </svg>
          <span class="truncate">
            Business Ownership
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
              <h3 class="text-lg leading-6 font-medium text-gray-900"> Business Structure</h3>
              <p class="text-xs text-gray-600">Fill in your business details.</p>
            </div>
  
            <div class="grid grid-cols-8 gap-6 ">
                <div class="col-span-6 sm:col-span-4">

                                <div class="form-control">
            <label for="location" class="label">Type of Business</label>
            <select id="location" name="location" class="select">
              <option>Select one</option>
              
            </select>
            <p class="help-text" id="email-description">Select what type of business you are.</p>
          </div>
                
                </div>
                <div class="col-span-6 sm:col-span-4">

                                <div class="form-control">
            <label for="location" class="label">Ownership </label>
            <select id="location" name="location" class="select">
              <option>Select one</option>
              
            </select>
            <p class="help-text" id="email-description">Select whether you are a pubically traded or privately held company. If you are a government agency, select public.</p>
          </div>
                
                </div>

                <div class="col-span-8">
                   <div class="form-control">
            <label for="location" class="label">Employer Identification Number </label>
              <input type="email" name="email" id="email" class="input" placeholder="2335454646">
            <p class="help-text" id="email-description">Nine digit Tax Identification Number (TIN), Employer Identification Number (EIN), or if the business_type 
is INDIVIDUAL_SOLE_PROPRIETERSHIP and a Tax ID is not available, then the principal’s Social Security 
Number (SSN).</p>
          </div>
                </div>

                 <div class="col-span-6 sm:col-span-4">

                              
                  
            <div class="form-control">
              <label id="listbox-label" class="label">Incorporation Date </label>
              <div class="mt-1 relative">
                <button type="button" class="select-button" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                  <span class="block truncate">Select Date</span>
                  <span class="select-button-icon-container">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
                  </span>
                </button>
            
               
              
              </div>
              <p class="help-text" id="email-description">Enter the date your business was incorporated.</p>
            </div>
            
                
                
                </div>

                 <div class="col-span-6 sm:col-span-4">

                                <div class="form-control">
            <label for="location" class="label">Merchant Category Code</label>
              <select id="location" name="location" class="select">
              <option>Select</option>
              
            </select>
            <p class="help-text" id="email-description">Four-digit number designated by credit card company.</p>
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
              <h3 class="text-lg leading-6 font-medium text-gray-900"> Business Ownership</h3>
              <p class="text-xs text-gray-400 mt-1">Do you have stakeholders who hold more than 25% ownership?</p>
            </div>
  
            <div class="grid grid-cols-13 gap-6">
               <fieldset>
  <legend class="sr-only">Plan</legend>
  <div class="space-y-5">
    <div class="relative flex items-start">
      <div class="flex items-center h-5">
        <input id="small" aria-describedby="small-description" name="plan" type="radio" checked class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
      </div>
      <div class="ml-3 text-sm">
        <label for="small" class="font-medium text-gray-700">Yes</label>
        <p id="small-description" class="text-gray-500">There are one or more stakeholders who hold 25% or greater ownership</p>
      </div>
    </div>

    <div class="relative flex items-start">
      <div class="flex items-center h-5">
        <input id="medium" aria-describedby="medium-description" name="plan" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
      </div>
      <div class="ml-3 text-sm">
        <label for="medium" class="font-medium text-gray-700">No</label>
        <p id="medium-description" class="text-gray-500">There are no stakeholders who hold 25% or greater ownership</p>
      </div>
    </div>


  </div>
</fieldset>
<div class=" h-32"></div>
                 <div class="col-span-6 sm:col-span-4">
                                
                      <div class="form-control">
            <label for="email" class="label">Beneficiary Details</label>
            <p id="medium-description" class="text-xs text-gray-400 mt-1">Enter details of all beneficiaries who hold more than 25% ownership.</p>
       
          </div>
        <div class="h-10"></div>
      
      <!-- benifitary -->
      <benefitary-lists></benefitary-lists>


          <div class=" pt-5">
              <button @click="oppp" type="button" class="btn-outline w-2/3 text-left justify-start py-2 text-sm bg-blue-50 border border-blue-100 gap-x-2 text-blue-700 ">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
              Add Beneficiary</button>
          </div>
                
                
                </div>
               
             
                
  
        

             
               <div>
                   
               </div>

        
  
            
  
  
             
            </div>
          </div>
          
        </div>
      </form>



  
  <div class="flex gap-x-4">
     <button @click="$router.back()"  class="btn-outline  px-2.5 ">Previous Step</button>

                  <button @click="$router.push('/settelment')" class="inline-flex bg-purple-700 rounded px-4 py-2 text-white">Next Step</button>
               </div>
      <div class=" h-32"></div>

      
    </div>
            <!-- right ends -->
            </div>

        </div>


   <!-- modal -->
<div v-if="addBeneModal" >
  <base-modal>
       <div  class="relative w-full inline-block align-bottom bg-white rounded-lg pt-5 pb-4 text-left  shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full ">
     
      <div class="px-6"> 
      
        <p class=" border-b border-b-gray-200 text-base pb-2">Add Beneficiary</p>
        <p class="text-sm text-gray-400 pt-2"> Please enter beneficiary information</p>

        <div class="grid grid-cols-2 gap-6 pt-6">
                      <div class="form-control">
            <label for="firstName" class="label">First name</label>
            <div class="mt-1">
              <input type="text" v-model="firstName" name="firstName" id="firstName" class="input" >
            </div>
            <p class="help-text">Max 20 characters.</p>
          </div>

                     <div class="form-control">
            <label for="lastName" class="label">Last name</label>
            <div class="mt-1">
              <input type="text" name="lastName" id="lastName" class="input" >
            </div>
            <p class="help-text">Max 20 characters.</p>
          </div>

       

             <div class="form-control">
            <label for="jobTitle" class="label">Job Title</label>
            <div class="mt-1">
              <input type="text" name="jobTitle" id="jobTitle" class="input" >
            </div>
            <p class="help-text">Max 60 characters.</p>
          </div>

              <div class="form-control">
            <label for="dob" class="label">Date of Birth</label>
            <div class="mt-1">
              <input type="text" name="dob" id="dob" class="input" >
            </div>
          </div>

           <div class="form-control">
            <label for="emailId" class="label">Email Address</label>
            <div class="mt-1">
              <input type="text" name="emailId" v-model="emailId" id="emailId" class="input"  placeholder="">
            </div>
            <p class="help-text">Max 100 characters.</p>
          </div>

              <div class="form-control">
            <label for="phone" class="label">Phone Number</label>
            <div class="mt-1">
              <input type="text" name="phone" id="phone" class="input" >
            </div>
            
          </div>

          
                
                
        </div>

        <p class="pt-10 text-base font-bold">Address</p>

        

        <div class="grid grid-cols-2 gap-6 pt-6">

          
             <div class="form-control">
            <label for="phone" class="label">Country / Region</label>
        <select id="location" name="location" class="select">
              <option>United States</option>
              <option selected>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
           
                      <div class=" col-span-2 form-control">
            <label for="address" class="label">Address Line 1</label>
            <div class="mt-1">
              <input type="text" name="address" id="address" class="input" >
            </div>
            <p class="help-text">Max 35 characters.</p>
          </div>

            <div class=" col-span-2 form-control">
            <label for="address" class="label">Address Line 2</label>
            <div class="mt-1">
              <input type="text" name="address" id="address" class="input" >
            </div>
            <p class="help-text">Max 35 characters.</p>
          </div>
                
        </div>
        

         <div class="flex justify-between gap-x-4 pt-5">
         
                      <div class="form-control w-2/4">
            <label for="city" class="label">City</label>
            <div class="mt-1">
              <input type="text" name="city" id="city" class="input" >
            </div>
            <p class="help-text">Max 20 characters.</p>
          </div>

          <div class="form-control ">
            <label for="state" class="label">State</label>
            <div class="mt-1">
              <input type="text" name="state" id="state" class="input" >
            </div>
          </div>

               <div class="form-control">
            <label for="zip" class="label">ZIP Code</label>
            <div class="mt-1">
              <input type="text" name="zip" id="zip" class="input" >
            </div>
             <p class="help-text">Max 7 characters.</p>
          </div>


         </div>

  <p class="pt-10 text-base font-bold">Ownership</p>
        <div class="grid grid-cols-2 gap-6 pt-6">
                      <div class="form-control">
            <label for="percentage" class="label">Principal Ownership Percentage</label>
            <div class="mt-1">
              <input type="text" v-model="percentage" name="percentage" id="percentage" class="input" >
                <p class="help-text" id="email-description">Percentage of company owned (min 25; max 100).</p>
            </div>
          </div>

                     <div class="form-control">
            <label for="tax" class="label" >Principal Tax ID</label>
            <div class="mt-1">
              <input type="text" name="tax" v-model="tax" id="tax" class="input" >
              <p class="help-text" id="email-description">Nine digit Social Security Number (SSN).</p>
            </div>
          </div>

          </div>

   

     
      </div>
      <div class="text-right px-6 py-10">
          
            <div class="flex items-center justify-end gap-x-4">
                <button type="button" class="btn-outline px-4 py-2 text-sm " @click="closeModal">Cancel</button>
                <button @click="addBeneDetail" type="button" class="btn-outline px-4 py-2 text-sm bg-purple-800 text-white hover:bg-purple-900  focus:ring-purple-500">Add</button>
            </div>
           
      </div>
      
    </div>
  </base-modal>
</div>

    </section>
</template>

<script>
import BenefitaryLists from "../../../../components/benefitary/BenefitaryLists.vue"
import BaseModal from './../../../../components/common/BaseModal.vue'
import AddBenefitiary from './../../../../components/benefitary/AddBenefitiary.vue'
import { v4 as uuidv4 } from 'uuid'


  export default {
    components: {
      BenefitaryLists,
      BaseModal,
      AddBenefitiary
    },
    data(){
      return {
        addBeneModal: false,
        firstName: '',
        emailId: '',
        percentage: 0,
        tax: ''
      }
    },
    computed: {
      benefitiaries() {
        return this.$store.getters['beneDetails/benefitiaryDetails']
      }
    },
    methods: {
      closeModal(){

        this.addBeneModal = false;
         console.log(this.addBeneModal)
      },
      oppp(){
     
      this.addBeneModal = true;
       console.log(this.addBeneModal)
    },
    addBeneDetail(){

      //const id = '_' + Math.random().toString(2).substr(2, 9);

      if(this.emailId === '' || this.name === '' || this.percentage === '' || this.tax === '') {
        //return false;
      }

      const detail = {
        id: uuidv4(),
        name: this.firstName,
        percent: this.percentage,
        tax: this.tax
      }

     

      this.$store.dispatch('beneDetails/addtoBene', {bene: detail});
      this.closeModal();
    }
    
    },
    
  }
</script>