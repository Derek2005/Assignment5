// functionality for showing/hiding the comments section

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

commentWrapper.style.display = 'none';

showHideBtn.onclick = function () {
  const isHidden = commentWrapper.style.display === 'none';
  showHideBtn.textContent = isHidden ? 'Hide comments' : 'Show comments';
  commentWrapper.style.display = isHidden ? 'block' : 'none';
};

// Keyboard accessibility for show-hide button
showHideBtn.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    showHideBtn.click();
  }
});
