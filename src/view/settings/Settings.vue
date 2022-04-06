<template>
    <div class="min-h-full px-10 py-6">
        <!--page heading-->
        <div>
            <p class="text-xl font-semibold">Configure Chargebee</p>
            <p class=" text-xs text-gray-500">Set up how you manage subscriptions, customers, billing, and more.</p>
        </div>
        <!--page heading-->
        <div>
            <img src="./../../assets/images/image-1.png" alt="">
        </div>

        <div class="w-[83%]">

                 <!--billing-->
       <billing-lists></billing-lists>
        <!--billing ends-->
        <div class="h-6"></div>
        <img src="./../../assets/images/billing-2.png" alt="">
        
        </div>
    

    </div>
</template>

<script>

import BillingLists from "../../components/settings/BillingLists.vue"

export default {
    components: {
        BillingLists
    }
}
</script>