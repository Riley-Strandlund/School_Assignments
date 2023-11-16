Parent
Styles will be applied to children as well.
<script setup>//setup replaces the setup from earlier labs
import WouldYouRather from './components/WouldYouRather.vue'

import { ref } from 'vue'

const wyrQuestion = ref('Live in a house shaped like a triangle or a house shaped like a circle')
const wyrAnswer1 = ref('Triangle house')
const wyrAnswer2 = ref('Circle house')



const userSelection = ref('')// this will store the user's answer once they make a choice

function updateUserSelection(userChoice) {
  userSelection.value = `Thanks! You chose ${userChoice}`
}

</script>

<template><!-- Template isn't JavaScript but Vue specific--><!-- Template at least 'partially' replaces the <div id="app"> -->
 
 <div id="app-component">

    <h1>Would You Rather?</h1>

    <!-- The below code references another component file. The below is another 'box' in the vue dev tools-->
    <WouldYouRather 
    v-bind:question="wyrQuestion" 
    v-bind:answer1="wyrAnswer1" 
    v-bind:answer2="wyrAnswer2"
    v-on:answer-selected="updateUserSelection"
    ></WouldYouRather><!--The string can be anything even if it is manually typed in it-->

    <p>{{ userSelection }}</p>

 </div>


</template>

<style scoped>
#app-component {
  font-size: 1em;
  background-color: aqua;
  padding: 40px;
}

p {
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
}
</style>
