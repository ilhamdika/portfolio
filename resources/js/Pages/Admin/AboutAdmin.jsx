import NavigationBarAdmin from "@/Layouts/Authenticated/Admin/NavigationBarAdmin";
import { Head } from "@inertiajs/react";

export default function AboutAdmin() {
    return (
        <>
        <Head title="About" />
        
            <NavigationBarAdmin />
            <div className="container">
                <h1>About</h1>
            </div>
        </>
    )
}