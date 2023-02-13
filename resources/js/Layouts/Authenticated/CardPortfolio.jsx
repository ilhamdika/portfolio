import { Link } from "@inertiajs/react"
export default function CardPortfolio({
    name,
    deskripsi,
    thumbnail,
}) {
    return (
        <div className="row itms itemcont">
        
        
        
        <div className="col-md-6 col-xs-6 col-sm-6 col-lg-12">
            <div className="movie-card">
                <div className="movie-card__overlay">
                    <Link href={route('prototype.show', name)}>
                    <img src={thumbnail} alt="" />
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
                        <Link href={route('prototype.show', name)}
                        className="movie-card__title">
                            {name}
                        </Link>
                        
                    </div>
                    <p className="movie-card__desc">{deskripsi}</p>
                    
                </div>
            <div className="blur_back"></div>
            </div>
        </div>
    </div>
    )
}