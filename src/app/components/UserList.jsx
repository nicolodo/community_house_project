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
      <p>Hi how are you?</p>
      <ul>
        {users.map((user) => (
          <li key={user.clerk_id}>
            <p>{user.m_name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
