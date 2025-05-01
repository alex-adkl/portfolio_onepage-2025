import Skill from "./Skill";

type SkillItem = {
  icon: string;
  name: string;
  level: string;
};

type SkillBlockProps = {
  title?: string;
  skills: SkillItem[];
};

export default function SkillBlock({ title, skills }: SkillBlockProps) {
  return (
    <div className="bg-white/10 p-6 rounded-2xl w-full">
      {title && <h4 className="text-lg font-medium mb-4">{title}</h4>}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <Skill key={skill.name} icon={skill.icon} name={skill.name} />
        ))}
      </div>
    </div>
  );
}
