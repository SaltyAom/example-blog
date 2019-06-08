import React, { Fragment } from 'react'

const Card = (props) => (
    <Fragment>
        <style jsx amp-custom>{`
            .blog-nav-card {
                display:flex;
                flex-direction:column;
                flex:1;
                margin:20px 8px;
                background-color:#fff;
                border-radius: 7px;
                box-shadow:0 3px 15px rgba(0,0,0,.2);
                transition: transform .2s ease-out, box-shadow .2s ease-out;
                text-decoration:none;
            }
            .blog-nav-card:hover, .blog-nav-card:focus {
                box-shadow:0 7px 25px rgba(0,0,0,.325);
                transform: translateY(-10px);
            }
            .blog-nav-img {
                width:100%;
                border-top-left-radius:  7px;
                border-top-right-radius: 7px;
                object-fit:fill;
            }
            .blog-nav-card-body {
                padding: 3px 12px 20px 12px;
                display:block;
                margin:0;
            }
            .blog-nav-card-body-title {
                width:100%;
                margin:0;
                font-size: 21px;
                color: #333;
            }
            .blog-nav-card-body-read-time {
                display:block;
                margin:8px 0 10px 0;
                color:#ababab;
                font-size:16px;
            }
            .blog-nav-card-body-author {
                display:block;
                margin:10px 0 0 10px;
                color:#ababab;
                font-size:16px;
            }
            .blog-nav-card-body-author::before {
                content: "— "
            }
        `}</style>
        <a className="blog-nav-card" href={props.href} rel="nofollow">
            <picture>
                <source
                    type="image/jpg"
                    srcSet={`../static/img/${props.imgDir}.jpg`}
                />
                <source
                    type="image/webp"
                    srcSet={`../static/img/${props.imgDir}.webp`}
                />
                <img
                    className="blog-nav-img"
                    src={`../static/img/${props.imgDir}.jpg`}
                    alt={props.alt}
                    lazy="true"
                />
            </picture>
            <div className="blog-nav-card-body">
                <p className="blog-nav-card-body-read-time">{props.readTime} minutes</p>
                <h5 className="blog-nav-card-body-title">{props.title}</h5>
                <p className="blog-nav-card-body-author">{props.author}</p>
            </div>
        </a>
    </Fragment>
)

export default Card