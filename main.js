
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

// window.addEventListener("DOMContentLoaded", () => {

//         //select all the drop down icon within each question parent
//         let downButton = document.querySelectorAll(".down-button");

//         //Select all the questions parent elements that have the drop down icons
//         let allQuestions = document.querySelectorAll(".question");

//         //Loop through all the drop down buttons
//         downButton.forEach((button) => {

//             //add an event listner to all the drop-down buttons
//             button.addEventListener("click", (e) => {  
//                 button.previousElementSibling.style.border = "none";
//                 //loop through all the questions parent element
//                 allQuestions.forEach((element) => {

//                     //search the current question parent element for the drop-down button
//                     let checkifButton = element.lastElementChild;

//                     //find the answer element by searching the DOM while using the drop-down button as a reference
//                     let answer = checkifButton.parentElement.nextElementSibling;
                
//                     if(button != checkifButton)
//                     {
//                         answer.classList.remove("shown");
//                     } else {
//                         answer.classList.toggle("shown");

//                         //look for the question by looking at the answer element as a reference and bold it by toggling the "no-border-bold" classlist
//                         let theQuestionToStyle = answer.previousElementSibling;
                    

                        

                        
//                         console.log(theQuestionToStyle.lastElementChild.classList.toggle("rotate"))
//                         // answer.classList.toggle("rotate")  
//                         // 
//                     }
                        
                    
                    
//                 })

//             })
//         })

    
// })
