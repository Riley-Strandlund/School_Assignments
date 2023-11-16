Child
emits events when new data is revcieved
styles only apply to their component or each child file never parent
<script setup>//Earlier labs we had to return variables, with vite the build returns it for you.
import { ref, watch } from 'vue'

defineProps({//"My parent component will tell me what these are. I'll get told what they are."
  question: String,
  answer1: String,
  answer2: String
})

const emit = defineEmits([
  'answer-selected'
])

const choice = ref('')

/*function choiceMade() { 
  // emit event tot tell parent that user has made choice.
  emit('answer-selected', choice.value)
} 1st way to do this*/

//watch() watches the choice variable then emits when choice is made
watch(choice, () => {
  emit('answer-selected', choice.value)//function returns another function emit(function-name, dataToSend)
})

</script>

<template>

<div id="wyr">
  <h2>Make Your Choice!</h2>

  <p>{{ question }}</p>

  <div>
    <input v-model="choice" v-bind:value="answer1" type="radio" id="answer-1"> <!--1st way, add v-on:change="choiceMade"-->
    <label for="answer-1">{{ answer1 }}</label>

    <input v-model="choice" v-bind:value="answer2" type="radio" id="answer-2"><!-- 1st way, add v-on:change="choiceMade"-->
    <label for="answer-2">{{ answer2 }}</label>  
  </div>
</div>

</template>

<style scoped>
#wyr {
  background-color: lightblue;
  padding: 2%;
  font-size: 15px;
}
p {
  font-family: fantasy;
}

</style>
