import CardPortfolio from "@/Layouts/Authenticated/CardPortfolio";
import NavigationBarTop from "@/Layouts/Authenticated/NavigationBarTop";
import { Head } from "@inertiajs/react";

export default function Portfolio({auth, portfolios}) {
    return (
        <>
        <Head title="Portfolio" />
        <NavigationBarTop />
       
            <center>
            <h1>This is my Portfolio</h1>
            </center>
        {portfolios.map((portfolio)=> (
            <CardPortfolio 
                key={portfolio.id}
                name={portfolio.title}
                deskripsi={portfolio.description}
                thumbnail={portfolio.thumbnail}
            />
        ))}
        
</>
    )
}