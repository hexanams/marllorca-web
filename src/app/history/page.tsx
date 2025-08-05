import HistoryFifthSection from "@/components/History/HistoryFifthSection";
import HistoryFirstSection from "@/components/History/HistoryFirstSection";
import HistoryForthSection from "@/components/History/HistoryForthSection";
import HistorySecondSection from "@/components/History/HistorySecondSection";
import HistoryThirdSection from "@/components/History/HistoryThirdSection";
import HomeSixthSection from "@/components/Home/HomeSixthSection";

const page = () => {
  return (
    <>
      <HistoryFirstSection />
      <HistorySecondSection />
      <HistoryThirdSection />
      <HistoryForthSection />
      <HistoryFifthSection />
      <HomeSixthSection />
    </>
  );
};

export default page;
