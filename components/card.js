import { h, Fragment } from 'preact'
import { useState, useEffect } from 'preact/hooks'

import "../static/css/card.css"

const Card = (props) => {
    const [intersected, setIntersected] = useState(false);

    useEffect(() => {
        const element = document.querySelector(".blog-nav-card");
        if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window &&
            'intersectionRatio' in window.IntersectionObserverEntry.prototype){
            const io = new IntersectionObserver(entries => {
                if(entries[0].isIntersecting && !intersected){
                    setIntersected(true);
                    io.unobserve(entries[0].target);
                }
            });

            io.observe(element);
            return () => {
                io.unobserve(element);
            }
        } else {
            window.onload = () => {
                setIntersected(true);
            }
        }
    }, []);

    return(
        <a className="blog-nav-card" href={props.href} rel="referrer nofollow">
            <picture>
                { intersected ?
                    <Fragment>
                        <source
                            type="image/webp"
                            srcSet={`../static/img/${props.imgDir}.webp`}
                        />
                        <source
                            type="image/jpg"
                            srcSet={`../static/img/${props.imgDir}.jpg`}
                        />
                        <img
                            className="blog-nav-img"
                            src={`../static/img/${props.imgDir}.jpg`}
                            alt={props.alt}
                        />
                    </Fragment>
                :
                    <Fragment>
                        <source
                            type="image/webp"
                        />
                        <source
                            type="image/jpg"
                        />
                        <img
                            className="blog-nav-img blog-nav-img-load"
                            alt={props.alt}
                        />
                    </Fragment>
                }
            </picture>
            <article className="blog-nav-card-body">
                <p className="blog-nav-card-body-read-time">{props.readTime} minutes</p>
                <h5 className="blog-nav-card-body-title">{props.title}</h5>
                <p className="blog-nav-card-body-author">{props.author}</p>
            </article>
        </a>
    )
}

export default Card