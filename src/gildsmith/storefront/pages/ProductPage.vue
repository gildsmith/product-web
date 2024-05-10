<script setup>

</script>

<template>
    <div class="productPage">
        <div class="productHero">
            <div class="productImagesContainer">
                <!-- Temporary Placeholder -->
                <div class="productImage" style="background-image: url('https://images.unsplash.com/photo-1567016432779-094069958ea5')"></div>
                <div class="productImage" style="background-image: url('https://images.unsplash.com/photo-1567016507665-356928ac6679')"></div>
                <div class="productImage" style="background-image: url('https://images.unsplash.com/photo-1464564531096-f0163633a18a')"></div>
                <div class="productImage" style="background-image: url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc')"></div>
            </div>
            <div class="productInfo">
                <h1 class="productName">Modern Luxe Sectional Sofa</h1>
                <div class="productDescription">
                    Bring comfort and sophistication to your living space with the Modern Luxe Sectional Sofa.
                    Crafted with premium materials, this sofa blends seamlessly into any decor, offering
                    an inviting atmosphere for both entertaining and relaxing.
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.productPage {
    @apply max-w-screen-2xl mx-auto px-4 py-12;
}

.productHero {
    @apply grid grid-cols-5 gap-12;
}

.productImagesContainer {
    @apply grid grid-cols-3 gap-4 col-span-3;
    grid-template-rows: 400px auto;
}

.productImage {
    @apply bg-slate-100 p-4 rounded-3xl min-h-64 bg-center bg-cover;
}

.productImage:nth-of-type(1),
.productImage:nth-of-type(4) {
    @apply col-span-2;
}

.productInfo {
    @apply flex flex-col gap-4 col-span-2;
}
</style>