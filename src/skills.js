// skills.js
const skills = `
<section id="skills">
      <div class="container-fluid bg-success mt-5 pb-5 pt-3">
        <div class="row align-items-center">
          <div class=" text-center text-md-start">            
              <div class="display-4 text-primary pb-3 ">Skills</div>

              <div class="container-xl">      
              <div class="lead text-muted">
                <table class="table text-primary text-start">
                  <tbody>
                    <tr>
                      <th class="lead">Java, Groovy</th>
                    </tr>
                    <tr>
                      <th class="lead">Jira, Confluence, Bitbucket</th>
                    </tr>
                    <tr>
                      <th class="lead">Maven, Gradle</th>
                    </tr>
                    <tr>
                      <th class="lead">Openshift, k8s, docker</th>
                    </tr>
                    <tr>
                      <th class="lead">Jenkins, ansible, terraform,
                        helm</th>
                    </tr>
                    <tr>
                      <th class="lead">Git, GitLab CI, bash, Linux</th>
                    </tr>
                    <tr>
                      <th class="lead">SQL, Networks, AWS</th>
                    </tr>
                    <tr>
                      <th class="lead">C, C++, C#</th>
                    </tr>
                    <tr>
                      <th class="lead">Time Management and
                        Organization</th>
                    </tr>
                    <tr>
                      <th class="lead">Continuous Integration Systems</th>
                    </tr>
                    <tr>
                      <th class="lead">Requirements Gathering and
                        Analysis</th>
                    </tr>
                    
                  </tbody>
                </table>
              </div>            
          </div> 
        </div>
      </div>
    </div>
  </section>
`;

document.getElementById('skills').innerHTML = skills;
