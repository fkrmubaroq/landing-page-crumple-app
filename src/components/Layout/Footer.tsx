import data from "@/db.json";
import Button from "../Button";

const footer = data.footer;
type TFooter = {
  title: string;
  links: {
    text: string;
    href: string;
  }[];
};

export default function Footer() {
  return (
    <footer className="flex flex-col bg-[#F7FAFF]">
      <div className="flex flex-col lg:flex-row px-11 py-20">
        <Logo />
        <FooterLinkItem data={footer} />
        <JoinWithUs />
      </div>
      <Copyright />
    </footer>
  );
}

function Logo() {
  return (
    <div className="w-full h-[100px] sm:w-[400px] sm:h-[150px] shrink-0">
      <img src="/logo.png" width={218} height={30} />
    </div>
  );
}
function FooterLinkItem({ data }: { data: TFooter[] }) {
  return (
    <div className="flex xl:flex-row flex-col gap-y-7">
      {data.map((item, key) => (
        <div className="flex flex-col font-inter shrink-0 w-[300px]" key={key}>
          <div className="text-black/80 font-inter font-medium tracking-wider uppercase mb-5">
            {item.title}
          </div>
          {item.links.map((link, key) => (
            <div className="leading-10" key={key}>
              {link.text}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function JoinWithUs() {
  return (
    <div className="flex flex-col gap-y-5 font-inter w-full lg:pl-10 lg:mt-0 mt-10">
      <div className="uppercase tracking-wider text-black/80">
        GET STARTED TODAY!
      </div>
      <div>
        Join over growing entreprise clients getting <br />
        our emails
      </div>
      <InputEmail />
    </div>
  );
}

function InputEmail() {
  return (
    <div className="relative mr-10">
      <input
        placeholder="Enter your email"
        className="bg-transparent w-full border-2  border-black rounded-md py-5 pl-7 pr-24 mb-2"
      />
      <div className="absolute right-0 top-2.5">
        <Button variant="black" className="py-3 !px-6 font-inter">
          Book
        </Button>
      </div>
      <div className="text-[#999999] text-sm">
        We only send interesting and relevant emails.
      </div>
    </div>
  );
}

function Copyright() {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <div className="flex justify-between text-sm sm:text-base sm:flex-row flex-col sm:gap-y-0 gap-y-3 py-6 border-t text-[#999] border-t-gray-200 px-11">
      <div>Privacy & Terms.</div>
      <div>Copyright @{year} CrumpleApp</div>
      <div>
        <svg
          width="18"
          height="17"
          viewBox="0 0 18 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.555072 5.7563H4.24209V16.8174H0.555072V5.7563ZM4.47844 2.34242C4.48585 2.88501 4.2977 3.33871 3.91398 3.70353C3.53027 4.06834 3.02513 4.25075 2.39858 4.25075H2.37634C1.76647 4.25075 1.27524 4.06834 0.902642 3.70353C0.530047 3.33871 0.34375 2.88501 0.34375 2.34242C0.34375 1.79056 0.535608 1.33501 0.919325 0.975749C1.30304 0.614638 1.80354 0.434082 2.42083 0.434082C3.03996 0.434082 3.53583 0.614638 3.90842 0.975749C4.28102 1.33501 4.47102 1.79056 4.47844 2.34242ZM17.5026 10.4785V16.8174H13.8294V10.9007C13.8294 10.1211 13.6784 9.50908 13.3762 9.06464C13.0741 8.62205 12.6032 8.40075 11.9637 8.40075C11.4929 8.40075 11.0999 8.52945 10.7847 8.78686C10.4678 9.04427 10.2314 9.36279 10.0757 9.74242C9.99228 9.96464 9.95057 10.2656 9.95057 10.6452V16.8174H6.27467C6.29136 13.8489 6.2997 11.4415 6.2997 9.59519C6.2997 7.75075 6.29507 6.64982 6.2858 6.29242L6.27467 5.7563H9.95057V7.36464H9.92832C10.0785 7.12575 10.2314 6.91742 10.3871 6.73964C10.5428 6.56001 10.7532 6.36649 11.0183 6.15908C11.2834 5.94982 11.6078 5.78779 11.9915 5.67297C12.3752 5.55816 12.8016 5.50075 13.2706 5.50075C14.544 5.50075 15.5682 5.92297 16.3431 6.76742C17.1161 7.61186 17.5026 8.8489 17.5026 10.4785Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
}
