import { SecondaryUnderline } from "../Icon/Underline";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

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
      <div className="relative font-normal font-rubik text-2xl sm:text-3xl lg:text-5xl mb-16">
        Ideal For
        <div className="absolute -bottom-7">
          <SecondaryUnderline />
        </div>
      </div>

      <Swiper
        className="w-full mx-auto px-5 pb-10"
        pagination={true}
        modules={[Pagination]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          968: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {listItem.map((item, key) => (
          <SwiperSlide key={key}>
            <CardItem
              key={key}
              src={item.src}
              title={item.title}
              description={item.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
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
