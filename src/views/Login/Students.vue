<script setup>
import { RouterLink } from 'vue-router';
import Navbar from '../../components/Navbar.vue';
import Slider from '../../components/Slider.vue';
import Footer from '../../components/Footer.vue';

const studentsLogin = [
    {
        label: 'Enter Your Email Address',
        input: {
            type: 'email',
            placeholder: 'Enter Your Email Address'
        }
    },
    {
        label: 'Enter Your Password',
        input: {
            type: 'password',
            placeholder: 'Enter Your Password'
        }
    },
   
]
</script>

<template>
<Slider/>
<Navbar/>


<div class="form-bg my-5">
    <div class="container">
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4 col-md-offset-4">
                <div class="form-container">
                    <div class="form-icon"><i class="fa fa-user"></i></div>
                    <h3 class="title">Login</h3>
                    <form @submit.prevent class="form-horizontal">
                        <div class="form-group" v-for="(loginInput, index) in studentsLogin" :key="index">
                            <label class="text-capitalize mb-2">{{ loginInput.label }}</label>
                            <input class="form-control"  :type="loginInput.input.type" :placeholder="loginInput.input.placeholder">
                        </div> 
                        <input type="submit" class="btn btn-defult" value="Login">
                    </form>
                    <RouterLink to="/" class="text-center">Forget Password</RouterLink>
                    <p class="text-muted text-center mt-3 mb-0">Don't have an account? <RouterLink to="/signup" class="text-primary ml-1 text-capitlize">Register</RouterLink></p>
                </div>
                
            </div>
            <div class="col-md-4"></div>
        </div>
    </div>
</div>



<Footer/>
</template>
<style scoped>
.demo{ background: #F2F2F2; }
.form-container{
    background: #ecf0f3;
    font-family: 'Nunito', sans-serif;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;
}
.form-container .form-icon{
    color: #ac40ab;
    font-size: 55px;
    text-align: center;
    line-height: 100px;
    width: 100px;
    height:100px;
    margin: 0 auto 15px;
    border-radius: 50px;
    box-shadow: 7px 7px 10px #cbced1, -7px -7px 10px #fff;
}
.form-container .title{
    color: #ac40ab;
    font-size: 25px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align: center;
    margin: 0 0 20px;
}
.form-container .form-horizontal .form-group{ margin: 0 0 25px 0; }
.form-container .form-horizontal .form-group label{
    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;
}
.form-container .form-horizontal .form-control{
    color: #333;
    background: #ecf0f3;
    font-size: 15px;
    height: 50px;
    padding: 20px;
    letter-spacing: 1px;
    border: none;
    border-radius: 50px;
    box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px #fff;
    display: inline-block;
    transition: all 0.3s ease 0s;
}
.form-container .form-horizontal .form-control:focus{
    box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px #fff;
    outline: none;
}
.form-container .form-horizontal .form-control::placeholder{
    color: #808080;
    font-size: 14px;
}
.form-container .form-horizontal .btn{
    color: #000;
    background-color: #ac40ab;
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
    width: 100%;
    padding: 12px 15px 11px;
    border-radius: 20px;
    box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px #fff;
    border: none;
    transition: all 0.5s ease 0s;
}
.form-container .form-horizontal .btn:hover,
.form-container .form-horizontal .btn:focus{
    color: #fff;
    letter-spacing: 3px;
    box-shadow: none;
    outline: none;
}
</style>