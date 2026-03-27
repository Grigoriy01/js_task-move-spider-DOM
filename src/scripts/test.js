'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const target = e.target.closest('.wall');

  if (!target) {
    return;
  }

  const leftBorderWall = wall.getBoundingClientRect().left + wall.clientLeft;
  const topBorderWall = wall.getBoundingClientRect().top + wall.clientTop;

  const nullPosX = e.clientX - leftBorderWall - spider.offsetWidth / 2;
  const nullPosY = e.clientY - topBorderWall - spider.offsetHeight / 2;

  const StateX = Math.max(0, nullPosX);
  const StateY = Math.max(0, nullPosY);
  const finalX = Math.min(wall.clientWidth - spider.offsetWidth, StateX);
  const finalY = Math.min(wall.clientHeight - spider.offsetHeight, StateY);

  spider.style.left = `${finalX}px`;
  spider.style.top = `${finalY}px`;
});
