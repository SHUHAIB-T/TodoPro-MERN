import UserInfo from "../UserInfo/UserInfo";

export default function SideBar() {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-between dark:bg-gray-900 dark:border-gray-800 border-gray-300 border-r-2 bg-gray-200 h-full">
        <button>Add new Todo</button>
        <UserInfo />
      </div>
    </>
  );
}
