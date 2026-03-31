const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const btn = item.querySelector(".faq-question");

  btn.addEventListener("click", () => {
    // close other items
    faqItems.forEach(i => {
      if (i !== item) {
        i.classList.remove("active");
        i.querySelector(".icon").textContent = "+";
      }
    });

    // toggle current item
    item.classList.toggle("active");

    const icon = item.querySelector(".icon");
    icon.textContent = item.classList.contains("active") ? "–" : "+";
  });
});









  const minus = document.querySelector('.minus');
  const plus = document.querySelector('.plus');
  const input = document.querySelector('.qty-input');

  minus.addEventListener('click', () => {
    let value = parseInt(input.value) || 1;
    if (value > 1) input.value = value - 1;
  });

  plus.addEventListener('click', () => {
    let value = parseInt(input.value) || 1;
    input.value = value + 1;
  });







