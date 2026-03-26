
import { db } from "../../../db"
// import { db } from "@/db"

// USER READ
export async function UsersGetLastUser(){
    let UsersIndb = await db.query(`SELECT * FROM USERS`);
    // UsersIndb = UsersIndb.rows;
    console.log(UsersIndb.rows)
    return UsersIndb.rows
}

export async function UsersGetParticular(ID){
    let UsersIndb = await db.query(
        `SELECT * FROM USERS WHERE ID = $1`,[ID]
    )
    console.log(UsersIndb.rows)
    return UsersIndb.rows
}

export async function UsersGet(){
    let UsersIndb = await db.query('SELECT * FROM USERS')
    console.log(UsersIndb.rows)
    return (
        <div>
            
        </div>
    )
}

// USER CREATE
// add a new user
export async function UsersInsert(CLERK_ID){
    const addNew = await db.query(
        `INSERT INTO USERS
        (CLERK_ID, F_NAME, L_NAME, M_NAME, AGE, BIO)
        VALUES
        ($1, 'JIM','JAM','JEB','55','Nothing better than a steak dinner')`,
        [CLERK_ID]
    ).rows
    console.log(addNew)
}

// USER UPDATE
export async function UsersUpdateBio(ID, BIO){
    const res = await db.query(
        `UPDATE USERS
        SET BIO = $2
        WHERE ID = $1`,
        [ID, BIO]
    )
}

export async function UsersDeleteAccount(ID){
    const res = await db.query(
        `DELETE USERS WHERE ID = $1`, [ID]
    )
}