

<template>
    <section>

         <div class=" p-10 max-w-7xl ">
            <div class="grid grid-cols-12 ">
                <!-- left -->
           
                    <aside class="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3 hidden md:block mr-10" >
      <nav class="space-y-1 nav " :class="scroll ? 'fixed pt-40' : 'static'" >
        <!-- Current: "bg-gray-50 text-indigo-700 hover:text-indigo-700 hover:bg-white", Default: "text-gray-900 hover:text-gray-900 hover:bg-gray-50" -->
        <button @click="scrollIntoView(0, 'bp')" :class="scrollMenu == 'bp' ? 'bg-purple-100': 'bg-transparent '" class="text-gray-900  hover:text-gray-900 hover:bg-purple-100 group rounded-md px-3 py-2 flex items-center text-sm font-medium" aria-current="page">
         
          <svg class="text-indigo-500 group-hover:text-indigo-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span class="truncate">
           Business Profile
          </span>
        </button>
  
        <button @click="scrollIntoView(180, 'ac')"  :class="scrollMenu =='ac' ? 'bg-purple-100': 'bg-transparent'"  class=" w-full cursor-pointer text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium">
          <!-- Heroicon name: outline/key -->
          <svg class="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
          </svg>
          <span class="truncate">
            Additional Contact
          </span>
        </button>
  
       
  
       
      </nav>
    </aside>
  
         
            <!-- left ends -->
            <!-- right -->
             <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
     
  
      <form action="#" method="POST" id="b_div">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="bg-white py-6 px-4 space-y-6 sm:p-6">
            <div class="space-y-1">
              <h3 class="text-lg leading-6 font-medium text-gray-900">        Business Profile</h3>
              <p class="text-xs text-gray-600">Fill in your business details.</p>
            </div>
  
            <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-4">
                                <div class="form-control">
            <label for="email" class="label">Company Name</label>
            
            <div class="mt-1">
              <input type="text" name="companyName" id="companyName"  v-model="companyName" :class="!v$.$error ? 'input' : 'input-error'"    >
                <p class="help-text" id="email-description">Your full legal company name. If an individual sole proprietorship, please input first name, full legal last 
name, and middle initial. (max 120 characters)</p>


            </div>
          </div>
                
                </div>
                 <div class="col-span-6 sm:col-span-4">
                                <div class="form-control">
            <label for="email" class="label">Doing Business as</label>
            <div class="mt-1">
              <input type="text" name="business" id="business"   :class="!v$.$error ? 'input' : 'input-error'" v-model="business" >
                <p class="help-text" id="email-description">An alternate name of the company. If no other name is used please use the company name added above.</p>
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
              <h3 class="text-lg leading-6 font-medium text-gray-900"> Business Address</h3>
               <p class="text-xs text-gray-600">Fill in your business address.</p>
            </div>
  
            <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-4">
                                 <div class="form-control">
            <label for="location" class="label">Country/Region</label>
            <select id="location" name="location" class="select">
              <option>United States</option>
              <option selected>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
                
                </div>
                 <div class="col-span-6 sm:col-span-4">
                                
                      <div class="form-control">
            <label for="email" class="label">Address Line 1</label>
            <div class="mt-1">
              <input type="email" name="email" id="email" class="input" >
            <p class="help-text" id="email-description">Max 35 characters.</p>  
            </div>
            
          </div>
                
                
                </div>
                 <div class="col-span-6 sm:col-span-4">
                                
                      <div class="form-control">
            <label for="email" class="label">Address Line 2</label>
            <div class="mt-1">
              <input type="email" name="email" id="email" class="input" >
              <p class="help-text" id="email-description">Max 35 characters.</p>  
            </div>
          </div>
                
                
                </div>
                <div class="col-span-2"></div>
                  <div class="col-span-2 form-control">
                <label for="first-name" class="block text-sm font-medium text-gray-700">City</label>
                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 input">
              <p class="help-text" id="email-description">Max 20 characters.</p>  
              </div>
  
              <div class="col-span-2 form-control">
                <label for="last-name" class="block text-sm font-medium text-gray-700">State / Province</label>
                <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 input">
              </div>

               <div class="col-span-2 form-control">
                <label for="last-name" class="block text-sm font-medium text-gray-700">ZIP / Postal</label>
                <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 input">
                <p class="help-text" id="email-description">Max 7 characters.</p>  
              </div>
             
             

        
  
            
  
  
             
            </div>
          </div>
          
        </div>
      </form>

   
  <div>
                  <button @click="nextStep" class="inline-flex bg-purple-700 rounded px-4 py-2 text-white">Next Step</button>
               </div>
  

      <div class=" h-32"></div>
    </div>
            <!-- right ends -->
            </div>

        </div>

    </section>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default {
    data(){
        return {
          v$: useVuelidate(),
            scroll:false,
            scrollMenu: 'bp',
            companyName: '',
            business: ''
        }
    },
    computed: {
         scroll() {
            return this.scroll
        },
        companyNameComp(){
          return this.companyName
        }
    },
    validations(){
      return {
        companyName: { required },
        business: { required}
      }
    },
    methods: {
        handeleScroll(event){
            let scrollPostion = document.documentElement.scrollTop;
            //  console.log(scrollPostion)
             
            let mainH = document.querySelector('#mainHeader');
            if(window.scrollY > mainH.offsetTop) {
                this.scroll = true;
            }else {
                this.scroll = false
            }
        },
        scrollIntoView1() {
    //          const [el] = this.$refs["container"];
    //          el.scrollTop = el.scrollHeight;
    //          console.log(el.scrollIntoView)
    //          if (el) {
    //     el.scrollIntoView({ behavior: "smooth", block: "end" });
    //   }
     let scrollPostion = document.documentElement.scrollTop;
    //  console.log(scrollPostion)
    let cont = document.querySelector('#container')
    const contt = this.$refs['container'].getBoundingClientRect().top;
    let conttt = contt;

    if(contt <= scrollPostion){
        window.scrollTo(0, contt - 350)
    }
     

    // console.log(cont)
    this.scroll = false;

   // this.$refs["container"].scrollIntoView({behavior: 'smooth'});
        },


        scrollIntoView(scrollPos, menu) {
          this.scrollMenu = menu;

       window.scrollTo({ top: scrollPos, behavior: 'smooth' });
        },
        nextStep(){

        
          this.v$.$validate();

           if(this.v$.$error){ 
              window.scrollTo({ top: 0, behavior: 'smooth' });
           }

          // if(!this.v$.$error){
          //   alert("no error")
          // }else {
          //   alert("error")
          // }
          // console.log(this.companyName)
          this.$router.push('/operations-ownership')
        }
    },
    created(){

       

        window.addEventListener('scroll', this.handeleScroll)
    }
}
</script>
