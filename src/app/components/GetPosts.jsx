import pg from "pg";

export default async function GetPosts(){

    const db = new pg.Pool({
    connectionString: process.env.local.NEXT_POSTGRES,
    });
const post =(await db.query('SELECT * from post')).rows;
    return(
        <div>
            <h1>Posts</h1>
            <ul>
                {post.map((post) => (
                    <li key={post.id}>
                        <p>{post.sender},{post.msg}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
