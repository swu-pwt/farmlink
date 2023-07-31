const menuDetail = document.querySelector('.menu-detail');
const menuChat = document.querySelector('.menu-chat');
const contentDetail = document.querySelector('.content-detail');
const contentChat = document.querySelector('.content-chat');

menuChat.addEventListener('click', function () {
  menuDetail.classList.remove('active');
  menuDetail.querySelector('h6').classList.remove('fw-bold');
  menuDetail.querySelector('h6').classList.remove('active-color');
  menuDetail.querySelector('h6').classList.add('unactive-color');

  contentDetail.classList.add('d-none');

  menuChat.classList.add('active');
  menuChat.querySelector('h6').classList.add('fw-bold');
  menuChat.querySelector('h6').classList.remove('unactive-color');
  menuChat.querySelector('h6').classList.add('active-color');
  contentChat.classList.remove('d-none');
});
menuDetail.addEventListener('click', function () {
  menuChat.classList.remove('active');
  menuChat.querySelector('h6').classList.remove('fw-bold');
  menuChat.querySelector('h6').classList.remove('active-color');
  menuChat.querySelector('h6').classList.add('unactive-color');
  contentChat.classList.add('d-none');

  menuDetail.classList.add('active');
  menuDetail.querySelector('h6').classList.add('fw-bold');
  menuDetail.querySelector('h6').classList.remove('unactive-color');
  menuDetail.querySelector('h6').classList.add('active-color');
  contentDetail.classList.remove('d-none');
});
