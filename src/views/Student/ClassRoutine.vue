<script setup>
import { ref, reactive } from 'vue'
import Slider from '../../components/Slider.vue';
import Navbar from '../../components/Navbar.vue';
import LeftSideView from '../Home/LeftSideView.vue';
import RightSideView from '../Home/RightSideView.vue';
import Footer from '../../components/Footer.vue';
import axios from 'axios';

// let allReotren = reactive([])
// async function alldata(){
//   try {
//     let url = 'http://localhost:3000/allreotren'
//     let res = await axios.get(url)
//     console.log(res.data)
//     allReotren = res.data.data
//   } catch (error) {
//     console.log(error)
//   }
// }
// alldata()
// console.log( 'al data =>' + allReotren)





const allReotren = reactive([
  {
    className: 'Class name one',
    toggle: true,
    classRotine: [
      {
        dayName: 'sunday',
        subjectAndTime: [
          {
            name: 'englilsh',
            time: '11-01'
          },
          {
            name: 'englilsh',
            time: '11-01'
          },
          {
            name: 'englilsh',
            time: '11-01'
          },
          {
            name: 'englilsh',
            time: '11-01'
          },
          {
            name: 'englilsh',
            time: '11-01'
          },
          {
            name: 'englilsh',
            time: '11-01'
          },
          {
            name: 'englilsh',
            time: '11-01'
          },
        ]
      }
    ]
  },
  {
    className: 'Class name one',
    toggle: true,
    classRotine: [
      {
        dayName: 'sunday',
        subjectAndTime: [
          {
            name: 'englilsh',
            time: '11-01'
          },
          {
            name: 'englilsh',
            time: '11-01'
          },
          {
            name: 'englilsh',
            time: '11-01'
          },
          {
            name: 'englilsh',
            time: '11-01'
          },
          {
            name: 'englilsh',
            time: '11-01'
          },
          {
            name: 'englilsh',
            time: '11-01'
          },
          {
            name: 'englilsh',
            time: '11-01'
          },
        ]
      }
    ]
  },
  {
    className: 'Class name one',
    toggle: true,
    classRotine: [
      {
        dayName: 'sunday',
        subjectAndTime: [
          {
            name: 'englilsh',
            time: '11-01'
          },
          {
            name: 'englilsh',
            time: '11-01'
          },
          {
            name: 'englilsh',
            time: '11-01'
          },
          {
            name: 'englilsh',
            time: '11-01'
          },
          {
            name: 'englilsh',
            time: '11-01'
          },
          {
            name: 'englilsh',
            time: '11-01'
          },
          {
            name: 'englilsh',
            time: '11-01'
          },
        ]
      }
    ]
  },
])


</script>

<template>
<!-- All pages will have it -->
<Slider/>
<Navbar/>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <RightSideView/>
      </div>
<!-- Current Page Content -->
      <div class="col-md-6">
<!-- Right Side Content -->
        <div class="">
          <h1 class="text-center">Class Routine Page</h1>
<!-- Design Component -->
          <div class="d-flex justify-content-center">
            <i class="designLine fa-solid fa-ellipsis"></i>
            <i class="designLine fa-brands fa-centos"></i>
            <i class="designLine fa-solid fa-ellipsis"></i>
         </div>
         <ul class="list-unstyled d-flex text-capitalize gap-2">
          <li>Home /</li>
          <li>Class Routine /</li>
         </ul>
        </div>

<!-- All Work Start -->
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <template v-for="(allDetails, index) in allReotren" :key="index">
                <div class="panel panel-default" >
                    <div class="panel-heading"  @click="allDetails.toggle = !allDetails.toggle">
                      <h4 class="panel-title">
                        <a class="btn btn-primary toggleBtn btn-block w-100 text-capitalize">{{ allDetails.className }}</a>
                      </h4>
                    </div>
                    <div id="collapse3" class="panel-collapse" v-show=" allDetails.toggle == true">
                      <div class="panel-body">
                        <table class="table table-bordered my-2" v-for="(studentRoutine, index) in allDetails.classRotine" :key="index">
                          <tbody> 
                            <tr class="gradeA">
                              <td width="100" class=" dayNameStyle ">{{ studentRoutine.dayName }}</td>
                              <td>
                                <div class="btn-group">
                                  <span class="label ">
                                    <div class="row">
                                        <div class="col-md-3 classRotineGap" v-for="(sobDeatils, index) in studentRoutine.subjectAndTime" :key="index">   
                                          <button type="button" class="btn btn-warning rotuineDetalis" >{{ sobDeatils.name }} ({{ sobDeatils.time }})</button>
                                        </div>
                                    </div>
                                  </span>  
                                </div> 
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>

<!-- Left Side Content -->
      <div class="col-md-3">
        <LeftSideView/>
      </div>
    </div>
  </div> 
<!-- Footer Content -->
  <Footer/>
</template>

<style scoped>
.designLine{
  font-size: 3rem;
}

.toggleBtn{
  color: black;
}
.toggleBtn:hover{
  color: white;
}
.panel-default{
    background: #ffffff;
    border-radius: 13px;
    box-shadow: 0px 2px 2px 1px #cacaca78;
    padding: 4px;
    margin: 10px 0;
}
.panel-default > .panel-heading{
  background-color: #fff;
    border-color: #4ebd55;
}
.panel-default > .panel-heading .panel-title{
  margin: 0;
}
.btn.btn-primary{
  background: #45aed6;
    border-color: #2a95be;
}
.panel-default > .panel-heading + .panel-collapse > .panel-body{
  border-top-color: #eee;
}
.classRotineGap{
  margin: 2px 0;
}
.rotuineDetalis{
  font-size: 12px;
    text-transform: capitalize;
    font-weight: 600;
    padding: 2px 8px;
}
.dayNameStyle{
  display: flex;
  justify-content: center;
  align-items: center; 
  text-transform: capitalize;
  }

</style>