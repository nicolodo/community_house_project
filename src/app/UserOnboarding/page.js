
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
        const {ClerkId} = await auth() // this gets the clerk id
        const currentUserObj = await currentUser(); // returns usr obj from clerk
        console.log(ClerkId)

        // inserts values from form into user table
        const insertIntoUsers = await db.query(
            `insert into USERS (ClerkId, F_NAME, M_NAME, L_NAME, AGE, BIO) 
            values ($1, $2, $3, $4, $5, $6)`, [
                ClerkId, first_name, middle_name, last_name, age, bio
            ])
        
        const insertIntoHouse = await db.query(
            `INSERT INTO HOUSE (HOUSE_NUMBER, HOUSE_NAME)
            VALUES ($1, $2)`,[
                house_number,house_name
            ]
        )

        const insertIntoStreet = await db.query(
            `INSERT INTO STREET (STREET_NAME, POSTCODE)
            VALUES ($1, $2)`,[
                Street_name, Post_code
            ]
        )

        // Get new created ID values from the db
        const UserId = await db.query(`
            SELECT ID FROM USERS WHERE CLERK_ID = $1 `,[ClerkId]);
        // const HouseId = await db.query(`
        //     SELECT ID FROM HOUSE WHERE CLERK_ID = $1 `,[ClerkId]);
        // const StreetId = await db.query(`
        //     SELECT ID FROM USERS WHERE CLERK_ID = $1 `,[ClerkId]);
        
        // Link up my tables
        // const insertIntoHouseMembers = await db.query(
        //     `INSERT INTO HOUSE_MEMBERS (HOUSE_ID, USER_ID)
        //     VALUES ($1, $2)`,[
                
        //     ]
        // )

        

        // redirect(`/users/${userId}`)
    }

    return (
        <div>
            <h2>Sign up to our website: please make a profile</h2>

            <form action={handleSubmitNewUser}>
                <div className="flex border">
                    <input name="first_name" placeholder="first_name" />
                    <input name="middle_name" placeholder="middle name:" />
                    <input name="last_name " placeholder="last name: " />
                    <input name="age" placeholder="age" />
                    <input name="bio" placeholder="bio" />
                </div>
                <div className="border">
                    <input name="house_number" placeholder="house_number" />
                    <input name="house_name" placeholder="house_name" />
                </div>
                <div className="border">
                    <input name="Street_name" placeholder="Street_name" />
                    <input name="Post_code" placeholder="Post_code" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

