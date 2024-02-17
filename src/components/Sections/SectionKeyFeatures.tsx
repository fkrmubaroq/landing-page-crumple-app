import FreedomIcon from "../Icon/Sections/FreedomIcon";
import RectangleIcon from "../Icon/Rectangle";
import Underline from "../Icon/Underline";
import cn from "classnames";
import EfficiencyIcon from "../Icon/Sections/EficiencyIcon";
import SecurityIcon from "../Icon/Sections/SecurityIcon";
import FlexibilityIcon from "../Icon/Sections/FlexibilityIcon";
import SimplicityIcon from "../Icon/Sections/SimplicityIcon";

export default function SectionKeyFeatures() {
  return (
    <section className="mt-28 max-w-[1280px] mx-auto mb-36">
      <KeyFeatures />
      <div className="mt-20 md:mt-28 flex flex-col gap-y-7 md:gap-y-20">
        <SectionTwoColumn
          context="Freedom"
          icon={<FreedomIcon />}
          title="Decentralized Storage"
          description="Leveraging blockchain technology, Crumple App offers a decentralized storage solution. Your data isn't confined to a single point, significantly minimizing the risk of data breaches and boosting privacy."
        />
        <RectangleIcon />
        <SectionTwoColumn
          context="Efficiency"
          icon={<EfficiencyIcon />}
          title="Document Digitization"
          description="Say goodbye to paper clutter! Our app equips you with the tools to effortlessly transform your physical documents into digital versions, streamlining retrieval and management."
          swap
        />
        <RectangleIcon />
        <SectionTwoColumn
          context="Security"
          icon={<SecurityIcon />}
          title="Advanced Encryption"
          description="With top-tier encryption protocols, your data's security is our priority. This feature is especially crucial for handling sensitive personal and financial documents, ensuring they remain shielded from unauthorized access."
        />
        <RectangleIcon />
        <SectionTwoColumn
          context="Flexibility"
          icon={<FlexibilityIcon />}
          title="Mobile Accessibility"
          description="Embrace the freedom of managing your documents anytime, anywhere. Crumple App's mobile-first design offers unmatched convenience in document management."
          swap
        />
        <RectangleIcon />
        <SectionTwoColumn
          context="Simplicity"
          icon={<SimplicityIcon />}
          title="User-Friendly Interface"
          description="Navigating the app is a breeze, thanks to our intuitive interface designed for users of all tech levels."
        />
      </div>
    </section>
  );
}

function KeyFeatures() {
  return (
    <div className="flex justify-center items-center flex-col gap-y-4">
      <span className="text-black/55 sm:text-base text-sm">Key Features</span>
      <div className="flex gap-x-2 flex-col gap-y-2 min-[360px]:text-xl min-[450px]:text-2xl min-[600px]:text-3xl min-[1440px]:text-6xl items-center font-normal font-rubik">
        <div>Experience the future of</div>
        <div className="flex gap-x-2">
          <div className="flex gap-x-2 relative max-[915px]:mx-auto">
            stress-free
            <div className="absolute  -bottom-6">
              <Underline />
            </div>
          </div>
          <span>Document Management</span>
        </div>
      </div>
    </div>
  );
}

type TSection = {
  context: string;
  title: string;
  description: string;
  swap?: boolean;
  icon: React.ReactNode;
};

function SectionTwoColumn({
  context,
  title,
  description,
  icon,
  swap,
}: TSection) {
  return (
    <section className="flex pt-12 lg:flex-row flex-col gap-x-5 px-10 sm:px-20 justify-between items-center">
      <div className={cn("flex flex-col gap-y-3", { "lg:order-2": swap })}>
        <div className="uppercase tracking-[2px] text-black/55 lg:text-base text-sm">
          {context}
        </div>
        <div className="text-[#101621] min-[360px]:text-2xl md:text-3xl lg:text-[40px] font-rubik -ml-0.5">
          {title}
        </div>
        <div className="text-[#73737B] font-inter min-[360px]:leading-[30px]  min-[360px]:text-base  md:text-lg lg:text-xl mt-3 lg:leading-[37px] font-light max-w-[560px]">
          {description}
        </div>
      </div>

      <div className="max-w-[400px]">{icon}</div>
    </section>
  );
}
