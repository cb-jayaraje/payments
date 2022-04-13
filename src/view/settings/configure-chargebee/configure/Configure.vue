<template>
    <section class="bg-gray-50 min-h-screen">
       <!--footer-->
      

<!--footer end-->



<!--header-->
 <div class=" bg-white w-full z-10" :class="scroll ? 'fixed' : 'static'">
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
    <header-nav @proceed-next="proceed" @on-click="openModal"></header-nav>

     <!-- nav -->
        </div>
        
        <!--tabs-->

        <!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<div class="pb-5 border-b border-gray-200 sm:pb-0">
 
  <div class="mt-3 sm:mt-10">
   
    <!-- Tabs at small breakpoint and up -->
    <div class="hidden sm:block">
      <nav class="-mb-px flex space-x-8">
        <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
        <a href="#" class=" inline-flex gap-x-4 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm" :class="step==='step1' ? 'border-indigo-500 text-indigo-600': 'border-transparent text-gray-500 ' "> 
                
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
</svg>
                <p class="text-sm text-slate-500">1. Business Profile</p>
             </a>

         <a href="#" :class="step==='step2' ? 'border-indigo-500 text-indigo-600': 'border-transparent text-gray-500' " class="inline-flex gap-x-4  hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"> 
                
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
</svg>
                <p class="text-sm text-slate-500">2. Operations and Ownership</p>
             </a>

                <a href="#" :class="step==='step3' ? 'border-indigo-500 text-indigo-600 ': 'border-transparent text-gray-500' " class=" inline-flex gap-x-4  hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"> 
                
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
</svg>
                <p class="text-sm text-slate-500">3. Settlements and Processing Info</p>
             </a>
      </nav>
    </div>
  </div>
</div>




   
        <!--tabs -end -->

       
       
    </header>
    </div>


     <!-- container -->
       <router-view></router-view>
        <!-- container ends -->
<div class="h-96"></div>
    </section>
</template>

<script>
import HeaderNav from './../configure/HeaderNav.vue'

export default {
    components: {
        HeaderNav
    },
    data(){
        return {
            scroll:false,
            showe: false
        }
    },
    computed: {
         scroll() {
            return this.scroll
        },

        step() {
            return this.$store.getters['step'];
        }
    },
    methods: {
        openModal(val){
           // console.log("openmodal ", val.modal)
            this.$store.dispatch('settlement/modalOpen', {modalOpen: true})
        },
        proceed(val){
            
        },
        handeleScroll(event){
            let scrollPostion = document.documentElement.scrollTop;
         
             
            let mainH = document.querySelector('#mainHeader');
            if(window.scrollY > mainH.offsetTop) {
                this.scroll = true;
            }else {
                this.scroll = false
            }
        },
        scrollIntoView() {
    //          const [el] = this.$refs["container"];
    //          el.scrollTop = el.scrollHeight;
    //          console.log(el.scrollIntoView)
    //          if (el) {
    //     el.scrollIntoView({ behavior: "smooth", block: "end" });
    //   }
     let scrollPostion = document.documentElement.scrollTop;

    let cont = document.querySelector('#container')
    const contt = this.$refs['container'].getBoundingClientRect().top;
    let conttt = contt;

    if(contt <= scrollPostion){
        window.scrollTo(0, contt - 350)
    }
     

    //console.log(cont)
    this.scroll = false;

   // this.$refs["container"].scrollIntoView({behavior: 'smooth'});
        }
    },
    created(){

       

        window.addEventListener('scroll', this.handeleScroll)
    },
 
}
</script>

