export class Question{
    constructor(text, choices){
        this.text = text
        this.choices = choices
    }

    getScore(answer){
        return (this.choices.length - this.choices.indexOf(answer));
    }
}