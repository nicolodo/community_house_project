

import pg from "pg";
import { revalidatePath } from "next/cache";


const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

export default async function PostPage() {
    
    async function handlePost(formData) {
        "use server";
        
        const sender = formData.get("sender");
        const Msg = formData.get("Msg");
        const reply_to = formData.get("reply_to");
        const done = formData.get("done") === "on";

        await db.query(
            'INSERT INTO post (sender, Msg, reply_to, done) VALUES ($1, $2, $3, $4)',
            [sender, Msg, reply_to, done]
        );


        revalidatePath("/");
    }


    const { rows: post } = await db.query('SELECT * FROM post ORDER BY created_at DESC');

    return (
        <div>

            <form action={handlePost} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '300px' }}>
                <label htmlFor="sender">Sender</label>
                <input id="sender" name="sender" type="text" required />

                <label htmlFor="Msg">msg</label>
                <input id="Msg" name="Msg" type="text" required />

                <label htmlFor="reply_to">Reply</label>
                <input id="reply_to" name="reply_to" type="text" />

                <label htmlFor="done">Done</label>
                <input id="done" name="done" type="checkbox" />

                <button type="submit">Post Message</button>
            </form>

            <hr />

            <ul>
                {post.map((post) => (
                    <div key={post.id} style={{ borderBottom: '1px solid #ccc', margin: '10px 0' }}>
                        <h3>{post.sender}</h3>
                        <p>{post.msg}</p>

                        <small>{post.created_at ? new Date(post.created_at).toLocaleDateString() : "No date"}</small>
                    </div>
                ))}
            </ul>
        </div>
    );
}