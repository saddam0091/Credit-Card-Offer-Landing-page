/* ===================================
             JavaScript
=================================== */

/* ========== FAQs Accordions ========== */
const faqs = document.querySelectorAll('.faq');
faqs.forEach((faq) => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('active');
  });
});

const overlay = document.querySelector('.overlay');
const offerBtn = document.getElementById('rewards-offer-btn');
const offerPopup = document.querySelector('.rewards-offer-popup');
const closeBtnOff = document.querySelector('.close-off');
offerBtn.addEventListener('click', () => {
  offerPopup.classList.add('open');
  overlay.classList.add('active');
});
closeBtnOff.addEventListener('click', () => {
  offerPopup.classList.remove('open');
  overlay.classList.remove('active');
});

const rewardsBtn = document.getElementById('club-rewards-btn');
const rewardsPopup = document.querySelector('.club-rewards-popup');
const closeBtnClub = document.querySelector('.close-club');
rewardsBtn.addEventListener('click', () => {
  rewardsPopup.classList.add('open');
  overlay.classList.add('active');
});
closeBtnClub.addEventListener('click', () => {
  rewardsPopup.classList.remove('open');
  overlay.classList.remove('active');
});

/* ===================================
             jQuery
=================================== */

/* ========== Smooth Scrolling ========== */
$('.anchor-tag').on('click', function (e) {
  const anchorID = this.hash;
  $('html, body').animate(
    {
      scrollTop: $(anchorID).offset().top,
    },
    700
  );
});
