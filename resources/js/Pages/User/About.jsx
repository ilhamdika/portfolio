import AboutMe from "@/Layouts/Authenticated/AboutMe";
import NavigationBarTop from "@/Layouts/Authenticated/NavigationBarTop";
import { Head } from "@inertiajs/react";

export default function About({bioProfiles}){
    return (
        <>
        <Head title="About" />
        <NavigationBarTop />
        {bioProfiles.map((bioProfile)=> (
        <AboutMe 
            key={bioProfile.id}
            name={bioProfile.name}
            from={bioProfile.from}
            description={bioProfile.description}
            hoby={bioProfile.hoby}
            instagram_url={bioProfile.instagram_url}
        
        />
        ))}
        </>
    )
}