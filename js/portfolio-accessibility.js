document.addEventListener('keydown', function (event) {
  const item = event.target.closest('.portfolio-item[role="button"]');
  if (item && (event.key === 'Enter' || event.key === ' ')) {
    event.preventDefault();
    item.click();
  }
});
