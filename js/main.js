function scrollHeader(){
  const header = document.getElementById('header');

  if(this.scrollY >= 80) header.classList.add('scroll-header'); 
  else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);



const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[data-content]');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
        
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('tab__active');
        });

        target.classList.add('tab__active');

        tabs.forEach((tab) => {
            tab.classList.remove('tab__active');
        });

        tab.classList.add('tab__active');
    });
  });


// WORKS
  let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});


const linkWork = document.querySelectorAll('.work__item');

function activeWork() {
  linkWork.forEach(l=> l.classList.remove('active-work'))
  this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener('click', activeWork))

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("work__button")) {
    togglePortfolioPopup();
    portfolioItemDetails(e.target.parentElement);
  }
});

function togglePortfolioPopup() {
  document.querySelector(".portfolio__popup").classList.toggle("open");
}

document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
  const workCard = portfolioItem.closest('.work__card');
  const thumbnail = workCard.querySelector(".work__img").src;
  const title = workCard.querySelector(".work__title").innerHTML;
  const details = workCard.querySelector(".portfolio__item-details").innerHTML;

  document.querySelector(".pp_thumbnail img").src = thumbnail;
  document.querySelector(".portfolio__popup-info h3").innerHTML = title;
  document.querySelector(".portfolio__popup-body").innerHTML = details;
}


// CONTACT

const contactForm = document.getElementById('contact-form');
  contactName = document.getElementById('contact-name');
  contactEmail = document.getElementById('contact-email');
  contactSubject = document.getElementById('contact-subject');
  contactMessage = document.getElementById('contact-message');
  errorMessage = document.getElementById('error-message');

const sendEmail = (e) => {
  e.preventDefault();

  if (
    contactMessage.value === ''
  ) {
    errorMessage.innerHTML = "Bitte füllen Sie das Nachrichtenfeld aus";
  } else {
    emailjs.sendForm('service_qr0vu52','template_ui4qp1f','#contact-form','1_alD2ySqqOyGm_zq').then(() => {
      errorMessage.classList.add('color-first');
      errorMessage.textContent = 'Ihre Nachricht wurde erfolgreich gesendet';

      setTimeout(() => {
        errorMessage.textContent = '';
      }, 5000);
    }, (error) => {
      alert('OOPS! Etwas ist schief gelaufen. Bitte versuchen Sie es noch einmal', error);
    });

    contactName.value = '';
    contactEmail.value = '';
    contactSubject.value = '';
    contactMessage.value = '';
  }
};

contactForm.addEventListener('submit', sendEmail);