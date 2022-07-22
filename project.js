const ratings1 = Array.from(document.querySelectorAll("#ratings1 label"));
const ratings2 = Array.from(document.querySelectorAll("#ratings2 label"));
const ratings3 = Array.from(document.querySelectorAll("#ratings3 label"));

const colorsClasses = [
  "text-rose-600",
  "text-red-500",
  "text-orange-600",
  "text-orange-400",
  "text-orange-300",
  "text-yellow-400",
  "text-green-300",
  "text-green-400",
  "text-emerald-400",
  "text-emerald-500",
];
const borderColorsClasses = [
  "border-rose-600",
  "border-red-500",
  "border-orange-600",
  "border-orange-400",
  "border-orange-300",
  "border-yellow-400",
  "border-green-300",
  "border-green-400",
  "border-emerald-400",
  "border-emerald-500",
];
const backgroundColorsClasses = [
  "bg-rose-600",
  "bg-red-500",
  "bg-orange-600",
  "bg-orange-400",
  "bg-orange-300",
  "bg-yellow-400",
  "bg-green-300",
  "bg-green-400",
  "bg-emerald-400",
  "bg-emerald-500",
];
function customization(ratings) {
  for (let i = 0; i < 10; i++) {
    ratings[i].classList.add(
      colorsClasses[i],
      borderColorsClasses[i],
      "select-none",
      "cursor-pointer"
    );
  }
}
customization(ratings1);
customization(ratings2);
customization(ratings3);

function chooseRate(rating) {
  for (let i of rating) {
    i.onclick = function () {
      for (let j of rating) {
        j.classList.remove(
          "text-white",
          backgroundColorsClasses[rating.indexOf(j)]
        );
        j.classList.add("bg-white", colorsClasses[rating.indexOf(j)]);
      }
      i.classList.remove("bg-white", colorsClasses[rating.indexOf(i)]);
      i.classList.add("text-white", backgroundColorsClasses[rating.indexOf(i)]);
    };
  }
}
chooseRate(ratings1);
chooseRate(ratings2);
chooseRate(ratings3);
