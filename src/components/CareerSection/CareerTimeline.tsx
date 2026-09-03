import { ScrollTimeline } from "../lightswind/scroll-timeline";
import { Briefcase, Layers, Users, Globe, Rocket, type LucideIcon } from "lucide-react";
import { useLanguage } from "../../i18n/useLanguage";

const careerIcons: LucideIcon[] = [Rocket, Briefcase, Layers, Users, Globe];

export const CareerTimeline = () => {
  const { t } = useLanguage();

  const careerEvents = t.career.items.map((item, i) => {
    const Icon = careerIcons[i % careerIcons.length];
    return {
      year: item.period,
      title: item.role,
      subtitle: item.company,
      description: item.description,
      icon: <Icon className="h-4 w-4 mr-2 text-primary" />,
    };
  });

  return (
    <div id="career">
      <ScrollTimeline
        events={careerEvents}
        title={`${t.career.heading} ${t.career.headingAccent}`}
        subtitle={t.career.subtitle}
        animationOrder="staggered"
        cardAlignment="alternating"
        cardVariant="elevated"
        parallaxIntensity={0.15}
        revealAnimation="fade"
        progressIndicator={true}
        lineColor="bg-primary/20"
        activeColor="bg-primary"
        progressLineWidth={3}
        progressLineCap="round"
      />
    </div>
  );
};
