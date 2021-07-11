
window.addEventListener("DOMContentLoaded", () => {
    let allQuestions = document.querySelectorAll(".question");
    let questionsClicked = document.querySelectorAll(".question");

    allQuestions.forEach((question) => {
        question.addEventListener("click", (e) => {
            const downBtn = question.lastElementChild;
            const answer = e.currentTarget.nextElementSibling;

            allQuestions.forEach((newQuestions) => {
                let newAnswers = newQuestions.nextElementSibling
                if(newAnswers !== answer)
                {
                    let newDownBtn = newQuestions.lastElementChild;
                    newAnswers.classList.remove("show-answer");
                    newDownBtn.classList.remove("rotate");
                    newQuestions.classList.remove("new-question");
                }
                // console.log(newAnswers)
            })

            answer.classList.toggle("show-answer");
            downBtn.classList.toggle("rotate");
            question.classList.toggle("new-question");
       

            // const allDownBtn = document.querySelectorAll("")
        })
    })
})

