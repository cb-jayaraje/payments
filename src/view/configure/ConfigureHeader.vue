<template>
    
    <div class="bg-white h-16 w-full shadow-md flex justify-between px-4 items-center ">
       <div class="flex items-center gap-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <div>
                <p class=" text-xs text-blue-500">{{breadcrumb}}</p>
                <p class="text-base">{{pageTitle}}</p>
            </div>
       </div>

        <div v-show="isActionButton">
            
             <button type="button" @click="$router.push('/')" class="btn-outline px-4 py-2 text-sm items-center ">
              Go Back To Chargebee App</button>
                
        </div>

    </div>
</template>

<script>

export default {
    props: {
        pageTitle: String,
        breadcrumb: String,
        isAction1: Boolean,
        
    },
    computed:{
        isActionButton(){
            return this.isAction1
        }
    },
    mounted(){
        
    }
}
</script>