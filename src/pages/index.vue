<script setup>
import { ref } from 'vue'
definePageMeta({
    layout: 'default'
})
</script>
<template>
    <v-app>
        <!-- Hero -->
        <section>
            <v-responsive class="">
                <!-- background  -->
                <v-img width="100%" cover style="height: 100vh;" src="/public/World-map-image.png">
                    <!-- <v-img cover src="/public/hero.png" style="height: 100vh;"> -->
                    <v-row class="align-end justify-end fill-height text-right pa-md-5 pa-3 mx-0">
                        <div>
                            <div class="text-h4 text-uppercase">Daniel Wellermann</div>
                            <h1 class="text-h2 text-primary text-uppercase">BIM-Magier und Maker</h1>
                        </div>
                    </v-row>
                </v-img>
                <!-- content
                        <div class="v-row align-end justify-end fill-height text-right pa-md-5 pa-3 mx-0"><div><div class="text-h2 text-uppercase">John Smith</div><h1 class="text-h1 text-primary text-uppercase">Front-end Developer</h1></div></div>

                        -->
            </v-responsive>
        </section>
        <!-- About Me -->

        <section id="about" class="v-row mt-4">
            <v-responsive>
                <v-container fluid>
                    <v-row class="fill-height mx-0 justify-space-between">
                        <v-col cols="6" class="pa-5">
                            <h4 class="text-h4 text-uppercase mb-8">Über Mich</h4>
                            <p>Ich bin ein BIM-Magier und Maker. Ich liebe es, die Welt zu erkunden und neue Dinge
                                zu
                                lernen. Ich bin ein leidenschaftlicher Programmierer und Designer und liebe es, mit
                                neuen Technologien zu experimentieren. Ich bin ein großer Fan von Open Source und
                                liebe
                                es, mein Wissen mit anderen zu teilen. Ich bin ein großer Fan von Open Source und
                                liebe
                                es, mein Wissen mit anderen zu teilen.</p>
                        </v-col>
                        <v-col cols="6" class="pa-5 ">
                            <v-img src="/public/ich.jpeg" max-width="30rem" class="rounded-lg elevation-5 ms-auto" />
                        </v-col>
                    </v-row>
                </v-container>
            </v-responsive>
        </section>
        <!-- Was mich z.Z Umtreibt -->
        <section>
        </section>
    </v-app>
</template>
