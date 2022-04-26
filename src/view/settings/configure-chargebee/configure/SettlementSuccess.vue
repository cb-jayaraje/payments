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
  
    
     <!-- nav -->
        </div>
        
    

       
       
    </header>
    </div>

  <div class=" py-10 px-16 w-[40%] m-auto space-y-4">

      <img src="./../../../../assets/images/Candidate-suucess.svg">

      <p class="text-gray-700 text-2xl font-semibold leading-8">Application submitted successfully</p>
      <p class="text-sm leading-5 font-normal text-gray-500">Your application will be reviewed within the next <span class="text-black">48 hours</span>.</p>

 



    <div class="space-y-5 pt-14">
        <p class="text-sm font-semibold text-gray-500">Help and Support</p>
        <ul class="text-sm text-gray-500 font-light list-disc list-outside pl-6 space-y-5">
            <li>We will send an email to xxx@yyy.com when the status of your application changes.</li>
<li>If you have questions about your application, look through our <span class="text-blue-500">FAQ</span> before you write to <span class="text-gray-600 font-semibold">support@chargebee.com.</span></li>
        </ul>
         <button @click="onClickSuccess" type="button" class="btn-outline px-4 py-2 text-sm bg-purple-800 text-white hover:bg-purple-900  focus:ring-purple-500">Go Back To Chargebee App</button>
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