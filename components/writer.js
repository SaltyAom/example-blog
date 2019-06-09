import React, { useState, useEffect, Fragment } from "react"

import "../static/css/writer.css"

const Writer = (props) => {
    const [intersected, setIntersected] = useState(false);
    
    useEffect(() => {
        const element = document.getElementById("blog-footer");
        if ('IntersectionObserver' in window){
            const io = new IntersectionObserver(entries => {
                if(entries[0].isIntersecting && !intersected){
                    setIntersected(true);
                    io.unobserve(element);
                };
            })

            io.observe(element);
        } else {
            setIntersected(true);
        }
    }, []);

    return(
        <footer id="blog-footer">
            <section>
                <div id="blog-writer">
                    <picture style={{height:"64px"}}>
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
                                    id='blog-writer-img'
                                    srcSet={`../static/img/${props.imgDir}.jpg`}
                                    alt="aomkirby123's avatar"
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
                                    id='blog-writer-img'
                                    alt="aomkirby123's avatar"
                                />
                            </Fragment>
                        }
                    </picture>
                    <h4 id="blog-writer-name">
                        {props.name}
                    </h4>
                </div>
            </section>
        </footer>
    )
}

export default Writer;