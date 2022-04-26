<template>
   
       
              <a @click="goto(billingList.link)"  class="block hover:bg-gray-50 cursor-pointer">
                <div class="list-group--card">
                  <div class="list-group--body">
                    <div class="truncate">
                      <div class="flex text-sm">
                        <p class="list-group__title text-black" >
                          {{billingList.title}}</p>
                      
                      </div>
                      <div class="mt-1flex">
                        <div class="list-group__subtext">
                      
                          <p >
{{billingList.subTitle}}
                            
                          </p>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  <div class="list-group--icon flex items-center">
                      <div class="text-xs italic text-gray-500">{{billingList.text}}</div>
                    <!-- Heroicon name: solid/chevron-right -->
                    <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
              </a>

</template>

<script>import router from "../../router";

    export default {

        props: {
            billingList: Object
        },
        methods: {
          goto(link) {
           
            router.push(link)
          }
        }

    }
</script>