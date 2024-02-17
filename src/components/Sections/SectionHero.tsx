import Button from "../Button";
import Underline from "@/components/Icon/Underline";
export default function SectionHero() {
  return (
    <section className="">
      <div className="absolute inset-0 mt-32">
        <img
          src="/bg.png"
          className="object-contain w-full h-[768px] md:h-[1280px]"
          height={1000}
        />
      </div>
      <div className="relative xl:px-0 px-7">
        <Tagline />
        <DescriptionTagLine />
        <ButtonAction />
        <HeroShotIlustration />
      </div>
    </section>
  );
}

function Tagline() {
  return (
    <div className="flex flex-col items-center gap-y-3 max-w-[1280px] xl:!leading-[60px] mx-auto text-xl min-[360px]:text-2xl min-[450px]:text-3xl min-[600px]:text-4xl lg:text-5xl min-[1440px]:text-[64px] font-bold text-slate-900 mt-16 sm:mt-24 xl:mt-36 font-rubik">
      <div className="">Your Secure Gateway to</div>
      <div className="flex gap-x-2 max-[915px]:flex-col max-[915px]:gap-y-5  ">
        <div className="relative max-[915px]:mx-auto">
          Decentralized
          <div className="absolute left-0 min-[360px]:left-1 min-[450px]:-left-2 min-[1440px]:left-10 -bottom-5 xl:-bottom-10">
            <Underline width="100%" />
          </div>
        </div>
        <span>Document Management</span>
      </div>
    </div>
  );
}

function DescriptionTagLine() {
  return (
    <div className="mt-8 sm:mt-12 text-center max-w-[1020px] mx-auto min-[600px]:text-xl min-[1440px]:text-2xl text-black/55 sm:leading-[36px] font-rubik">
      Specifically crafted for individuals who demand a trustworthy platform for
      managing sensitive documents like KYC details, expense bills, and much
      more, right from their mobile devices.
    </div>
  );
}

function ButtonAction() {
  return (
    <div className="flex justify-center mt-10 mb-0 lg:mb-36">
      <Button className="sm:!py-4 sm:!px-6 sm:text-sm text-xs !py-3 px-4 ">
        Get Started
      </Button>
      <Button
        variant="ghost"
        className="sm:!py-4 sm:!px-6 sm:text-sm text-xs !py-3 px-4 underline hover:!bg-transparent"
      >
        Try free demo
      </Button>
    </div>
  );
}

