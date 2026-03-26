'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const startCoordWallX = wall.getBoundingClientRect().x + wall.clientLeft;
  const startCoordWallY = wall.getBoundingClientRect().y + wall.clientTop;
  const currClick = e.target.closest('.wall');

  if (!currClick) {
    return;
  }

  const clickX = e.clientX;
  const clickY = e.clientY;

  const centerSpiderX = spider.offsetWidth / 2;
  const centerSpiderY = spider.offsetHeight / 2;

  const minW = startCoordWallX + centerSpiderX;
  const maxW = startCoordWallX + wall.clientWidth + centerSpiderX;
  const minH = startCoordWallY + centerSpiderY;
  const maxH = startCoordWallY + wall.clientHeight + centerSpiderY;

  if (clickX < minW) {
    spider.style.left = `${minW}px`;
  } else if (clickX > maxW) {
    spider.style.left = `${maxW}px`;
  } else if (clickY < minH) {
    spider.style.top = `${minH}px`;
  } else if (clickY > maxH) {
    spider.style.top = `${maxH}px`;
  } else {
    spider.style.top = `${clickY - startCoordWallY - centerSpiderY}px`;
    spider.style.left = `${clickX - startCoordWallX - centerSpiderX}px`;
  }
});
