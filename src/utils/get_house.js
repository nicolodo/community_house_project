//unfinished
import { db } from "@/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function getHouse() {
  //   const { userId } = await auth();
  const houseNumber = (
    await db.query(`
    SELECT HOUSE_NUMBER FROM HOUSE`)
  ).rows;

  // if there is no userId, we'll the ask the user to sign in (as they're not logged in via clerk)
  if (!houseNumber) {
  }
  //redirect("/sign-in");

  // check database to see if it has that user in it
  const result = await db.query(`select * from USERS where CLERK_ID = $1`, [
    userId,
  ]);
  const userDetails = result.rows;
  console.log(userDetails);

  // if nothing came back for that user
  if (userDetails.length === 0) redirect("/user-onboarding");

  return userDetails[0];
}
