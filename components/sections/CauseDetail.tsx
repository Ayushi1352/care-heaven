import { CauseImpact } from "@/components/sections/CauseImpact";
import { CauseIntro } from "@/components/sections/CauseIntro";
import { ProgramSteps } from "@/components/sections/ProgramSteps";
import type { CauseDetailData } from "@/types/templates.types";

export const CauseDetail = ({ data }: { data?: CauseDetailData }) => {
  if (!data) return null;
  return (
    <div className="relative overflow-hidden bg-[var(--color-bg-cause-detail)] px-20 pt-64 pb-64 sm:px-32 md:pt-80 md:pb-80 xl:px-0 xl:pt-100 xl:pb-100">
      <CauseIntro data={data} />
      <ProgramSteps data={data} />
      <CauseImpact data={data} />
    </div>
  );
};
