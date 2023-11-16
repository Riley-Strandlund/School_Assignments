<script setup>
import BodyMassIndexForm from './components/BodyMassIndexForm.vue'

import { ref } from 'vue'

const bmi = ref('')

const reformatStatsEntered = ({ heightInput, weightInput}) => {
  BMICalculation(heightInput, weightInput)
}

const BMICalculation = (heightInput, weightInput) => {
  bmi.value = (weightInput / (heightInput * heightInput)).toFixed(2)
}

</script>

<template>
  <div id="app-component">
    <h1>Body Mass Index Calculator</h1>

    <BodyMassIndexForm
    v-on:stats-entered="reformatStatsEntered"
    ></BodyMassIndexForm>
    <div id="bmi-style">
      BMI is: {{ bmi }}
    </div>
    

  </div>

</template>


<style scoped>
  #app-component{
    background-color: bisque;
    padding: 5%;
    overflow: hidden;
    color: rgb(134, 81, 0);
    -webkit-text-stroke-width: .5px;
    -webkit-text-stroke-color: black;
  }
  #bmi-style {
    padding-top: 2%;
    font-size: 20px;
    font-weight: 1000;
      }
</style>
