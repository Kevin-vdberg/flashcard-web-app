<div class="feedback-indicator {_componentStateElements.feedbackState} {_componentStateElements.feedbackColour}"></div>

<!--TODO: Create loading and error card, create question element for different types of cards-->

<!--Default state-->
<div class="card glass-card shadow">
    <div class="content-frost"></div>
    <div class="card-content">
        <div class="question">
            <img src={flashcard.Question} alt="The flashcard question image cannot be found, this is {flashcard.Hint}"/>
        </div>
    </div>

<!--card interactions-->
    {#if _componentState === ComponentState.ready}
        <div class="card-actions {_componentStateElements.actionState}">
            <div class="hint">
                <button id="hint-tooltip-button"><span class="material-symbols-outlined">help</span></button>
                <div class="hint-tooltip">{flashcard.Hint}</div>
            </div>
            <div>{prompt}</div>
            <form class="cta">
                <input class="answer-field" type="text" bind:value={givenAnswer} />
                <div class="cta-buttons">
                    <input  id="answer" type="submit" class="bg-gradient" value={submit} on:click={ () => {SubmitAnswer(givenAnswer) } }/>
                    <button class="bg-color-bad" id="skip" on:click={SkipCard}>{cancel}</button>
                </div>
            </form>
        </div>

        {:else if _componentState === ComponentState.reviewing}
        <div class="card-review">
            <button on:click={EndReview}>Next</button>
        </div>

    {/if}

</div>

<style> @import './NounFlashcard.css'; </style>

<script lang="ts">
    import {ComponentState} from "$lib/components/flashcards/noun-flashcard/NounFlashcard";
    import type {IFlashcard} from "$lib/classes/IFlashcard";
    import {NounCard, NounCardType} from "$lib/classes/NounCard";
    import { createEventDispatcher } from "svelte";


    //Default values that can be passed from parent
    export let flashcard: IFlashcard = new NounCard("Apple","[ˈæpəɫ]","Appel",NounCardType.Lemma);
    export let prompt:string = "This is my prompt?";
    export let submit:string = "submit";
    export let cancel:string = "skip";

    //Private: internal component variables
    let _componentState = ComponentState.ready;
    let _componentStateElements = {feedbackState: "hidden", actionState: "visible", activeCard: flashcard, feedbackColour: "bg-color-good"}
    const _dispatcher = createEventDispatcher();

    let givenAnswer: string = "";

    //Functions used by frontend
    function SubmitAnswer(givenAnswer: string )
    {
        flashcard.SubmitAnswer(givenAnswer);
        _componentStateElements.feedbackColour = flashcard.Result ? "bg-color-good": "bg-color-bad";
        _componentState = ComponentState.reviewing;
        _updateUIState();
    }
    function SkipCard()
    {
        _dispatcher("cardFinished",{result: "skipped"});
        givenAnswer = "";
    }
    function EndReview()
    {
        _componentState = ComponentState.ready;
        _updateUIState();

        const resultFeedback = flashcard.Result? "correct": "incorrect";
        _dispatcher("cardFinished",{result: resultFeedback});
    }

    //Internal component functions
    function _updateUIState()
    {
        switch (_componentState)
        {
            case ComponentState.ready:
                _componentStateElements. feedbackState = "hidden";
                _componentStateElements.actionState = "visible";
                break;
            case ComponentState.reviewing:
                _componentStateElements. feedbackState = "visible";
                _componentStateElements.actionState = "hidden";
                break;
            case ComponentState.loading:
                _componentStateElements. feedbackState = "hidden";
                _componentStateElements.actionState = "hidden";
                break;
            default:
                _componentState = ComponentState.error;
                _componentStateElements. feedbackState = "hidden";
                _componentStateElements.actionState = "hidden";
                break;
        }
        givenAnswer = "";
    }


    function resetState()
    {
        _componentState = ComponentState.ready;
        _updateUIState();
    }
</script>