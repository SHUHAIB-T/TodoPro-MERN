import Logo from "../../assets/Logo.svg";
import ThemeToggleButton from "../ThemeToggleButton/ThemeToggleButton";

export default function NavBar() {
  return (
    <div className="w-full bg-slate-100 z-50 px-3 dark:bg-black h-16 flex justify-between items-center">
      <div className="flex  items-center gap-2">
        <img src={Logo} className="max-w-fit" alt="" />
        <h1 className="font-black text-gray-900 dark:text-gray-100 text-2xl">
          TodoPro
        </h1>
      </div>
      <div className="">
        <ThemeToggleButton />
      </div>
    </div>
  );
}
