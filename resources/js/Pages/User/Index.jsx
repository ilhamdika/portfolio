import Content from "@/Layouts/Authenticated/Content";
import HeroContent from "@/Layouts/Authenticated/HeroContent";
import NavigationBarTop from "@/Layouts/Authenticated/NavigationBarTop";
export default function Index (){
    return (
        <>
        <NavigationBarTop />
        <HeroContent />
        <Content />
        </>
    )
}
