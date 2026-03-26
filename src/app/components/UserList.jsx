import Link from "next/link";
import { db } from "@/db";

// 1.

export async function UserList() {
  const res = await db.query(`
        SELECT * FROM Users`);
  const users = res.rows;
  console.log(users);

  return (
    <div>
      <ul>
        <p> Welcome </p>
        {users.map((user) => (
          <li key={user.clerk_id}>
            <p>{user.f_name}</p>
            <p>{user.l_name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
