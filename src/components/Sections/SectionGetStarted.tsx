import Button from "../Button";

export default function SectionGetStarted() {
  return (
    <section className="max-w-[1170px] mx-auto bg-[#1B1B1B] px-[50px] py-16 flex gap-x-3 mb-32">
      <div className="flex flex-col gap-y-4 w-1/2">
        <div className="uppercase tracking-widest text-[#C0C0C0]">
          GET STARTED
        </div>
        <div className="text-5xl font-rubik font-extrabold leading-[60px] text-white">
          Elevate your Digital Lifestyle Today.
        </div>
      </div>
      <div className="self-center w-1/2 mt-5">
        <div className="relative">
          <input
            placeholder="Email address"
            className="bg-transparent w-full border border-white rounded-md py-5 px-7 mb-2"
          />
          <div className="absolute right-0 top-2.5">
            <Button variant="white" className="py-3 !px-6 font-inter">
              Try free demo
            </Button>
          </div>
          <div className="text-[#999999]">
            Already a user?{" "}
            <span className="text-white cursor-pointer hover:underline">
              Sign in
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
