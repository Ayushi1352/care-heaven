import { CauseImpact } from "@/components/sections/CauseImpact";
import { CauseIntro } from "@/components/sections/CauseIntro";
import { ProgramSteps } from "@/components/sections/ProgramSteps";
import type { CauseDetailData } from "@/types/templates.types";

export const CauseDetail = ({ data }: { data?: CauseDetailData }) => {
  if (!data) return null;
  return (
    <div className="relative overflow-hidden bg-[var(--color-ivory)] px-[1.25rem] pt-[4rem] pb-[4rem] sm:px-[2rem] md:pt-[5rem] md:pb-[5rem] xl:px-0 xl:pt-[6.25rem] xl:pb-[6.25rem]">
      <CauseIntro data={data} />
      <ProgramSteps data={data} />
      <CauseImpact data={data} />
    </div>
  );
};
