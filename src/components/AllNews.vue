<script setup>
import { ref, onMounted } from 'vue'
import {RouterLink} from 'vue-router'
import axios from 'axios';

const allData = ref([])
const loading = ref(true)

const url = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=b726bfb9e3d346a9a6221c7846ca357b'
onMounted(async () => {
    const response = await axios.get(url)
    const allItem = response.data
    console.log(allItem.articles)
    allData.value = allItem.articles

    loading.value = false
})
// console.log(allData)
</script>

<template>
  <div class="container">
    <div class="row">
        <div class="col-md-12">
            <section class="wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col text-center mb-5">
                            <h1 class="display-4 font-weight-bolder text-dark">Latest News Part</h1>
                            <p class="lead">Daily School Latest News Following </p>
                        </div>
                    </div>
                    <div v-if="loading" class="text-dark">
                        <div class="card" aria-hidden="true">
                            <img src="https://i0.wp.com/codemyui.com/wp-content/uploads/2017/09/rotate-pulsating-loading-animation.gif?fit=880%2C440&ssl=1" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title placeholder-glow">
                                <span class="placeholder col-6"></span>
                                </h5>
                                <p class="card-text placeholder-glow">
                                <span class="placeholder col-7"></span>
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-6"></span>
                                <span class="placeholder col-8"></span>
                                </p>
                                <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12 col-md-6 col-lg-4 mb-4" v-for="(data, index) in allData" :key="index">
                          <RouterLink to="">
                            <div class="card text-dark card-has-bg click-col" style="background-image:url('https://source.unsplash.com/600x900/?tech,street');">
                            <!-- <img class="card-img " src="https://source.unsplash.com/600x900/?tech,street" alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?"> -->
                                <div class="card-img-overlay d-flex flex-column">
                                    <div class="card-body">
                                        <!-- <code>{{ index }}</code> -->
                                        <small class="card-meta mb-2">{{ data.description.split(' ').slice(0, 3).join(' ') }}</small>
                                        <h4 class="card-title mt-0 "><a target="_blank" class="text-dark" :herf="data.url">{{ data.title.split(' ').slice(0, 6).join(' ') }}</a></h4>
                                        <small><i class="far fa-clock"></i> {{ data.publishedAt }}</small>
                                    </div>
                                    <div class="card-footer">
                                        <div class="media">
                                            <img class="mr-3 rounded-circle" :src="data.urlToImage" alt="Generic placeholder image" style="width: 60px;height: 50px;">
                                            <div class="media-body">
                                                <h6 class="my-0 text-dark d-block">{{ data.author }}</h6>
                                                <small>{{ (data.author == null ? 'Md Shafikul' : data.author) + ' => '+ index }}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              </div>
                          </RouterLink>
                      </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  </div>
</template>
<style scoped>
body {
  /* Created with https://www.css-gradient.com */
  background: #161616;
}
h1 {
  color: #fff;
}
.lead {
  color: #aaa;
}

.wrapper {
  margin: 10vh;
}
/* //post card styles */

.card {
  border: none;
  transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
  overflow: hidden;
  border-radius: 20px;
  min-height: 450px;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    min-height: 350px;
  }

  @media (max-width: 420px) {
    min-height: 300px;
  }

  &.card-has-bg {
    transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
    background-size: 120%;
    background-repeat: no-repeat;
    background-position: center center;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: inherit;
      -webkit-filter: grayscale(1);
      -moz-filter: grayscale(100%);
      -ms-filter: grayscale(100%);
      -o-filter: grayscale(100%);
      filter: grayscale(100%);
    }

    &:hover {
      transform: scale(0.98);
      box-shadow: 0 0 5px -2px rgba(0, 0, 0, 0.3);
      background-size: 130%;
      transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);

      .card-img-overlay {
        transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
        background: rgb(255, 186, 33);
        background: linear-gradient(
          0deg,
          rgba(255, 186, 33, 0.5) 0%,
          rgba(255, 186, 33, 1) 100%
        );
      }
    }
  }
  .card-footer {
    background: none;
    border-top: none;
    .media {
      img {
        border: solid 3px rgba(255, 255, 255, 0.3);
      }
    }
  }
  .card-title {
    font-weight: 800;
  }
  .card-meta {
    color: rgba(0, 0, 0, 0.3);
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 2px;
  }
  .card-body {
    transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
  }
  &:hover {
    .card-body {
      margin-top: 30px;
      transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
    }
    cursor: pointer;
    transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
  }
  .card-img-overlay {
    transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
    background: rgb(255, 186, 33);
    background: linear-gradient(
      0deg,
      rgba(255, 186, 33, 0.3785889355742297) 0%,
      rgba(255, 186, 33, 1) 100%
    );
  }
}
@media (max-width: 767px) {
}

</style>
