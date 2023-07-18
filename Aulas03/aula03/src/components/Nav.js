import Login from "./auth/Login";
import { getServerSession } from "next-auth";
import { AuthOptions } from "../../pages/api/auth/[...nextauth]";

export default async function Nav(){
    const session = await getServerSession(AuthOptions);
    
    return(
        <Login session={session}/>
    )
}