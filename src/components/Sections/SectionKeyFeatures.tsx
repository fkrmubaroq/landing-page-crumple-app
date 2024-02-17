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
      <div className="mt-28 flex flex-col gap-y-20">
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
      <span className="text-black/55">Key Features</span>
      <div className="flex gap-x-2 flex-col gap-y-2 text-6xl items-center font-normal font-rubik">
        <div>Experience the future of</div>
        <div className="flex gap-x-2 relative max-[915px]:mx-auto">
          stress-free
          <div className="absolute -left-3 -bottom-8">
            <Underline />
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
    <section className="flex pt-12 px-20 justify-between items-center">
      <div className={cn("flex flex-col gap-y-3", { "order-2": swap })}>
        <div className="uppercase tracking-[2px] text-black/55">{context}</div>
        <div className="text-[#101621] text-[40px] font-rubik -ml-1">
          {title}
        </div>
        <div className="text-[#73737B] font-inter text-xl leading-[35px] font-light max-w-[560px]">
          {description}
        </div>
      </div>

      {icon}
    </section>
  );
}
