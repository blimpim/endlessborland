// about.js
const about = `
<section id="about">
      <div class="container-fluid mt-5">
        <div class="row align-items-center">
          <div class=" text-center text-md-start">            
              <div class="display-4 text-primary pb-5 ">About Me</div>

              <div class="container-xl">
                <p class="lead text-primary pb-3">DevOps engineer with:</p>
                <p class="display-5 d-inline text-warning" >&lt;3&gt; </p> 
                <p class="lead d-inline text-primary"> proven success record in Russia's largest
                banking ecosystem </p> <br>
                <p class="display-5 d-inline text-warning" id="year_count">&lt;&gt;</p> 
                <p class="lead d-inline text-primary"> years overall IT experience. </p>

                <ul class="list-unstyled lead text-primary pt-5 style="list-style-type:none;>
                  <li>&lt;Efficient individual contributor with experience of leading small engineering teams. 	&#47;&gt; </li>
                  <li>&lt;Excelled at automation, standardization and technical support. 	&#47;&gt; </li>
                  <li>&lt;Geared towards building versatile, transparent and user-friendly solutions. 	&#47;&gt; </li>
                  <li>&lt;Key strengths include fast learning, strong communication skills and strategic planning. 	&#47;&gt;</li>
                </ul>

                <div class="d-none d-md-flex flex-row justify-content-between mt-5">

                  <div class="col-md-5 text-start  text-md-start">            
                    <div class="lead text-warning border-bottom border-success border-1 pb-3">Education And Training</div>
                      <div class="lead">
                        <table class="table text-primary text-start border-bottom border-success border-1">
                          <tbody>
                            <tr>
                              <th class="wrap text-start lead">05/2021
                                Bachelor of Science:
                                Software Engineering</th>
                              <td class="wrap text-end">Russian Technological
                                University (MIREA)
                                Moscow</td>
                            </tr>                                        
                          </tbody>
                        </table>
                      </div>            
                  </div>   
                  <div class="col-md-3 text-end mt-2">            
                    <div class="lead text-warning border-bottom border-success border-1 pb-3">Languages</div>
                      <div class="lead">
                        <table class="table text-primary border-bottom border-success border-1">
                          <tbody>
                            <tr>
                              <th class="wrap text-start lead">Russian:</th>
                              <td>Native/ Bilingual</td>
                            </tr>
                            <tr>
                              <th class="wrap text-start lead">English:</th>
                              <td >Native/ Bilingual</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>            
                  </div>          
                </div>
              </div>
            </div>    
          </div>
        </div>
    
    </section>
`;

document.getElementById('about').innerHTML = about;
