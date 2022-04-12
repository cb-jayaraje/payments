

<template>
    <section>

         <div class=" p-10 max-w-7xl ">
            <div class="grid grid-cols-12 ">
                <!-- left -->
           
                    <aside class="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-2 hidden md:block" >
      <nav class="space-y-1 nav " :class="scroll ? 'fixed pt-40' : 'static'" >
        <!-- Current: "bg-gray-50 text-indigo-700 hover:text-indigo-700 hover:bg-white", Default: "text-gray-900 hover:text-gray-900 hover:bg-gray-50" -->
        <button @click="scrollIntoView" class="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium" aria-current="page">
         
          <svg class="text-indigo-500 group-hover:text-indigo-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span class="truncate">
           Business Profile
          </span>
        </button>
  
        <a href="#additional_contact" class="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium">
          <!-- Heroicon name: outline/key -->
          <svg class="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
          </svg>
          <span class="truncate">
            Additional Contact
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
              <h3 class="text-lg leading-6 font-medium text-gray-900">        Business Profile</h3>
            </div>
  
            <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-4">
                                <div class="form-control">
            <label for="email" class="label">Company Name</label>
            <div class="mt-1">
              <input type="text" name="companyName" id="companyName" class="input" >
                <p class="help-text" id="email-description">Your full legal name</p>
            </div>
          </div>
                
                </div>
                 <div class="col-span-6 sm:col-span-4">
                                <div class="form-control">
            <label for="email" class="label">Doing Business as</label>
            <div class="mt-1">
              <input type="text" name="companyName" id="companyName" class="input" >
                <p class="help-text" id="email-description">Support Text</p>
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
            </div>
          </div>
                
                
                </div>
                 <div class="col-span-6 sm:col-span-4">
                                
                      <div class="form-control">
            <label for="email" class="label">Address Line 2</label>
            <div class="mt-1">
              <input type="email" name="email" id="email" class="input" >
            </div>
          </div>
                
                
                </div>
                <div class="col-span-2"></div>
                  <div class="col-span-2 ">
                <label for="first-name" class="block text-sm font-medium text-gray-700">City</label>
                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              </div>
  
              <div class="col-span-2 ">
                <label for="last-name" class="block text-sm font-medium text-gray-700">State / Province</label>
                <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              </div>

               <div class="col-span-2 ">
                <label for="last-name" class="block text-sm font-medium text-gray-700">ZIP / Postal</label>
                <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              </div>
             
               <div>
                   
               </div>

        
  
            
  
  
             
            </div>
          </div>
          
        </div>
      </form>

   

  

      <div class=" h-32"></div>
    </div>
            <!-- right ends -->
            </div>

        </div>

    </section>
</template>

<script>
export default {
    data(){
        return {
            scroll:false
        }
    },
    computed: {
         scroll() {
            return this.scroll
        }
    },
    methods: {
        handeleScroll(event){
            let scrollPostion = document.documentElement.scrollTop;
             console.log(scrollPostion)
             
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
     console.log(scrollPostion)
    let cont = document.querySelector('#container')
    const contt = this.$refs['container'].getBoundingClientRect().top;
    let conttt = contt;

    if(contt <= scrollPostion){
        window.scrollTo(0, contt - 350)
    }
     

    console.log(cont)
    this.scroll = false;

   // this.$refs["container"].scrollIntoView({behavior: 'smooth'});
        }
    },
    created(){

       

        window.addEventListener('scroll', this.handeleScroll)
    }
}
</script>
