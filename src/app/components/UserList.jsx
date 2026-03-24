import { db } from "@/db";
import Link from "next/link";

// 1. 

export async function UserList() {
    const res = await db.query(`
        SELECT * FROM Users`)
    const users = res.rows
    console.log(users)

    return (
        <div>
            <ul>
                {users.map((user) => (
                    <li
                    key={user.clerk_id}
                    >
                        <p>{user.f_name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}