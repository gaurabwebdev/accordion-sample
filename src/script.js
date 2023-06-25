console.log("connected");

const items = document.querySelectorAll(".accordion-item");

items.forEach((item) => {
  item.addEventListener("click", () => {
    const toggle = item.querySelector(".toggle");
    const icon = item.querySelector(".icon-tabler");
    const iconParent = icon.parentElement;
    if (icon.classList.contains("icon-tabler-circle-plus")) {
      iconParent.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-minus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
   <path d="M9 12l6 0"></path>
</svg>
      `;
    } else if (icon.classList.contains("icon-tabler-circle-minus")) {
      iconParent.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
        <path d="M9 12l6 0"></path>
        <path d="M12 9l0 6"></path>
     </svg>
        `;
    }

    toggle.classList.toggle("hidden");
  });
});
