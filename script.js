// Ano no footer
document.getElementById('year').textContent = new Date().getFullYear();

// Menu móvel
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => {
  const open = mainNav.style.display === 'block';
  mainNav.style.display = open ? 'none' : 'block';
});

// Alternância de tema
const themeToggle = document.getElementById('themeToggle');

// Carregar tema salvo
if(localStorage.getItem('theme')){
  document.documentElement.setAttribute('data-theme', localStorage.getItem('theme'));
  themeToggle.textContent = localStorage.getItem('theme') === 'dark' ? '☀️' : '🌙';
}

// Clique para alternar
themeToggle.addEventListener('click', () => {
  let currentTheme = document.documentElement.getAttribute('data-theme');
  let newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});

// Formulário
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const clearBtn = document.getElementById('clearBtn');

clearBtn.addEventListener('click', ()=> {
  contactForm.reset();
  formStatus.textContent = '';
});

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if(!name || !email || !message){
    formStatus.textContent = 'Preencha todos os campos.';
    return;
  }

  const submissions = JSON.parse(localStorage.getItem('portfolio_submissions') || '[]');
  submissions.push({name, email, message, date: new Date().toISOString()});
  localStorage.setItem('portfolio_submissions', JSON.stringify(submissions));

  formStatus.textContent = 'Mensagem enviada! (simulada — salva no navegador)';
  contactForm.reset();
});
