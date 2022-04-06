<template>
     <div class="flex justify-between">
            <div class="w-[25%] ">
                <p class="text-base font-semibold">Billing</p>
                <p class=" text-xs text-gray-500">Set up your billing essentials. Manage billing rules, payment gateways, and more.</p>
            </div>

         

              <div class=" w-[54%]">
                <div class="bg-white shadow overflow-hidden sm:rounded-md">
      <ul role="list" class="list-group ">
           <li v-for="(billingList, index) in billingListDetails" :key="index">
               <billing-list :billing-list="billingList" ></billing-list>
            </li>
      </ul>
    </div>
            </div>
        </div>
</template>

<script>

import BillingList from "./BillingList.vue"

export default {
    components: {
        BillingList
    },
    computed:{
       billingListDetails() {
        return this.$store.getters['billing/billingListDetails']
      },

        test() {
            return this.$store.getters['billings/billingListDetails']
        }
    }
}
</script>