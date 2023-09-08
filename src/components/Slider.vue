<script setup>
     const image = {
        one: 'https://cdn.pixabay.com/photo/2023/09/01/06/51/bird-8226361_1280.jpg',
        two: 'https://cdn.pixabay.com/photo/2023/08/14/15/42/milkyway-8190232_1280.jpg',
        three: 'https://cdn.pixabay.com/photo/2023/08/27/08/20/hiking-8216486_1280.jpg'
        }
const currentDate = new Date()
</script>

<template>
    <!-- Carosul Item All -->
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12 position-relative">
        <div class="currentDate d-flex justify-content-between">
          <h4 class=" ms-2">Date: {{ currentDate.toLocaleDateString() }}</h4>
          <div class="d-flex">
            <i class="fa-brands fa-facebook iconColor"></i>
            <i class="fa-brands fa-twitter iconColor"></i>
            <i class="fa-brands fa-square-google-plus iconColor"></i>
            <i class="fa-brands fa-youtube iconColor"></i>
          </div>
        </div>
        <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img :src="image.one" class="d-block w-100 carosulImageHeight"  alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img :src="image.two" class="d-block w-100 carosulImageHeight" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img :src="image.three" class="d-block w-100 carosulImageHeight" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carosulImageHeight{
  height: 25rem; 
}
.currentDate{
  position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background: #000000ad;
    width: 100%;
    color: white;
    box-shadow: 0px 2px 3px 0px indigo;
}
.iconColor{
    color: #3e9aff;
    font-size: 28px;
    margin: 3px 11px 0px 0px;
}
</style>