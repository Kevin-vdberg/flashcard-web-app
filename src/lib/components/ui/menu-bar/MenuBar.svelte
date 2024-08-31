<style> @import './MenuBar.css' ; </style>

<nav id="navbar" class="glass-card shadow">
    <div id="logo">
Logo
    </div>
    <ul id="navigation">
        {#each menuItems as item}
            <li><a href={item.location}>{item.name}</a></li>
        {/each}
    </ul>
    <div id="cta">
        <button id="cta1" class="bg-gradient">login</button>
        <button id="cta2">register</button>
    </div>
</nav>


<script lang="ts">

    type MenuItem =
    {
        name: string,
        location: string
    };

    export let menuItems: MenuItem[] = [
        {name:"item 1", location: "/"},
        {name:"item 2", location: "/"},
        {name:"item 3", location: "/"},
        {name:"item 4", location: "/"},
        {name:"item 5", location: "/"},
        {name:"item 6", location: "/"}
    ];

</script>