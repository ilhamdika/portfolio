import { Link } from "@inertiajs/react";


export default function DetailPortfolio ({portfolio}){
    return (
        <div>
        <div className="context">
        <h6></h6>
        <img src="https://www.impdigital.co/wp-content/uploads/2021/03/responsive-website-mockup-1024x671.png" />
        <Link>
            {portfolio.url_demo}
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
    )
}