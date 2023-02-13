import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";

export default function Index (){
    return (
        <>
        <h1>Admin</h1>
        <Link>
            <PrimaryButton>
                Dashboard
            </PrimaryButton>            
        </Link>
        </>
    )
}