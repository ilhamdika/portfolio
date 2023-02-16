import AboutMe from "@/Layouts/Authenticated/AboutMe";
import NavigationBarTop from "@/Layouts/Authenticated/NavigationBarTop";

export default function About({bioProfiles}){
    return (
        <>
        <NavigationBarTop />
        {bioProfiles.map((bioProfile)=> (
        <AboutMe 
            key={bioProfile.id}
            name={bioProfile.name}
            from={bioProfile.from}
            description={bioProfile.description}
            hoby={bioProfile.hoby}
        
        />
        ))}
        </>
    )
}