<template>
<section>
    <!--header-->
 <div class=" bg-white w-full z-10" >
    <header class=" h-full border-b border-gray-300 w-full  p-8 pb-0  " id="mainHeader">
        <div class="flex items-center justify-between">
            <div class="flex items-center justify-start gap-x-4">
            

        
            <div class="flex gap-x-4">
                <div class=" border-r-2"><img src="./../../../../assets/images/cb-purple.svg" alt=""></div>
                <div>
                    <div class="text-2xl  text-black font-semibold ">Configure Chargebee Payments</div>
                <p class="text-sm text-slate-500">freshworks.chargebee.com</p>
                </div>
            </div>
        </div>

     <!-- nav -->
  
         <button type="button" @click="onClickSuccess" class="inline-flex items-center px-8 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Go to Home
          </button>
     <!-- nav -->
        </div>
        
    

       
       
    </header>
    </div>

  <div class=" py-10 px-16">
        <div class="alert bg-green-50 max-w-md">
 <div class="flex">
   <div class="flex-shrink-0">
     <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
       <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
     </svg>
   </div>
   <div class="ml-3 description-only">
     <p class="font-medium text-green-800">Successfully submitted for review</p>
   </div>
  
 </div>
</div>

    <p class="text-sm">Your application will be reviewed within the next 48 hours.</p>

    <div class="space-y-3 pt-8">
        <p class="text-sm font-semibold text-gray-500">Help and Support</p>
        <ul class="text-sm text-gray-500 font-light space-y-2 list-disc list-inside">
            <li>We will send an email to xxx@yyy.com when the status of your application changes.</li>
<li>If you have questions about your application, look through our <span class="text-blue-500">FAQ</span> before you write to <span class="text-gray-600 font-semibold">support@chargebee.com.</span></li>
        </ul>
    </div>

  </div>

</section>
</template>

<script>
import store from "../../../../store";

export default {
    methods: {
        onClickSuccess() {
            this.$store.dispatch('cbReviewChange', {cbStatus: 'review'});
            this.$router.push('/');
        }
    }   
}
</script>