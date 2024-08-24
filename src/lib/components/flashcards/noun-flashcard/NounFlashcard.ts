export class NounFlashcard
{
    public Question: string
    public Answer: string
    public Hint: string

    constructor(question: string, hint: string)
    {
        this.Question = question;
        this.Answer = "";
        this.Hint = hint;
    }

    public setAnswer(givenAnswer:string)
    {
        this.Answer = givenAnswer;
    }

    private _submitAnswer()
    {
        return;
    }

}

export enum ComponentState
{
    loading = 0,
    ready = 1,
    reviewing = 2,
    error = 3
}
