const startDate = new Date('2021-10-24'); // Data do início do namoro

function updateCountdown() {
  const now = new Date();
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();
  let hours = now.getHours() - startDate.getHours();
  let minutes = now.getMinutes() - startDate.getMinutes();
  let seconds = now.getSeconds() - startDate.getSeconds();

  // Ajustes para valores negativos
  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (hours < 0) {
    hours += 24;
    days--;
  }
  if (days < 0) {
    const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += lastMonth.getDate();
    months--;
  }
  if (months < 0) {
    months += 12;
    years--;
  }

  const countdownDiv = document.getElementById('countdown');
  countdownDiv.innerHTML = `
      <p>${years} anos, ${months} meses, ${days} dias</p>
      <p>${hours} horas, ${minutes} minutos, ${seconds} segundos</p>
  `;
}

setInterval(updateCountdown, 1000);
updateCountdown();

setInterval(updateCountdown, 1000);
updateCountdown();

// JavaScript do Carrossel
const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let counter = 0;

function updateCarousel() {
    // Calcula a largura da imagem
    const imageWidth = images[0].clientWidth;
    carouselSlide.style.transform = 'translateX(' + (-imageWidth * counter) + 'px)';
}

// Evento para o botão "Próximo"
nextBtn.addEventListener('click', () => {
    if (counter >= images.length - 1) {
        counter = 0; // Volta para a primeira imagem
    } else {
        counter++;
    }
    updateCarousel();
});

// Evento para o botão "Anterior"
prevBtn.addEventListener('click', () => {
    if (counter <= 0) {
        counter = images.length - 1; // Vai para a última imagem
    } else {
        counter--;
    }
    updateCarousel();
});

// Auto-play do carrossel (opcional)
setInterval(() => {
    if (counter >= images.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
    updateCarousel();
}, 5000); // Troca de foto a cada 5 segundos