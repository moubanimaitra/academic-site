const toggle = document.getElementById('navToggle');
const tabs = document.getElementById('tabs');
if (toggle && tabs){
  toggle.addEventListener('click', () => tabs.classList.toggle('open'));
  tabs.querySelectorAll('a').forEach(a => a.addEventListener('click', () => tabs.classList.remove('open')));
}

const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window){
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in'));
}
