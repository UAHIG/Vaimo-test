function cycleBackgroundImages() {
  const images = ['images/1.png', 'images/2.png'];
  let currentIndex = 0;
  setInterval(() => {
    const cont = document.getElementsByClassName("container-after-warper")[0];
    cont.style.backgroundImage = `url(${images[currentIndex]})`;
    cont.style.transition = 'background-image 10s ease-in-out';
    cont.addEventListener('transitionend', () => {
      setTimeout(() => {
        cont.style.transition = '';
      }, 0);
    }, { once: true });
    currentIndex = (currentIndex + 1) % images.length;
  }, 12000);


}
//просто активируем функцию выше
// cycleBackgroundImages();

const mediaQuery = window.matchMedia('(min-width: 991.98px)');
// Проверка ширины экрана при загрузке страницы
if (mediaQuery.matches) {
  headerChange();
}
// Обнаружение изменения ширины экрана и выполнение функции
mediaQuery.addListener(function (event) {
  if (event.matches) {
    headerChange();
  }
});

// функция активации события mouseover на header  и запуск функций смены стилей
function headerChange() {
  const navElement = document.querySelector("nav");
  navElement.addEventListener('mouseover', changeheaderActive);
  navElement.addEventListener('mouseleave', changeHeaderNoActive);
}

// применяются стили header (в случае mouseover)
function changeheaderActive() {
  const containerDiv = document.querySelector(".container");
  containerDiv.classList.add('active');
  const gradientDiv = document.querySelector(".gradient");
  gradientDiv.classList.add('active');
  const Left = document.querySelector(".left-section");
  Left.classList.add('active');
  const central = document.querySelector(".nav-items");
  central.classList.add('active');
  const right = document.querySelector(".right-section");
  right.classList.add('active');
  const placeholder = document.querySelector(".middle-section-placeholder-text");
  placeholder.classList.add('active');
  const basketImg = document.getElementById("basket-img");
  basketImg.src = "images/basket2.png";
  const inputElement = document.getElementById('placeholderText'); // получаем элемент input, у которого нужно изменить цвет текста placeholder
  inputElement.style.color = 'black'; // устанавливаем цвет текста input
  inputElement.style.setProperty('--placeholder-color', 'black'); // устанавливаем цвет текста placeholder

}
// применяются стили header (без mouseover)
function changeHeaderNoActive() {
  const containerDiv = document.querySelector(".container")
  containerDiv.classList.remove('active');
  const gradientDiv = document.querySelector(".gradient");
  gradientDiv.classList.remove('active');
  const Left = document.querySelector(".left-section");
  Left.classList.remove('active');
  const central = document.querySelector(".nav-items");
  central.classList.remove('active');
  const right = document.querySelector(".right-section");
  right.classList.remove('active');
  const placeholder = document.querySelector(".middle-section-placeholder-text");
  placeholder.classList.remove('active');
  const basketImg = document.getElementById("basket-img");
  basketImg.src = "images/basket1.png";
  const inputElement = document.getElementById('placeholderText'); // получаем элемент input, у которого нужно изменить цвет текста placeholder
  inputElement.style.color = 'black'; // устанавливаем цвет текста input
  inputElement.style.setProperty('--placeholder-color', '#ffff'); // устанавливаем цвет текста placeholder

}
// убрано для версии с всплывающим нижним блоком 

// функция открытия burger menu применена анимация по высоте

// const burgerImage = document.getElementById('burgerImage');
// burgerImage.addEventListener('click', openClose)

// function openClose() {
//   const mobileFooterContainer = document.querySelector('.mobile-footer-container');
//   const transparentDiv = document.querySelector('.transparent');

//   if (window.matchMedia('(max-width: 575.98px)').matches) {
//     if (mobileFooterContainer.style.display === 'none' || mobileFooterContainer.style.display === '') {
//       mobileFooterContainer.style.display = 'block';
//       animateHeight(transparentDiv, 230, 500);
//     } else {
//       mobileFooterContainer.style.display = 'none';
//       animateHeight(transparentDiv, 450, 500);
//     }
//   } else {
//     mobileFooterContainer.style.display = 'none';
//   }
// }

// Добавляем listener изменений медиа-запроса
window.matchMedia('(max-width: 575.98px)').addListener(function (e) {
  if (e.matches) {
    // Если медиа-запрос сработал, то скрываем .mobile-footer-container
    document.querySelector('.mobile-footer-container').style.display = 'none';
  }
});


