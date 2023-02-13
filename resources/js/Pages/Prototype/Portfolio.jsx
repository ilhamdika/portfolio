import CardPortfolio from "@/Layouts/Authenticated/CardPortfolio";
import NavigationBarTop from "@/Layouts/Authenticated/NavigationBarTop";


export default function Portfolio() {
    return (
        <>
        <NavigationBarTop />
       
            <center>
            <h1>This is my Portfolio</h1>
            </center>
        {[1,2,3,4,5,6].map(i=> (
            <CardPortfolio key={i}
            name="Something Item"
            deskripsi="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sollicitudin, elit in aliquet tincidunt, augue elit fermentum augue. Donec."
            thumbnail="https://www.impdigital.co/wp-content/uploads/2021/03/responsive-website-mockup-1024x671.png"
            />
        ))}
        
</>
    )
}