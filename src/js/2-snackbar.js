import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// Отримуємо форму
const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  // Отримуємо значення з форми
  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  // Створюємо проміс
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  // Обробляємо проміс
  promise
    .then((delay) => {
      iziToast.success({
        title: "Success",
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: "topRight",
      });
    })
    .catch((delay) => {
      iziToast.error({
        title: "Error",
        message: `❌ Rejected promise in ${delay}ms`,
        position: "topRight",
      });
    });

  // Очищаємо форму
  form.reset();
});