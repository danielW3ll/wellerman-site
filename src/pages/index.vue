<script setup>
import { ref } from 'vue'
definePageMeta({
  layout: 'default',
})
</script>
<template>
  <v-app>
    <v-container class="" style="margin-top: 4rem; margin-bottom: 4rem;">
      <v-row justify="space-around">
        <v-col lg="6" class="" align-self="center">
          <v-card variant="elevated" class="pa-2 ma-2" color="dark">
            <v-card-title class="">
              <p class="">BIM-Magier und Maker</p>
            </v-card-title>
            <v-card-text>
              <p>
                Ich bin BIM-Koordinator und Entwickler mit einer Leidenschaft für innovative Lösungen im Bauwesen.
                <br>
                Mit meiner Erfahrung als Polier/Teamleiter und meiner langjährigen Affinität zu
                Linux
                verbinde ich technisches Know-how mit IT-Expertise. <br>
                Mein Fokus liegt auf der Konsolidierung von Open BIM-Modellen und der Entwicklung benutzerfreundlicher Tools für DESITE, um den
                gesamten BIM-Prozess zu optimieren.
                <br>
                Als erfahrener Maker nutze ich 3D-Druck und Automatisierung, um smarte und funktionale Lösungen für den Alltag zu schaffen.
              </p>
              <br>
              <p>Herzlich Willkommen</p>
              <i class="text-primary text-h5">Daniel Wellermann</i>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col class="d-flex flex-column justify-center" lg="4" align-self="center">
          <v-img src="/public/ich.jpeg" class="rounded-lg elevation-5 ">
          </v-img>
          <div class="d-flex justify-center align-center mt-5">
            <v-btn icon href="https://github.com/danielW3ll" target="_blank" class="mx-3" color="primary">
              <v-icon>mdi-github</v-icon>
            </v-btn>
            <v-btn icon href="https://de.linkedin.com/in/wellermann" target="_blank" class="mx-3" color="primary">
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
            <v-btn icon href="https://www.instagram.com/daniel_wellermann" target="_blank" class="mx-3" color="primary">
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="">

      <v-row justify="center" class="border-b">
        <v-col col="4">
          <div>
            <p class="text-primary text-center font-weight-bold text-h3">WELLERMANN</p>
            <p class="text-center text-body-1">Werdegang und Aktuelle Anstellung</p>
            <!-- <p class="text-body-1 text-medium-emphasis">
            Als BIM-Koordinator und Entwickler konzentriere ich mich darauf, Modelle leicht zugänglich zu machen und innovative Lösungen zu schaffen, die den gesamten BIM-Prozess optimieren. Mein
            Arbeitsalltag teilt sich in zwei zentrale Bereiche auf:
            <br>
            <b>#1 Open BIM-Modelle & Kollaborationsplattformen</b>
            <br>
          </p> -->
          </div>
        </v-col>
      </v-row>

      <v-row justify="space-around">

        <v-col class="d-flex flex-column justify-center" lg="8" align-self="center">
          <p class="text-center">BIM-Gesamtkoordinator/Entwickler bei Plansite</p>
          <v-expansion-panels class="my-4" variant="popout">
            <v-expansion-panel text='
                Als BIM-Koordinator und Entwickler konzentriere ich mich darauf, Modelle leicht zugänglich zu machen und innovative Lösungen zu schaffen, die den gesamten BIM-Prozess optimieren. Mein Arbeitsalltag teilt sich in zwei zentrale Bereiche auf:
Open BIM-Modelle & Kollaborationsplattformen
Ein wesentlicher Teil meiner Arbeit besteht darin, Open BIM-Modelle aus verschiedenen Autorensystemen zu konsolidieren und in eine zentrale Kollaborationsplattform zu integrieren – alles basierend auf dem IFC-Format.

Kollisionsprüfungen und Attributsprüfungen spielen in diesem Prozess eine entscheidende Rolle. Ich stelle sicher, dass alle relevanten Informationen und Daten konsistent und korrekt in den Modellen vorhanden sind. Diese beiden Prüfungen sind entscheidend, um die Qualität und Integrität der BIM-Modelle zu gewährleisten und das Risiko von Fehlern im Bauprozess zu minimieren.

Als langjähriger Polier und Vorarbeiter auf dem Bau weiß ich nur zu gut, wie teuer eine nachträgliche Kernbohrung sein kann!
Entwicklung von Tools & Plugins für DESITE

Der zweite Schwerpunkt meiner Tätigkeit liegt in der Entwicklung maßgeschneiderter Tools und Plugins für das Programm DESITE / VDC Manager. Mit einem besonderen Fokus auf Automatisierungsmethoden und einer benutzerfreundlichen Benutzeroberfläche (UI) entwickle ich Lösungen, die den Umgang mit BIM-Daten erheblich erleichtern. Meine Tools ermöglichen es den Nutzern, wiederkehrende Aufgaben zu automatisieren und komplexe Daten auf intuitive Weise zu visualisieren, was die Effizienz und Genauigkeit der Projektarbeit steigert.

