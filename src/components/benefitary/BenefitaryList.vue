<template>
     <div class="flex  px-3 py-3 border-b border-t-gray-400 justify-between " >
            <div class="  space-y-2 ">
              <p class="text-[#0052CC] text-sm font-medium">{{details.name}}</p>
              <a class=" text-gray-400 text-sm font-normal items-center gap-x-2 inline-flex"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
</svg> ricardo.cooper@example.com</a>
            </div>

            <div class="  space-y-2 ">
              <p class="text-gray-500 text-sm font-medium">Ownership Percentage - {{details.desc}}%</p>
              <a class=" text-gray-400 text-sm font-normal items-center gap-x-2 inline-flex"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
</svg> Tax ID - {{details.tax_id}}</a>
            </div>

            <div class=" relative" v-click-outside="onclickOusideModal">
            
              <svg  @click="onClickEdit" v-if="!editModal" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
</svg>
<svg v-else @click="closeEditModal" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg>
    <div v-show="editModal"  class=" z-20 origin-top-right absolute right-0 mt-2 w-42 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-1"     role="none" >
      <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0" @click.prevent="edit(details.id)">Edit</a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1" @click.prevent="remove(details.id)">Remove</a>
     
    </div>
  </div>
            </div>

          </div>
</template>

<script>
export default {

    props: {
        details: Object
    },
    data(){
      return {
        editModal: false,
       
      }
    },
    methods: {
      onClickEdit(){
        this.editModal = true
      },
      closeEditModal(){
       // console.log("click")
       this.editModal = false
      },
      onclickOusideModal(event){
        this.editModal = false
      },
      remove(id){
        this.editModal = false;
        this.$store.dispatch('beneDetails/removeBene', {id: id})
      },
      edit(id){
        this.editModal =false;
      
      }
    },
    created() {
        //console.log(this.details)
    }
    
}
</script>