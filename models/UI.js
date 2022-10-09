export class UI {
    showQuestions(text){
        const questionTitle = document.getElementById("question")
        questionTitle.innerText = text
    }

    showChoises(choices, callback){
        const choicesContainer = document.getElementById("choices")
        choicesContainer.innerHTML = ''
        for (let i = 0; i < choices.length; i++) {
            const button = document.createElement("button")
            button.innerText = choices[i]
            button.className = "button"
            button.addEventListener('click', () => callback(choices[i]))
            choicesContainer.append(button)
        }
    }
    
    showScore(score){
        const surveyEndHtml = `
            <h1>Result</h1>
            <h2>Your final score is: ${score}</h2>
        `
        const element = document.getElementById("quiz")
        element.innerHTML = surveyEndHtml
    }

    showProgres(currentIndex, total){
        const element = document.getElementById("progress")
        element.innerHTML = ` Questions ${currentIndex} of ${total} `
    }
}