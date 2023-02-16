import Content from "@/Layouts/Authenticated/Content";
import HeroContent from "@/Layouts/Authenticated/HeroContent";
import NavigationBarTop from "@/Layouts/Authenticated/NavigationBarTop";
import { Head } from "@inertiajs/react";

export default function Index (){
    return (
        <>
        <Head 
            title="Home"
            
         />
        <NavigationBarTop />
        <HeroContent />
        <Content />
        </>
    )
}