// Проверка на правильность события (нажатие на клавишу с Id =числу) цель - отделение клавиши от всего блока контейнера (у них общий event)
mobileFooterContainer.onclick = function (event) {
  let dropButton = event.srcElement.id;
  if (!isNaN(dropButton)) {
    openCloseItems(dropButton)
  }
};
// функция открывающая и закрывающая список контейнероф в футер
function openCloseItems(dropButton) {
  const mobileFooterHeads = document.getElementById('mobileFooterHeads' + dropButton)
  const mobileAboutUsDrops = document.getElementById('drops' + dropButton);
  const mobileImg = document.getElementById(dropButton);
  if (mobileAboutUsDrops.style.display === 'none' || mobileAboutUsDrops.style.display === '') {
    animateHeight(mobileAboutUsDrops, 100, 400);
    mobileAboutUsDrops.style.display = 'block';
    mobileAboutUsDrops.style.borderBottom = '1px solid #cecbcb';
    mobileFooterHeads.style.borderBottom = 'none';
    mobileImg.style.transform = 'rotate(90deg)';
    mobileImg.style.transition = 'transform 0.4s ease-in-out';

  } else {
    mobileAboutUsDrops.style.display = 'none';
    mobileFooterHeads.style.borderBottom = '1px solid #cecbcb';
    mobileImg.style.transform = 'none';
  }
}
// функция анимации высоты div
// Для вызова этой функции нужно передать три аргумента: элемент <div>, который нужно анимировать, новую высоту и продолжительность анимации в миллисекундах. 
// Например:
// let myDiv = document.getElementById("myDiv");
// animateHeight(myDiv, 500, 1000); // изменить высоту myDiv до 500 пикселей за 1 секунду

function animateHeight(element, newHeight, duration) {
  let startHeight = element.clientHeight;
  let heightChange = newHeight - startHeight;
  let startTime = null;

  function heightAnimation(currentTime) {
    if (!startTime) {
      startTime = currentTime;
    }
    let elapsedTime = currentTime - startTime;
    let height = startHeight + heightChange * (elapsedTime / duration);
    element.style.height = height + "px";
    if (elapsedTime < duration) {
      requestAnimationFrame(heightAnimation);
    }
  }
  requestAnimationFrame(heightAnimation);
}


// добавляем event на кнопку лупы поиска
const scImage = document.getElementById('scopeImage');
scImage.addEventListener('click', letsFindSomething);
// открываем закрываем окно поиска меняя стили страницы добавлена анимация пустого div
function letsFindSomething() {
  const conteinerFinder = document.querySelector('.mobile-finder-container');
  const transp = document.querySelector('.transparent')
  const changeImg = document.querySelector('.container-after-warper')
  const scope = document.getElementById('scopeImage');
  if (conteinerFinder.classList.value === 'mobile-finder-container') {
    conteinerFinder.classList.add('findStatus');
    // сохраняем возвращаемое значение setInterval в переменную для остановки функции смены изображений после нажатия лупы и открытия окна диалога поиска
    let intervalId = setInterval(cycleBackgroundImages, 1000);
    // для остановки выполнения функции вызываем clearInterval
    clearInterval(intervalId);
    changeImg.style.backgroundImage = ('url("images/2.png")');
    scope.src = ("images/crosswhite.png");
    scope.classList.add('crossadd');
    animateHeight(transp, 20, 800);
  } else {
    changeImg.style.backgroundImage = ('url("images/1.png")')
    conteinerFinder.classList.remove('findStatus');
    scope.src = ("images/Fill1.png");
    scope.classList.remove('crossadd');
    animateHeight(transp, 450, 600);
    cycleBackgroundImages();
  }

}
// открываем боковую панель при нажатии кнопки корзина и закрываем при нажатии креста
const burgerImage = document.getElementById('burgerImage');
// const basBtn = document.getElementById('basket-img');
const crossBtn = document.getElementById('mCrossBlack')
const crossBtn2 = document.getElementById('mCrossBlack2')
const crossBtn3 = document.getElementById('mCrossBlack3')

burgerImage.addEventListener('click', newAction);
crossBtn.addEventListener('click', close234);
crossBtn2.addEventListener('click', close234);
crossBtn3.addEventListener('click', close234);


