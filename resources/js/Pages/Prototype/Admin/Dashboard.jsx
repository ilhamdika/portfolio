import PrimaryButton from "@/Components/PrimaryButton";
import Index from "@/Layouts/Authenticated/Admin/Index";
import { Link } from "@inertiajs/react";

export default function Dasboard(){
    return (
        <>
        <Index />
        <Link method="post" href={route('logout')} as="button">
        Log Out
    </Link>
        </>
    )
}