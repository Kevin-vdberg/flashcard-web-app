<MenuBar menuItems = {menuItems}/>

<script lang="ts">
    import  MenuBar from '../lib/components/ui/menu-bar/MenuBar.svelte'

    const menuItems =
        [
            {name: "Home", location: "/"},
            {name: "Learn", location: "/learn"}

    ]
</script>

<style>
    .background
    {
        position:absolute;
        z-index:-1;
        width:100dvw;
        height:100svh;
        /*background:linear-gradient(45deg,white 0%,darkcyan 40%,white 90%);*/
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
        backdrop-filter: blur(10px);
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