function newAction() {
  const sideBar = document.querySelector('.mobile-left-sidebar');
  if (sideBar.classList.value === "mobile-left-sidebar") {
    sideBar.classList.add('active');

  } else {
    sideBar.classList.remove('active');
  }
}

// закрыть списки всех уровней-возврат на основной экран
function close234() {
  const sideBar = document.querySelector('.mobile-left-sidebar');
  const sideBar2 = document.querySelector('.mobile-left-sidebar2');
  const sideBar3 = document.querySelector('.mobile-left-sidebar3');

  const listItemsBar = document.getElementById('lev2');
  const listItemsBar3 = document.getElementById('lev3');

  sideBar3.classList.remove('active');
  sideBar2.classList.remove('active');
  sideBar.classList.remove('active');
  // стираем список при нажатии кнопки close
  listItemsBar.innerHTML = '';
  listItemsBar3.innerHTML = '';

}

// находим ID нажатой кнопки списка left и запускаем функцию построения списка передавая как аргумент id конкретной кнопки
const mLeftTwo = document.querySelector('.mobile-left-sidebar');

mLeftTwo.onclick = function (event) {
  let btnTwo = event.srcElement.id || null;
  if ((!isNaN(btnTwo) && btnTwo !== null)) {
    createLayer(btnTwo);
  }
};

// находим ID нажатой кнопки списка следующего уровня left и запускаем функцию построения списка передавая как аргумент id конкретной кнопки
const mLeftThree = document.querySelector('.mobile-left-sidebar2');

mLeftThree.onclick = function (event) {
  let btnThree = event.srcElement.id || null;
  if ((!isNaN(btnThree) && btnThree !== null)) {
    createLayer3(btnThree);
  }
};

// создаем панель из нужного списка Li template
function createLayer(btnTwo) {

  const template = document.getElementById('list' + btnTwo); //выбрали нужный список по id кнопки
  const listItems = template.content.querySelectorAll('li');
  const listItemsBar = document.getElementById('lev2');

  for (let i = 0; i < listItems.length; i++) {
    const innerDiv = document.createElement('div');
    innerDiv.classList.add('mobile-left-heads');
    innerDiv.textContent = listItems[i].textContent;

    const innerImg = document.createElement('img');
    innerImg.classList.add('chevron');
    innerImg.id = `${btnTwo}${i + 1}`; // ID будет равен "11 1", "11 2", "12 1" и т.д.
    innerImg.src = 'images/chevron.png';
    innerImg.alt = 'chevron';

    innerDiv.appendChild(innerImg);
    listItemsBar.appendChild(innerDiv);
  }

  newAction2(); //показываем список
}

// создаем панель из нужного списка Li template

function createLayer3(btnThree) {

  const template = document.getElementById('list' + btnThree); //выбрали нужный список по id кнопки
  const listItems = template.content.querySelectorAll('li');
  const listItemsBar = document.getElementById('lev3');

  for (let i = 0; i < listItems.length; i++) {
    const innerDiv = document.createElement('div');
    innerDiv.classList.add('mobile-left-heads3');
    innerDiv.textContent = listItems[i].textContent;
    // здесь вставка img не нужна -последний слой
    // const innerImg = document.createElement('img');
    // innerImg.classList.add('chevron');
    // innerImg.id = `3${i + 1}`; 
    // innerImg.src = 'images/chevron.png';
    // innerImg.alt = 'chevron';

    // innerDiv.appendChild(innerImg);
    listItemsBar.appendChild(innerDiv);
  }

  newAction3(); //показываем список
}

// открываем список уровня при открытой боковой панели кнопкой стрелка

function newAction2() {
  const sideBar2 = document.querySelector('.mobile-left-sidebar2');
  if (sideBar2.classList.value === "mobile-left-sidebar2") {
    sideBar2.classList.add('active');

  } else {
    sideBar2.classList.remove('active');
  }
}

function newAction3() {
  const sideBar3 = document.querySelector('.mobile-left-sidebar3');
  if (sideBar3.classList.value === "mobile-left-sidebar3") {
    sideBar3.classList.add('active');

  } else {
    sideBar3.classList.remove('active');
  }
}

// функция возврата при нажатии стрелки назад 

const goBackBtn2 = document.getElementById('chevronRighr2')
const goBackBtn3 = document.getElementById('chevronRighr3')

goBackBtn2.addEventListener('click', close234);
goBackBtn3.addEventListener('click', close234);



