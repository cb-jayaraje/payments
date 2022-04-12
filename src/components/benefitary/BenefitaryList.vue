<template>
     <div class="flex  px-3 py-3 border-b border-t-gray-400 justify-between">
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

            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
</svg>
            </div>

          </div>
</template>

<script>
export default {

    props: {
        details: Object
    },
    created() {
        console.log(this.details)
    }
    
}
</script>