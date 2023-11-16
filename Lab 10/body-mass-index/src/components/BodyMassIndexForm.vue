<script setup>
import { ref } from 'vue'


const emit = defineEmits([
    'stats-entered'
])



const height = ref('')
const weight = ref('')

const buttonClicked = () =>{
    emit('stats-entered', 
    {heightInput: height.value, 
     weightInput: weight.value})
}

</script>

<template>
    <div id="child-component">
        <h2 id="input-title">Enter your height and weight</h2>
        <div>
            <label for="Height">Height in meters</label>
            <input v-model="height" type="number" id="Height" style="margin-left:45px">
            <br>
            <label for="Weight">Weight in Kilograms</label>
            <input v-model="weight" type="number" id="Weight" style="margin-left:13px">
            <br>
            <button v-on:click="buttonClicked" type="button" style="margin-top:20px" id="calculate">Calculate</button>
        </div>
    </div>

</template>

<style scoped>
    #child-component{
        background-color: beige;
        font-size: 125%;
        padding-top: 5%;
        padding-bottom: 5%;
        margin-left: 10%;
        margin-right: 10%;
    }
    #calculate{
       background-color: lightgray;
       border: solid black;
       cursor: pointer;
    }
</style>