function HeroShotIlustration() {
  return (
    <div className="flex justify-center relative max-w-[900px] mx-auto ">
      <svg
        viewBox="0 0 1044 696"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M272.494 117.237C354.083 54.4536 476.333 50.9778 561.357 109.026C585.297 125.369 608.56 146.811 637.508 148.309C663.299 149.643 687.214 134.498 712.936 132.197C748.952 128.976 782.638 151.42 806.67 178.439C850.771 228.022 872.778 298.105 859.119 363.042C845.459 427.98 794.148 484.978 729.507 499.979C704.015 505.893 676.607 505.766 653.402 517.863C629.913 530.108 614.017 553.239 592.001 567.969C558.249 590.552 514.668 590.812 474.154 588.031C413.278 583.851 351.252 574.105 297.877 544.535C183.8 481.334 148.478 316.207 203.583 202.877C219.745 169.639 243.148 139.819 272.494 117.237Z"
          fill="#EBF2FB"
        />
        <path
          d="M630.75 608.051H484.871L415.417 379.899C413.92 374.981 409.383 371.619 404.242 371.619H72.3102C65.7177 371.619 60.9988 377.988 62.9184 384.295L135.316 622.12H135.366C135.446 627.107 139.501 631.13 144.508 631.13H616.875C625.433 631.13 633.282 626.379 637.252 618.798C639.813 613.911 636.268 608.051 630.75 608.051Z"
          fill="#36C2DB"
        />
        <path
          d="M484.871 608.051H144.11L72.8865 378.273"
          stroke="white"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M284.592 631.13C293.15 631.13 300.999 626.379 304.969 618.798C307.529 613.909 303.984 608.051 298.466 608.051"
          stroke="white"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M157.196 619.59C157.196 616.855 154.978 614.639 152.244 614.639C149.511 614.639 147.293 616.856 147.293 619.59C147.293 622.324 149.511 624.542 152.244 624.542C154.978 624.542 157.196 622.326 157.196 619.59Z"
          stroke="white"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M287.242 619.532C287.242 617.373 285.492 615.623 283.333 615.623C281.174 615.623 279.424 617.373 279.424 619.532C279.424 621.691 281.174 623.441 283.333 623.441C285.492 623.441 287.242 621.691 287.242 619.532Z"
          stroke="white"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M266.915 619.532C266.915 617.373 265.165 615.623 263.006 615.623C260.847 615.623 259.097 617.373 259.097 619.532C259.097 621.691 260.847 623.441 263.006 623.441C265.165 623.441 266.915 621.691 266.915 619.532Z"
          stroke="white"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M243.59 617.391H221.047V622.119H243.59V617.391Z"
          stroke="white"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M208.993 617.391H186.45V622.119H208.993V617.391Z"
          stroke="white"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M469.796 591.381H146.857L83.6188 383.644H406.556L469.796 591.381Z"
          fill="#B8E3F1"
        />
        <path
          d="M583.043 370.232C579.568 371.362 573.668 373.127 573.668 373.127C573.668 373.127 588.369 359.473 595.39 352.907C594.971 351.217 591.817 349.896 586.728 352.422C580.421 355.552 568.358 362.922 568.358 362.922C568.358 362.922 582.427 347.613 589.117 340.138C587.896 338.303 584.31 336.946 577.555 341.613C567.514 348.551 558.72 354.534 548.946 361.843C554.574 350.859 559.818 340.103 565.446 329.119C564.018 327.693 561.21 327.127 556.023 332.277C547.396 340.848 539.692 349.931 531.324 358.753C526.411 359.9 522.04 360.962 517.127 362.109C519.583 355.582 522.042 349.054 524.499 342.527C525.164 340.757 525.842 338.902 525.608 337.027C525.376 335.152 523.95 333.57 522.061 333.579C510.439 343.003 499.007 352.421 487.222 361.641C474.58 371.533 464.999 385.282 460.096 400.567L513.622 426.595C515.421 422.337 517.568 418.414 519.369 414.156C531.516 409.67 557.774 399.518 557.774 399.518C557.774 399.518 579.448 380.406 590.228 371.039C589.39 369.416 587.956 368.635 583.043 370.232Z"
          fill="#C14F4F"
        />
        <path
          d="M517.427 362.165C517.463 370.726 513.457 379.217 506.827 384.634"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M519.025 413.452C517.281 413.794 515.537 414.135 513.793 414.478"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M525.452 371.579C528.272 377.484 531.091 383.389 533.911 389.292"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M540.008 368.382C543.501 365.542 546.995 362.704 550.489 359.864"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M546.144 378.419C554.471 372.128 562.8 365.834 571.126 359.542"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M574.794 372.413C567.358 377.306 559.921 382.2 552.485 387.093"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M373.468 591.381L377.068 564.415L237.049 563.678L231.998 591.381H373.468Z"
          fill="#060305"
        />
        <path
          d="M163.518 591.381C165.798 557.372 168.173 523.393 180.687 491.688C188.429 472.073 200.391 454.733 211.009 436.514C222.669 416.507 242.183 401.94 264.694 396.511C259.818 390.09 260.947 380.395 265.965 374.083C270.983 367.772 279.075 364.52 287.093 363.666C295.111 362.811 303.186 364.082 311.148 365.351C322.993 367.237 334.837 369.125 346.682 371.011C353.032 372.023 359.726 373.187 364.643 377.334C369.558 381.48 371.647 389.688 367.225 394.355C371.237 395.954 375.205 397.204 379.216 398.804C403.023 408.299 424.588 423.814 435.09 447.195C442.876 430.021 450.124 412.976 457.908 395.801C478.571 404.576 499.305 413.484 519.969 422.259C509.699 447.847 499.763 474.044 489.494 499.632C482.061 518.151 466.353 531.296 447.34 537.358C428.328 543.42 406.786 541.023 389.571 530.93C389.295 544.578 389.081 558.133 388.805 571.781L238.071 567.847L231.996 591.381H163.518Z"
          fill="#FAAA4B"
        />
        <path
          d="M264.044 396.46C272.889 394.01 282.622 391.895 291.468 389.445C303.289 400.183 315.108 410.921 326.929 421.659C328.573 423.153 331.334 423.764 333.522 423.38C335.71 422.994 337.734 421.745 339.059 419.964C345.926 410.73 351.813 401.078 358.075 391.425C361.491 392.378 365.219 393.598 368.636 394.553"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M308.363 386.55C301.516 382.476 294.67 378.4 287.822 374.325C289.295 373.884 290.755 373.386 292.228 372.945"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M349.314 388.605C351.938 386.37 354.56 384.135 357.183 381.901"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M252.016 399.938C257.46 400.658 262.073 404.665 264.671 409.504C267.268 414.343 268.105 419.931 268.366 425.416C270.132 462.397 254.139 508.361 238.072 567.847"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M243.607 550.99C291.63 553.285 339.651 555.579 387.673 557.875"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M249.377 528.268C250.14 535.91 250.902 543.552 251.667 551.196"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M250.151 537.774C275.45 537.749 300.175 522.736 311.868 500.3C330.65 501.547 348.65 502.03 367.432 503.278C369.451 518.66 377.261 532.565 388.947 542.77"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M390.018 532.155C391.288 504.213 392.561 476.273 393.832 448.331C394.43 435.191 395.526 422.301 399.869 409.884"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M434.926 445.462C438.601 455.33 442.277 465.197 445.952 475.064"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M450.752 414.286C471.06 423.878 491.369 433.469 511.677 443.061"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M457.67 417.273C459.764 412.321 461.857 407.37 463.949 402.42"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M464.484 419.863C466.444 415.058 468.405 410.251 470.365 405.446"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M482.591 428.936C484.895 423.638 487.199 418.342 489.501 413.044"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M492.044 433.98C494.546 428.735 497.048 423.49 499.55 418.246"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M499.409 437.173C501.602 431.828 503.794 426.481 505.986 421.134"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M507.682 440.807C509.691 435.324 511.701 429.841 513.709 424.359"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M219.098 347.481C232.964 359.129 252.826 363.203 270.158 357.953C279.866 355.013 288.837 349.36 298.929 348.342"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M333.859 317.095C323.945 317.486 314.247 322.862 308.95 331.439C305.455 333.497 302.464 336.384 300.228 339.766C294.739 336.044 287.822 334.453 281.272 335.521C275.72 336.425 270.59 339.094 265.066 340.155C258.162 341.483 250.78 340.156 244.769 336.509L238.569 338.996C240.128 340.7 241.689 342.403 243.248 344.106C240.439 343.017 237.691 341.775 234.993 340.432L222.095 345.607C229.232 351.754 238.019 355.966 247.282 357.676C256.544 359.385 266.258 358.59 275.118 355.396C282.221 352.834 289.221 348.81 296.607 348.121C295.215 353.921 295.797 360.185 298.311 365.598C307.135 366.946 316.364 367.358 324.992 365.067C333.619 362.776 340.227 356.334 345.462 349.104C350.195 342.567 355.119 335.714 359.852 329.176C353.756 321.346 343.773 316.704 333.859 317.095Z"
          fill="#060305"
        />
        <path
          d="M349.325 388.674C350.238 385.794 351.037 383.238 351.952 380.357C357.132 378.223 361.445 374.062 363.763 368.962C366.081 363.862 366.06 358.036 364.548 352.642C362.885 346.708 359.181 341.597 355.85 336.41C353.724 333.1 350.474 330.804 346.687 329.735C346.708 332.679 344.037 335.097 341.171 335.774C338.305 336.449 335.308 335.788 332.457 335.051C329.606 334.315 326.682 333.495 323.76 333.863C320.838 334.23 317.343 336.07 316.74 338.953C320.717 344.769 320.292 353.398 316.311 359.211C313.896 358.686 311.532 357.027 309.923 355.152C305.178 355.162 300.544 357.978 298.349 362.184C296.154 366.391 296.495 371.803 299.201 375.702C301.907 379.6 306.858 381.811 311.567 381.224C310.479 383.301 309.229 384.829 308.14 386.905L333.77 411.838L349.325 388.674Z"
          fill="#C14F4F"
        />
        <path
          d="M315.722 338.984C316.794 335.697 320.643 334.037 324.097 334.188C327.55 334.339 330.773 335.846 334.029 337.008C337.284 338.171 340.913 338.995 344.151 337.782"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M355.68 349.088C356.602 349.088 357.35 348.34 357.35 347.418C357.35 346.495 356.602 345.748 355.68 345.748C354.757 345.748 354.009 346.495 354.009 347.418C354.009 348.34 354.757 349.088 355.68 349.088Z"
          fill="#060305"
        />
        <path
          d="M335.106 358.782C336.028 358.782 336.776 358.034 336.776 357.112C336.776 356.189 336.028 355.441 335.106 355.441C334.183 355.441 333.436 356.189 333.436 357.112C333.436 358.034 334.183 358.782 335.106 358.782Z"
          fill="#060305"
        />
        <path
          d="M327.972 351.889C328.673 349.718 330.338 347.876 332.429 346.96C334.52 346.044 337.002 346.066 339.075 347.023"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M346.804 351.812C348.768 353.561 350.732 355.309 352.697 357.058C351.605 357.659 350.493 358.306 349.402 358.908"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M342.209 362.677C342.394 363.963 343.457 365.074 344.733 365.316C346.009 365.558 347.406 364.913 348.047 363.784"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M348.618 341.373C348.782 339.958 349.634 338.639 350.856 337.909C352.079 337.18 353.645 337.055 354.967 337.581"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M303.054 365.994C306.493 365.618 309.933 365.244 313.373 364.868"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M310.422 381.452C313.201 381.821 316.129 380.851 318.137 378.895"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M333.523 383.362C340.022 384.484 346.852 383.621 352.868 380.917"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M478.394 128.653C486.932 128.653 493.854 121.731 493.854 113.193C493.854 104.655 486.932 97.7336 478.394 97.7336C469.856 97.7336 462.935 104.655 462.935 113.193C462.935 121.731 469.856 128.653 478.394 128.653Z"
          fill="#FFB928"
        />
        <path
          d="M478.394 101.037C471.681 101.037 466.238 106.48 466.238 113.193"
          stroke="white"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M435.003 200.513C443.541 200.513 450.462 193.592 450.462 185.054C450.462 176.516 443.541 169.594 435.003 169.594C426.465 169.594 419.543 176.516 419.543 185.054C419.543 193.592 426.465 200.513 435.003 200.513Z"
          fill="#FFB928"
        />
        <path
          d="M435.003 172.897C428.289 172.897 422.846 178.34 422.846 185.054"
          stroke="white"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M619.409 150.953C627.947 150.953 634.869 144.031 634.869 135.493C634.869 126.955 627.947 120.033 619.409 120.033C610.871 120.033 603.95 126.955 603.95 135.493C603.95 144.031 610.871 150.953 619.409 150.953Z"
          fill="#FFB928"
        />
        <path
          d="M619.409 123.337C612.696 123.337 607.253 128.779 607.253 135.493"
          stroke="white"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M546.498 173.078H513.649V154.888C513.649 145.831 521.017 138.464 530.074 138.464C539.13 138.464 546.498 145.831 546.498 154.888V173.078ZM521.11 165.617H539.038V154.886C539.038 149.943 535.017 145.923 530.075 145.923C525.133 145.923 521.112 149.945 521.112 154.886V165.617H521.11Z"
          fill="#0E9AB3"
        />
        <path
          d="M530.074 200.11C518.062 200.11 508.325 190.373 508.325 178.361V160.08H551.822V178.36C551.822 190.371 542.085 200.11 530.074 200.11Z"
          fill="#36C2DB"
        />
        <path
          d="M534.89 173.712C534.89 170.618 531.972 168.205 528.739 169.074C527.187 169.491 525.91 170.736 525.463 172.28C524.73 174.814 526.024 177.15 528.087 178.09L526.415 184.834C525.827 187.212 527.625 189.51 530.074 189.51C532.522 189.51 534.321 187.212 533.732 184.834L532.06 178.09C533.726 177.333 534.89 175.662 534.89 173.712Z"
          fill="#060305"
        />
        <path
          d="M531.434 195.511C538.768 195.267 545.572 189.569 547.099 182.392"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M559.441 324.422C559.441 333.811 546.329 341.421 530.156 341.421C513.982 341.421 500.871 333.81 500.871 324.422V314.751H559.441V324.422Z"
          fill="#FFB928"
        />
        <path
          d="M530.156 331.751C546.329 331.751 559.441 324.14 559.441 314.752C559.441 305.364 546.329 297.753 530.156 297.753C513.982 297.753 500.871 305.364 500.871 314.752C500.871 324.14 513.982 331.751 530.156 331.751Z"
          fill="#FFB928"
        />
        <path
          d="M559.441 314.752C559.441 324.141 546.329 331.751 530.156 331.751C513.982 331.751 500.871 324.14 500.871 314.752"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M510.009 327.205C509.933 329.907 509.856 332.61 509.781 335.312"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M517.167 330.402C516.999 332.695 516.83 334.988 516.662 337.279"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M521.06 331.626C520.981 334.165 520.9 336.702 520.821 339.241"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M534.631 331.623C534.694 334.407 534.756 337.192 534.819 339.976"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M545.632 329.907C545.564 332.281 545.497 334.656 545.429 337.032"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M554.672 324.993C554.672 327.203 554.672 329.414 554.672 331.626"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M503.822 323.027C503.822 325.484 503.822 327.94 503.822 330.397"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M559.441 306.633C559.441 316.022 546.329 323.632 530.156 323.632C513.982 323.632 500.871 316.02 500.871 306.633V296.961H559.441V306.633Z"
          fill="#FFB928"
        />
        <path
          d="M530.156 313.961C546.329 313.961 559.441 306.351 559.441 296.962C559.441 287.574 546.329 279.963 530.156 279.963C513.982 279.963 500.871 287.574 500.871 296.962C500.871 306.351 513.982 313.961 530.156 313.961Z"
          fill="#FFB928"
        />
        <path
          d="M559.441 296.962C559.441 306.351 546.329 313.961 530.156 313.961C513.982 313.961 500.871 306.35 500.871 296.962"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M510.009 309.415C509.933 312.117 509.856 314.82 509.781 317.522"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M517.167 312.614C516.999 314.906 516.83 317.199 516.662 319.492"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M521.06 313.837C520.981 316.376 520.9 318.914 520.821 321.453"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M534.631 313.833C534.694 316.617 534.756 319.403 534.819 322.187"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M545.632 312.117C545.564 314.492 545.497 316.866 545.429 319.243"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M554.672 307.203C554.672 309.414 554.672 311.626 554.672 313.836"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M503.822 305.238C503.822 307.695 503.822 310.15 503.822 312.607"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M559.441 288.844C559.441 298.233 546.329 305.843 530.156 305.843C513.982 305.843 500.871 298.232 500.871 288.844V279.172H559.441V288.844Z"
          fill="#FFB928"
        />
        <path
          d="M530.156 296.172C546.329 296.172 559.441 288.561 559.441 279.172C559.441 269.784 546.329 262.173 530.156 262.173C513.982 262.173 500.871 269.784 500.871 279.172C500.871 288.561 513.982 296.172 530.156 296.172Z"
          fill="#FFB928"
        />
        <path
          d="M559.441 279.172C559.441 288.561 546.329 296.171 530.156 296.171C513.982 296.171 500.871 288.56 500.871 279.172"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M510.009 291.627C509.933 294.329 509.856 297.032 509.781 299.734"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M517.167 294.824C516.999 297.117 516.83 299.409 516.662 301.702"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M521.06 296.048C520.981 298.587 520.9 301.124 520.821 303.663"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M534.631 296.043C534.694 298.827 534.756 301.613 534.819 304.397"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M545.632 294.329C545.564 296.703 545.497 299.078 545.429 301.453"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M554.672 289.413C554.672 291.624 554.672 293.834 554.672 296.046"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M503.822 287.449C503.822 289.906 503.822 292.362 503.822 294.818"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M559.441 271.054C559.441 280.443 546.329 288.053 530.156 288.053C513.982 288.053 500.871 280.442 500.871 271.054V261.383H559.441V271.054Z"
          fill="#FFB928"
        />
        <path
          d="M530.156 278.382C546.329 278.382 559.441 270.771 559.441 261.383C559.441 251.994 546.329 244.384 530.156 244.384C513.982 244.384 500.871 251.994 500.871 261.383C500.871 270.771 513.982 278.382 530.156 278.382Z"
          fill="#FFB928"
        />
        <path
          d="M559.441 261.383C559.441 270.772 546.329 278.382 530.156 278.382C513.982 278.382 500.871 270.77 500.871 261.383"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M510.009 273.837C509.933 276.539 509.856 279.242 509.781 281.944"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M517.167 277.034C516.999 279.327 516.83 281.619 516.662 283.911"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M521.06 278.258C520.981 280.797 520.9 283.334 520.821 285.873"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M534.631 278.255C534.694 281.039 534.756 283.825 534.819 286.609"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M545.632 276.539C545.564 278.914 545.497 281.288 545.429 283.663"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M554.672 271.625C554.672 273.835 554.672 276.047 554.672 278.258"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M503.822 269.659C503.822 272.116 503.822 274.572 503.822 277.029"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M559.441 239.345C559.441 248.734 546.329 256.344 530.156 256.344C513.982 256.344 500.871 248.732 500.871 239.345V229.673H559.441V239.345Z"
          fill="#FFB928"
        />
        <path
          d="M530.156 246.673C546.329 246.673 559.441 239.063 559.441 229.674C559.441 220.286 546.329 212.675 530.156 212.675C513.982 212.675 500.871 220.286 500.871 229.674C500.871 239.063 513.982 246.673 530.156 246.673Z"
          fill="#FFB928"
        />
        <path
          d="M559.441 229.674C559.441 239.063 546.329 246.673 530.156 246.673C513.982 246.673 500.871 239.062 500.871 229.674"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M510.009 242.127C509.933 244.829 509.856 247.532 509.781 250.234"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M517.167 245.326C516.999 247.619 516.83 249.911 516.662 252.203"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M521.06 246.55C520.981 249.089 520.9 251.626 520.821 254.165"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M534.631 246.545C534.694 249.329 534.756 252.115 534.819 254.899"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M545.632 244.829C545.564 247.204 545.497 249.579 545.429 251.953"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M554.672 239.915C554.672 242.126 554.672 244.336 554.672 246.548"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M503.822 237.95C503.822 240.407 503.822 242.862 503.822 245.319"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M764.974 408.112H898.054C904.949 408.112 910.932 403.35 912.477 396.631L970.353 145.159C971.771 139 967.092 133.123 960.772 133.123H827.692C820.797 133.123 814.816 137.885 813.269 144.604L755.392 396.075C753.975 402.235 758.654 408.112 764.974 408.112Z"
          fill="#36C2DB"
        />
        <path
          d="M887.57 140.987C887.57 139.03 885.983 137.443 884.026 137.443C882.069 137.443 880.482 139.03 880.482 140.987C880.482 142.945 882.069 144.531 884.026 144.531C885.983 144.531 887.57 142.945 887.57 140.987Z"
          stroke="white"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M962.493 136.85L901.238 403.999"
          stroke="white"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M902.559 138.663C898.707 146.097 890.968 150.992 882.286 150.992C875.305 150.992 869.918 145.295 869.904 138.663H821.422L764.08 387.817H899.023L956.367 138.663H902.559Z"
          fill="white"
        />
        <path
          d="M675.822 287.075C673.671 274.319 666.671 262.559 656.483 254.586C646.97 247.141 637.702 239.745 628.189 232.301C625.91 234.162 625.232 237.816 626.329 240.547C629.112 247.465 631.893 254.384 634.674 261.302C628.836 259.238 622.88 256.777 617.042 254.712C603.339 249.868 574.441 243.111 574.441 243.111C573.571 244.502 572.986 247.325 578.006 250.479C585.5 255.191 601.341 263.827 601.341 263.827C601.341 263.827 577.173 257.144 565.077 253.69C563.757 256.128 564.4 259.542 569.53 262.761C580.152 269.424 603.154 278.706 603.154 278.706C603.154 278.706 575.975 274.889 562.431 272.476C561.163 274.661 563.511 278.727 568.18 280.702C577.889 284.809 600.428 292.722 600.428 292.722C600.428 292.722 581.287 289.832 571.693 289.437C570.599 291.263 571.619 294.079 576.409 295.922C583.595 298.686 601.588 304.029 601.588 304.029C601.588 304.029 632.857 321.08 649.069 329.102L686.786 297.998C683.327 294.601 679.283 290.471 675.822 287.075Z"
          fill="#FF9A7D"
        />
        <path
          d="M635.886 264.577C635.213 274.448 638.178 284.526 644.09 292.461"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M622.589 272.661C620.058 280.876 617.527 289.092 614.997 297.309"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M597.36 291.54C600.634 291.989 603.908 292.438 607.181 292.886"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M599.926 277.76C603.861 278.831 607.797 279.903 611.732 280.976"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M597.416 262.67C603.606 264.736 609.795 266.8 615.985 268.866"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M785.287 387.817C781.821 378.527 778.463 367.766 774.997 358.476C769.264 368.59 763.04 378.6 754.655 386.654C746.268 394.707 735.434 400.719 723.823 401.318C712.211 401.916 700.623 396.794 692.929 388.077C675.631 368.48 657.589 349.796 640.292 330.199C653.764 314.733 668.501 298.931 681.973 283.465C693.063 292.448 705.432 301.318 716.524 310.3C726.95 286.851 737.461 262.59 757.668 246.771C767.297 239.233 776.924 231.697 786.552 224.159C789.527 227.6 794.586 228.996 799.09 228.366C803.595 227.734 807.691 225.203 810.798 221.881C813.905 218.558 816.098 214.479 817.828 210.273C838.109 212.975 858.015 214.463 878.296 217.165C898.319 219.832 917.02 226.638 933.396 238.465L899.023 387.817H785.287Z"
          fill="#21B787"
        />
        <path
          d="M716.514 309.811C724.136 315.7 731.758 321.59 739.38 327.479"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M777.893 230.738C779.558 239.001 787.474 245.201 795.858 246.09C804.241 246.98 812.69 243.157 818.62 237.165C824.548 231.172 828.177 223.221 830.29 215.061"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M890.766 220.157C885.331 221.796 881.654 227.127 880.398 232.662C879.144 238.198 879.891 243.969 880.717 249.584C885.23 280.289 896.043 309.315 909.044 337.493"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M774.961 360.055C765.759 332.553 756.556 305.051 747.352 277.549C745.77 272.819 743.471 268.795 741.596 264.172"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M656.232 344.101C671.25 329.315 686.27 314.531 701.29 299.745"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M647.507 327.345C651.338 331.829 655.168 336.313 659.001 340.796"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M653.153 319.456C657.584 324.193 662.014 328.93 666.445 333.667"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M658.305 314.286C663.207 318.555 668.111 322.824 673.014 327.094"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M672.169 299.465C676.692 304.543 681.216 309.621 685.738 314.698"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M676.387 294.589C680.884 299.702 685.383 304.813 689.881 309.926"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M682.383 289.217C687.296 293.804 692.207 298.391 697.119 302.977"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M798.443 133.209C801.892 135.396 803.319 140.275 801.592 143.976"
          stroke="#E73A3C"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M824.031 162.846C825.766 162.265 827.501 161.686 829.237 161.106"
          stroke="#E73A3C"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M828.724 173.667C830.318 171.902 830.729 169.163 829.724 167.008C828.719 164.853 826.453 163.234 824.076 163.321C825.616 160.31 825.36 156.461 823.435 153.68C821.51 150.898 818.549 149.544 815.189 149.923C815.294 146.824 813.588 143.73 810.911 142.166C808.234 140.603 804.588 140.959 801.942 142.574C801.264 138.851 798.219 135.668 794.528 134.83C790.838 133.992 786.74 135.816 784.52 138.881C781.612 134.78 775.664 133.175 771.087 135.258C766.512 137.34 763.349 143.153 764.53 148.041C762.332 147.851 760.07 148.965 758.879 150.823C757.689 152.681 757.625 155.202 758.718 157.119C759.811 159.036 761.991 160.307 764.195 160.23C762.834 161.723 762.493 164.061 763.373 165.879C764.253 167.697 766.297 168.882 768.313 168.741L825.243 191.017C825.674 189.215 825.854 187.675 826.287 185.872C829.082 185.505 831.513 183.195 832.022 180.423C832.529 177.651 831.208 175.004 828.724 173.667Z"
          fill="#E73A3C"
        />
        <path
          d="M823.051 212.784C820.925 208.967 819.312 205.317 818.069 201.128C823.4 200.952 828.403 197.06 829.884 191.934C831.365 186.81 829.212 180.848 824.796 177.854C820.381 174.86 813.863 175.666 809.651 178.937C808.313 174.508 806.798 170.184 805.46 165.755C803.171 166.45 800.632 166.284 798.454 165.297C796.275 164.31 794.542 162.292 793.557 160.112C792.187 161.497 790.131 162.171 788.207 161.864C786.284 161.558 784.8 160.552 783.927 158.81C782.982 160.343 781.341 161.426 779.562 161.696C777.781 161.965 775.894 161.415 774.538 160.23C770.18 161.97 766.237 165.699 765.078 170.246C763.085 178.063 761.867 186.421 762.411 194.471C762.72 199.045 764.329 203.239 767.387 206.653C770.445 210.068 774.734 212.358 779.272 213.001C781.285 218.531 783.292 223.938 785.305 229.468C786.994 234.106 791.925 237.159 796.839 237.628C801.753 238.097 806.692 235.945 810.271 232.545C816.265 226.844 819.314 220.164 823.051 212.784Z"
          fill="#FF9A7D"
        />
        <path
          d="M778.466 213.435C785.233 215.611 792.866 214.936 799.146 211.606"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M819.055 201.744C817.417 201.424 815.777 201.104 814.139 200.783"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M812.846 187.92C816.121 186.937 819.397 185.954 822.672 184.972"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M770.583 183.784C771.506 183.784 772.254 183.036 772.254 182.114C772.254 181.191 771.506 180.443 770.583 180.443C769.661 180.443 768.913 181.191 768.913 182.114C768.913 183.036 769.661 183.784 770.583 183.784Z"
          fill="#060305"
        />
        <path
          d="M796.704 186.11C797.627 186.11 798.375 185.362 798.375 184.44C798.375 183.517 797.627 182.769 796.704 182.769C795.782 182.769 795.034 183.517 795.034 184.44C795.034 185.362 795.782 186.11 796.704 186.11Z"
          fill="#060305"
        />
        <path
          d="M781.757 182.032C780.892 184.956 780.028 187.881 779.162 190.807C780.455 190.826 781.749 190.847 783.04 190.868"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M784.952 195.811C785.639 197.029 787.162 197.71 788.528 197.41C789.893 197.111 790.991 195.854 791.106 194.461"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M766.087 171.251C766.928 169.346 768.985 168.049 771.066 168.11C773.147 168.171 775.124 169.589 775.852 171.539"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M790.212 173.487C791.54 171.302 794.297 170.09 796.804 170.589C799.311 171.088 801.397 173.263 801.786 175.79"
          stroke="#060305"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M783.725 158.447C783.263 161.021 785.351 163.76 787.956 163.997"
          stroke="#E73A3C"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
