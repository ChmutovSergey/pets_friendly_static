const checkbox = document.querySelector("#agreement");
const btn = document.querySelector("#send");

checkbox.addEventListener('change', () => {
  if (!checkbox.checked) {
    btn.disabled = true;
    btn.classList.add('blocked');
  } else {
    btn.disabled = false;
    btn.classList.remove('blocked');
  }
})