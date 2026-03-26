
import { auth, currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { db } from "@/db"

export default function OnboardingPage() {

    async function handleSubmitNewUser(formData) {
        "use server"

        // we need to submit the username, bio, and clerk id to our database
        const {
            first_name, middle_name, last_name, age, bio,
            house_number, house_name,
            Street_name, Post_code
        } = Object.fromEntries(formData)

        // 2. Get Clerk User
        const { userId} = await auth() // this gets the clerk id
        const ClerkId = userId
        const currentUserObj = await currentUser(); // returns usr obj from clerk
        console.log(ClerkId)

        try {
            // inserts values from form into user table
            const UserRes = await db.query(
                `insert into USERS (CLERK_ID, F_NAME, M_NAME, L_NAME, AGE, BIO) 
                values ($1, $2, $3, $4, $5, $6) RETURNING ID`, 
                [ClerkId, first_name, middle_name, last_name, age, bio]
            )
            const UserId = UserRes.rows[0].id; // RETURNING SQL term
            
            const HouseRes = await db.query(
                `INSERT INTO HOUSE (HOUSE_NUMBER, HOUSE_NAME)
                VALUES ($1, $2) RETURNING ID`,
                [house_number,house_name]
            )
            const HouseId = HouseRes.rows[0].id;

            const StreetRes = await db.query(
                `INSERT INTO STREET (STREET_NAME, POSTCODE)
                VALUES ($1, $2) RETURNING ID`,
                [Street_name, Post_code]
            )
            const StreetId = StreetRes.rows[0].id;

            // Get new created ID values from the db
            await db.query(`
                INSERT INTO HOUSE_MEMBERS (USER_ID, HOUSE_ID)
                VALUES ($1, $2) `,
                [UserId, HouseId]
            );
            await db.query(`
                INSERT INTO STREET_MEMBERS (STREET_ID, HOUSE_ID)
                VALUES ($1, $2) `,
                [StreetId, HouseId]
            );
        
        } catch (error) {
            console.error("Database Transaction Failed:", error);
            // In a real app, you'd show an error message to the user here
            return;
        }

        redirect('/dashboard');
    }

    return (
        <div>
            <h2>Sign up to our website: please make a profile</h2>

            <form action={handleSubmitNewUser}>
                <div className="flex flex-col gap-2 border">
                    <input name="first_name" placeholder="first_name" />
                    <input name="middle_name" placeholder="middle name:" />
                    <input name="last_name" placeholder="last name: " />
                    <input name="age" type="number" placeholder="age" />
                    <textarea name="bio" placeholder="bio" />
                {/* </div> */}
                {/* <div className="border"> */}
                    <input name="house_number" placeholder="house_number" />
                    <input name="house_name" placeholder="house_name" />
                {/* </div> */}
                {/* <div className="border"> */}
                    <input name="Street_name" placeholder="Street_name" />
                    <input name="Post_code" placeholder="Post_code" />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2">Submit</button>
            </form>
        </div>
    )
}

