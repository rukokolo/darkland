$(".aside").hide();
$("*").on("click", (e) => {
  if ($(e.target).is(".header:nth-child(2), .header__items, .active")) {
    return false;
  }

  $(".aside").hide();
  $(".main__block").css("position", "static");
});
const active = () => {
  $(".aside").toggle();
  $(".main__block").css("position", "relative");
};

const date = new Date().getFullYear()

$("#copyright").html(`<p>&copy; Darkland 2022-${date}</p>`)