<script setup>
 import { RouterLink } from 'vue-router'
</script>

<template>
 <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <RouterLink to="/" class="navbar-brand">Navbar</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link active" aria-current="page" >Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/contact" class="nav-link">School introduction</RouterLink>
        </li> 
        <li class="nav-item dropdown">
          <RouterLink to="/gallery" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gallery
          </RouterLink>
          <ul class="dropdown-menu">
            <li><RouterLink to="/image-gallery" class="dropdown-item">Photo Gallery</RouterLink></li>
            <li><hr class="dropdown-divider"></li>
            <li><RouterLink to="/video-gallery" class="dropdown-item">Video Gallery</RouterLink></li>
            <li><hr class="dropdown-divider"></li>
            <li><RouterLink to="/" class="dropdown-item">Other Gallery</RouterLink></li>
          </ul>
        </li>
        <li class="nav-item dropdown"> 
          <RouterLink to="/result" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Test Result
          </RouterLink>
          <ul class="dropdown-menu">
            <li><RouterLink to="/jsc-result" class="dropdown-item">JSC Result</RouterLink></li>
            <li><hr class="dropdown-divider"></li>
            <li><RouterLink to="/ssc-result" class="dropdown-item">SSC Result</RouterLink></li>
            <li><hr class="dropdown-divider"></li>
            <li><RouterLink to="/" class="dropdown-item">HSC Result</RouterLink></li>
          </ul>
        </li>
        <li class="nav-item">
          <RouterLink to="/about" class="nav-link">Other Information</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/contact" class="nav-link">Contact Us</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/communication" class="nav-link">Communication</RouterLink>
        </li> 
        <li class="nav-item">
          <RouterLink to="/about" class="nav-link"> About School</RouterLink>
        </li> 
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>
 