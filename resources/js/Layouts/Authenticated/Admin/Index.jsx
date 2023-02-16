import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";
import NavigationBarAdmin from "./NavigationBarAdmin";

export default function Index (){
    return (
        <>
        <NavigationBarAdmin />
        <h1>Admin</h1>
        <Link>
            <PrimaryButton>
                Dashboard
            </PrimaryButton>            
        </Link>
        </>
    )
}