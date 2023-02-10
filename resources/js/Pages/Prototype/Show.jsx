import DetailPortfolio from "@/Layouts/Authenticated/DetailPortfolio";
import NavigationBarTop from "@/Layouts/Authenticated/NavigationBarTop";

export default function Show({name}) {
    return (
        <>
       <NavigationBarTop />
       <DetailPortfolio />
        </>
    )
}