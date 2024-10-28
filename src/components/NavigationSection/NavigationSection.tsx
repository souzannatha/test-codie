import { TagNav } from "./style";

interface NavigationSectionProps {
  currentSection: string;
  desc: string;
}

export function NavigationSection({
  currentSection,
  desc,
}: NavigationSectionProps) {
  return (
    <TagNav>
      <div>
        <p>Home &gt; {currentSection}</p>
        <h2>{currentSection}</h2>
        <p>{desc}</p>
      </div>
    </TagNav>
  );
}
