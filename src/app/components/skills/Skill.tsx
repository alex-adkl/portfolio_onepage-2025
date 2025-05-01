import Image from "next/image";

type SkillProps = {
  icon: string;
  name: string;
};

export default function Skill({ icon, name }: SkillProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 flex items-center justify-center">
        <Image
          src={`/images/icons/${icon}`}
          alt={name}
          width={20}
          height={20}
          className="w-auto h-auto brightness-0 invert"
        />
      </div>
      <span className="text-sm whitespace-nowrap">{name}</span>
    </div>
  );
}
