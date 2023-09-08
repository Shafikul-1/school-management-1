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
                <section class="text-center text-lg-start">
                
                <!-- Jumbotron -->
                <div class="container py-4">
                    <div class="row g-0 align-items-center">
                    <div class="col-lg-6 mb-5 mb-lg-0">
                        <div class="card cascading-right LOGIN_SHADOW" style="backdrop-filter: blur(30px);">
                            <div class="card-body p-5 shadow-5 ">
                                <h2 class="fw-bold mb-5 text-capitalize">Login now</h2>
                                <form>
                                <!-- 2 column grid layout with text inputs for the first and last names -->
                                    <div class="row"> 
                                        <div class="col-md-12 mb-4">
                                            <div class="form-outline">
                                                <label class="form-label text-capitalize" for="form3Example2">User Id Card Number</label>
                                                <input type="number" id="form3Example2" class="form-control" placeholder="Enter Your Id Card Number"/>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Email input -->
                                    <div class="form-outline mb-4">
                                        <label class="form-label text-capitalize" for="form3Example3">Email address</label>
                                        <input type="email" id="form3Example3" class="form-control" placeholder="Enter Your Email Address"/>
                                    </div>

                                    <!-- Password input -->
                                    <div class="form-outline mb-4">
                                        <label class="form-label text-capitalize" for="form3Example4">Password</label>
                                        <input type="password" id="form3Example4" class="form-control" placeholder="Enter Your Password"/>
                                    </div>

                                    <!-- Checkbox -->
                                    <div class="form-check d-flex justify-content-between mb-4">
                                        <div class="d-flex">
                                            <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33"  />
                                            <label class="form-check-label text-capitalize" for="form2Example33"> accept all trans and condition </label>
                                        </div>
                                        <RouterLink to="/" class="text-capitalize text-capitalize link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">forgotton password</RouterLink>
                                    </div>

                                    <!-- Submit button -->
                                    <button type="submit" class="btn btn-primary btn-block mb-4 loginBtn">login</button>

                                    <!-- Register buttons -->
                                    <div class="text-center">
                                        <p class="text-capitalize">or <RouterLink to="/signup" class="text-capitalize link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">sign up</RouterLink> </p>

                                        <button type="button" class="btn btn-link btn-floating mx-1"><i class="fab fa-facebook-f"></i></button>
                                        <button type="button" class="btn btn-link btn-floating mx-1"><i class="fab fa-google"></i></button>
                                        <button type="button" class="btn btn-link btn-floating mx-1"><i class="fab fa-twitter"></i></button>
                                        <button type="button" class="btn btn-link btn-floating mx-1"><i class="fab fa-github"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 mb-5 mb-lg-0">
                        <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" class="w-100 rounded-4 shadow-4"
                        alt="" />
                    </div>
                    </div>
                </div>
                <!-- Jumbotron -->
                </section>
                <!-- Section: Design Block -->
            </div>
        </div>
     </div>


<Footer/>
</template>
<style scoped>
    .cascading-right {
      margin-right: -50px;
    }
.loginBtn{
    padding: 7px 34px;
    text-transform: capitalize;
    font-size: 18px;
    font-weight: 500;
}
    @media (max-width: 991.98px) {
      .cascading-right {
        margin-right: 0;
      }
    }
.LOGIN_SHADOW{
    background: linear-gradient(90deg, #a2a2a261, transparent);
}
  </style>
