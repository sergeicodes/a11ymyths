document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('skip-link').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('main-content').focus();
  });
});
