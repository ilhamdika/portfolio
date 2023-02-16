import { Link } from "@inertiajs/react";

export default function AboutMe({ key, name, from, description, skill, hoby, instagram_url}) {
    return (
        <>
        
        <div className="contextAbout">
        <h1>Hi, Wellcome</h1>
        <div className="row m-2">
            <div className="col-sm-4">
                <div className='heroContentImg'>
                <img src="/img/landing.png" alt="hero" border="0"  />
                </div>
                
                <div class="icon">
                    <center>
                        <a href="#"><img src="/img/instagram.png" alt="" /></a>
                        <a href="#"><img src="/img/fiverr.png" alt="" /></a>
                        <a href="#"><img src="/img/twitter.png" alt="" /></a>
                        <a href="#"><img src="/img/wa.png" alt="" /></a>
                    </center>

            </div>
            </div>
            <div className="col-sm-8">
                <div className="textAbout">
                    <h6>Nama : {name} {key}</h6>
                    <h6>Asal : {from}</h6>
                    <h6>Hoby : {hoby}</h6>
                <p>
                    {description}
                </p>
                </div>
            </div>
        </div>
    </div>


{/* <div className="areaAbout" >
            <ul className="circlesAbout">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div > */}
        </>
    )
}