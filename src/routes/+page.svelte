<div class="background">
</div>
<div class="overlay"></div>
<div class="content">
    <FlashcardSession>
    </FlashcardSession>
</div>

<script lang="ts">
    import FlashcardSession from "$lib/components/flashcards/flashcard-session/FlashcardSession.svelte";

</script>

<style>
    body{
        margin:0;
        padding:0;
    }
    .background
    {
        position:absolute;
        z-index:-1;
        width:100dvw;
        height:100svh;
        background-image: url("../test-images/background-dark.png");
        opacity:1;

    }

    .overlay
    {
        position:absolute;
        z-index: 0;
        width:100vw;
        height:100vh;
        background-color: black;
        opacity:0.5;
    }
    .content
    {
        display: flex;
        justify-content: center;
        align-items: center;
        width:100vw;
        height:100vh;

    }
    img
    {
        position:absolute;
        top:0;
        left: 0;
        width:100vw;
        height: 100vh;
    }
</style>