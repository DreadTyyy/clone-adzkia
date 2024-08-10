document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById('hamburger');
    const navigationBar = document.getElementById('navigation');
    const dropdowns = document.querySelectorAll('._dropdowns-mobile');

    hamburger.addEventListener('click', () => {
        navigationBar.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    dropdowns.forEach(element => {
        element.addEventListener('click', () => {
            dropdowns.forEach((el) => {
            if (el !== element && el.classList.contains('active')) {
                el.classList.remove('active');
              }
            });
            element.classList.toggle('active');
        });
    });
    const listHeader = [
        "Slider_Adzkia-rev11_(1).png",
        "Teknik_Industri_Teknik_Sipil_Sistem_Informasi_Informatika_Agribisnis_Manajemen_Ritel_Kewirausahaan_Gizi_Hukum_Bisnis_Desain_Komunikasi_Visual1.png",
        "UNIVERSITAS_ADZKIA_(1).png"
      ];
    
      const imageHeader = document.getElementById("image-header");
    
      checkIndex = () => {
        let index = 0;
        const imageNow = imageHeader.src;
        const splitImage = imageNow.split("/");
        const nameImage = splitImage[splitImage.length - 1];
        for (let i = 0; i < listHeader.length; i++) {
          if (listHeader[index] === nameImage) {
            return index;
          }
          if (index > listHeader.length - 1) {
            return index === 0;
          }
          index++;
        }
      };
    
      const changeImage = (newIndex) => {
        imageHeader.style.opacity = 0;
        setTimeout(() => {
          imageHeader.src = `assets/${listHeader[newIndex]}`;
          imageHeader.style.opacity = 1;
        }, 400);
      };
    
      const startAutoChange = () => {
        console.log('luar interval');
        setInterval(() => {
          const index = checkIndex();
          console.log('interval');
          const nextIndex = index === listHeader.length - 1 ? 0 : index + 1;
          changeImage(nextIndex);
        }, 5000); // Change image every 3 seconds
      };
    
      startAutoChange();

})

// preview youtube
const previewContainer = document.getElementById('preview-container');
const frameYoutube = document.getElementById('frame-youtube');
const overlay = document.querySelector('._overlay');

const openPreview = (url) => {
    const embedUrl = url.replace("watch?v=", "embed/");
    frameYoutube.src = embedUrl;
    previewContainer.classList.add('show');
    overlay.classList.add('open');
}

const closePreview = () => {
    previewContainer.classList.remove('show');
    overlay.classList.remove('open');
    frameYoutube.src = '';
}