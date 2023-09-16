<script setup>
import { ref } from 'vue'
const formContent= ref({
  
  dynamicSheet : [
    {
      id: 1,
      subject:{
        id: 1,
        type: 'text',
        content: 'Subject Name'
      },
      startTime: {
        id: 2,
        type: 'number',
        content: 'Class Start Time'
      },
      endTime: {
        id: 3,
        type: 'number',
        content: 'Class End Time'
      }
    }
  ]
})
function addItem() {
  // formContent.value.push()

  formContent.value.dynamicSheet.push(
    {
    subject: {
      id: formContent.value.length + 1, // Generate a unique ID
      type: 'text',
      content: 'Subject Name'
    },
    startTime: {
      id: formContent.value.length + 2, // Generate a unique ID
      type: 'number',
      content: 'Class Start Time'
    },
    endTime: {
      id: formContent.value.length + 3, // Generate a unique ID
      type: 'number',
      content: 'Class End Time'
    }
  }
  )
}

function removeItem(index) {
  if (formContent.value.dynamicSheet.length > 1) {
    formContent.value.dynamicSheet.splice(index, 1)
  }
}
</script>


<template>
 <div class="container">
   <div class="text">
    Daily Result Sheet
   </div>
   <form action="#">
      <div class="form-row">
         <div class="input-data">
            <input type="text" required>
            <div class="underline"></div>
            <label for="">Class Day Name</label>
         </div>
         <div class="input-data">
            <input type="text" required>
            <div class="underline"></div>
            <label for="">Saptaho Name</label>
         </div>
      </div>

      <div class="border border-3 border-success py-3 px-2 rounded-3 mt-3" v-for="item in formContent.dynamicSheet" :key="item.id">
        <div class="form-row d-flex justify-content-between">
          <div class="input-data">
              <input :type="item.subject.type" required>
              <div class="underline"></div>
              <label for="">{{ item.subject.content }}</label>
          </div>
          <div class="input-data text-end ">
            <i class="fa fa-plus plusIcon" @click="addItem()"></i>
            <i class="fa fa-minus plusIcon" @click="removeItem(1)"></i>
          </div>
        </div>
        <div class="form-row">
          <div class="input-data">
              <input :type="item.startTime.type" required>
              <div class="underline"></div>
              <label for="">{{ item.startTime.content }}</label>
          </div>
          <div class="input-data">
              <input :type="item.endTime.type" required>
              <div class="underline"></div>
              <label for="">{{ item.endTime.content }}</label>
          </div>
        </div>
      </div>

      <div class="form-row justify-content-between">
         <div class="input-data">
            <div class="form-row submit-btn">
               <div class="input-data">
                  <div class="inner"></div>
                  <input type="submit" value="submit">
               </div>
            </div>
          </div>
          <div class="">
            <div class="form-row submit-btn">
               <div class="input-data">
                  <div class="inner"></div>
                  <input type="button" value="submit">
               </div>
            </div>
         </div>
      </div>
   </form>
      
</div>
</template>


<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap");
* {
   margin: 0;
   padding: 0;
   outline: none;
   box-sizing: border-box;
   font-family: "Poppins", sans-serif;
}
body {
   display: flex;
   align-items: center;
   justify-content: center;
   min-height: 100vh;
   padding: 10px;
   font-family: "Poppins", sans-serif;
   background: linear-gradient(115deg, #56d8e4 10%, #9f01ea 90%);
}
.container {
   max-width: 800px;
   background: #fff;
   width: 800px;
   padding: 25px 40px 10px 40px;
   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
.container .text {
   text-align: center;
   font-size: 41px;
   font-weight: 600;
   font-family: "Poppins", sans-serif;
   background: -webkit-linear-gradient(
      right,
      #56d8e4,
      #9f01ea,
      #56d8e4,
      #9f01ea
   );
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
}
.container form {
   padding: 30px 0 0 0;
}
.container form .form-row {
   display: flex;
   margin: 22px 0;
}
form .form-row .input-data {
   width: 100%;
   height: 40px; 
   position: relative;
}
form .form-row .textarea {
   height: 70px;
}
.input-data input,
.textarea textarea {
   display: block;
   width: 100%;
   height: 100%;
   border: none;
   font-size: 17px;
   border-bottom: 2px solid rgba(0, 0, 0, 0.12);
}
.input-data input:focus ~ label,
.textarea textarea:focus ~ label,
.input-data input:valid ~ label,
.textarea textarea:valid ~ label {
   transform: translateY(-20px);
   font-size: 14px;
   color: #3498db;
}
.textarea textarea {
   resize: none;
   padding-top: 10px;
}
.input-data label {
   position: absolute;
   pointer-events: none;
   bottom: 10px;
   font-size: 16px;
   transition: all 0.3s ease;
}
.textarea label {
   width: 100%;
   bottom: 40px;
   background: #fff;
}
.input-data .underline {
   position: absolute;
   bottom: 0;
   height: 2px;
   width: 100%;
}
.input-data .underline:before {
   position: absolute;
   content: "";
   height: 2px;
   width: 100%;
   background: #3498db;
   transform: scaleX(0);
   transform-origin: center;
   transition: transform 0.3s ease;
}
.input-data input:focus ~ .underline:before,
.input-data input:valid ~ .underline:before,
.textarea textarea:focus ~ .underline:before,
.textarea textarea:valid ~ .underline:before {
   transform: scale(1);
}
.submit-btn .input-data {
   overflow: hidden;
   height: 45px !important;
   width: 25% !important;
}
.submit-btn .input-data .inner {
   height: 100%;
   width: 300%;
   position: absolute;
   left: -100%;
   background: -webkit-linear-gradient(
      right,
      #56d8e4,
      #9f01ea,
      #56d8e4,
      #9f01ea
   );
   transition: all 0.4s;
}
.submit-btn .input-data:hover .inner {
   left: 0;
}
.submit-btn .input-data input {
   background: none;
   border: none;
   color: #fff;
   font-size: 17px;
   font-weight: 500;
   text-transform: uppercase;
   letter-spacing: 1px;
   cursor: pointer;
   position: relative;
   z-index: 2;
}
@media (max-width: 700px) {
   .container .text {
      font-size: 30px;
   }
   .container form {
      padding: 10px 0 0 0;
   }
   .container form .form-row {
      display: block;
   }
   form .form-row .input-data {
      margin: 35px 0 !important;
   }
   .submit-btn .input-data {
      width: 40% !important;
   }
}

.plusIcon{
  font-size: 28px;
    background: gainsboro;
    padding: 11px;
    border-radius: 6px;
    cursor: pointer;
    margin-left: 30px;
}
.extra{
   display: flex;
}
</style>