import '/src/navbar.js'
import '/src/intro.js'
import '/src/about.js'
import '/src/experience.js'
import '/src/skills.js'
import '/src/contact.js'

const yearsEl = document.getElementById('year_count');

const yearNow = new Date();

yearsEl.innerText = '<' + `${yearNow.getFullYear() - 2016}` + '>';

function onSubmit() {
  var form = document.getElementById('form');

  if (validateForm(form)) {
    var formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
    })
      .then(function (response) {
        if (response.ok) {
          window.location.href = 'thank-you.html';
        } else {
          throw new Error('Error: ' + response.status);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }
}

function validateForm(form) {
  var nameInput = form.elements['user_name'];
  var emailInput = form.elements['user_email'];

  if (nameInput.value.trim() === '') {
    alert('Please enter your name.');
    nameInput.focus();
    return false;
  }

  if (emailInput.value.trim() === '') {
    alert('Please enter your email address.');
    emailInput.focus();
    return false;
  }

  return true;
}
