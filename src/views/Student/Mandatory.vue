<script setup>
import Slider from '../../components/Slider.vue';
import Navbar from '../../components/Navbar.vue';
import LeftSideView from '../Home/LeftSideView.vue';
import RightSideView from '../Home/RightSideView.vue';
import Footer from '../../components/Footer.vue';
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
          <h1 class="text-center">Mandatory Page</h1>
<!-- Design Component -->
          <div class="d-flex justify-content-center">
            <i class="designLine fa-solid fa-ellipsis"></i>
            <i class="designLine fa-brands fa-centos"></i>
            <i class="designLine fa-solid fa-ellipsis"></i>
         </div>
         <ul class="list-unstyled d-flex text-capitalize gap-2">
          <li>Home /</li>
          <li>Mandatory /</li>
         </ul>
        </div>

<!-- All Work Start -->
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">

              <div class="container">
                <div class="row justify-content-center product-grid-style">

                    <div class="col-11 col-sm-6 col-lg-4 col-xl-3">

                        <div class="product-details">

                            <div class="product-img">

                                <div class="label-offer bg-red">Menditory</div><img src="https://www.bootdey.com/image/480x480/6495ED/000000" alt="...">

                                <div class="product-cart">
                                    <a href="#!"><i class="fa-solid fa fa-eye"></i></a>
                                    <a href="#!"><i class="fas fa-cart-plus"></i></a>
                                    <a href="#!"><i class="fas fa-heart"></i></a>
                                </div>

                            </div>

                            <div class="product-info">
                                <h5 >Demo Condition</h5>
                                <p class="price text-center m-0">
                                    <span class="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda quidem ut odit fuga quo omnis placeat dolores numquam atque doloribus.</span> 
                                </p>
                            </div>

                        </div>

                    </div>
                    <div class="col-11 col-sm-6 col-lg-4 col-xl-3">

                        <div class="product-details">
                            <div class="product-img">

                                <img src="https://www.bootdey.com/image/480x480/FF1493/000000" alt="...">

                                <div class="product-cart">
                                    <a href="#!"><i class="fa-solid fa fa-eye"></i></a>
                                    <a href="#!"><i class="fas fa-cart-plus"></i></a>
                                    <a href="#!"><i class="fas fa-heart"></i></a>
                                </div>

                            </div>
                            <div class="product-info">
                                <a href="#!">Modern Chair</a>
                                <p class="price text-center m-0 ">
                                    <span class="red line-through me-2">$500</span>
                                    <span>$300</span>
                                </p>
                            </div>

                        </div>
                    </div>

                    <div class="col-11 col-sm-6 col-lg-4 col-xl-3">

                        <div class="product-details">
                            <div class="product-img">

                                <div class="label-offer bg-primary-solid">Menditory</div><img src="https://www.bootdey.com/image/480x480/5F9EA0/000000" alt="...">

                                <div class="product-cart">
                                    <a href="#!"><i class="fa-solid fa fa-eye"></i></a>
                                    <a href="#!"><i class="fas fa-cart-plus"></i></a>
                                    <a href="#!"><i class="fas fa-heart"></i></a>
                                </div>

                            </div>
                            <div class="product-info">
                                <a href="#!">Coffee Mug</a>
                                <p class="price text-center m-0">
                                    <span class="red line-through me-2">$200</span>
                                    <span>$100</span>
                                </p>
                            </div>

                        </div>

                    </div>
                    <div class="col-11 col-sm-6 col-lg-4 col-xl-3">
                        <div class="product-details">
                            <div class="product-img">

                                <div class="label-offer bg-red">Menditory</div><img src="https://www.bootdey.com/image/480x480/7FFF00/000000" alt="...">

                                <div class="product-cart">
                                    <a href="#!"><i class="fa-solid fa fa-eye"></i></a>
                                    <a href="#!"><i class="fas fa-cart-plus"></i></a>
                                    <a href="#!"><i class="fas fa-heart"></i></a>
                                </div>

                            </div>
                            <div class="product-info">
                                <a href="#!">Sneakers Shoe</a>
                                <p class="price text-center m-0">
                                    <span class="red line-through me-2">$1200</span>
                                    <span>$900</span>
                                </p>
                            </div>

                        </div>

                    </div>
                    <div class="col-11 col-sm-6 col-lg-4 col-xl-3">

                        <div class="product-details">
                            <div class="product-img">

                                <img src="https://www.bootdey.com/image/480x480/FF7F50/000000" alt="...">
                                <div class="product-cart">
                                    <a href="#!"><i class="fa-solid fa fa-eye"></i></a>
                                    <a href="#!"><i class="fas fa-cart-plus"></i></a>
                                    <a href="#!"><i class="fas fa-heart"></i></a>
                                </div>
                            </div>
                            <div class="product-info">
                                <a href="#!">Nikon Camera</a>
                                <p class="price text-center m-0">
                                    <span class="red line-through me-2">$399</span>
                                    <span>$199</span>
                                </p>
                            </div>

                        </div>

                    </div>
                    <div class="col-11 col-sm-6 col-lg-4 col-xl-3">

                        <div class="product-details">
                            <div class="product-img">

                                <div class="label-offer bg-primary-solid">New</div><img src="https://www.bootdey.com/image/480x480/6495ED/000000" alt="...">
                                <div class="product-cart">
                                    <a href="#!"><i class="fa-solid fa fa-eye"></i></a>
                                    <a href="#!"><i class="fas fa-cart-plus"></i></a>
                                    <a href="#!"><i class="fas fa-heart"></i></a>
                                </div>
                            </div>
                            <div class="product-info">
                                <a href="#!">Contrast Backpack</a>
                                <p class="price text-center m-0">
                                    <span class="red line-through me-2">$800</span>
                                    <span>$699</span>
                                </p>
                            </div>

                        </div>

                    </div>
                    <div class="col-11 col-sm-6 col-lg-4 col-xl-3">

                        <div class="product-details">
                            <div class="product-img">

                                <div class="label-offer bg-red">Sale</div><img src="https://www.bootdey.com/image/480x480/6495ED/000000" alt="...">
                                <div class="product-cart">
                                    <a href="#!"><i class="fa-solid fa fa-eye"></i></a>
                                    <a href="#!"><i class="fas fa-cart-plus"></i></a>
                                    <a href="#!"><i class="fas fa-heart"></i></a>
                                </div>
                            </div>
                            <div class="product-info">
                                <a href="#!">Wodden Table</a>
                                <p class="price text-center m-0">
                                    <span class="red line-through me-2">$199</span>
                                    <span>$99</span>
                                </p>
                            </div>

                        </div>

                    </div>
                    <div class="col-11 col-sm-6 col-lg-4 col-xl-3">

                        <div class="product-details">
                            <div class="product-img">

                                <div class="label-offer bg-red">Sale</div><img src="https://www.bootdey.com/image/480x480/DC143C/000000" alt="...">

                                <div class="product-cart">
                                    <a href="#!"><i class="fa-solid fa fa-eye"></i></a>
                                    <a href="#!"><i class="fas fa-cart-plus"></i></a>
                                    <a href="#!"><i class="fas fa-heart"></i></a>
                                </div>

                            </div>
                            <div class="product-info">
                                <a href="#!">Handbag</a>
                                <p class="price text-center m-0">
                                    <span class="red line-through me-2">$99</span>
                                    <span>$59</span>
                                </p>
                            </div>
                        </div>
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
margin-top:20px;
background:#F0F8FF;
}
.product-grid-style {
    margin-top: -20px
}
img {
    max-width: 100%;
    height: auto;
    vertical-align: top;
}

