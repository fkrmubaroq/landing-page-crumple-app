import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const list = [
  {
    text: `"Crumple App nails it for privacy buffs like me. The encryption is top-notch, and the interface is so intuitive. Finally, a document app that gets it right!"`,
    writer: "Sarah M.",
    as: "Founder",
  },
  {
    text: `"Crumple App rescued me from document chaos! It's secure, easy to use, and having my files on my phone is a game-changer."`,
    writer: "Alex P.",
    as: "Developer",
  },
  {
    text: `"Crumple App is my life-saver on the move. Turning papers digital was a breeze, and now my docs are secure and always accessible. A must for busy professionals!"`,
    writer: "Jason L.",
    as: "Product Manager",
  },
];
export default function SectionFeedback() {
  return (
    <section className="relative overflow-hidden mb-32">
      <div className="bg-[#F7FAFF] my-4 pb-44 pt-24">
        <BgPath />
        <div className="flex flex-col gap-y-2 items-center mb-12 ">
          <div className="text-black/55 text-lg tracking-wide mb-3 font-light">
            Feedback
          </div>
          <div className="text-[#2A2A2A] text-xl min-[360px]:text-2xl min-[450px]:text-3xl min-[600px]:text-4xl min-[1440px]:text-5xl text-center leading-[66px] font-inter">
            What's Our Client Say
            <br /> About Us
          </div>
        </div>
        <Swiper
          className="w-full mx-auto px-5 pb-10"
          pagination={true}
          modules={[Pagination]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {list.map((item, key) => (
            <SwiperSlide key={key}>
              <CardItem text={item.text} writer={item.writer} as={item.as} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function CardItem({
  text,
  writer,
  as,
}: {
  text: string;
  writer: string;
  as: string;
}) {
  return (
    <div className="bg-white pl-10 pr-[41px] h-[350px] lg:h-[350px] pt-8 pb-6 flex flex-col justify-between gap-y-10 font-inter">
      <div className="text-[#999] italic text-base  shrink-0 h-[200px] leading-[28px] overflow-hidden min-[320px]:text-lg min-[320px]:leading-[35px] lg:leading-[30px] xl:text-lg xl:leading-[37.8px]">
        {text}
      </div>
      <div className="flex flex-col gap-y-1">
        <div>{writer}</div>
        <span className="text-[#B7B7B7] text-sm">{as}</span>
      </div>
    </div>
  );
}
function BgPath() {
  return (
    <div className="absolute inset-0 over">
      <svg
        viewBox="0 0 1435 1079"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_0_1)">
          <path
            d="M1385.12 947.397C1352.67 947.397 1318.32 921.867 1283.26 871.281C1282.78 870.808 1283.02 869.862 1283.5 869.626C1283.97 869.153 1284.68 869.39 1285.15 869.862C1321.16 921.394 1355.75 946.688 1388.44 944.797C1414.97 943.378 1433.21 924.94 1452.63 905.557C1471.59 886.409 1491.25 866.553 1519.68 865.135C1551.42 863.48 1584.35 885.227 1617.51 929.668C1617.98 930.141 1617.75 931.086 1617.27 931.323C1616.8 931.795 1616.09 931.559 1615.62 931.086C1582.92 887.355 1550.71 865.844 1519.91 867.499C1492.43 868.917 1473.01 888.3 1454.53 907.211C1435.82 926.122 1416.39 945.506 1388.91 947.16C1387.49 947.16 1386.31 947.397 1385.12 947.397Z"
            fill="black"
            fillOpacity="0.866281"
          />
        </g>
        <g clipPath="url(#clip1_0_1)">
          <path
            d="M114.652 907.809L134.972 924.767L151.513 904.069L131.187 886.982L114.652 907.809Z"
            stroke="black"
            strokeWidth="1.5"
          />
        </g>
        <g clipPath="url(#clip2_0_1)">
          <path
            d="M286.214 28.4C293.297 28.4 299.038 22.6581 299.038 15.575C299.038 8.49195 293.297 2.75 286.214 2.75C279.132 2.75 273.391 8.49195 273.391 15.575C273.391 22.6581 279.132 28.4 286.214 28.4Z"
            stroke="#0F0F0F"
            strokeWidth="1.5"
          />
        </g>
        <g clipPath="url(#clip3_0_1)">
          <path
            d="M-90.6149 194.078C-119.928 194.078 -150.953 171.06 -182.62 125.449C-183.048 125.023 -182.834 124.17 -182.406 123.957C-181.978 123.531 -181.336 123.744 -180.909 124.17C-148.386 170.633 -116.933 193.439 -87.6193 191.734C-63.6555 190.455 -47.1795 173.83 -29.6345 156.353C-12.5175 139.089 5.24149 121.186 30.9175 119.907C59.5895 118.415 89.1165 138.024 119.285 178.093C119.714 178.519 119.499 179.372 119.071 179.585C118.643 180.011 118.001 179.798 117.574 179.372C87.8325 140.155 58.7335 120.973 30.9175 122.252C6.09747 123.531 -11.4475 141.008 -28.1365 158.058C-45.0405 175.109 -62.5855 192.586 -87.4054 194.078C-88.4752 194.078 -89.545 194.078 -90.6149 194.078Z"
            fill="#292929"
            fillOpacity="0.866281"
          />
        </g>
        <g clipPath="url(#clip4_0_1)">
          <path
            d="M316.374 1069.25L316.501 1069.03L346.811 1039.96C347.415 1039.43 348.204 1039.59 348.518 1040.06C349.052 1040.67 348.889 1041.46 348.634 1041.9L318.324 1070.97C317.721 1071.51 316.931 1071.34 316.618 1070.87C315.956 1070.49 316.118 1069.7 316.374 1069.25Z"
            fill="black"
            fillOpacity="0.866281"
          />
        </g>
        <g clipPath="url(#clip5_0_1)">
          <path
            d="M1105.74 1075.98C1102.34 1075.98 1098.95 1074.68 1096.2 1071.91C1093.61 1069.31 1092.31 1065.89 1092.31 1062.15C1092.31 1058.41 1093.77 1054.99 1096.2 1052.39C1101.37 1047.02 1109.95 1047.02 1115.13 1052.39C1117.72 1054.99 1119.01 1058.41 1119.01 1062.15C1119.01 1065.89 1117.55 1069.31 1115.13 1071.91C1112.7 1074.52 1109.14 1075.98 1105.74 1075.98ZM1105.58 1050.2C1102.57 1050.2 1099.71 1051.32 1097.49 1053.72C1095.26 1055.96 1094.15 1058.99 1094.15 1062.19C1094.15 1065.39 1095.42 1068.42 1097.49 1070.66C1101.93 1075.3 1109.23 1075.3 1113.84 1070.66C1116.06 1068.42 1117.17 1065.39 1117.17 1062.19C1117.17 1058.99 1115.9 1055.96 1113.84 1053.72C1111.45 1051.32 1108.6 1050.2 1105.58 1050.2Z"
            fill="black"
          />
        </g>
        <g clipPath="url(#clip6_0_1)">
          <path
            d="M1317.04 196.613C1316.93 196.618 1316.82 196.624 1316.7 196.519L1298.72 181.361C1298.61 181.256 1298.49 181.152 1298.48 180.933C1298.48 180.823 1298.47 180.604 1298.57 180.489L1313.27 161.975C1313.37 161.86 1313.48 161.745 1313.69 161.735C1313.8 161.729 1314.02 161.719 1314.13 161.823L1332.11 176.981C1332.23 177.086 1332.34 177.19 1332.35 177.409C1332.36 177.519 1332.37 177.738 1332.27 177.853L1317.57 196.367C1317.36 196.487 1317.14 196.608 1317.04 196.613Z"
            stroke="#0E0E0E"
            strokeWidth="1.5"
          />
        </g>
        <g clipPath="url(#clip7_0_1)">
          <path
            d="M1158.26 34.8563C1157.87 35.1845 1156.96 35.2864 1156.63 34.8962C1156.14 34.3108 1155.84 33.5614 1156.43 33.0692L1183.52 1.02698C1184.11 0.534794 1184.66 0.401767 1185.35 0.823079C1186.03 1.24433 1186.14 2.15783 1185.55 2.65007L1158.26 34.8563C1158.46 34.6923 1158.46 34.6923 1158.26 34.8563Z"
            fill="black"
            fillOpacity="0.866281"
          />
        </g>
        <defs>
          <clipPath id="clip0_0_1">
            <rect
              width="152"
              height="83"
              fill="white"
              transform="translate(1283 865.047)"
            />
          </clipPath>
          <clipPath id="clip1_0_1">
            <rect
              width="39"
              height="40"
              fill="white"
              transform="translate(112.89 887.126) rotate(-2.79989)"
            />
          </clipPath>
          <clipPath id="clip2_0_1">
            <rect
              width="28"
              height="28"
              fill="white"
              transform="translate(272.641 2)"
            />
          </clipPath>
          <clipPath id="clip3_0_1">
            <rect
              width="120"
              height="75"
              fill="white"
              transform="translate(0 119.828)"
            />
          </clipPath>
          <clipPath id="clip4_0_1">
            <rect
              width="34"
              height="45"
              fill="white"
              transform="translate(315.688 1033.36)"
            />
          </clipPath>
          <clipPath id="clip5_0_1">
            <rect
              width="27"
              height="28"
              fill="white"
              transform="translate(1092.31 1048.36)"
            />
          </clipPath>
          <clipPath id="clip6_0_1">
            <rect
              width="36"
              height="37"
              fill="white"
              transform="translate(1296.8 161.81) rotate(-2.79989)"
            />
          </clipPath>
          <clipPath id="clip7_0_1">
            <rect
              width="40"
              height="36"
              fill="white"
              transform="translate(1151.06)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
