import { Link } from "@inertiajs/react";


export default function DetailPortfolio ({name}){
    return (
        <div>
        <div class="context">
        <h6> This is my Portfolio{name}</h6>
        <img src="https://www.impdigital.co/wp-content/uploads/2021/03/responsive-website-mockup-1024x671.png" />
        <Link>
            Demo
        </Link>
        <p>
            Use : PHP, Laravel, Tailwind, Inertia, React, MySQL
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam unde iusto molestias mollitia maiores reiciendis ab quisquam reprehenderit, consequatur est cumque ipsa quasi debitis et dolores sapiente vitae autem dignissimos.</p>
    </div>


<div class="area" >
            <ul class="circles">
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