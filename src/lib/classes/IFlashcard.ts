import {LanguageFlashcardType} from "$lib/classes/LanguageFlashcardType";

export interface IFlashcard
{
    Question: string;
    Hint: string;
    Answer: string;
    Type: LanguageFlashcardType;
    Result: boolean;

    SubmitAnswer(givenAnswer: string): boolean;

}