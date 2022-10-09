import {questionsArray} from "./questions.js"
import {Survey} from "./models/Survey.js"
import {UI} from "./models/UI.js"

const renderPage = (surveyy, uii) =>{
    if (surveyy.isEnded()) {
        uii.showScore(surveyy.score)
    } else {
        uii.showQuestions(surveyy.getCurrentQuestion().text)
        uii.showChoises(surveyy.getCurrentQuestion().choices, (currentChoise) => {
            surveyy.validateAndContinue(currentChoise)
            renderPage(surveyy,uii)
        })
        uii.showProgres(surveyy.questionIndex + 1, questionsArray.length)
    }
}

const main = () => {
    const survey1 = new Survey(questionsArray)
    const ui1 = new UI()
    renderPage(survey1, ui1)
}

main()