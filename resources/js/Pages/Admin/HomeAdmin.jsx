import NavigationBarAdmin from "@/Layouts/Authenticated/Admin/NavigationBarAdmin";
import { Head } from "@inertiajs/react";

export default function HomeAdmin (){
    return (
        <>
        <Head title="Home Admin" />
        <NavigationBarAdmin />
        <div className="container">
            <h1>Home Admin</h1>
        </div>
        </>
    )
}