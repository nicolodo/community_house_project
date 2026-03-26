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
      <p>Welcome </p>
      <ul>
        {users.map((user) => (
          <li key={user.clerk_id}>
            <p>{user.f_name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
