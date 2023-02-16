import DetailPortfolio from "@/Layouts/Authenticated/DetailPortfolio";
import NavigationBarTop from "@/Layouts/Authenticated/NavigationBarTop";
import { Link } from "@inertiajs/react";

export default function Show({portfolio}) {
    return (
        <>
       <NavigationBarTop />
       <div>
        <div className="context">
        <h6>{portfolio.title}</h6>
        <img src={portfolio.thumbnail} />
        <Link href={portfolio.url_demo}>
           Demo
        </Link>
        <p>
            {portfolio.use}
        </p>
        <p>
            {portfolio.description}
        </p>
    </div>


<div className="area" >
            <ul className="circles">
                    <li>
                       
                    </li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li>
                        
                    </li>
            </ul>
    </div >
        </div>
        </>
    )
}