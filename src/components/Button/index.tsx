import cn from "classnames";

const variantButton = {
  colors: {
    black: "bg-black text-white hover:bg-slate-800",
    ghost: "bg-transparent hover:bg-slate-100",
    white: "bg-white text-black hover:bg-gray-100",
  },
};

type TVariant = "black" | "ghost" | "white";
type TButton = React.ComponentPropsWithoutRef<"button"> & {
  variant?: TVariant;
};
export default function Button({
  children,
  className,
  variant = "black",
}: TButton) {
  return (
    <button
      type="button"
      className={cn(
        " focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2",
        variantButton.colors[variant],
        className
      )}
    >
      {children}
    </button>
  );
}
