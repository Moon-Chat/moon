<script>
    import "../lib/scripts/three/ThreeCanvas"
</script>

<canvas class="fixed" id="THREE-CANVAS"></canvas>

<div class="w-screen absolute justify-center flex flex-col">
    <div class="flex flex-col pt-4 border-b-[1px] border-white h-fit w-screen items-center animate-fade-down duration-400">
        <h1 class="text-8xl text-white font-hermit">MOON.</h1>
    </div>

    <div class="w-screen items-center flex justify-center p-[25vh] animate-fade-up flex-col gap-5">
        <h2 class="text-5xl text-white font-hermit">Better than Discord.</h2>
        <div class="flex flex-row gap-3">
            <button class="btn">Windows</button>
            <button class="btn">Mac</button>
            <button class="btn">Linux</button>
        </div>
    </div>
</div>

<style lang="postcss">
    :root {
        @apply bg-black
    }
    
    .btn {
        @apply border-2 border-white rounded-md p-5 text-white font-hermit text-2xl w-36 hover:text-black hover:bg-white duration-300 ease-in-out
    }
</style>