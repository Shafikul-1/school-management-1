<script setup>
const ExamPage = 'This is a exam page'
</script>

<template>
    <h1 class="text-4xl text-center font-bold bg-indigo-800">{{ ExamPage }}</h1>


    <div class="counter">
        <div class="counter-icon">
            <i class="fa-solid fa-user-graduate"></i>
        </div>
        <span class="counter-value">17</span>
        <h3>শিক্ষার্থী </h3>
    </div>
</template>
<style scoped>
.counter{
    text-align: center;
    height: 210px;
    width: 210px;
    padding: 7px 4px 0;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}
.counter:before{
    content: '';
    background-color: #fff;
    height: 157px;
    width: 157px;
    border-radius: 15px;
    border: 5px solid #202c45;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2) inset;
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: -1;
}
.counter .counter-icon{
    color: #fff;
    background: linear-gradient(#f2184f,#d50d3f);
    line-height: 70px;
    font-size: 30px;
    height: 70px;
    width: 70px;
    margin: 0 auto 8px;
    border-radius: 19px 0 50px;
    transform: rotate(45deg);
}
.counter .counter-icon i{
    transform: rotate(-45deg);
}
.counter .counter-value{
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 1px;
    margin: 0 0 5px 0;
    display: block;
    font-family: 'Poppins';
    color: #202c45;
}
.counter h3{
    color: #fff;
    background: linear-gradient(#22253a,#424971);
    font-size: 18px;
    letter-spacing: 1px;
    text-transform: capitalize;
    padding: 10px 5px;
    margin: 0;
    border-radius: 0 0 20px 20px;
    position: relative;
}
.counter h3:before, .counter h3:after{
    content: "";
    background: linear-gradient(to right bottom, transparent 49%,#424971 50%);
    width: 20px;
    height: 20px;
    position: absolute;
    top: -20px;
    left: 0;
    z-index: -2;
}
.counter h3:after{
    transform: rotateY(180deg);
    left: auto;
    right: 0;
} 
</style>
