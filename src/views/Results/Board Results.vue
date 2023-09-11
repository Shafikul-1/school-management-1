<script setup>
import Slider from '../../components/Slider.vue';
import Navbar from '../../components/Navbar.vue';
import LeftSideView from '../Home/LeftSideView.vue';
import RightSideView from '../Home/RightSideView.vue';
import Footer from '../../components/Footer.vue';

const boarsResultData = [
  {
    searchOption: [
      {
        name: 'Location',
        state: 'selected'
      },
      {
        name: 'Boston', 
      },
      {
        name: 'mayanmar', 
      },
      {
        name: 'arob', 
      },
      {
        name: 'Bangladesh', 
      },
      {
        name: 'India', 
      },
      {
        name: 'varot', 
      }
    ],
    sorting: [
      {
        name: 'Relevance',
        value: '1'
      },
      {
        name: 'Names (A-Z)',
        value: '2'
      },
      {
        name: 'Names (Z-A)',
        value: '3'
      },
      {
        name: 'Number (1-50)',
        value: '5'
      },
      {
        name: 'Number (50-100)',
        value: '4'
      }
    ],
    personDetails: [
      {
        image: 'https://img.freepik.com/free-photo/woman-with-long-hair-yellow-hoodie-with-word-music-it_1340-39068.jpg?size=626&ext=jpg&ga=GA1.2.999761359.1694014498&semt=sph',
        alt: 'Content',
        title: 'Man Fast',
        name: 'Ms Runjila Begum',
        year: '1 year',
        institution: 'Chanda High School',
        grade: 'fast grade',
        result: {
          gradeStatus: 'GPA',
          number: '5.00',
        },
        subject: 'scince',
        studentStatus: 'bg-success'
      },
      {
        image: 'https://bootdey.com/img/Content/avatar/avatar5.png',
        alt: 'Content',
        title: 'Second Fast',
        name: 'md Shaifkul Isalm',
        year: '1 year',
        institution: 'bokapur high school',
        grade: 'second grade',
        result: {
          number: '3.76',
          gradeStatus: 'GPA'
        },
        subject: 'scince',
        studentStatus: 'bg-danger'
      },
      {
        image: 'https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?size=626&ext=jpg&ga=GA1.2.999761359.1694014498&semt=sph',
        alt: 'Content',
        title: 'Thred Fast',
        name: 'Md Hanif Hossain',
        year: '1 year',
        institution: 'MohadevPur high school',
        grade: 'thred grade',
        result: {
          number: '5.30',
          gradeStatus: 'GPA'
        },
        subject: 'Humanity',
        studentStatus: 'bg-warning'
      },
      {
        image: 'https://img.freepik.com/free-photo/fashion-little-boy_71767-95.jpg?size=626&ext=jpg&ga=GA1.2.999761359.1694014498&semt=sph',
        alt: 'arif',
        title: 'Four Man',
        name: 'Md Arif Hossain',
        year: '1 year',
        institution: 'Naogan pailot high school',
        grade: 'Fast grade',
        result: {
          number: '5.30',
          gradeStatus: 'GPA'
        },
        subject: 'Scince',
        studentStatus: 'bg-success'
      }
    ]

  }
]


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
          <h1 class="text-center">Board Results Page</h1>
<!-- Design Component -->
          <div class="d-flex justify-content-center">
            <i class="designLine fa-solid fa-ellipsis"></i>
            <i class="designLine fa-brands fa-centos"></i>
            <i class="designLine fa-solid fa-ellipsis"></i>
         </div>
         <ul class="list-unstyled d-flex text-capitalize gap-2">
          <li>Home /</li>
          <li>Board Results /</li>
         </ul>
        </div>

