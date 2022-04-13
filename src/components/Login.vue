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
                      <input id="email" v-model="userEmail" placeholder="" name="email" type="text" autocomplete="email"   class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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

                       <button type="button" @click="$router.push('/')"  class="w-full flex justify-center py-3 px-4  border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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

    
</template>

<script></script>


<style  scoped>

</style>