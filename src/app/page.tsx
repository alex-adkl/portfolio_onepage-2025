"use client";

import ProjectCard from "./components/project-card/ProjectCard";
import ButtonText from "./components/button-text/ButtonText";
import SkillsGrid from "./components/skills/SkillsGrid";
import ContactForm from "./components/contact/ContactForm";
import SocialLinks from "./components/contact/SocialLinks";
import Footer from "./components/footer/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative z-10 scroll-smooth snap-y snap-mandatory h-screen overflow-y-scroll bg-[#7c86ff] dark:bg-zinc-900">
      {/* Accueil avec image plein écran */}
      <section
        id="accueil"
        className="relative overflow-hidden snap-start h-screen bg-cover bg-center flex items-center min-h-screen pt-16"
        style={{ backgroundImage: "url('/images/bg.jpg')" }}
      >
        <motion.div
          className="flex flex-col items-start text-left px-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.8,
              },
            },
          }}
        >
          <motion.h1
            className="h1"
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
            }}
          >
            Bonjour&nbsp;!
          </motion.h1>

          <motion.h1
            className="h1"
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1.2, delay: 0.4 },
              },
            }}
          >
            Je m&apos;appelle{" "}
            <motion.span
              className="relative inline-block text-highlight"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1 }}
            >
              Alejandra
              <motion.span
                className="absolute left-0 -bottom-1 h-[2px] bg-teal-200 w-full origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 1.1 }}
                style={{ transformOrigin: "left" }}
              />
            </motion.span>
            <motion.span
              className="inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.4 }} // apparaît après le soulignement
            >
              .
            </motion.span>
          </motion.h1>
        </motion.div>
      </section>

      {/* Présentation */}
      <section
        id="apropos"
        className="snap-start h-screen pt-24 overflow-y-auto bg-[#7c86ff] dark:bg-zinc-900 text-white"
      >
        <div className="px-8 sm:px-16 xl:px-32">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-15 h-screen items-center">
            <div className="space-y-6">
              <p>
                Graphiste et directrice artistique depuis 15 ans,
                aujourd&apos;hui j&apos;ai choisi de me réinventer dans le{" "}
                <strong>développement web</strong>. Curieuse, rigoureuse et
                passionnée, j&apos;explore ce nouvel univers où créativité et
                technique se rencontrent, avec l&apos;ambition de concevoir des
                projets web innovants et porteurs de sens.
              </p>
              <p>
                Je suis à la recherche d&apos;une alternance d&apos;un ou deux
                ans en tant que développeuse fullstack (4 jours/semaine en
                entreprise, 1 jour/semaine en formation) à compter de juin 2025.
              </p>

              <p>
                Vous trouverez dans ce portfolio une sélection de projets sur
                lesquels j&apos;ai travaillé, en tant que graphiste et DA print
                mais aussi en tant que développeuse fullstack.
              </p>

              <p>Bonne visite !</p>

              <ButtonText
                href="/CV-AlejandraAdeikalam-2025.pdf"
                download
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                }
              >
                Téléchargez mon CV
              </ButtonText>
            </div>

            <div className="hidden md:block relative h-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/images/Alex-Adeikalam.jpg"
                  alt="Alex Adeikalam"
                  width={400}
                  height={600}
                  className="rounded-lg shadow-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Dév Web */}
      <section
        id="web"
        className="snap-start h-screen pt-24 overflow-y-auto bg-[#7c86ff] text-white"
      >
        <div className="px-8 sm:px-16 xl:px-32">
          <h2 className="text-3xl font-title mb-4">Projets web</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-8xl mx-auto">
            <ProjectCard
              title="Littoral Propre"
              image="/images/dev/littoral_propre/littoral_propre_cover.svg"
              stacks={["PHP", "SQL", "Tailwind"]}
              description="Un projet de plateforme de gestion des déchets côtiers."
              siteUrl="http://cleansquad.rf.gd/"
              githubUrl="https://github.com/alex-adkl/projet_cleanSquad.git"
              images={[
                "/images/dev/littoral_propre/littoral_propre_1.png",
                "/images/dev/littoral_propre/littoral_propre_2.png",
                "/images/dev/littoral_propre/littoral_propre_3.png",
              ]}
            />

            <ProjectCard
              title="Art Quiz"
              image="/images/dev/quiz/quiz_cover.png"
              stacks={["JavaScript", "HTML", "CSS"]}
              description="Une application ludique de quiz thématiques sur l'art."
              githubUrl="https://github.com/alex-adkl/Projet_Quiz.git"
              images={[
                "/images/dev/quiz/quiz1.png",
                "/images/dev/quiz/quiz2.png",
                "/images/dev/quiz/quiz3.png",
                "/images/dev/quiz/quiz4.png",
              ]}
            />

            <ProjectCard
              title="Anciens meubles pour une nouvelle vie"
              image="/images/dev/VDM/VDM_cover.png"
              stacks={["React", "Firebase"]}
              description="Un projet front connecté à une base de données temps réel."
              githubUrl="https://github.com/monrepo3"
              images={[
                "/images/dev/VDM/VDM_01.png",
                "/images/dev/VDM/VDM_02.png",
                "/images/dev/VDM/VDM_03.png",
                "/images/dev/VDM/VDM_04.png",
                "/images/dev/VDM/VDM_05.png",
                "/images/dev/VDM/VDM_06.png",
              ]}
            />

            <ProjectCard
              title="Post.it"
              image="/images/dev/postit/postit_cover.png"
              stacks={["Vue.JS", "Laravel", "PostgreSQL"]}
              description="XXX."
              githubUrl="https://github.com/monrepo3"
              images={[
                "/images/dev/postit/postit_01.png",
                "/images/dev/postit/postit_02.png",
                "/images/dev/postit/postit_03.png",
                "/images/dev/postit/postit_04.png",
                "/images/dev/postit/postit_05.png",
                "/images/dev/postit/postit_06.png",
              ]}
            />

            <ProjectCard
              title="Portfolio"
              image="/images/bg.jpg"
              stacks={["React", "Next.JS", "TailwindCSS"]}
              description="Un projet front connecté à une base de données temps réel."
              githubUrl="https://github.com/monrepo3"
              images={[
                "/images/dev/quiz/quiz1.png",
                "/images/dev/quiz/quiz2.png",
                "/images/dev/quiz/quiz3.png",
                "/images/dev/quiz/quiz4.png",
              ]}
            />

            <ProjectCard
              title="Projet React + Firebase"
              image="/images/dev/quiz/quiz_cover.png"
              stacks={["React", "Firebase"]}
              description="Un projet front connecté à une base de données temps réel."
              githubUrl="https://github.com/monrepo3"
              images={[
                "/images/dev/quiz/quiz1.png",
                "/images/dev/quiz/quiz2.png",
                "/images/dev/quiz/quiz3.png",
                "/images/dev/quiz/quiz4.png",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Section Graphisme */}
      <section
        id="graphisme et direction artistique"
        className="snap-start h-screen pt-24 overflow-y-auto bg-[#7c86ff] text-white"
      >
        <div className="px-8 sm:px-16 xl:px-32">
          <h2 className="font-title text-white mb-2">
            <span style={{ color: "var(--highlight-color)" }}>Graphisme</span>{" "}
            et{" "}
            <span style={{ color: "var(--highlight-color)" }}>
              direction artistique
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-8xl mx-auto">
            {" "}
            <ProjectCard
              title="Collection Photo Poche - Brésil"
              image="/images/graphisme/photopoche/photopoche_1.jpg"
              stacks={[]}
              description="Adaptation de la charte graphique de la collection Photo Poche (Actes Sud) pour l'édition brésilienne. Projet développé au sein de la maison d'édition Cosac Naify."
              images={[
                "/images/graphisme/photopoche/photopoche_1.jpg",
                "/images/graphisme/photopoche/photopoche_2.jpg",
                "/images/graphisme/photopoche/photopoche_3.jpg",
                "/images/graphisme/photopoche/photopoche_4.jpg",
                "/images/graphisme/photopoche/photopoche_5.jpg",
                "/images/graphisme/photopoche/photopoche_6.jpg",
                "/images/graphisme/photopoche/photopoche_7.jpg",
                "/images/graphisme/photopoche/photopoche_8.jpg",
              ]}
            />
            <ProjectCard
              title="Tropicalia"
              image="/images/graphisme/tropicalia/tropicalia_7.jpg"
              stacks={[]}
              description="Projet Tropicalia."
              images={[
                "/images/graphisme/tropicalia/tropicalia_1.jpg",
                "/images/graphisme/tropicalia/tropicalia_2.jpg",
                "/images/graphisme/tropicalia/tropicalia_3.jpg",
                "/images/graphisme/tropicalia/tropicalia_4.jpg",
                "/images/graphisme/tropicalia/tropicalia_5.jpg",
                "/images/graphisme/tropicalia/tropicalia_6.jpg",
              ]}
            />
            <ProjectCard
              title="Projeto Guri"
              image="/images/graphisme/projeto_guri/guri_00_cover.jpg"
              stacks={[]}
              description="Créé en 1995, le Projet Guri est l'un des programmes d'Etat les plus réussis
dans le domaine socio-culturel. Son objectif est de promouvoir l'intégration sociale à travers l'enseignement
collectif de la musique à des enfants et adolescents de 8 à 18 ans, développant ainsi sensibilité, estime de soi et sens de la citoyenneté.

Le Projet Guri compte aujourd'hui plus de 380 pôles (situés pour la plupart
dans l'État de São Paulo) qui accueillent plus de 48000 jeunes par mois.

Projet développé au sein du Rico Lins +Studio.
Participation à la création du nouveau logotype. Réalisation du manuel d'utilisation du logotype, des déclinaisons sur divers
supports de communication. Conception et réalisation de 2 polices dingbats, à l'usage des différents pôles (illustrations à combiner avec le nom 'Guri'). Installées sur chaque ordinateur, ces deux typographies peuvent être utilisées plus simplement par tous les acteurs du Projeto Guri."
              images={[
                "/images/graphisme/projeto_guri/guri_01.jpg",
                "/images/graphisme/projeto_guri/guri_02.jpg",
                "/images/graphisme/projeto_guri/guri_03.jpg",
                "/images/graphisme/projeto_guri/guri_04.jpg",
                "/images/graphisme/projeto_guri/guri_05.jpg",
                "/images/graphisme/projeto_guri/guri_06.jpg",
                "/images/graphisme/projeto_guri/guri_07.jpg",
                "/images/graphisme/projeto_guri/guri_08.jpg",
              ]}
            />
            <ProjectCard
              title="Jazz Sinfônica"
              image="/images/graphisme/jazz_sinfonica/Jazz-Sinfonica-01.jpg"
              stacks={[]}
              description="Affiches/programmes pour les saisons 2006 et 2007 de l'orquestre « Jazz Sinfônica » (São Paulo). Les 27 affiches réalisées ont fait l'objet d'une exposition itinérante au Brésil, et d'une autre à La Havane, Cuba. Projet réalisé au sein du Rico Lins +Studio."
              images={[
                "/images/graphisme/jazz_sinfonica/Jazz-Sinfonica-0.jpg",
                "/images/graphisme/jazz_sinfonica/Jazz-Sinfonica-01.jpg",
                "/images/graphisme/jazz_sinfonica/Jazz-Sinfonica-02.jpg",
                "/images/graphisme/jazz_sinfonica/Jazz-Sinfonica-03.jpg",
                "/images/graphisme/jazz_sinfonica/Jazz-Sinfonica-04.jpg",
                "/images/graphisme/jazz_sinfonica/Jazz-Sinfonica-05.jpg",
                "/images/graphisme/jazz_sinfonica/Jazz-Sinfonica-06.jpg",
                "/images/graphisme/jazz_sinfonica/Jazz-Sinfonica-08.jpg",
                "/images/graphisme/jazz_sinfonica/Jazz-Sinfonica-09.jpg",
                "/images/graphisme/jazz_sinfonica/Jazz-Sinfonica-10.jpg",
              ]}
            />
            <ProjectCard
              title="Collection Ponta-de-lança"
              image="/images/graphisme/ponta_de_lanca/PDL-cover.png"
              stacks={[]}
              description="Couvertures pour les livres de la collection Ponta-de-lança, 
            aux éditions Língua Geral (Rio de Janeiro, Brésil). 
            Développées au sein du Rico Lins +Studio."
              images={[
                "/images/graphisme/ponta_de_lanca/PDL-01.jpg",
                "/images/graphisme/ponta_de_lanca/PDL-02.jpg",
                "/images/graphisme/ponta_de_lanca/PDL-03.jpg",
                "/images/graphisme/ponta_de_lanca/PDL-04.jpg",
                "/images/graphisme/ponta_de_lanca/PDL-05.jpg",
                "/images/graphisme/ponta_de_lanca/PDL-06.jpg",
                "/images/graphisme/ponta_de_lanca/PDL-07.jpg",
                "/images/graphisme/ponta_de_lanca/PDL-08.jpg",
                "/images/graphisme/ponta_de_lanca/PDL-09.jpg",
                "/images/graphisme/ponta_de_lanca/PDL-10.jpg",
                "/images/graphisme/ponta_de_lanca/PDL-11.jpg",
                "/images/graphisme/ponta_de_lanca/PDL-12.jpg",
                "/images/graphisme/ponta_de_lanca/PDL-13.jpg",
                "/images/graphisme/ponta_de_lanca/PDL-14.jpg",
                "/images/graphisme/ponta_de_lanca/PDL-15.jpg",
                "/images/graphisme/ponta_de_lanca/PDL-16.jpg",
                "/images/graphisme/ponta_de_lanca/PDL-17.jpg",
                "/images/graphisme/ponta_de_lanca/PDL-18.jpg",
                "/images/graphisme/ponta_de_lanca/PDL-19.jpg",
                "/images/graphisme/ponta_de_lanca/PDL-20.jpg",
                "/images/graphisme/ponta_de_lanca/PDL-21.jpg",
                "/images/graphisme/ponta_de_lanca/PDL-22.jpg",
                "/images/graphisme/ponta_de_lanca/PDL-23.jpg",
                "/images/graphisme/ponta_de_lanca/PDL-24.jpg",
              ]}
            />
            <ProjectCard
              title="Institut Goethe São Paulo"
              image="/images/graphisme/institut_goethe/goethe-cover.jpg"
              stacks={[]}
              description="Signalétique et communication visuelle du Goethe Institut São Paulo. Projet développé au sein du Rico Lins +Studio."
              images={[
                "/images/graphisme/institut_goethe/goethe-01.jpg",
                "/images/graphisme/institut_goethe/goethe-02.jpg",
                "/images/graphisme/institut_goethe/goethe-03.jpg",
                "/images/graphisme/institut_goethe/goethe-04.jpg",
                "/images/graphisme/institut_goethe/goethe-05.jpg",
                "/images/graphisme/institut_goethe/goethe-06.jpg",
                "/images/graphisme/institut_goethe/goethe-07.jpg",
                "/images/graphisme/institut_goethe/goethe-08.jpg",
              ]}
            />
            <ProjectCard
              title="Entre Nos"
              image="/images/graphisme/entre_nos/entreNos-cover.jpg"
              stacks={[]}
              description="Conception graphique du livre « Entre nós » de la collection Língua Franca, aux éditions Língua Geral (Rio de Janeiro, Brésil). Développé au sein du Rico Lins +Studio."
              images={[
                "/images/graphisme/entre_nos/entreNos-01.jpg",
                "/images/graphisme/entre_nos/entreNos-02.jpg",
                "/images/graphisme/entre_nos/entreNos-03.jpg",
                "/images/graphisme/entre_nos/entreNos-04.jpg",
              ]}
            />
            <ProjectCard
              title="Manuels scolaires"
              image="/images/graphisme/lls/lls-cover.png"
              stacks={[]}
              description="Projet Photopoche."
              images={["/images/graphisme/photopoche/photopoche_1.jpg"]}
            />
            <ProjectCard
              title="Road to Net Zero"
              image="/images/graphisme/institut_rousseau/IR_cover.png"
              stacks={[]}
              description="Rapport Road to Net Zero pour l'Institut Rousseau."
              images={["/images/graphisme/photopoche/photopoche_1.jpg"]}
            />
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section
        id="competences"
        className="snap-start h-screen pt-24 overflow-y-auto bg-[#7c86ff] text-white"
      >
        <div className="px-8 sm:px-16 xl:px-32">
          <h2 className="text-3xl font-title mb-4">Compétences</h2>

          <SkillsGrid />
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="snap-start h-screen pt-24 overflow-y-auto bg-[#7c86ff] text-white relative"
      >
        <div className="px-8 sm:px-16 xl:px-32 h-full flex flex-col">
          <div className="max-w-2xl mb-12">
            <h2 className="text-6xl font-title mb-6">Faisons connaissance !</h2>
            <p className="text-lg">
              Je suis disponible pour discuter de projets, d&apos;idées ou
              d&apos;opportunités d&apos;alternance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] pt-8 gap-20">
            <ContactForm />
            <SocialLinks />
          </div>

          <div className="mt-auto">
            <Footer />
          </div>
        </div>
      </section>
    </main>
  );
}
