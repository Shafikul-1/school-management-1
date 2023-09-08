<script setup>
import { RouterLink } from 'vue-router';
import Navbar from '../../components/Navbar.vue';
import Slider from '../../components/Slider.vue';
import Footer from '../../components/Footer.vue';
</script>

<template>
<Slider/>
<Navbar/>


     <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <!-- Section: Design Block -->
                <section class="background-radial-gradient overflow-hidden">
                    <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                        <div class="row gx-lg-5 align-items-center mb-5">
                        <div class="col-lg-6 mb-5 mb-lg-0" style="z-index: 10">
                            <h1 class="my-5 display-5 fw-bold ls-tight" style="color: hsl(218, 81%, 95%)">
                            The best offer <br />
                            <span style="color: hsl(218, 81%, 75%)">Login Page</span>
                            </h1>
                            <p class="mb-4 opacity-70" style="color: hsl(218, 81%, 85%)">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Temporibus, expedita iusto veniam atque, magni tempora mollitia
                            dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                            ab ipsum nisi dolorem modi. Quos?
                            </p>
                        </div>

                        <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
                            <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
                            <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>

                            <div class="card bg-glass">
                                <div class="card-body px-4 py-5 px-md-5"> 
                                    <form @submit.prevent>
                                    <!-- 2 column grid layout with text inputs for the first and last names -->
                                    <div class="row">
                                        <div class="col-md-12 mb-4">
                                        <div class="form-outline">
                                            <label class="form-label text-capitalize linkAll" for="form3Example1">Your ID Card Number</label>
                                            <input type="number" id="form3Example1" class="form-control" placeholder="Enter Your ID Card Number" required/>
                                        </div>
                                        </div>
                                    </div>

                                    <!-- Email input -->
                                    <div class="form-outline mb-4">
                                        <label class="form-label text-capitalize linkAll" for="form3Example3">Email address</label>
                                        <input type="email" id="form3Example3" class="form-control " placeholder="Enter Your Email Address" required />
                                    </div>

                                    <!-- Password input -->
                                    <div class="form-outline mb-4">
                                        <label class="form-label text-capitalize linkAll" for="form3Example4">Password</label>
                                        <input type="password" id="form3Example4" class="form-control" placeholder="Enter Your Password" required/>
                                    </div>

                                    <!-- Checkbox -->
                                    <div class="form-check d-flex justify-content-between mb-4">
                                        <div class="d-flex ">
                                            <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" />
                                            <label class="form-check-label text-capitalize linkAll" for="form2Example33"> Are Your sure Login </label>
                                        </div>
                                        <RouterLink to="" class="text-capitalize link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">forgotton password</RouterLink>
                                    </div>

                                    <!-- Submit button -->
                                    <button type="submit" class="btn btn-primary text-capitalize btn-block mb-4 loginBtn "> Login</button>

                                    <!-- Register buttons -->
                                    <div class="text-center">
                                        <p class="text-capitalize linkAll">or <RouterLink class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="/signup">sign up</RouterLink></p>

                                        <button type="button" class="btn linkAll btn-floating mx-1"><i class="fab fa-facebook-f"></i></button>
                                        <button type="button" class="btn linkAll btn-floating mx-1"><i class="fab fa-google"></i></button>
                                        <button type="button" class="btn linkAll btn-floating mx-1"><i class="fab fa-twitter"></i></button>
                                        <button type="button" class="btn linkAll btn-floating mx-1"> <i class="fab fa-github"></i></button>
                                    </div>
                                </form>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                <!-- Section: Design Block -->
            </div>
        </div>
     </div>



<Footer/>
</template>
<style scoped>
    .background-radial-gradient {
      background-color: hsl(218, 41%, 15%);
      background-image: radial-gradient(650px circle at 0% 0%,
          hsl(218, 41%, 35%) 15%,
          hsl(218, 41%, 30%) 35%,
          hsl(218, 41%, 20%) 75%,
          hsl(218, 41%, 19%) 80%,
          transparent 100%),
        radial-gradient(1250px circle at 100% 100%,
          hsl(218, 41%, 45%) 15%,
          hsl(218, 41%, 30%) 35%,
          hsl(218, 41%, 20%) 75%,
          hsl(218, 41%, 19%) 80%,
          transparent 100%);
    }

    #radius-shape-1 {
      height: 220px;
      width: 220px;
      top: -60px;
      left: -130px;
      background: radial-gradient(#44006b, #ad1fff);
      overflow: hidden;
    }

    #radius-shape-2 {
      border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;
      bottom: -60px;
      right: -110px;
      width: 300px;
      height: 300px;
      background: radial-gradient(#44006b, #ad1fff);
      overflow: hidden;
    }

    .bg-glass {
      background: linear-gradient(45deg, #6c6c6c87, transparent);
      backdrop-filter: saturate(200%) blur(25px);
    }

    .loginBtn{
    padding: 7px 30px;
    font-weight: 600;
    font-size: 18px;
    }
 .linkAll{
    color: white;
 }
 .linkAll.btn-floating:hover{
    color: blue;
 }
  </style>