.product-grid-style>[class*="col-"] {
    margin-top: 30px
}

.product-grid-style .product-img {
    position: relative
}

.product-grid-style .product-img img {
    border-radius: 0.25rem
}

.product-grid-style .product-details {
    transition: all .3s ease 0s;
    position: relative
}

.product-details .product-cart {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999
}

.product-details .product-cart>a {
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    display: flex;
    color: #292dc2;
    margin-top: 0;
    margin-right: 10px;
    border-radius: 50%;
    visibility: hidden;
    transition: all 0.5s;
    opacity: 0;
    cursor: pointer;
    background-color: #fff
}

.product-details .product-cart a:last-child {
    margin-right: 0
}

.product-details .product-cart>a:hover {
    background: #292dc2;
    color: #fff
}

.product-details:hover .product-cart a {
    transform: translateY(-30px);
    visibility: visible;
    opacity: 1
}

.product-grid-style .product-info {
    padding: 15px;
    float: left;
    width: 100%;
    text-align: center;
    font-size: 18px
}

.product-grid-style .product-info>a {
    margin-bottom: 5px;
    display: inline-block;
    font-weight: 600;
    font-size: 15px
}

.price{
  font-weight: 400;
  font-size: small;
}
.product-grid-style  {
    font-weight: 600
}

.product-grid-style .price .red {
    color: #878787
}

.product-list {
    margin-top: -20px
}

.product-list>[class*="col-"] {
    margin-top: 30px
}

.product-card {
    border: 1px solid rgba(0, 0, 0, 0.075);
    height: 100%
}

.product-card .card-img {
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0
}

.product-card .card-body {
    padding: 2rem
}

.product-card .card-body .read-more {
    display: block
}

.product-card .card-body .read-more a {
    color: #292dc2;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.5px
}

.product-card .card-body .read-more a:hover {
    color: #282b2d
}

.product-card .card-footer:last-child {
    border-radius: 0
}

.product-card h3 {
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 12px
}

.product-card h3 a {
    color: #282b2d
}

.product-card h3 a:hover {
    color: #292dc2
}

.product-card .card-footer {
    background: none;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    padding: 0.8rem 2rem;
    font-weight: 600
}

.product-card .card-footer a {
    line-height: normal
}

.product-card ul {
    margin-bottom: 0;
    padding-bottom: 0
}

.product-card .card-footer img {
    max-width: 35px
}

.product-card .card-footer ul li {
    display: inline-block;
    color: #999;
    font-size: 14px;
    font-weight: 500;
    margin: 0 10px 0 0
}

.product-card .card-footer ul li i {
    color: #292dc2;
    font-size: 16px;
    font-weight: 500;
    margin-right: 5px
}

@media screen and (max-width: 767px) {
    .product-card .card-img.bg-img {
        min-height: 250px
    }
}

@media screen and (max-width: 575px) {
    .product-card .card-body {
        padding: 1.5rem
    }
}

.product-grid-style .price .red {
    color: #878787;
}
.line-through {
    text-decoration: line-through;
}


.label-offer {
    position: absolute;
    left: 0;
    top: 0;
    height: 25px;
    line-height: 25px;
    display: inline-block;
    padding: 0px 12px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
    z-index: 1
}

.bg-red {
    background-color: #ed1b24;
}

.bg-primary-solid, .primary-overlay-solid[data-overlay-dark]:before {
    background: #292dc2;
}
</style>