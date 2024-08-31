<style> @import './FlashcardSession.css'; </style>

<div class="flashcard-session">
    <div class="session-header">
        <button on:click={ResetComponent}><span class="material-symbols-outlined" >close</span></button>
    </div>
    <div class="flashcard-container">
        <NounFlashcard flashcard = {activeFlashcard} on:cardFinished = {(e) => GoToNextCard(e)}  submit={submit} cancel={cancel} prompt={prompt}/>
    </div>
    <div class="session-footer">
        <div class="session-menu glass-card shadow">
            <div class="session-info">
                <div class="indicators">
                <span id="language-ind">🇵🇹</span>

                </div>
                <div class="actions">
                    <button on:click={handleLanguageSwitch}><span class="material-symbols-outlined">translate</span></button>
                    <button><span class="material-symbols-outlined" >settings</span></button>
                    <button><span class="material-symbols-outlined">report</span></button>
                </div>
            </div>
            <div class="progress-bar">
                <div class="progress bg-gradient" style="width:{sessionProgress}"></div>
            </div>
            <div class="session-counters">

                <span id="good-counter" class="color-good session-counter"><span class="material-symbols-outlined">check</span>: {goodCounter}</span>
                <span id="skip-counter" class="color-neutral session-counter"><span class="material-symbols-outlined">remove</span>: {skippedCounter}</span>
                <span id="bad-counter" class="color-bad session-counter"><span class="material-symbols-outlined">close</span>: {badCounter}</span>
            </div>
        </div>
    </div>
</div>


<script lang="ts">

    import NounFlashcard from '$lib/components/flashcards/noun-flashcard/NounFlashcard.svelte';
    import type {IFlashcard} from "$lib/classes/IFlashcard";

    // For development
    import {NounCard} from "$lib/classes/NounCard";
    import {NounCardType} from "$lib/classes/NounCard";
    export let sessionCards: IFlashcard [] =
        [   new NounCard("https://visie-eo.cdn.eo.nl/w_2400/s3-visie-eo/77069d90-e7e1-47a9-b5e0-41d70e45a956.jpg","Tree","Boom", NounCardType.Image),
            new NounCard("https://www.1800flowers.com/_next/image?url=https%3A%2F%2Fwww.1800flowers.com%2Fblog%2Fwp-content%2Fuploads%2F2017%2F03%2Fsingle-red-rose.jpg&w=750&q=75","Rose","Roos", NounCardType.Image),
            new NounCard("https://www.thoughtco.com/thmb/XRS8J7vnB3Vx6KRaElWO5fzzg1Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/blue-runners--947498612-5c634cd3c9e77c0001566e32.jpg","Fish","Vis", NounCardType.Image),
            new NounCard("https://www.thoughtco.com/thmb/pNr1IIDYAuVP8IPDW72NI3lWPzg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/close-up-of-flame-536940503-59b2b3de845b3400107a7f27-5b967c9546e0fb00254ed63b.jpg","Fire","Vuur",NounCardType.Image)
        ];

    export const uiElements = {};

    let submit = "Answer";
    let cancel = "Skip";
    let prompt = "What is this?"

    let goodCounter = 0;
    let badCounter = 0;
    let skippedCounter = 0;
    let sessionProgress = "0%";

    let cardIndex = 0;
    let activeFlashcard = sessionCards[cardIndex];
    let sessionLength = sessionCards.length;

    let languageState = true;

    function handleLanguageSwitch()
    {
        if(languageState)
        {
            submit = "Antwoorden";
            cancel = "Overslaan";
            prompt = "Wat is dit?";
        }
        else
        {
            submit = "Answer";
            cancel = "Skip";
            prompt = "What is this?";
        }

        languageState = !languageState;

    }

    function GoToNextCard(event: CustomEvent)
    {
        if (cardIndex + 1 >= sessionLength)
        {
            sessionProgress = '100%';
            return ResetComponent();
        }
        else
        {
            cardIndex++;
        }
        const returnData = event.detail
        switch (returnData.result)
        {
            case "correct":
                goodCounter++;
                break;
            case "incorrect":
                badCounter++;
                break;
            case "skipped":
                skippedCounter++;
                break;
            default:
                break;
        }

        activeFlashcard = sessionCards[cardIndex];
        _calculateProgress()
    }

    function ResetComponent()
    {
        cardIndex = 0;
        activeFlashcard = sessionCards[cardIndex];
        goodCounter = 0;
        badCounter = 0;
        skippedCounter = 0;
        _calculateProgress();
    }

    function _calculateProgress()
    {
        const currentCard = cardIndex;
        const progressPercentage = (currentCard/sessionLength) * 100;

        sessionProgress = progressPercentage + "%";
    }
</script>/