Durch die Kombination dieser beiden Tätigkeitsfelder trage ich maßgeblich zur Verbesserung der BIM-Prozesse und zur erfolgreichen Durchführung von Bauprojekten bei.' title="BIM Gesamtkoordinator"
              </v-expansion-panel>
              <v-expansion-panel text='
                 Ich arbeite viel mit dem Vue.js Ökosystem.
                 ' title="BIM Entwickler">
              </v-expansion-panel>
              <v-expansion-panel title="PLANSITE">
                <v-expansion-panel-text>
                  <v-btn icon href="local" target="_blank" class="mx-3" color="primary">
                    <v-icon>mdi-github</v-icon>
                  </v-btn>
                </v-expansion-panel-text>
              </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <v-col lg="4" class="" align-self="center">
          <v-timeline align="start" side="start">
            <v-timeline-item dot-color="primary" size="small">
              <div class="d-flex">
                <strong class="me-4">5pm</strong>
                <div>
                  <strong>New Icon</strong>
                  <div class="text-caption">
                    Mobile App
                  </div>
                </div>
              </div>
            </v-timeline-item>

            <v-timeline-item dot-color="grey" size="small">
              <div class="d-flex">
                <strong class="me-4">3-4pm</strong>
                <div>
                  <strong>Design Stand Up</strong>
                  <div class="text-caption mb-2 text-end">
                    Hangouts
                  </div>
                </div>
              </div>
            </v-timeline-item>

            <v-timeline-item dot-color="primary" size="small">
              <div class="d-flex">
                <strong class="me-4">12pm</strong>
                <div>
                  <strong>Lunch break</strong>
                </div>
              </div>
            </v-timeline-item>

            <v-timeline-item dot-color="grey" size="small">
              <div class="d-flex">
                <strong class="me-4">9-11am</strong>
                <div>
                  <strong>Finish Home Screen</strong>
                  <div class="text-caption">
                    Web App
                  </div>
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="">

      <v-row justify="center" class="border-b">
        <v-col col="4">
          <div>
            <p class="text-primary text-center font-weight-bold text-h3">Weiter Aktivitäten</p>
            <p class="text-center text-body-1">Nebenberufliche Aktivitäten und Interessen.</p>
            <!-- <p class="text-body-1 text-medium-emphasis">
            Als BIM-Koordinator und Entwickler konzentriere ich mich darauf, Modelle leicht zugänglich zu machen und innovative Lösungen zu schaffen, die den gesamten BIM-Prozess optimieren. Mein
            Arbeitsalltag teilt sich in zwei zentrale Bereiche auf:
            <br>
            <b>#1 Open BIM-Modelle & Kollaborationsplattformen</b>
            <br>
          </p> -->
          </div>
        </v-col>
      </v-row>

      <v-row justify="space-around">

        <v-col class="d-flex flex-column justify-center" lg="6" align-self="center">

        </v-col>
        <v-col lg="6" class="" align-self="center">
          <p class="text-center"></p>
          <v-expansion-panels class="my-4" variant="popout">
            <v-expansion-panel text='
                Als BIM-Koordinator und Entwickler konzentriere ich mich darauf, Modelle leicht zugänglich zu machen und innovative Lösungen zu schaffen, die den gesamten BIM-Prozess optimieren. Mein Arbeitsalltag teilt sich in zwei zentrale Bereiche auf:
Open BIM-Modelle & Kollaborationsplattformen
Ein wesentlicher Teil meiner Arbeit besteht darin, Open BIM-Modelle aus verschiedenen Autorensystemen zu konsolidieren und in eine zentrale Kollaborationsplattform zu integrieren – alles basierend auf dem IFC-Format.

Kollisionsprüfungen und Attributsprüfungen spielen in diesem Prozess eine entscheidende Rolle. Ich stelle sicher, dass alle relevanten Informationen und Daten konsistent und korrekt in den Modellen vorhanden sind. Diese beiden Prüfungen sind entscheidend, um die Qualität und Integrität der BIM-Modelle zu gewährleisten und das Risiko von Fehlern im Bauprozess zu minimieren.

Als langjähriger Polier und Vorarbeiter auf dem Bau weiß ich nur zu gut, wie teuer eine nachträgliche Kernbohrung sein kann!
Entwicklung von Tools & Plugins für DESITE

Der zweite Schwerpunkt meiner Tätigkeit liegt in der Entwicklung maßgeschneiderter Tools und Plugins für das Programm DESITE / VDC Manager. Mit einem besonderen Fokus auf Automatisierungsmethoden und einer benutzerfreundlichen Benutzeroberfläche (UI) entwickle ich Lösungen, die den Umgang mit BIM-Daten erheblich erleichtern. Meine Tools ermöglichen es den Nutzern, wiederkehrende Aufgaben zu automatisieren und komplexe Daten auf intuitive Weise zu visualisieren, was die Effizienz und Genauigkeit der Projektarbeit steigert.

Durch die Kombination dieser beiden Tätigkeitsfelder trage ich maßgeblich zur Verbesserung der BIM-Prozesse und zur erfolgreichen Durchführung von Bauprojekten bei.' title="Familie"
              </v-expansion-panel>
              <v-expansion-panel text='
                 Ich arbeite viel mit dem Vue.js Ökosystem.
                 ' title="Linux und Entwicklung">
              </v-expansion-panel>
              <v-expansion-panel title="3D-Druck">
                <v-expansion-panel-text>
                  <v-btn icon href="local" target="_blank" class="mx-3" color="primary">
                    <v-icon>mdi-github</v-icon>
                  </v-btn>
                </v-expansion-panel-text>
              </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
