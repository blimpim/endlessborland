// intro.js
const introSection = `
<section id="intro">
      <div class="container-fluid" id="Denname">
        <div class="row g-4  justify-content-start ms-sm-5 align-items-center my-1" >
          <div class="text-start">
            <h1>
              <div class="display-3 pb-2 pt-3 text-warning" >Denis <br>Skorobogatov</div>
              <p class="text-light lead pt-2" >DevOps Engineer <br>
                 California</p>
            </h1>
            
            <!-- open sidebar  -->
            <a class="btn btn-light col-12 col-xl-1 mt-5 text-primary text-md-center btn-lg" href="#contact" role="button">
              Contact Me!
            </a>
          </div>
        </div>
      </div>
    </section>
`;

document.getElementById("intro").innerHTML = introSection;
