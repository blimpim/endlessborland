(()=>{var n={213:()=>{document.getElementById("about").innerHTML='\n<section id="about">\n      <div class="container-fluid mt-5">\n        <div class="row align-items-center">\n          <div class=" text-center text-md-start">            \n              <div class="display-4 text-primary pb-5 ">About Me</div>\n\n              <div class="container-xl">\n                <p class="lead text-primary pb-3">DevOps engineer with:</p>\n                <p class="display-5 d-inline text-warning" >&lt;3&gt; </p> \n                <p class="lead d-inline text-primary"> proven success record in Russia\'s largest\n                banking ecosystem </p> <br>\n                <p class="display-5 d-inline text-warning" id="year_count">&lt;&gt;</p> \n                <p class="lead d-inline text-primary"> years overall IT experience. </p>\n\n                <ul class="list-unstyled lead text-primary pt-5 style="list-style-type:none;>\n                  <li>&lt;Efficient individual contributor with experience of leading small engineering teams. \t&#47;&gt; </li>\n                  <li>&lt;Excelled at automation, standardization and technical support. \t&#47;&gt; </li>\n                  <li>&lt;Geared towards building versatile, transparent and user-friendly solutions. \t&#47;&gt; </li>\n                  <li>&lt;Key strengths include fast learning, strong communication skills and strategic planning. \t&#47;&gt;</li>\n                </ul>\n\n                <div class="d-none d-md-flex flex-row justify-content-between mt-5">\n\n                  <div class="col-md-5 text-start  text-md-start">            \n                    <div class="lead text-warning border-bottom border-success border-1 pb-3">Education And Training</div>\n                      <div class="lead">\n                        <table class="table text-primary text-start border-bottom border-success border-1">\n                          <tbody>\n                            <tr>\n                              <th class="wrap text-start lead">05/2021\n                                Bachelor of Science:\n                                Software Engineering</th>\n                              <td class="wrap text-end">Russian Technological\n                                University (MIREA)\n                                Moscow</td>\n                            </tr>                                        \n                          </tbody>\n                        </table>\n                      </div>            \n                  </div>   \n                  <div class="col-md-3 text-end mt-2">            \n                    <div class="lead text-warning border-bottom border-success border-1 pb-3">Languages</div>\n                      <div class="lead">\n                        <table class="table text-primary border-bottom border-success border-1">\n                          <tbody>\n                            <tr>\n                              <th class="wrap text-start lead">Russian:</th>\n                              <td>Native/ Bilingual</td>\n                            </tr>\n                            <tr>\n                              <th class="wrap text-start lead">English:</th>\n                              <td >Native/ Bilingual</td>\n                            </tr>\n                          </tbody>\n                        </table>\n                      </div>            \n                  </div>          \n                </div>\n              </div>\n            </div>    \n          </div>\n        </div>\n    \n    </section>\n'},452:()=>{document.getElementById("contact").innerHTML='\n<section id="contact">\n    \n    <div class="container-fluid bg-success">\n      \n      <div class="text-center pt-5 text-primary">\n        <h2>Get in Touch</h2>\n        <p class="pt-3">Want to know more or just chat? <br>\n        You are welcome!</p>\n      </div>\n      \n      <div class="d-grid gap-2 col-4 col-xxl-1 mx-auto"> \n          \n        <button type="button" class="btn btn-warning text-light" data-bs-toggle="modal" data-bs-target="#Modal">\n          Send message\n        </button>\n      </div>\n\n\x3c!-- Contact Modal --\x3e\n        <div class="modal fade " id="Modal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">\n          <div class="modal-dialog modal-dialog-centered">\n            <div class="modal-content">\n              <div class="modal-header">\n                <h5 class="modal-title text-primary" id="ModalLabel">Write me a message!</h5>\n                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n              </div>\n              <div class="modal-body">\n              <form name="contact" method="POST" data-netlify="true">\n                <p>\n                  <label>Your Name: <input type="text" name="name" /></label>\n                </p>\n                <p>\n                  <label>Your Email: <input type="email" name="email" /></label>\n                </p>\n                <p>\n                  <label>Your Role: <select name="role[]" multiple>\n                    <option value="leader">Leader</option>\n                    <option value="follower">Follower</option>\n                  </select></label>\n                </p>\n                <p>\n                  <label>Message: <textarea name="message"></textarea></label>\n                </p>\n                <p>\n                  <button type="submit">Send</button>\n                </p>\n              </form>\n              \n              <script src="https://www.google.com/recaptcha/api.js" async defer><\/script>\n              <script>\n                function onSubmit(token) {\n                  document.getElementById("form").submit();\n                }\n              <\/script>\n\n                \n              </div>\n              \n            </div>\n          </div>\n        </div>\n\n  \n          \n          \n        \n        \x3c!--Social links--\x3e  \n        <ul class="list-group list-unstyled d-flex flex-row mt-5 pb-4 align-items-center justify-content-center">\n          \n\n          <li class="ps-3">\n              <a href="https://vk.com/endlessborland" aria-label="Linkedin" class="icon mx-2">\n                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">\n                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.85938 1H35.1406C38.3715 1 41 3.62848 41 6.85938V35.1406C41 38.3715 38.3715 41 35.1406 41H6.85938C3.62848 41 1 38.3715 1 35.1406V6.85938C1 3.62848 3.62848 1 6.85938 1ZM35.1406 38.6562C37.0791 38.6562 38.6562 37.0791 38.6562 35.1406V6.85938C38.6562 4.9209 37.0791 3.34375 35.1406 3.34375H6.85938C4.9209 3.34375 3.34375 4.9209 3.34375 6.85938V35.1406C3.34375 37.0791 4.9209 38.6562 6.85938 38.6562H35.1406ZM14.3216 10.3658C15.6637 10.364 16.6134 11.3098 16.618 12.6527C16.6223 13.9813 15.6582 14.9217 14.29 14.9223C12.9546 14.9232 12.0025 13.9771 12 12.6475C11.9976 11.317 12.9635 10.3676 14.3216 10.3658ZM27.7049 30.123H31.9985C31.9995 30.1058 32.0005 30.0892 32.0016 30.0732L32.0016 30.073V30.073C32.004 30.0365 32.0062 30.0025 32.0062 29.9685L32.0065 28.3572C32.0069 26.3892 32.0072 24.4211 32.0056 22.4531C32.0046 21.5826 31.9156 20.723 31.6438 19.8898C31.2952 18.8205 30.6999 17.9292 29.7229 17.32C28.9608 16.8449 28.1151 16.6461 27.2238 16.6204C26.4008 16.5968 25.6099 16.7296 24.8778 17.1255C24.2222 17.4797 23.7288 18.0036 23.2994 18.5946C23.2812 18.6195 23.2627 18.644 23.2442 18.6685L23.2072 18.7177L23.1869 18.7089L23.1729 18.7029V16.9338H18.8892V30.1218H23.1751V29.9192L23.1751 28.4905C23.175 26.5826 23.175 24.6746 23.1757 22.7668C23.1757 22.675 23.1789 22.5831 23.182 22.4912L23.1821 22.4911C23.1843 22.4268 23.1865 22.3625 23.1876 22.2983C23.1999 21.6422 23.4894 21.1114 23.9326 20.6417C24.8144 19.7071 27.031 19.5918 27.5443 21.5639C27.6685 22.0421 27.7053 22.5263 27.7053 23.0166C27.7048 24.745 27.7049 26.4735 27.7049 28.202L27.7049 29.927V30.123ZM12.0076 30.1303H16.2705V16.9301H12.0076V30.1303Z" fill="#5B6B7B"/>\n                  <path d="M16.618 12.6527L16.868 12.6519L16.868 12.6518L16.618 12.6527ZM14.3216 10.3658L14.3219 10.6158L14.3219 10.6158L14.3216 10.3658ZM14.29 14.9223L14.2899 14.6723L14.2899 14.6723L14.29 14.9223ZM12 12.6475L11.75 12.648L11.75 12.648L12 12.6475ZM31.9985 30.123V30.373H32.2353L32.2482 30.1365L31.9985 30.123ZM27.7049 30.123H27.4549V30.373H27.7049V30.123ZM32.0016 30.0732L31.7524 30.0524L31.7521 30.057L32.0016 30.0732ZM32.0016 30.073L32.2507 30.0938L32.2516 30.0834V30.073H32.0016ZM32.0016 30.073L31.7521 30.0568L31.7516 30.0649V30.073H32.0016ZM32.0062 29.9685L31.7562 29.9684V29.9685H32.0062ZM32.0065 28.3572L31.7565 28.3571L31.7565 28.3571L32.0065 28.3572ZM32.0056 22.4531L32.2556 22.4529L32.2556 22.4529L32.0056 22.4531ZM31.6438 19.8898L31.4061 19.9673L31.4061 19.9673L31.6438 19.8898ZM29.7229 17.32L29.8552 17.1079L29.8552 17.1079L29.7229 17.32ZM27.2238 16.6204L27.231 16.3705L27.231 16.3705L27.2238 16.6204ZM24.8778 17.1255L24.9966 17.3455L24.9967 17.3454L24.8778 17.1255ZM23.2994 18.5946L23.5012 18.7422L23.5016 18.7416L23.2994 18.5946ZM23.2442 18.6685L23.0446 18.518L23.0443 18.5184L23.2442 18.6685ZM23.2072 18.7177L23.1083 18.9473L23.289 19.0252L23.4071 18.8678L23.2072 18.7177ZM23.1869 18.7089L23.0872 18.9382L23.088 18.9385L23.1869 18.7089ZM23.1729 18.7029H22.9229V18.8668L23.0733 18.9322L23.1729 18.7029ZM23.1729 16.9338H23.4229V16.6838H23.1729V16.9338ZM18.8892 16.9338V16.6838H18.6392V16.9338H18.8892ZM18.8892 30.1218H18.6392V30.3718H18.8892V30.1218ZM23.1751 30.1218V30.3718H23.4251V30.1218H23.1751ZM23.1751 29.9192L23.4251 29.9192L23.4251 29.9192L23.1751 29.9192ZM23.1751 28.4905L23.4251 28.4905L23.4251 28.4905L23.1751 28.4905ZM23.1757 22.7668L23.4257 22.7669V22.7668H23.1757ZM23.182 22.4912L22.9324 22.4781L22.9322 22.4826L23.182 22.4912ZM23.1821 22.4911L23.4317 22.5042L23.4319 22.4997L23.1821 22.4911ZM23.1876 22.2983L22.9377 22.2936L22.9377 22.2939L23.1876 22.2983ZM23.9326 20.6417L24.1145 20.8132L24.1145 20.8132L23.9326 20.6417ZM27.5443 21.5639L27.7862 21.501L27.7862 21.5009L27.5443 21.5639ZM27.7053 23.0166L27.9553 23.0167V23.0166H27.7053ZM27.7049 28.202L27.9549 28.202L27.9549 28.202L27.7049 28.202ZM27.7049 29.927L27.9549 29.927L27.9549 29.927L27.7049 29.927ZM16.2705 30.1303V30.3803H16.5205V30.1303H16.2705ZM12.0076 30.1303H11.7576V30.3803H12.0076V30.1303ZM16.2705 16.9301H16.5205V16.6801H16.2705V16.9301ZM12.0076 16.9301V16.6801H11.7576V16.9301H12.0076ZM35.1406 0.75H6.85938V1.25H35.1406V0.75ZM41.25 6.85938C41.25 3.49041 38.5096 0.75 35.1406 0.75V1.25C38.2334 1.25 40.75 3.76655 40.75 6.85938H41.25ZM41.25 35.1406V6.85938H40.75V35.1406H41.25ZM35.1406 41.25C38.5096 41.25 41.25 38.5096 41.25 35.1406H40.75C40.75 38.2334 38.2334 40.75 35.1406 40.75V41.25ZM6.85938 41.25H35.1406V40.75H6.85938V41.25ZM0.75 35.1406C0.75 38.5096 3.49041 41.25 6.85938 41.25V40.75C3.76655 40.75 1.25 38.2334 1.25 35.1406H0.75ZM0.75 6.85938V35.1406H1.25V6.85938H0.75ZM6.85938 0.75C3.49041 0.75 0.75 3.49041 0.75 6.85938H1.25C1.25 3.76655 3.76655 1.25 6.85938 1.25V0.75ZM38.4062 35.1406C38.4062 36.941 36.941 38.4062 35.1406 38.4062V38.9062C37.2172 38.9062 38.9062 37.2172 38.9062 35.1406H38.4062ZM38.4062 6.85938V35.1406H38.9062V6.85938H38.4062ZM35.1406 3.59375C36.941 3.59375 38.4062 5.05897 38.4062 6.85938H38.9062C38.9062 4.78283 37.2172 3.09375 35.1406 3.09375V3.59375ZM6.85938 3.59375H35.1406V3.09375H6.85938V3.59375ZM3.59375 6.85938C3.59375 5.05897 5.05897 3.59375 6.85938 3.59375V3.09375C4.78283 3.09375 3.09375 4.78283 3.09375 6.85938H3.59375ZM3.59375 35.1406V6.85938H3.09375V35.1406H3.59375ZM6.85938 38.4062C5.05897 38.4062 3.59375 36.941 3.59375 35.1406H3.09375C3.09375 37.2172 4.78283 38.9062 6.85938 38.9062V38.4062ZM35.1406 38.4062H6.85938V38.9062H35.1406V38.4062ZM16.868 12.6518C16.8655 11.92 16.6045 11.2826 16.1478 10.8278C15.6911 10.373 15.0527 10.1148 14.3212 10.1158L14.3219 10.6158C14.9326 10.615 15.4401 10.8287 15.795 11.1821C16.1498 11.5355 16.3659 12.0424 16.368 12.6535L16.868 12.6518ZM14.2901 15.1723C15.0325 15.172 15.6804 14.9158 16.1432 14.4645C16.6066 14.0127 16.8704 13.379 16.868 12.6519L16.368 12.6535C16.37 13.255 16.1538 13.7558 15.7942 14.1065C15.434 14.4577 14.9157 14.672 14.2899 14.6723L14.2901 15.1723ZM11.75 12.648C11.7527 14.1165 12.8178 15.1733 14.2902 15.1723L14.2899 14.6723C13.0915 14.6731 12.2522 13.8377 12.25 12.6471L11.75 12.648ZM14.3212 10.1158C12.8299 10.1178 11.7473 11.1745 11.75 12.648L12.25 12.6471C12.2478 11.4595 13.0971 10.6174 14.3219 10.6158L14.3212 10.1158ZM31.9985 29.873H27.7049V30.373H31.9985V29.873ZM31.7521 30.057C31.7511 30.0729 31.7499 30.0907 31.7489 30.1095L32.2482 30.1365C32.249 30.1208 32.25 30.1056 32.2511 30.0894L31.7521 30.057ZM31.7525 30.0523L31.7524 30.0524L32.2507 30.0939L32.2507 30.0938L31.7525 30.0523ZM31.7516 30.073V30.073H32.2516V30.073H31.7516ZM31.7562 29.9685C31.7562 29.9929 31.7546 30.0187 31.7521 30.0568L32.2511 30.0892C32.2533 30.0542 32.2562 30.012 32.2562 29.9685H31.7562ZM31.7565 28.3571L31.7562 29.9684L32.2562 29.9685L32.2565 28.3572L31.7565 28.3571ZM31.7556 22.4534C31.7572 24.4211 31.7569 26.3891 31.7565 28.3571L32.2565 28.3572C32.2569 26.3892 32.2572 24.421 32.2556 22.4529L31.7556 22.4534ZM31.4061 19.9673C31.6672 20.7676 31.7547 21.5992 31.7556 22.4534L32.2556 22.4529C32.2546 21.5661 32.164 20.6784 31.8815 19.8122L31.4061 19.9673ZM29.5906 17.5322C30.5075 18.1039 31.0716 18.9413 31.4061 19.9673L31.8815 19.8123C31.5187 18.6998 30.8922 17.7545 29.8552 17.1079L29.5906 17.5322ZM27.2166 16.8703C28.0748 16.8951 28.8746 17.0857 29.5906 17.5322L29.8552 17.1079C29.0469 16.604 28.1554 16.3972 27.231 16.3705L27.2166 16.8703ZM24.9967 17.3454C25.6808 16.9755 26.4255 16.8476 27.2166 16.8703L27.231 16.3705C26.3761 16.346 25.539 16.4837 24.7588 16.9056L24.9967 17.3454ZM23.5016 18.7416C23.9195 18.1664 24.3866 17.675 24.9966 17.3455L24.7589 16.9056C24.0577 17.2844 23.5381 17.8407 23.0971 18.4477L23.5016 18.7416ZM23.4437 18.8191C23.4621 18.7948 23.4817 18.7688 23.5011 18.7422L23.0976 18.447C23.0807 18.4701 23.0633 18.4932 23.0446 18.518L23.4437 18.8191ZM23.4071 18.8678L23.4441 18.8186L23.0443 18.5184L23.0073 18.5676L23.4071 18.8678ZM23.088 18.9385L23.1083 18.9473L23.3061 18.4881L23.2858 18.4793L23.088 18.9385ZM23.0733 18.9322L23.0872 18.9382L23.2865 18.4797L23.2726 18.4736L23.0733 18.9322ZM22.9229 16.9338V18.7029H23.4229V16.9338H22.9229ZM18.8892 17.1838H23.1729V16.6838H18.8892V17.1838ZM19.1392 30.1218V16.9338H18.6392V30.1218H19.1392ZM23.1751 29.8718H18.8892V30.3718H23.1751V29.8718ZM22.9251 29.9192V30.1218H23.4251V29.9192H22.9251ZM22.9251 28.4905L22.9251 29.9192L23.4251 29.9192L23.4251 28.4905L22.9251 28.4905ZM22.9257 22.7667C22.925 24.6746 22.925 26.5826 22.9251 28.4905L23.4251 28.4905C23.425 26.5826 23.425 24.6746 23.4257 22.7669L22.9257 22.7667ZM22.9322 22.4826C22.929 22.5737 22.9257 22.67 22.9257 22.7668H23.4257C23.4257 22.68 23.4287 22.5925 23.4319 22.4998L22.9322 22.4826ZM22.9324 22.478L22.9324 22.4781L23.4317 22.5043L23.4317 22.5042L22.9324 22.478ZM22.9377 22.2939C22.9366 22.3556 22.9344 22.4178 22.9322 22.4825L23.4319 22.4997C23.4341 22.4358 23.4364 22.3694 23.4376 22.3027L22.9377 22.2939ZM23.7508 20.4701C23.2791 20.97 22.9514 21.5574 22.9377 22.2936L23.4376 22.3029C23.4483 21.7271 23.6997 21.2528 24.1145 20.8132L23.7508 20.4701ZM27.7862 21.5009C27.5023 20.4101 26.7324 19.8789 25.9109 19.7651C25.1105 19.6543 24.2526 19.9382 23.7508 20.4701L24.1145 20.8132C24.4944 20.4105 25.1857 20.1695 25.8423 20.2604C26.4779 20.3484 27.073 20.7456 27.3023 21.6269L27.7862 21.5009ZM27.9553 23.0166C27.9553 22.5145 27.9178 22.0072 27.7862 21.501L27.3023 21.6268C27.4193 22.077 27.4553 22.5382 27.4553 23.0166H27.9553ZM27.9549 28.202C27.9549 26.4735 27.9548 24.745 27.9553 23.0167L27.4553 23.0166C27.4548 24.7449 27.4549 26.4735 27.4549 28.202L27.9549 28.202ZM27.9549 29.927L27.9549 28.202L27.4549 28.202L27.4549 29.927L27.9549 29.927ZM27.9549 30.123V29.927H27.4549V30.123H27.9549ZM16.2705 29.8803H12.0076V30.3803H16.2705V29.8803ZM16.0205 16.9301V30.1303H16.5205V16.9301H16.0205ZM12.0076 17.1801H16.2705V16.6801H12.0076V17.1801ZM12.2576 30.1303V16.9301H11.7576V30.1303H12.2576Z" fill="#5B6B7B"/>\n                  </svg>                  \n              </a>\n          </li>\n\n          <li  class=" ">\n              <a href="https://t.me/EndlessBorland" aria-label="Telegram" class="icon mx-2">\n                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">\n                  <path fill-rule="evenodd" clip-rule="evenodd" d="M42 22.0009C42 33.0465 33.0457 42.0009 22 42.0009C10.9543 42.0009 2 33.0465 2 22.0009C2 10.9552 10.9543 2.00085 22 2.00085C33.0457 2.00085 42 10.9552 42 22.0009ZM15.3929 20.1688C13.3894 21.0435 11.3309 21.9424 9.44854 22.9792C8.46564 23.6989 9.77198 24.2079 10.9976 24.6854C11.1924 24.7614 11.3852 24.8364 11.5664 24.9114C11.7172 24.9579 11.8706 25.0067 12.026 25.0562C13.3891 25.4904 14.9089 25.9747 16.2323 25.2463C18.4061 23.9975 20.4575 22.5539 22.5074 21.1113C23.179 20.6386 23.8504 20.1661 24.5259 19.7006C24.5576 19.6804 24.5933 19.6572 24.6323 19.6319C25.2078 19.2589 26.502 18.4199 26.0232 19.5759C24.8912 20.8139 23.6787 21.9098 22.4596 23.0117C21.6379 23.7543 20.8133 24.4996 20.0083 25.2929C19.3072 25.8626 18.5791 27.0082 19.3642 27.8059C21.1724 29.0718 23.0089 30.3069 24.8443 31.5414C25.4416 31.9431 26.0388 32.3448 26.6348 32.7474C27.645 33.5539 29.2238 32.9015 29.4458 31.6413C29.5446 31.0615 29.6437 30.4819 29.7429 29.9021C30.2909 26.6982 30.8391 23.4931 31.3233 20.2788C31.3892 19.7745 31.4637 19.2704 31.5384 18.7659C31.7193 17.5434 31.9005 16.3193 31.9571 15.0901C31.8113 13.8634 30.3239 14.1332 29.4962 14.409C25.2419 16.0279 21.0301 17.7667 16.8349 19.5362C16.3597 19.7467 15.8779 19.957 15.3929 20.1688Z" stroke="#5B6B7B" stroke-width="3"/>\n                  </svg>                  \n              </a>\n          </li>\n      </ul>\n\n        \n    </div>\n  </section>\n      \n'},254:()=>{document.getElementById("experience").innerHTML='\n<section id="experience">\n    <div class="container-fluid mt-5 pb-5 ">\n      <div class="text-center text-md-start">\n        <h2 class="display-4 text-primary pb-3">Experience</h2>\n      </div>\n      <div class="container-xl">      \n        <div class="text-primary">\n          \n          \x3c!-- accordion --\x3e\n          <div class="accordion accordion-flush text-primary bg-success " id="chapters">\n            <div class="accordion-item border-warning ">\n              <h2 class="accordion-header " id="heading-1">\n                <button class="accordion-button bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-1" aria-expanded="true" aria-controls="chapter-1">\n                  <div class="container text-primary lead ">\n                    <div class="d-md-flex justify-content-between">\n                      <p class="col text-md-start">DevOps-Engineer</p>\n                      <p class="col text-md-center">Aug 2022-Present</p>\n                      <p class="col text-md-end">Luxoft</p>\n                    </div> \n                  </div>   \n                </button>\n              </h2>\n              <div id="chapter-1" class="accordion-collapse collapse show " aria-labelledby="heading-1" data-bs-parent="#chapters">\n                <div class="accordion-body">\n                  <ul class="list-unstyled text-primary">\n                    <li class="">\n                      &lt; Automated APK & AOSP builds for DirecTV Android TV boxes &#47;&gt;\n                    </li>\n                    <li class="">\n                      &lt; Supported CI/CD infrastructure &#47;&gt;\n                    </li>\n                    <li class="">\n                      &lt; Maintained on-site testing rack &#47;&gt;\n                    </li>\n                    <li class="">\n                      &lt; Release management &#47;&gt;\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n            <div class="accordion-item border-warning ">\n              <h2 class="accordion-header " id="heading-2">\n                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-2" aria-expanded="false" aria-controls="chapter-2">\n                  <div class="container text-primary lead">\n                    <div class="d-md-flex justify-content-between">\n                      <p class="col text-md-start">DevOps-Team Lead (Remote)</p>\n                      <p class="col text-md-center">Jan 2022-Aug 2022</p>\n                      <p class="col text-md-end">SberBank Technologies</p>\n                    </div> \n                  </div>\n                </button>\n              </h2>\n              <div id="chapter-2" class="accordion-collapse collapse" aria-labelledby="heading-2" data-bs-parent="#chapters">\n                <div class="accordion-body">\n                  <ul class="list-unstyled text-muted">\n                    <li class="">\n                      &lt; R&D – introduced HELM to platform\'s deploy pipeline. &#47;&gt;\n                    </li>\n                    <li class="">\n                      &lt; Conboarded and trained new hires, - 2 new team members successfully passed trial period. &#47;&gt;\n                    </li>\n                    <li class="">\n                      &lt; Third line technical support, - 50+ applications migrated onto new platform. &#47;&gt;\n                    </li>\n                    <li class="">\n                      &lt; Provided technology-related details in easy-to-understand terms to management and personnel. &#47;&gt;\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n            <div class="accordion-item border-warning">\n              <h2 class="accordion-header" id="heading-3">\n                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-3" aria-expanded="false" aria-controls="chapter-1">\n                  <div class="container text-primary lead">\n                    <div class="d-md-flex justify-content-between">\n                      <p class="col text-md-start">DevOps-Engineer</p>\n                      <p class="col text-md-center">Nov 2020-Jan 2022</p>\n                      <p class="col text-md-end">SberBank Technologies</p>\n                    </div> \n                  </div>\n                </button>\n              </h2>\n              <div id="chapter-3" class="accordion-collapse collapse" aria-labelledby="heading-3" data-bs-parent="#chapters">\n                <div class="accordion-body">\n                  <ul class="list-unstyled text-muted">\n                    <li class="">\n                      &lt; Developed internal standard for applications\' configuration. &#47;&gt;\n                    </li>\n                    <li class="">\n                      &lt; Created an automated system to more efficiently verify app\'s configuration. &#47;&gt;\n                    </li>\n                    <li class="">\n                      &lt; Developed best practices guidelines for SberBank\'s proprietary cloud platform. &#47;&gt;\n                    </li>\n                    <li class="">\n                      &lt; Instructed Dev and Ops teams on new systems and software, such as terraform, jinja, etc., via presentation and provision of training materials.&#47;&gt;\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n            <div class="accordion-item border-warning">\n              <h2 class="accordion-header" id="heading-4">\n                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-4" aria-expanded="false" aria-controls="chapter-4">\n                  <div class="container text-primary lead">\n                    <div class="d-md-flex justify-content-between">\n                      <p class="col text-md-start">Junior DevOps-Engineer</p>\n                      <p class="col text-md-center">Aug 2019-Nov 2020</p>\n                      <p class="col text-md-end">SberBank Technologies</p>\n                    </div> \n                  </div>\n                </button>\n              </h2>\n              <div id="chapter-4" class="accordion-collapse collapse" aria-labelledby="heading-4" data-bs-parent="#chapters">\n                <div class="accordion-body">\n                  <ul class="list-unstyled text-muted">\n                    <li class="">\n                      &lt; Refactored Istio configuration deploy to openshift/k8s clusters from bash to Groovy (Jenkins Scripted Pipeline). &#47;&gt;\n                    </li>\n                    <li class="">\n                      &lt; Migrated application deploy to openshift/k8s clusters from bash to Groovy (Jenkins Scripted Pipeline). &#47;&gt;\n                    </li>\n                    <li class="">\n                      &lt; Decreased deploy time by 30%. &#47;&gt;\n                    </li>                    \n                  </ul>\n                </div>\n              </div>\n            </div>\n            <div class="accordion-item border-warning">\n              <h2 class="accordion-header " id="heading-5">\n                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-5" aria-expanded="false" aria-controls="chapter-5">\n                  <div class="container text-primary lead">\n                    <div class="d-md-flex justify-content-between">\n                      <p class="col text-md-start">IT Specialist</p>\n                      <p class="col text-md-center">Sep 2016-Aug 2019</p>\n                      <p class="col text-md-end">MD Assistance&Co</p>\n                    </div> \n                  </div>\n                </button>\n              </h2>\n              <div id="chapter-5" class="accordion-collapse collapse" aria-labelledby="heading-5" data-bs-parent="#chapters">\n                <div class="accordion-body">\n                  <ul class="list-unstyled text-muted">\n                    <li class="">\n                      &lt; Performed IT technical support. &#47;&gt;\n                    </li>\n                    <li class="">\n                      &lt; Automated epicrisis delivery for translation services and to insurance companies. &#47;&gt;\n                    </li>\n                    <li class="">\n                      &lt; Optimized database requests. &#47;&gt;\n                    </li>                    \n                  </ul>\n                </div>\n              </div>\n            </div>\n            <div class="accordion-item border-warning border-bottom ">\n              <h2 class="accordion-header " id="heading-6">\n                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-6" aria-expanded="false" aria-controls="chapter-6">\n                  <div class="container text-primary lead">\n                    <div class="d-md-flex justify-content-between">\n                      <p class="col text-md-start">System administrator</p>\n                      <p class="col text-md-center">Apr 2016-Sep 2016</p>\n                      <p class="col text-md-end">Cybernated Forge</p>\n                    </div> \n                  </div>\n                </button>\n              </h2>\n              <div id="chapter-6" class="accordion-collapse collapse" aria-labelledby="heading-6" data-bs-parent="#chapters">\n                <div class="accordion-body">\n                  <ul class="list-unstyled text-muted">\n                    <li class="">\n                      &lt; Maintained hardware/software/network – up to 25 machines. &#47;&gt;\n                    </li>                                        \n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </section>\n'},638:()=>{document.getElementById("intro").innerHTML='\n<section id="intro">\n      <div class="container-fluid" id="Denname">\n        <div class="row g-4  justify-content-start ms-sm-5 align-items-center my-1" >\n          <div class="text-start">\n            <h1>\n              <div class="display-3 pb-2 pt-3 text-warning" >Denis <br>Skorobogatov</div>\n              <p class="text-light lead pt-2" >DevOps Engineer <br>\n                 California</p>\n            </h1>\n            \n            \x3c!-- open sidebar  --\x3e\n            <a class="btn btn-light col-12 col-xl-1 mt-5 text-primary text-md-center btn-lg" href="#contact" role="button">\n              Contact Me!\n            </a>\n          </div>\n        </div>\n      </div>\n    </section>\n'},756:()=>{document.getElementById("navbar").innerHTML='<nav class="navbar navbar-expand-md pt-2">\n<div class="container-xl  pt-3  justify-content-end">\n\n  \x3c!-- Toggle Button for Mobile Nav --\x3e\n  <button class="btn d-md-none d-flex" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">\n    <svg width="50" height="50" viewBox="0 0 33 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <rect width="33" height="3.83721" rx="1.9186" fill="#466869"/>\n      <rect y="7.67432" width="33" height="3.83721" rx="1.9186" fill="#466869"/>\n      <rect y="15.3489" width="33" height="3.83721" rx="1.9186" fill="#466869"/>\n      </svg>\n      \n  </button>\n\n  \x3c!-- navbar links --\x3e\n  <div class="collapse navbar-collapse row text-end pe-3 text-md-center align-center " id="main-nav">\n    <ul class="navbar-nav ">\n      <li class="nav-item col">\n        <a class="nav-link text-warning active" href="#intro">Home</a>\n      </li>\n      <li class="nav-item col">\n        <a class="nav-link text-primary" href="#about">About Me</a>\n      </li>\n      <li class="nav-item col">\n        <a class="nav-link text-primary" href="#skills">Skills</a>\n      </li>          \n      <li class="nav-item col">\n        <a class="nav-link text-primary" href="#experience">Experience</a>\n      </li>\n      <li class="nav-item col">\n        <a class="nav-link text-primary" href="#contact">Get in Touch</a>\n      </li>                    \n    </ul>\n  </div>\n</div>\n</nav>'},568:()=>{document.getElementById("skills").innerHTML='\n<section id="skills">\n      <div class="container-fluid bg-success mt-5 pb-5 pt-3">\n        <div class="row align-items-center">\n          <div class=" text-center text-md-start">            \n              <div class="display-4 text-primary pb-3 ">Skills</div>\n\n              <div class="container-xl">      \n              <div class="lead text-muted">\n                <table class="table text-primary text-start">\n                  <tbody>\n                    <tr>\n                      <th class="lead">Java, Groovy</th>\n                    </tr>\n                    <tr>\n                      <th class="lead">Jira, Confluence, Bitbucket</th>\n                    </tr>\n                    <tr>\n                      <th class="lead">Maven, Gradle</th>\n                    </tr>\n                    <tr>\n                      <th class="lead">Openshift, k8s, docker</th>\n                    </tr>\n                    <tr>\n                      <th class="lead">Jenkins, ansible, terraform,\n                        helm</th>\n                    </tr>\n                    <tr>\n                      <th class="lead">Git, GitLab CI, bash, Linux</th>\n                    </tr>\n                    <tr>\n                      <th class="lead">SQL, Networks, AWS</th>\n                    </tr>\n                    <tr>\n                      <th class="lead">C, C++, C#</th>\n                    </tr>\n                    <tr>\n                      <th class="lead">Time Management and\n                        Organization</th>\n                    </tr>\n                    <tr>\n                      <th class="lead">Continuous Integration Systems</th>\n                    </tr>\n                    <tr>\n                      <th class="lead">Requirements Gathering and\n                        Analysis</th>\n                    </tr>\n                    \n                  </tbody>\n                </table>\n              </div>            \n          </div> \n        </div>\n      </div>\n    </div>\n  </section>\n'}},t={};function e(a){var l=t[a];if(void 0!==l)return l.exports;var s=t[a]={exports:{}};return n[a](s,s.exports,e),s.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var a in t)e.o(t,a)&&!e.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:t[a]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{"use strict";e(756),e(638),e(213),e(254),e(568),e(452);const n=document.getElementById("year_count"),t=new Date;n.innerText="<"+(t.getFullYear()-2016)+">"})()})();