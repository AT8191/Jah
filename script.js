// script.js

document.addEventListener("DOMContentLoaded", () => {

    // --- هدر: سایه پویا هنگام اسکرول ---
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
      } else {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
      }
    });
  
    // --- اسلایدر نظرات مشتریان ---
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;
  
    function showTestimonial(index) {
      testimonials.forEach((t, i) => {
        t.style.display = i === index ? 'block' : 'none';
        t.style.opacity = i === index ? 1 : 0;
        t.style.transition = "opacity 0.5s ease-in-out";
      });
    }
  
    if (testimonials.length > 0) showTestimonial(currentTestimonial);
  
    setInterval(() => {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      showTestimonial(currentTestimonial);
    }, 5000);
  
    // --- اسکرول نرم به بخش‌ها ---
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if(target){
          target.scrollIntoView({behavior:'smooth'});
        }
      });
    });
  
    // --- دکمه واتساپ / SMS ---
    const whatsappButtons = document.querySelectorAll('.btn-whatsapp');
    whatsappButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const number = btn.dataset.number || "09171912114";
        const text = encodeURIComponent("سلام، می‌خواهم بیمه دریافت کنم.");
        window.open(`https://wa.me/${number}?text=${text}`, '_blank');
      });
    });
  
    const smsButtons = document.querySelectorAll('.btn-sms');
    smsButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const number = btn.dataset.number || "09171912114";
        const body = encodeURIComponent("سلام، میخواهم بیمه دریافت کنم.");
        window.location.href = `sms:${number}?body=${body}`;
      });
    });
  
    // --- ولیدیشن ساده فرم ---
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        const requiredFields = form.querySelectorAll('[required]');
        let valid = true;
        requiredFields.forEach(f => {
          if(!f.value.trim()){
            f.style.border = "2px solid red";
            valid = false;
          } else {
            f.style.border = "1px solid #ccc";
          }
        });
        if(!valid){
          e.preventDefault();
          alert("لطفاً تمام فیلدهای ضروری را پر کنید.");
        }
      });
    });
  
  });
  