<!-- All Work Start -->
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="container" v-for="(fullDetalis, index) in boarsResultData" :key="index">
              <div class="row">
                  <div class="col-lg-12 card-margin">
                      <div class="card search-form">
                          <div class="card-body searchPading">
                              <form  @submit.prevent id="search-form">
                                  <div class="row">
                                      <div class="col-12">
                                          <div class="row no-gutters">
                                            <div class="col-lg-3 col-md-3 col-sm-12 p-0 d-flex seletlocation">
                                                <i class="fa-solid fa-arrow-down-wide-short arrowIcon"></i>
                                                <select class="form-control " id="exampleFormControlSelect1">
                                                  <template v-for="(selectOption, index) in fullDetalis.searchOption" :key="index">
                                                    <option :selected="selectOption.state">{{ selectOption.name }}</option>
                                                  </template>
                                                  </select>
                                              </div>
                                              <div class="col-lg-8 col-md-6 col-sm-12 p-0">
                                                  <input type="text" placeholder="Search..." class="form-control" id="search" name="search">
                                              </div>
                                              <div class="col-lg-1 col-md-3 col-sm-12 p-0 searchIcon">
                                                  <button type="submit" class="btn btn-base">
                                                    <i class="fa-solid fa-magnifying-glass onlysearchIcon"></i>
                                                  </button>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="row">
                      <div class="col-12">
                          <div class="card card-margin">
                              <div class="card-body">
                                  <div class="row search-body">
                                      <div class="col-lg-12">
                                          <div class="search-result">
                                              <div class="result-header">
                                                  <div class="row">
                                                      <div class="col-lg-6">
                                                          <div class="records">Showing: <b>1-20</b> of <b>200</b> result</div>
                                                      </div>
                                                      <div class="col-lg-6">
                                                          <div class="result-actions">
                                                              <div class="result-sorting">
                                                                  <span>Sort By:</span>
                                                                  <select class="form-control border-0" id="exampleOption">
                                                                      <option v-for="(sortValue, index) in fullDetalis.sorting" :key="index" :value="sortValue.value">{{ sortValue.name }}</option>
                                                                  </select>
                                                              </div>
                                                              <div class="result-views">
                                                                  <button type="button" class="btn btn-soft-base btn-icon">
                                                                    <i class="fa-solid fa-list" style="font-size: 1.7vw;padding: 5px 0 0 0;"></i>
                                                                  </button>
                                                                  <button type="button" class="btn btn-soft-base btn-icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid" > <rect x="3" y="3" width="7" height="7"></rect> <rect x="14" y="3" width="7" height="7"></rect> <rect x="14" y="14" width="7" height="7"></rect> <rect x="3" y="14" width="7" height="7"></rect> </svg>
                                                                  </button>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="result-body">
                                                  <div class="table-responsive">
                                                      <table class="table widget-26">
                                                          <tbody>
                                                              <tr v-for="(personData, index) in fullDetalis.personDetails" :key="index">
                                                                  <td>
                                                                      <div class="widget-26-job-emp-img">
                                                                          <img :src="personData.image" :title="personData.title" :alt="personData.alt" />
                                                                      </div>
                                                                  </td>
                                                                  <td>
                                                                      <div class="widget-26-job-title">
                                                                          <a href="#">{{ personData.name }}</a>
                                                                          <p class="m-0"><a href="#" class="employer-name">{{ personData.institution }}</a> <span class="text-muted time">{{ personData.year }}</span></p>
                                                                      </div>
                                                                  </td>
                                                                  <td>
                                                                      <div class="widget-26-job-info">
                                                                          <p class="text-muted m-0">{{ personData.grade }}</p>
                                                                      </div>
                                                                  </td>
                                                                  <td>
                                                                      <div class="widget-26-job-salary">{{ personData.result.gradeStatus }} <span>{{ personData.result.number }}</span> </div>
                                                                  </td>
                                                                  <td>
                                                                      <div class="widget-26-job-category bg-soft-base">
                                                                        <i class="indicator" :class="personData.studentStatus"></i>
                                                                          <span>{{ personData.subject }}</span>
                                                                      </div>
                                                                  </td>
                                                                  <td>
                                                                      <div class="widget-26-job-starred">
                                                                          <a href="#">
                                                                            <i class="fa-regular fa-star"></i>
                                                                          </a>
                                                                      </div>
                                                                  </td>
                                                              </tr>
                                                          </tbody>
                                                      </table>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <nav class="d-flex justify-content-center">
                                      <ul class="pagination pagination-base pagination-boxed pagination-square mb-0">
                                          <li class="page-item">
                                              <a class="page-link no-border" href="#">
                                                  <span aria-hidden="true">«</span>
                                                  <span class="sr-only">Previous</span>
                                              </a>
                                          </li>
                                          <li class="page-item active"><a class="page-link no-border" href="#">1</a></li>
                                          <li class="page-item"><a class="page-link no-border" href="#">2</a></li>
                                          <li class="page-item"><a class="page-link no-border" href="#">3</a></li>
                                          <li class="page-item"><a class="page-link no-border" href="#">4</a></li>
                                          <li class="page-item">
                                              <a class="page-link no-border" href="#">
                                                  <span aria-hidden="true">»</span>
                                                  <span class="sr-only">Next</span>
                                              </a>
                                          </li>
                                      </ul>
                                  </nav>
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
    background:#dcdcdc;
    margin-top:20px;}

.widget-26 {
  color: #3c4142;
  font-weight: 400;
}

.widget-26 tr:first-child td {
  border: 0;
}

.widget-26 .widget-26-job-emp-img img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}

.widget-26 .widget-26-job-title {
  min-width: 200px;
}

