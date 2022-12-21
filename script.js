const questions = [];
const answers = [];
const icons = document.getElementsByClassName("arrow_icon");

for (let i = 0; i < 5; i++) {
  questions[i] = document.getElementById(`question${i + 1}`);
  answers[i] = document.getElementById(`answer${i + 1}`);
}

questions.forEach(function (e, index) {
  e.addEventListener("click", function () {
    console.log("is clicked");
    let otherAnswers = answers.filter((l) => l != answers[index]);
    let otherQuestions = questions.filter((el) => el != e);

    // change the color and display for the questions/answers not clicked
    otherQuestions.forEach((l) => {
      l.style.fontWeight = "400";
      l.style.color = "hsl(237, 12%, 33%)";
    });
    otherAnswers.forEach((l) => (l.style.display = "none"));

    // check if question is already clicked and change the style accordingly
    if (answers[index].style.display == "block") {
      e.style.fontWeight = "400";
      e.style.color = "hsl(237, 12%, 33%)";
      answers[index].style.display = "none";
      icons[index].style.transform = "none";
    } else {
      e.style.fontWeight = "700";
      e.style.color = "hsl(238, 29%, 16%)";
      answers[index].style.display = "block";
      icons[index].style.transform = "rotate(180deg)";
    }
  });
});
