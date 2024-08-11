<script setup>
import { ref } from 'vue'
definePageMeta({
  layout: 'default',
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
        <v-container class="bg-grey-darken-1">
          <v-row class="fill-height mx-0" justify="center">
            <v-col class="pa-5 " cols="12" md="6">
              <v-card class="pa-3 elevation-10 ">
                <h4 class="text-h4 text-primary mb-8">Wer ich bin</h4>
                <p>
                  Ich bin BIM-Koordinator und Entwickler mit einer Leidenschaft für innovative Lösungen im Bauwesen. Mit meiner Erfahrung als Polier/Teamleiter und meiner langjährigen Affinität zu
                  Linux
                  verbinde ich technisches Know-how mit IT-Expertise. Mein Fokus liegt auf der Konsolidierung von Open BIM-Modellen und der Entwicklung benutzerfreundlicher Tools für DESITE, um den
                  gesamten BIM-Prozess zu optimieren. Als erfahrener Maker nutze ich 3D-Druck und Automatisierung, um smarte und funktionale Lösungen für den Alltag zu schaffen.</p>
                <br>
                <p>Herzlich Willkommen</p>
                <i class="font-weight-bold text-primary">Daniel Wellermann</i>
              </v-card>

              <v-expansion-panels class="my-4" variant="popout">
                <v-expansion-panel text='
                Als BIM-Koordinator und Entwickler konzentriere ich mich darauf, Modelle leicht zugänglich zu machen und innovative Lösungen zu schaffen, die den gesamten BIM-Prozess optimieren. Mein Arbeitsalltag teilt sich in zwei zentrale Bereiche auf:
Open BIM-Modelle & Kollaborationsplattformen
Ein wesentlicher Teil meiner Arbeit besteht darin, Open BIM-Modelle aus verschiedenen Autorensystemen zu konsolidieren und in eine zentrale Kollaborationsplattform zu integrieren – alles basierend auf dem IFC-Format.

Kollisionsprüfungen und Attributsprüfungen spielen in diesem Prozess eine entscheidende Rolle. Ich stelle sicher, dass alle relevanten Informationen und Daten konsistent und korrekt in den Modellen vorhanden sind. Diese beiden Prüfungen sind entscheidend, um die Qualität und Integrität der BIM-Modelle zu gewährleisten und das Risiko von Fehlern im Bauprozess zu minimieren.

Als langjähriger Polier und Vorarbeiter auf dem Bau weiß ich nur zu gut, wie teuer eine nachträgliche Kernbohrung sein kann!
Entwicklung von Tools & Plugins für DESITE

Der zweite Schwerpunkt meiner Tätigkeit liegt in der Entwicklung maßgeschneiderter Tools und Plugins für das Programm DESITE / VDC Manager. Mit einem besonderen Fokus auf Automatisierungsmethoden und einer benutzerfreundlichen Benutzeroberfläche (UI) entwickle ich Lösungen, die den Umgang mit BIM-Daten erheblich erleichtern. Meine Tools ermöglichen es den Nutzern, wiederkehrende Aufgaben zu automatisieren und komplexe Daten auf intuitive Weise zu visualisieren, was die Effizienz und Genauigkeit der Projektarbeit steigert.

Durch die Kombination dieser beiden Tätigkeitsfelder trage ich maßgeblich zur Verbesserung der BIM-Prozesse und zur erfolgreichen Durchführung von Bauprojekten bei.' title="BIM" </v-expansion-panel>
                  <v-expansion-panel text='
                 Ich arbeite viel mit dem Vue.js Ökosystem.
                 ' title="IT- und Linux-Enthusiast">
                  </v-expansion-panel>
                  <v-expansion-panel text='
                 Mit meiner Ausbildung als Metallbauer und meiner langjährigen Erfahrung in der Linux-Welt bringe ich die perfekten Voraussetzungen mit, um als Maker innovative und smarte Lösungen zu entwickeln.

Mein 3D-Drucker ist dabei ein zentrales Werkzeug, mit dem ich maßgeschneiderte Bauteile und nützliche Objekte für den Alltag produziere. Von Ersatzteilen für mechanische Geräte über funktionale Verbesserungen im Haushalt bis hin zu individuellen Dekorationsstücken – ich setze meine technischen Kenntnisse und meine Kreativität gezielt ein, um praktische und ästhetische Lösungen zu schaffen.

Durch die Kombination meines handwerklichen Geschicks und meiner IT-Affinität gelingt es mir, smarte Dinge zu entwickeln, die Technologie und Design auf einzigartige Weise verbinden. Linux-basierte Tools und Anwendungen spielen dabei eine entscheidende Rolle, sei es zur Steuerung meiner Geräte oder zur Entwicklung eigener Projekte. So entstehen intelligente Lösungen, die sowohl funktional als auch benutzerfreundlich sind – genau das, was einen echten Maker ausmacht.
                 ' title="Maker & 3D-Druck">
                  </v-expansion-panel>
              </v-expansion-panels>

            </v-col>
            <v-col class="pa-5 d-flex justify-center align-center">
              <v-img src="/public/ich.jpeg" max-width="30rem" class="rounded-lg elevation-5 " />
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
