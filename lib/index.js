// TODO: write your code here!

const highlight = () => {
  const button = document.querySelectorAll('.clickable');
  button.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      btn.classList.toggle('active');
    });
  });
};

highlight();
