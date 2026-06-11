document.addEventListener('DOMContentLoaded', function() {
  var requestForm = document.getElementById('requestForm');
  if (requestForm) {
    requestForm.addEventListener('submit', function(e) {
      e.preventDefault();
      document.getElementById('request-message').textContent = 'Request sent. Thank you.';
      requestForm.reset();
    });
  }
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      document.getElementById('contact-message').textContent = 'Message sent. I will reply soon.';
      contactForm.reset();
    });
  }
});
