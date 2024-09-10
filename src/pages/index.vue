<script setup>
import { ref } from 'vue'
definePageMeta({
  layout: 'default',
})

/* Job History from Linked in:

 Berufserfahrung

    Logo von PLANSITE
    BIM Coordinator/DeveloperBIM Coordinator/Developer
    PLANSITE · VollzeitPLANSITE · Vollzeit Jan. 2022–Heute · 2 Jahre 9 MonateJan. 2022–Heute · 2 Jahre 9 Monate
            Erstellen und Koordinieren von Kollaborations BIM-Modelle.
            Entwicklung neuer Anwendungsfälle, Prozesse und BIM-Tools.
            DESITE MD, Addon (Formular) Konzeptionierung und Programmierung.Erstellen und Koordinieren von Kollaborations BIM-Modelle. Entwicklung neuer Anwendungsfälle, Prozesse und BIM-Tools. DESITE MD, Addon (Formular) Konzeptionierung und Programmierung.
            Kenntnisse: Open BIM · Building Information Modeling (BIM) · Softwareentwicklung · Baugewerbe · BIM-Koordination · IFCKenntnisse: Open BIM · Building Information Modeling (BIM) · Softwareentwicklung · Baugewerbe · BIM-Koordination · IFC
    Logo von Brüninghoff Group
    BrüninghoffBrüninghoff
    15 Jahre 5 Monate15 Jahre 5 Monate
            BIM CoordinatorBIM Coordinator
            VollzeitVollzeit Jan. 2021–Dez. 2021 · 1 JahrJan. 2021–Dez. 2021 · 1 Jahr Heiden, Nordrhein-Westfalen, DeutschlandHeiden, Nordrhein-Westfalen, Deutschland
                    Erstellen und Koordinieren von Kollaborations BIM-Modelle.Erstellen und Koordinieren von Kollaborations BIM-Modelle.
                    Kenntnisse: Open BIM · Building Information Modeling (BIM) · Softwareentwicklung · Baugewerbe · BIM-Koordination · IFCKenntnisse: Open BIM · Building Information Modeling (BIM) · Softwareentwicklung · Baugewerbe · BIM-Koordination · IFC
            Vorarbeiter / TeamleiterVorarbeiter / Teamleiter
            VollzeitVollzeit Sept. 2013–Jan. 2021 · 7 Jahre 5 MonateSept. 2013–Jan. 2021 · 7 Jahre 5 Monate Heiden, Nordrhein-Westfalen, DeutschlandHeiden, Nordrhein-Westfalen, Deutschland
                    Vorarbeiter / Teamleiter im Hochbau. Primär für Sonder und Hybrid Konstruktionen.Vorarbeiter / Teamleiter im Hochbau. Primär für Sonder und Hybrid Konstruktionen.
                    Kenntnisse: Open BIM · Polier · Building Information Modeling (BIM) · BaugewerbeKenntnisse: Open BIM · Polier · Building Information Modeling (BIM) · Baugewerbe
            Metallbauer/MonteurMetallbauer/Monteur
            Feb. 2010–Sept. 2013 · 3 Jahre 8 MonateFeb. 2010–Sept. 2013 · 3 Jahre 8 Monate
                    Kenntnisse: BaugewerbeKenntnisse: Baugewerbe
            Ausbildung zum MetallbauerAusbildung zum Metallbauer
            Aug. 2006–Jan. 2010 · 3 Jahre 6 Monate



*/
const jobHistory = [
  {
    title: 'BIM Coordinator/Developer',
    company: 'PLANSITE',
    startDate: '2022-01',
    endDate: 'now',
    description: 'Erstellen und Koordinieren von Kollaborations BIM-Modelle. Entwicklung neuer Anwendungsfälle, Prozesse und BIM-Tools. DESITE MD, Addon (Formular) Konzeptionierung und Programmierung.',
    skills: ['Open BIM', 'Building Information Modeling (BIM)', 'Softwareentwicklung', 'Baugewerbe', 'BIM-Koordination', 'IFC'],
  },
  {
    title: 'BIM Coordinator',
    company: 'Brüninghoff Group',
    startDate: '2021-01',
    endDate: '2022-01',
    description: 'Erstellen und Koordinieren von Kollaborations BIM-Modelle.',
    skills: ['Open BIM', 'Building Information Modeling (BIM)', 'Softwareentwicklung', 'Baugewerbe', 'BIM-Koordination', 'IFC'],
  },
  {
    title: 'Vorarbeiter / Teamleiter',
    company: 'Brüninghoff Group',
    startDate: '2013-10',
    endDate: '2021-01',
    description: 'Vorarbeiter / Teamleiter im Hochbau. Primär für Sonder und Hybrid Konstruktionen.',
    skills: ['Open BIM', 'Polier', 'Building Information Modeling (BIM)', 'Baugewerbe'],
  },
  {
    title: 'Metallbauer/Monteur',
    company: 'Brüninghoff Group',
    startDate: '2010-02',
    endDate: '2013-10',
    description: '',
    skills: ['Baugewerbe'],
  },
  {
    title: 'Ausbildung zum Metallbauer',
    company: 'Brüninghoff Group',
    startDate: '2006-08',
    endDate: '2010-02',
    description: '',
    skills: [],
  },
]

