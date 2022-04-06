<template>
    <div class="h-screen bg-gray-50">
         <div class=" flex bg-gray-50" >
  
    <div class="hidden lg:flex relative  h-screen bg-gray-200 items-start  px-12 lg:px-10 w-1/2  lg:pt-64 xl:px-24 ">

      <!--loading content UI with content-loader.png file  from api starts-->
      <div v-if="laodingMarketingInfo">
          <div class="animate-pulse flex h-full items-center gap-x-8 ">
         <div><img src="./../assets/images/content-loader.png" class="" alt=""></div>
        </div>
      </div>
      <!--loading content from api ends-->

       
      <!--marketing content loaded after api call starts-->
      
        <div v-else class="space-y-2 ">
         
          <p class="text-sm text-gray-500 ">ANNOUNCING FALL 2021 PRODUCT RELEASE</p>
          <p class="text-2xl ">Synchronize your Sales & Finance
            workflows for better alignment</p>

          <div class="flex items-start gap-x-8 ">
          <div class="pt-2">
            <img src="./../assets/images/login-image.svg" class="" alt="">
          </div>
          <div class="flex-col space-y-2">
            
              <p class="leading-7 text-base font-normal text-gray-500">Quote-to-cash capabilities with HubSpot. Integration with Zoho CRM, Microsoft Dynamics GP, NetSuite's SuiteTax Module, and Mollie Payment Gateway.</p>
              <p class="text-base leading-7 font-normal text-indigo-500">Read more about our Fall 2021 Product Release</p>
          </div>
        </div>
        
        </div>


        <!--marketing content loaded after api call ends-->




      </div>
    
      
      <!--sign in box starts-->
      <div class="lg:w-1/2 md:w-full  w-full  flex flex-col justify-start py-12 px-4 sm:px-6 lg:flex-none lg:px-0 xl:px-24">
    <Login   @click-signin = "checkSignin" />
    
    

    <!-- <VerifyLogin /> -->
    </div>
  <!--sign in box ends-->





  </div>
    </div>
</template>

<script>
import Login from './../components/Login.vue'



export default {
  components: { Login },
    name: 'Signin',
   


}
</script>

<style scoped>

</style>