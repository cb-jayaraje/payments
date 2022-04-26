<template>
<h2>Course goal</h2>

<!-- <h3 v-if="goalIsVisible">{{goal}}</h3> -->
<h3 v-if="courseData.goalIsVisible">{{goal}}</h3>

<h4>{{ username }}</h4>

<!-- <input type="text" placeholder="Firstname" @input="setFirstName">
<input type="text" placeholder="Lastname" @input="setLastName"> -->
<input type="text" placeholder="Firstname" v-model="firstName">
<input type="text" placeholder="Lastname" v-model="lastName">

<button @click="toogleGoalVisibility"  class="bg-blue-400 text-white">CLick</button>

</template>

<script>

import  { ref, reactive, computed} from 'vue'

export default {
    setup() {
        // const courseGoal = 'Finsh my course';
        // const goalIsVisible = ref(false);
        const firstName = ref('');
        const lastName = ref('');

        const courseData = ref({
            goal: 'Finsih the course',
            goalIsVisible: false
        })

        const uMergedName = computed(function(){
           return firstName.value +' '+ lastName.value
        })

      

        function toogleGoalVisibility(){
            // goalIsVisible.value = !goalIsVisible.value;
            courseData.value.goalIsVisible = !courseData.value.goalIsVisible
        }

        function setFirstName(event){
            firstName.value = event.target.value
        }

        function setLastName(event) {
            lastName.value = event.target.value
        }

        

        return {
            goal: courseData.value.goal,
            // goalIsVisible,
            courseData,
            toogleGoalVisibility,
           username: uMergedName,
           firstName,
           lastName
        }
    },
}
</script>