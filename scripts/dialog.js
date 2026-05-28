document.addEventListener('DOMContentLoaded', () => {
  const saveButton = document.querySelector('.save-button');
  const dialog = document.querySelector('.dialog');

  saveButton.addEventListener('click', () => {
    dialog.showModal();
  });
});