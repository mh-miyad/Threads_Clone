import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiAngular,
  SiVuedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";

interface SkillSectionProps {
  frontEndSkills: string[];
}

const SkillSection: React.FC<SkillSectionProps> = ({ frontEndSkills }) => {
  const getIcon = (skill: string | undefined) => {
    const lowerCaseSkill = String(skill).toLowerCase().trim();

    // Check if lowerCaseSkill includes the standardized skill names
    if (lowerCaseSkill.includes("html")) {
      return <SiHtml5 size="30" className="text-orange-500" />;
    } else if (lowerCaseSkill.includes("css")) {
      return <SiCss3 size="30" className="text-blue-500" />;
    } else if (lowerCaseSkill.includes("javascript")) {
      return <SiJavascript size="30" className="text-yellow-500 bg-black" />;
    } else if (lowerCaseSkill.includes("react")) {
      return <SiReact size="30" className="text-sky-400" />;
    } else if (lowerCaseSkill.includes("react js")) {
      return <SiReact size="30" className="text-sky-400" />;
    } else if (lowerCaseSkill.includes("angular")) {
      return <SiAngular size="30" className="text-red-600" />;
    } else if (lowerCaseSkill.includes("vue js")) {
      return <SiVuedotjs size="30" className="text-green-600" />;
    } else if (lowerCaseSkill.includes("vue")) {
      return <SiVuedotjs size="30" className="text-green-600" />;
    } else if (lowerCaseSkill.includes("nextjs")) {
      return (
        <SiNextdotjs
          size="30"
          className="text-white bg-black p-1 rounded-xl dark:bg-white dark:text-black"
        />
      );
    } else if (lowerCaseSkill.includes("next js")) {
      return (
        <SiNextdotjs
          size="30"
          className="text-white bg-black p-1 rounded-xl dark:bg-white dark:text-black"
        />
      );
    } else if (lowerCaseSkill.includes("tailwindcss")) {
      return <SiTailwindcss size="30" className="text-sky-500" />;
    } else if (lowerCaseSkill.includes("bootstrap")) {
      return <SiBootstrap size="30" className="text-purple-600" />;
    } else if (lowerCaseSkill.includes("bootstrap 5")) {
      return <SiBootstrap size="30" className="text-purple-600" />;
    } else {
      console.log(`Unrecognized skill: ${lowerCaseSkill}`);
      return null;
    }
  };

  return (
    <div>
      <div className="flex justify-around items-center gap-4">
        {frontEndSkills?.flat().map((skill, index) => (
          <span key={index}>{getIcon(skill)}</span>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
