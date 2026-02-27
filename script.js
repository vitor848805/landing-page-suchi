document.addEventListener('DOMContentLoaded', ()=>{
  // Menu toggle
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  toggle.addEventListener('click', ()=> menu.classList.toggle('show'));

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const href = a.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        document.querySelector(href).scrollIntoView({behavior:'smooth',block:'start'});
        menu.classList.remove('show');
      }
    })
  });

  // Reserva form (simulação)
  const form = document.getElementById('reservaForm');
  const msg = document.getElementById('reservaMsg');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const nome = form.nome.value.trim();
    const data = form.data.value;
    const pessoas = form.pessoas.value;
    if(!nome || !data || !pessoas){
      msg.textContent = 'Por favor, preencha todos os campos.';
      return;
    }
    msg.textContent = 'Reserva recebida! Entraremos em contato para confirmar.';
    form.reset();
    setTimeout(()=> msg.textContent = '', 6000);
  });
});
