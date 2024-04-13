import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <div className="pt-16 h-screen grid grid-cols-12">
        <div className="col-span-3">
          <SideBar />
        </div>
        <div className="col-span-9 bg-white dark:bg-black"></div>
      </div>
    </>
  );
}
