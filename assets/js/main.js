const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  $.querySelector("#connect").addEventListener("click", () => {
    $.querySelector(".modal").classList.toggle("show");
    $.body.classList.toggle("modal-open");
  });

  $.querySelector("#close").addEventListener("click", () => {
    $.querySelector(".modal").classList.toggle("show");
    $.body.classList.toggle("modal-open");
  });

  $.querySelector("#contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      firstName: $.querySelector("#firstname").value,
      lastName: $.querySelector("#lastname").value,
      email: $.querySelector("#email").value,
      message: $.querySelector("#message").value,
    };

    const response = await axios.post(
      "https://site--backend-tripadvisor--dh6xg2c5vy8x.code.run/form",
      data
    );
    console.log(response);
  });
});
