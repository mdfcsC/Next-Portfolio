import Hero from "@/components/Hero";
import homeBG from "/public/images/CP_Bristol_Shot_by_mdfcsC_2025-07-14_222708_612.jpg";

export default function HomePage() {
  return (
    <div>
      <Hero imgData={homeBG} imgAlt="The grass in front of Cathedral Park, Bristol, 2025-07-14" heroTitle='Welcome to my great beyond.' />
    </div>
  );
}