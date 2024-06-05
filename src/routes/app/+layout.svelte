<script lang="ts">
    let vertbar = true;

    let servers = [
        {
            name: "Example server",
            icon: "/favicon.png"
        }
    ]

</script>

<div class:vertical_server_bar={vertbar} class:horizontal_server_bar={!vertbar} class="flex">
    <div>
        {#if vertbar}
            <div class="flex-col-reverse gap-4 p-4 h-screen bg-black max-w-fit text-white font-hermit rounded-tr-md rounded-br-md">
                <div class="flex flex-row">
                    {#each servers as server}
                        <div class="flex flex-row gap-5">
                            <img src="{server.icon}" class="server_icon group" alt="">
                            <h1 class="group-hover:block hidden">{server.name}</h1>
                        </div>
                    {/each}
                </div>
            </div>        
        {:else}
            <div class=""></div>
        {/if}
    </div>
    <slot />
</div>

<style lang="postcss">
    .vertical_server_bar {
        /* TODO */
        @apply flex-col-reverse gap-4
    }

    .horizontal_server_bar {
        /* TODO */
        @apply flex-row
    }
    .server_icon {
        @apply max-w-12 max-h-12 rounded-full hover:border-2 hover:border-white hover:scale-125 duration-300 
    }

</style>