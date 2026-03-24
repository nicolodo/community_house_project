import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { UserList } from "./components/UserList";

export default async function Home() {
  const { userId } = await auth();
  console.log(userId);

  if (!userId) {
    redirect("/sign-in");
  }
  redirect("/dashboard");

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <UserList />
      {/* <Reactions post_id="1" /> */}
    </div>
  );
}
