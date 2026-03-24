import Image from "next/image";
import { UserList } from "./components/UserList";
// import { Reactions } from "./components/Reactions";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <UserList />
      {/* <Reactions post_id="1" /> */}
    </div>
  );
}
