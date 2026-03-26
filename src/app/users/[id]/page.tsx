
import { UsersGetParticular } from "@/app/components/DB/NewUserInsert";

export default function page() {

    // get the bio of the user we are looking at
    let User = UsersGetParticular(8) 
    console.log(User);


    return (
        <div>
            {/* <ul>
                {User.map((attribute)=> (
                    <li key={attribute}>
                        <p>{attribute}</p>
                    </li>
                ))}
            </ul> */}
        </div>
    )
}
