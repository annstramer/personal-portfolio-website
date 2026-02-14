document.addEventListener('DOMContentLoaded', (event) => {

  const motionWrapper = document.querySelector(".motion");
  const startupWrapper = document.querySelector(".startup");
  const highlightWrapper = document.querySelector(".highlight");
  const visualStyleWrapper = document.querySelector(".visual-style__gallery");

  const motionHTML = earlyProjects
    .sort((a, b) => a.order - b.order)
    .filter(work => work.category === 'motion')
    .map((item) => {
      return `<div class="gallery-card ${item.tileSize}">
                <div class="gallery-card__wrapper">
                  <img src="${item.imageUrl}" class="gallery-card__image" alt="">
                  <div class="gallery-card__wrapper--bg"></div>
                  <div class="gallery-card__description--full">
                    <p class="gallery-card__description--para">${item.fullCaption}</p>
                  </div>
                </div>
                <div class="gallery-card__description">
                  <h4 class="gallery-card__description--title">${item.title}</h4>
                  <p class="gallery-card__description--para">${item.microCaption}</p>
                </div>
              </div>`;
    })
    .join("");

  motionWrapper.innerHTML = motionHTML;

  const startupHTML = earlyProjects
    .sort((a, b) => a.order - b.order)
    .filter(work => work.category === 'startup')
    .map((item) => {
      return `<div class="gallery-card ${item.tileSize}">
                <div class="gallery-card__wrapper">
                  <img src="${item.imageUrl}" class="gallery-card__image" alt="">
                  <div class="gallery-card__wrapper--bg"></div>
                  <div class="gallery-card__description--full">
                    <p class="gallery-card__description--para">${item.fullCaption}</p>
                  </div>
                </div>
                <div class="gallery-card__description">
                  <h4 class="gallery-card__description--title">${item.title}</h4>
                  <p class="gallery-card__description--para">${item.microCaption}</p>
                </div>
              </div>`;
    })
    .join("");

  startupWrapper.innerHTML = startupHTML;

  const highlightHTML = earlyProjects
    .sort((a, b) => a.order - b.order)
    .filter(work => work.category === 'highlight')
    .map((item) => {
      return `<div class="gallery-card ${item.tileSize}">
                <div class="gallery-card__wrapper">
                  <img src="${item.imageUrl}" class="gallery-card__image" alt="">
                  <div class="gallery-card__wrapper--bg"></div>
                  <div class="gallery-card__description--full">
                    <p class="gallery-card__description--para">${item.fullCaption}</p>
                  </div>
                </div>
                <div class="gallery-card__description">
                  <h4 class="gallery-card__description--title">${item.title}</h4>
                  <p class="gallery-card__description--para">${item.microCaption}</p>
                </div>
              </div>`;
    })
    .join("");

  highlightWrapper.innerHTML = highlightHTML;
  

  const visualStyleHTML = visualStyleImages
  .map((item) => {
    return `<figure class="visual-style__wrapper">
              <image src="${item.imageURL}" class="visual-style__image" alt="">
            </figure>`;
  })
  .join("");

  visualStyleWrapper.innerHTML = visualStyleHTML;

});

