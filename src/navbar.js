// navbar.js
const navbar = `<nav class="navbar navbar-expand-md pt-2">
<div class="container-xl  pt-3  justify-content-end">

  <!-- Toggle Button for Mobile Nav -->
  <button class="btn d-md-none d-flex" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
    <svg width="50" height="50" viewBox="0 0 33 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="33" height="3.83721" rx="1.9186" fill="#466869"/>
      <rect y="7.67432" width="33" height="3.83721" rx="1.9186" fill="#466869"/>
      <rect y="15.3489" width="33" height="3.83721" rx="1.9186" fill="#466869"/>
      </svg>
      
  </button>

  <!-- navbar links -->
  <div class="collapse navbar-collapse row text-end pe-3 text-md-center align-center " id="main-nav">
    <ul class="navbar-nav ">
      <li class="nav-item col">
        <a class="nav-link text-warning active" href="#intro">Home</a>
      </li>
      <li class="nav-item col">
        <a class="nav-link text-primary" href="#about">About Me</a>
      </li>
      <li class="nav-item col">
        <a class="nav-link text-primary" href="#skills">Skills</a>
      </li>          
      <li class="nav-item col">
        <a class="nav-link text-primary" href="#experience">Experience</a>
      </li>
      <li class="nav-item col">
        <a class="nav-link text-primary" href="#contact">Get in Touch</a>
      </li>                    
    </ul>
  </div>
</div>
</nav>`

document.getElementById('navbar').innerHTML = navbar;
