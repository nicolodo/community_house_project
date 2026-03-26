
import { UsersGet, UsersGetParticular } from "../components/DB/NewUserInsert"

export default function Page() {
    let user = UsersGetParticular(15)
    console.log(user)
    // UsersInsert("0002")
    // UsersGetLastUser()
    // UsersUpdateBio("2","I'm so happy to be eating cupcakes")

    return (
        <div>

        </div>
    )
}
