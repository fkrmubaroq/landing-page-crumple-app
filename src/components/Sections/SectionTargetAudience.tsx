import { SecondaryUnderline } from "../Icon/Underline";

const listItem = [
  {
    src: "/database.png",
    title: "Organizers",
    description:
      "Individuals swamped with personal documents, seeking a secure storage.",
  },
  {
    src: "/guardians.png",
    title: "Guardians",
    description: "Privacy and security enthusiasts in document management.",
  },
  {
    src: "/mobile-users.png",
    title: "Mobile Users",
    description:
      "Those who value the ease of handling documents on mobile devices.",
  },
];
export default function SectionTargetAudience() {
  return (
    <section className="flex flex-col justify-center gap-y-3 items-center mb-32 max-w-[1280px] mx-auto">
      <div className="text-black/55 tracking-wider">Target Audience</div>
      <div className="relative font-normal font-rubik text-5xl mb-16">
        Ideal For
        <div className="absolute -left-12 -bottom-10">
          <SecondaryUnderline />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {listItem.map((item, key) => (
          <CardItem
            key={key}
            src={item.src}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}

function CardItem({
  src,
  title,
  description,
}: {
  src: string;
  title: string;
  description: string;
}) {
  return (
    <div className="border-2 border-[#EEF3F7] h-[400px] rounded-lg px-10 py-20 font-inter flex flex-col gap-y-6 justify-center items-center">
      <img src={src} width={80} height={80} />
      <div className="text-[#101621] text-2xl">{title}</div>
      <div className="text-lg text-[#73737B] text-center max-w-[260px]">
        {description}
      </div>
    </div>
  );
}
