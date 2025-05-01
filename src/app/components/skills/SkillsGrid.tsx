import SkillCategory from "./SkillCategory";

export default function SkillsSection() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
        {/* Développement web */}
        <SkillCategory
          title="Développement web"
          categories={[
            {
              title: "Front-end",
              groups: {
                "Je pratique": [
                  { icon: "javascript.svg", name: "Javascript" },
                  { icon: "html5.svg", name: "HTML 5" },
                  { icon: "css.svg", name: "CSS 3" },
                ],
                "Je découvre": [{ icon: "typescript.svg", name: "Typescript" }],
              },
            },
            {
              title: "Back-end",
              groups: {
                "Je pratique": [
                  { icon: "php.svg", name: "PHP" },
                  { icon: "sql.svg", name: "SQL" },
                ],
                "Je découvre": [
                  { icon: "postgresql.svg", name: "PostgreSQL" },
                  { icon: "mysql.svg", name: "MySQL" },
                ],
              },
            },
            {
              title: "Frameworks/librairies",
              groups: {
                "Je pratique": [
                  { icon: "vuedotjs.svg", name: "Vue.JS" },
                  { icon: "tailwindcss.svg", name: "TailwindCSS" },
                  { icon: "laravel.svg", name: "Laravel" },
                ],
                "Je découvre": [
                  { icon: "react.svg", name: "React" },
                  { icon: "nextdotjs.svg", name: "Next.JS" },
                ],
              },
            },
            {
              title: "Outils collaboratifs",
              groups: {
                "Je pratique": [
                  { icon: "git.svg", name: "Git" },
                  { icon: "github.svg", name: "GitHub" },
                  { icon: "notion.svg", name: "Notion" },
                  { icon: "trello.svg", name: "Trello" },
                  { icon: "miro.svg", name: "Miro" },
                ],
              },
            },
          ]}
        />

        <div className="space-y-12">
          {/* Design graphique */}
          <SkillCategory
            title="Design graphique"
            categories={[
              {
                groups: {
                  "Je maîtrise": [
                    { icon: "photoshop.svg", name: "Photoshop" },
                    { icon: "illustrator.svg", name: "Illustrator" },
                    { icon: "indesign.svg", name: "InDesign" },
                  ],
                  "Je découvre": [{ icon: "figma.svg", name: "Figma" }],
                },
              },
            ]}
          />

          {/* Langues */}
          <SkillCategory
            title="Langues"
            categories={[
              {
                groups: {
                  "": [
                    { icon: "fr.svg", name: "Français : courant" },
                    {
                      icon: "en.svg",
                      name: "Anglais : bon niveau",
                    },
                    { icon: "es.svg", name: "Espagnol : courant" },
                    { icon: "pt.svg", name: "Portugais : courant" },
                  ],
                },
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