.widget-26 .widget-26-job-title a {
  font-weight: 400;
  font-size: 0.875rem;
  color: #3c4142;
  line-height: 1.5;
}

.widget-26 .widget-26-job-title a:hover {
  color: #68CBD7;
  text-decoration: none;
}

.widget-26 .widget-26-job-title .employer-name {
  margin: 0;
  line-height: 1.5;
  font-weight: 400;
  color: #3c4142;
  font-size: 0.8125rem;
  color: #3c4142;
}

.widget-26 .widget-26-job-title .employer-name:hover {
  color: #68CBD7;
  text-decoration: none;
}

.widget-26 .widget-26-job-title .time {
  font-size: 12px;
  font-weight: 400;
}

.widget-26 .widget-26-job-info {
  min-width: 100px;
  font-weight: 400;
}

.widget-26 .widget-26-job-info p {
  line-height: 1.5;
  color: #3c4142;
  font-size: 0.8125rem;
}

.widget-26 .widget-26-job-info {
  color: #3c4142;
}

.widget-26 .widget-26-job-salary {
  min-width: 70px;
  font-weight: 400;
  color: #3c4142;
  font-size: 0.8125rem;
}

.widget-26 .widget-26-job-category {
  padding: .5rem;
  display: inline-flex;
  white-space: nowrap;
  border-radius: 15px;
}

.widget-26 .widget-26-job-category .indicator {
  width: 13px;
  height: 13px;
  margin-right: .5rem;
  float: left;
  border-radius: 50%;
}

.widget-26 .widget-26-job-category span {
  font-size: 0.8125rem;
  color: #3c4142;
  font-weight: 600;
}

.widget-26 .widget-26-job-starred svg {
  width: 20px;
  height: 20px;
  color: #fd8b2c;
}

.widget-26 .widget-26-job-starred svg.starred {
  fill: #fd8b2c;
}
.bg-soft-base {
  background-color: #e1f5f7;
}
.bg-soft-warning {
    background-color: #fff4e1;
}
.bg-soft-success {
    background-color: #d1f6f2;
}
.bg-soft-danger {
    background-color: #fedce0;
}
.bg-soft-info {
    background-color: #d7efff;
}


.search-form {
  width: 100%;
  margin: 0 auto;
  margin-top: 1rem;
}

.search-form input {
  height: 100%;
  background: transparent;
  border: 0;
  display: block;
  width: 100%;
  padding: 1rem;
  height: 100%;
  font-size: 1rem;
}

.search-form select {
  background: transparent;
  border: 0;
  padding: 1rem;
  height: 100%;
  font-size: 1rem;
}

.search-form select:focus {
  border: 0;
}

.search-form button {
  height: 100%;
  width: 100%;
  font-size: 1rem;
}

.search-form button svg {
  width: 24px;
  height: 24px;
}

.search-body {
  margin-bottom: 1.5rem;
}

.search-body .search-filters .filter-list {
  margin-bottom: 1.3rem;
}

.search-body .search-filters .filter-list .title {
  color: #3c4142;
  margin-bottom: 1rem;
}

.search-body .search-filters .filter-list .filter-text {
  color: #727686;
}

.search-body .search-result .result-header {
  margin-bottom: 2rem;
}

.search-body .search-result .result-header .records {
  color: #3c4142;
}

.search-body .search-result .result-header .result-actions {
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search-body .search-result .result-header .result-actions .result-sorting {
  display: flex;
  align-items: center;
}

.search-body .search-result .result-header .result-actions .result-sorting span {
  flex-shrink: 0;
  font-size: 0.8125rem;
}

.search-body .search-result .result-header .result-actions .result-sorting select {
  color: #68CBD7;
}

.search-body .search-result .result-header .result-actions .result-sorting select option {
  color: #3c4142;
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .search-body .search-filters {
    display: flex;
  }
  .search-body .search-filters .filter-list {
    margin-right: 1rem;
  }
}

.card-margin {
    margin-bottom: 1.875rem;
}

@media (min-width: 992px){
.col-lg-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
}
}

.card-margin {
    margin-bottom: 1.875rem;
}
.card {
    border: 0;
    box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.1);
    -webkit-box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.1);
    -moz-box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.1);
    -ms-box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.1);
}
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #ffffff;
    background-clip: border-box;
    border: 1px solid #e6e4e9;
    border-radius: 8px;
}

.searchPading{
  padding: 0px 15px 0px 16px;
}
 
.arrowIcon{
    font-size: 2.2vw;
    display: flex;
    justify-content: center;
    align-items: center;
}
.form-control:focus{
  box-shadow:none;
}
.seletlocation{
  cursor: pointer;
}
.seletlocation>select{
  cursor: pointer;
}
.onlysearchIcon{
  font-size: 2.5vw;
}
</style>