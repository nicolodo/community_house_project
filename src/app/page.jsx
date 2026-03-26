// import { auth } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";
// import { UserList } from "./components/UserList";
import { getUser } from "@/utils/get_user";

export default async function Home() {
  // const { userId } = await auth();
  // console.log(userId);

  const user = await getUser();
  console.log(user);

  // if (!userId) {
  //   redirect("/sign-up");
  // }
  // redirect("/dashboard");

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* <UserList /> */}
      {/* <Reactions post_id="1" /> */}
    </div>
  );
}
