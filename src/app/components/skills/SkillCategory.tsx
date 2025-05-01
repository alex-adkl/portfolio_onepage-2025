import Skill from "./Skill";

type SkillItem = {
  icon: string;
  name: string;
};

type SkillGroups = {
  [key: string]: SkillItem[];
};

type SkillSubCategory = {
  title?: string;
  groups: SkillGroups;
};

type SkillCategoryProps = {
  title: string;
  categories: SkillSubCategory[];
};

export default function SkillCategory({
  title,
  categories,
}: SkillCategoryProps) {
  const isDevWeb = title === "Développement web";
  const isLanguages = title === "Langues";

  return (
    <div>
      <h3 className="text-2xl font-title mb-6">{title}</h3>
      <div
        className={
          isDevWeb ? "grid grid-cols-1 sm:grid-cols-2 gap-6" : "space-y-8"
        }
      >
        {categories.map((category, index) => (
          <div
            key={index}
            className="border border-white/20 rounded-lg p-6 bg-white/5"
          >
            {category.title && (
              <h4 className="text-xl mb-4">{category.title}</h4>
            )}
            <div className="space-y-6">
              {Object.entries(category.groups).map(([level, skills]) => (
                <div key={level}>
                  {level && (
                    <h5 className="text-sm mb-3 text-white/70">{level}</h5>
                  )}
                  <div
                    className={`grid gap-3 ${
                      isLanguages ? "grid-cols-1 md:grid-cols-2" : "grid-cols-3"
                    }`}
                  >
                    {skills.map((skill) => (
                      <Skill
                        key={skill.name}
                        icon={skill.icon}
                        name={skill.name}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
