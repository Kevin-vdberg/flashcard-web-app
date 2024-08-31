<FlashcardSession sessionCards = {sessionCards}/>

<script lang="ts">
    import type {IFlashcard} from "$lib/classes/IFlashcard";

    import FlashcardSession from "$lib/components/flashcards/flashcard-session/FlashcardSession.svelte";

    import {NounCard} from "$lib/classes/NounCard";
    import {NounCardType} from "$lib/classes/NounCard";
    const sessionCards: IFlashcard [] =
        [   new NounCard("https://visie-eo.cdn.eo.nl/w_2400/s3-visie-eo/77069d90-e7e1-47a9-b5e0-41d70e45a956.jpg","Tree","Boom", NounCardType.Image),
            new NounCard("https://www.1800flowers.com/_next/image?url=https%3A%2F%2Fwww.1800flowers.com%2Fblog%2Fwp-content%2Fuploads%2F2017%2F03%2Fsingle-red-rose.jpg&w=750&q=75","Rose","Roos", NounCardType.Image),
            new NounCard("https://www.thoughtco.com/thmb/XRS8J7vnB3Vx6KRaElWO5fzzg1Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/blue-runners--947498612-5c634cd3c9e77c0001566e32.jpg","Fish","Vis", NounCardType.Image),
            new NounCard("https://www.thoughtco.com/thmb/pNr1IIDYAuVP8IPDW72NI3lWPzg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/close-up-of-flame-536940503-59b2b3de845b3400107a7f27-5b967c9546e0fb00254ed63b.jpg","Fire","Vuur",NounCardType.Image)
        ];
</script>