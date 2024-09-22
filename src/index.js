import '/src/navbar.js';
import '/src/intro.js';
import '/src/about.js';
import '/src/experience.js';
import '/src/skills.js';
import '/src/contact.js';

const yearsEl = document.getElementById('year_count');

const yearNow = new Date();

yearsEl.innerText = '<' + `${yearNow.getFullYear() - 2016}` + '>';

const recaptchaKey = process.env.SITE_RECAPTCHA_KEY;

function onSubmit(token) {
  const form = document.getElementById('form');
  if (form) {
    form.appendChild(document.createElement('input')).setAttribute('name', 'g-recaptcha-response');
    form.elements['g-recaptcha-response'].value = token;

    const formData = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then((response) => {
        if (response.ok) {
          alert('Message sent successfully!');
          form.reset();
        } else {
          alert('Failed to send message.');
        }
      })
      .catch((error) => {
        console.error('Form submission error: ', error);
      });
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const submitButton = document.getElementById('submit');
  if (submitButton) {
    submitButton.addEventListener('click', function (event) {
      event.preventDefault();
      grecaptcha.execute(config.recaptchaKey, { action: 'submit' }).then(onSubmit);
    });
  }
});

/*

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
*/
