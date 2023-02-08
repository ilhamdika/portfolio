import { Link } from "@inertiajs/react"
export default function CardPortfolio() {
    return (
        <div className="row itms itemcont">
        

        
        <div className="col-md-6 col-xs-6 col-sm-6 col-lg-6">
            <div className="movie-card">
                <div className="movie-card__overlay">
                    <Link>
                    <img src="https://www.impdigital.co/wp-content/uploads/2021/03/responsive-website-mockup-1024x671.png" alt="" />
                    </Link>
                </div>
                <div className="movie-card__share">
                    <button className="movie-card__icon">
                        <i className="fa fa-heart"></i>
                    </button>
                    <button className="movie-card__icon">
                        <i className="fa fa-star"></i>
                    </button>
                    <button className="movie-card__icon">
                        <i className="fa fa-tv"></i>
                    </button>
                </div>
                <div className="movie-card__content">
                    <div className="movie-card__header">
                        <Link className="movie-card__title">Something Item</Link>
                        
                    </div>
                    <p className="movie-card__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sollicitudin, elit in aliquet tincidunt, augue elit fermentum augue. Donec.</p>
                    
                </div>
            <div className="blur_back"></div>
            </div>
        </div>
        <div className="col-md-6 col-xs-6 col-sm-6 col-lg-6">
            <div className="movie-card">
                <div className="movie-card__overlay">
                    <Link>
                    <img src="https://images01.nicepagecdn.com/page/58/36/website-design-preview-58364.jpg" alt="" />
                    </Link>
                </div>
                <div className="movie-card__content">
                    <div className="movie-card__header">
                        <Link className="movie-card__title">Something Item</Link>
                        
                    </div>
                    <p className="movie-card__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sollicitudin, elit in aliquet tincidunt, augue elit fermentum augue. Donec.</p>
                    <button className="btn btn-outline" type="button">Details</button>
                </div>
            <div className="blur_back"></div>
            </div>
        </div>
        <div className="col-md-6 col-xs-6 col-sm-6 col-lg-6">
            <div className="movie-card">
                <div className="movie-card__overlay">
                    <Link>
                    <img src="https://images01.nicepagecdn.com/page/58/36/website-design-preview-58364.jpg" alt="" />
                    </Link>
                </div>
                <div className="movie-card__share">
                    <button className="movie-card__icon">
                        <i className="fa fa-heart"></i>
                    </button>
                    <button className="movie-card__icon">
                        <i className="fa fa-star"></i>
                    </button>
                    <button className="movie-card__icon">
                        <i className="fa fa-tv"></i>
                    </button>
                </div>
                <div className="movie-card__content">
                    <div className="movie-card__header">
                        <Link className="movie-card__title">Something Item</Link>
                        
                    </div>
                    <p className="movie-card__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sollicitudin, elit in aliquet tincidunt, augue elit fermentum augue. Donec.</p>
                    <button className="btn btn-outline" type="button">Details</button>
                </div>
            <div className="blur_back"></div>
            </div>
        </div>
       
     
        
        
    </div>
    )
}