const calculateDuration = (startDate, endDate) => {
  let end
  if (endDate === 'now') {
    end = new Date(new Date().toISOString().split('T')[0].split('-').slice(0, 2).join('-'))
  } else {
    end = new Date(endDate)
  }
  const start = new Date(startDate)
  const diff = end - start
  const years = diff / (1000 * 60 * 60 * 24 * 365)
  return years
}

const formatDuration = (y) => {
  // Reuurn Years and Months as Array
  const years = Math.floor(y)
  const months = Math.floor((y - years) * 12)

  return [years, months]
}
</script>
<template>
  <v-app>
    <v-container class="" style="margin-top: 4rem; margin-bottom: 4rem;">
      <v-row justify="space-around">
        <v-col cols="12" md="6" class="" align-self="center">
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
        <v-col class="d-flex flex-column justify-center" cols="7" lg="4" align-self="center">
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
        <v-col lg="4">
          <div>
            <p class="text-primary text-center font-weight-bold text-h3">BERUF</p>
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

        <v-col class="d-flex flex-column justify-center" cols="12" md="6" align-self="center">
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
        <v-col cols="12" md="6" class="" align-self="center">
          <v-timeline align="start" side="start">
            <v-timeline-item v-for="job in jobHistory" :key="job.title" dot-color="primary" size="small">

              <div class="text-right ">
                <div class="d-flex align-center">
                  <strong class="me-2">{{ job.title }}</strong>
                  <!-- Icon for dialog -->
                  <v-dialog max-width="800">
                    <template v-slot:activator="{ props: activatorProps }">
                      <v-btn v-bind="activatorProps" density="compact" icon="mdi-information"></v-btn>
                    </template>

                    <template v-slot:default="{ isActive }">
                      <v-card>
                        <v-card-title>
                          {{ job.title }}
                        </v-card-title>
                        <v-card-text>
                          <!-- Complet Desription with start end ect -->
                          <h4 class="text-secondary">{{ job.company }}</h4>

                          <span class="text-body-1"> {{ formatDuration(calculateDuration(job.startDate, job.endDate))[0] }} Jahre
                            {{ formatDuration(calculateDuration(job.startDate, job.endDate))[1] }} Monate
                          </span>
                          <span class="text-caption">{{ job.startDate }} - {{ job.endDate }}</span>
                          <br>
                          <br>
                          <p>{{ job.description }}</p>

                        </v-card-text>

                        <v-card-actions>
                          <v-spacer></v-spacer>

                          <v-btn @click="isActive.value = false" icon="mdi-close" </v-btn>
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>
                </div>
                <div class="text-secondary">
                  {{ job.company }}
                </div>
                <div class="text-caption">

                  {{ formatDuration(calculateDuration(job.startDate, job.endDate))[0] }} Jahre
                  {{ formatDuration(calculateDuration(job.startDate, job.endDate))[1] }} Monate
                  <br>
                  {{ job.startDate }} - {{ job.endDate }}
                </div>
                <div class="">
                  <!-- {{ job.description }} -->
                </div>
              </div>
            </v-timeline-item>
            <!-- linkedIn Button -->
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
