const h1 = document.querySelector("h1");

const alertH1 = function (e) {
  alert("addEventListener: Great are reading the heading ");
};

h1.addEventListener("mouseenter", alertH1);

setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 2000);

// h1.onmouseenter = function (e) {
//   alert('onmouseenter:  Great are reading the heading');
// };
