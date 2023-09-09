<script setup>
import { ref } from 'vue'
import Slider from '../../components/Slider.vue';
import Navbar from '../../components/Navbar.vue';
import LeftSideView from '../Home/LeftSideView.vue';
import RightSideView from '../Home/RightSideView.vue';
import Footer from '../../components/Footer.vue';

const toggle = ref (true)
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
              <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a class="btn btn-primary btn-block">
                        <!-- <i class="icon-nav icon-star"></i> --> 
                        Class class two
                      </a>
                      </h4>
                    </div>
                    <div id="collapse3" class="panel-collapse collapse in">
                      <div class="panel-body">
                        <table cellpadding="0" cellspacing="0" border="0" class="table table-bordered">
                          <tbody>
                            <tr class="gradeA">
                              <td width="100">SATURDAY</td>
                              <td>
                              </td>
                            </tr>
                            <tr class="gradeA">
                              <td width="100">SUNDAY</td>
                              <td>
                                <div class="btn-group">
                                  <span class="label label-success">
                                    English (10-11)
                                  </span>  
                                </div>
                                <div class="btn-group">
                                  <span class="label label-success">
                                    English(10-7)
                                  </span>  
                                </div>
                              </td>
                            </tr>
                            <tr class="gradeA">
                              <td width="100">MONDAY</td>
                              <td>
                              </td>
                            </tr>
                            <tr class="gradeA">
                              <td width="100">TUESDAY</td>
                              <td>
                                <div class="btn-group">
                                  <span class="label label-success">
                                    English (17-7)
                                  </span>  
                                </div>
                              </td>
                            </tr>
                            <tr class="gradeA">
                              <td width="100">WEDNESDAY</td>
                              <td>
                              </td>
                            </tr>
                            <tr class="gradeA">
                              <td width="100">THURSDAY</td>
                              <td>
                              </td>
                            </tr>
                            <tr class="gradeA">
                              <td width="100">FRIDAY</td>
                              <td>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
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
body{
  font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: #444;
    line-height: 26px;
    background: rgba(0,0,0,0.1) url(../images/header_bg.png);
}
.panel-default{
  border-color: #eee;
}
.panel-default > .panel-heading{
  background-color: #fff;
    border-color: #eee;
}
.panel-default > .panel-heading .panel-title{
  font-size: 14px;
    font-weight: normal;
}
.btn.btn-primary{
  background: #45aed6;
    border-color: #2a95be;
}
.btn{
  border-width: 0;
    border-bottom-width: 3px;
    border-radius: 3px;
}
.panel-default > .panel-heading + .panel-collapse > .panel-body{
  border-top-color: #eee;
}
</style>