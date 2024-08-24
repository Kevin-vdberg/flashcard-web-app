<!--<div id="background-element"></div>-->

<div class="feedback-indicator {componentStateElements.feedbackState} {componentStateElements.feedbackColour}"></div>

<!--Default state-->
<div class="card">
    <div class="card-header">
        <button on:click={updateUIState}><span class="material-symbols-outlined" >settings</span></button>
        <button on:click={resetState}><span class="material-symbols-outlined">close</span></button>
    </div>
    <div class="content-frost"></div>
    <div class="card-content">
        <div class="question">
            <img src={flashcard.Question} />
        </div>
    </div>

<!--card interactions-->
    {#if componentState === ComponentState.ready}
        <div class="card-actions {componentStateElements.actionState}">
            <div class="hint">
                <button id="hint-tooltip-button"><span class="material-symbols-outlined">help</span></button>
                <div class="hint-tooltip">{flashcard.Hint}</div>
            </div>
            <div class="card-prompt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, ex.</div>
            <form class="cta">
                <input class="answer-field" type="text" />
                <div class="cta-buttons">
                    <input id="answer" type="submit" on:click={SendCorrectAnswer}/>
                    <button id="skip" on:click={SendWrongAnswer}>Skip</button>
                </div>
            </form>
        </div>


        {:else if componentState === ComponentState.reviewing}
        <div class="card-review">
            <button on:click={cycleIndex}>Next</button>
        </div>

    {/if}

</div>

<style> @import './NounFlashcard.css'; </style>

<script lang="ts">
    import {ComponentState, NounFlashcard} from "$lib/components/flashcards/noun-flashcard/NounFlashcard";

    // Mock data
    const flashcards: NounFlashcard[] =
        [   new NounFlashcard("https://visie-eo.cdn.eo.nl/w_2400/s3-visie-eo/77069d90-e7e1-47a9-b5e0-41d70e45a956.jpg","Hint"),
            new NounFlashcard("https://www.1800flowers.com/_next/image?url=https%3A%2F%2Fwww.1800flowers.com%2Fblog%2Fwp-content%2Fuploads%2F2017%2F03%2Fsingle-red-rose.jpg&w=750&q=75","Hint"),
            new NounFlashcard("https://www.thoughtco.com/thmb/XRS8J7vnB3Vx6KRaElWO5fzzg1Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/blue-runners--947498612-5c634cd3c9e77c0001566e32.jpg","Hint"),
            new NounFlashcard("Question","Hint")
        ];

    //Development variables
    let index = 0
    export let flashcard = flashcards[index]

    let componentState = ComponentState.ready;
    let componentStateElements = {feedbackState: "hidden", actionState: "visible", activeCard: flashcard, feedbackColour: "feedback-good"}


    function updateUIState()
    {
        switch (componentState)
        {
            case ComponentState.ready:
                componentStateElements. feedbackState = "hidden";
                componentStateElements.actionState = "visible";
                break;
            case ComponentState.reviewing:
                componentStateElements. feedbackState = "visible";
                componentStateElements.actionState = "hidden";
                break;
            case ComponentState.loading:
                componentStateElements. feedbackState = "hidden";
                componentStateElements.actionState = "hidden";
                break;
            default:
                componentState = ComponentState.error;
                componentStateElements. feedbackState = "hidden";
                componentStateElements.actionState = "hidden";
                break;
        }
    }

    function SendCorrectAnswer()
    {
        componentState = ComponentState.reviewing;
        componentStateElements.feedbackColour = "feedback-good";
        updateUIState();
    }

    function SendWrongAnswer()
    {
        componentState = ComponentState.reviewing;
        componentStateElements.feedbackColour = "feedback-bad";
        updateUIState();
    }

    function resetState()
    {
        componentState = ComponentState.ready;
        updateUIState();
    }


    // Test function
    function cycleIndex()
    {
        console.log("func called");
        const arrLength = flashcards.length;
        console.log(arrLength);
        if(index == (arrLength - 1))
            {
                index = 0;
            }
            else{
                index = index + 1;
        }
        console.log(index == (arrLength - 1));
        flashcard = flashcards[index];

        componentState = ComponentState.ready;
        updateUIState();

    }
</script>