import type {IFlashcard} from "$lib/classes/IFlashcard";
import {LanguageFlashcardType} from "$lib/classes/LanguageFlashcardType";

export class NounCard implements IFlashcard
{
    public Type: LanguageFlashcardType;
    public Question: string
    public Answer: string
    public Hint: string
    public Result: boolean


    public NounCardType: NounCardType;

    constructor(question: string, hint: string, answer: string, nounCardType: NounCardType)
    {
        this.Type = LanguageFlashcardType.Noun;

        this.Question = question;
        this.Answer = answer;
        this.Hint = hint;
        this.Result = false;

        this.NounCardType = nounCardType;

    }


    SubmitAnswer(givenAnswer: string): boolean {
        //TODO: Implement API call to get feedback
        const resultCheck = givenAnswer == this.Answer;
        this.Result = resultCheck;
        return resultCheck;
    }

}

export enum NounCardType
{
    Image = 1,
    Lemma = 2,
    Sound = 3
}