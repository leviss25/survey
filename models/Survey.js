export class Survey{
    constructor(questions){
        this.questions = questions
        this.score = 0
        this.questionIndex = 0
    }

    getCurrentQuestion(){
        return this.questions[this.questionIndex]
    }

    validateAndContinue(answer){
        this.score = this.score + this.getCurrentQuestion().getScore(answer)
        this.questionIndex++
    }

    isEnded(){
        return this.questionIndex === this.questions.length
    }
}