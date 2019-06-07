import React, { Fragment } from 'react'
import { withAmp } from 'next/amp'
import Head from 'next/head'

const Blog = () => {
    return(
        <Fragment>
            <style jsx>
            {`
                body {
                    margin:0 !important;
                    width:100%;
                    background-color: #f9fafc !important;
                }
                * {
                    font-family: Helvetica, sans-serif !important;
                    box-sizing: border-box;
                }
                #blog-body {
                    width:726px;
                    margin: 30px auto;
                }
                #blog-head {
                    display:block;
                    margin:75px 0 25px 0;
                }
                #blog-head-title {
                    margin:0;
                    font-size: 66px;
                }
                #blog-time {
                    font-size:18px;
                    color:#aaa;
                    margin-top: 15px;
                    display:block;
                }
                #blog-head-img {
                    width:100%;
                    border-radius: 3px;
                    margin:25px 0;
                    box-shadow: 0 7px 20px rgba(0,0,0,.425);
                }
                h2 { 
                    font-size: 42px;
                    color:#121212;
                }
                p { 
                    font-size: 21px; 
                    line-height: 1.875rem;
                    color:#555;
                    margin:25px 0;
                }
                li {
                    font-size: 21px;
                    color: #888;
                    line-height: 2rem;
                }
                article {
                    margin:35px 0 75px 0;
                }
                #blog-summary {
                    margin: 0 0 65px 0;
                }
                #blog-summary-text {
                    padding: 10px 15px;
                    font-size: 28px;
                    margin:0;
                    color:#555;
                    font-weight: normal;
                    line-height: 2.25rem;
                }
                #blog-footer {
                    display:block;
                    border-top:1px solid #ccc;
                }
                #blog-writer {
                    display:block;
                    text-align:right;
                    font-weight:normal;
                    color:#ababab;
                    padding: 10px 15px;
                }
                #blog-nav {
                    display:flex;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center;
                    width:100%;
                    margin: 50px 0;
                }
                .blog-nav-a {
                    font-size: 18px;
                    color:#007aff;
                    margin:5px 0;
                    padding:0 25px;
                    text-decoration:none;
                }
                ::selection, ::-webkit-selection {
                    background-color: rgba(0,123,255,.25);
                }
                a { color: #007aff; text-decoration:none; }
                @media screen and (max-width: 768px){
                    #blog-head-title { font-size: 42px; }
                    #blog-body {
                        width:100%;
                        padding:0 2.5%;
                    }
                    section {
                        padding:0 2.5%;
                    }
                    #blog-nav {
                        flex-direction: column;
                        justify-content: center;
                        align-items: flex-start;
                    }
                }
            `}
            </style>
            <Head>
                <title>Introducting Maidreamin API - Example Blog</title>
                <meta name="title" content="Introducting Maidreamin API - Example Blog" />
                <meta name="description" content="Introducing Maidreamin API, a RESTful API for geting data from Maidreamin MBK Bangkok" />
                <meta name="author" content="aomkirby123" />
                <meta name="keywords" content="maidreamin api, blog, mbk maidreamin, maidreamin" />
                <meta name="revisit-after" content="7 days" />
                <meta httpEquiv="content-language" content="en" />
                <link rel="icon" href="../static/img/hakutaku.png" />

                <meta property="og:title" content="Introducting Maidreamin API - Example Blog" />
                <meta property="og:description" content="Introducing Maidreamin API, a RESTful API for geting data from Maidreamin MBK Bangkok" />
                <meta property='article:author' content="aomkirby123" />
                <meta property='og:site_name' content="Introducing Maidreamin API" />
                <meta property="og:image" content="https://ex-maid-blog.now.sh/static/img/anime-girls.jpg" />
                <meta property="og:image:width" content="1920" />
                <meta property="og:image:height" content="1080" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Introducting Maidreamin API - Example Blog" />
                <meta name="twitter:description" content="Introducing Maidreamin API, a RESTful API for geting data from Maidreamin MBK Bangkok" />
                <meta name="twitter:site" content="@saltyAom" />
                <meta name="twitter:creator" content="@saltyAom" />
                <meta name="twitter:image" content="https://ex-maid-blog.now.sh/static/img/anime-girls.jpg" />

                <meta name="robots" content="index, follow" />
                <link rel='dns-prefetch' href='https://maidreamin.now.sh' />
                <meta name="google-site-verification" content="a3Jdp2uVvAUeZ0TuPl7GNxo1CZT9pa90nLBZ15sIaA0" />
            </Head>
            <main id="blog-body" role="main">
                <header id='blog-head'>
                    <h1 id='blog-head-title'>
                        Introducing, Maidreamin API!
                    </h1>
                    <time id='blog-time' dateTime="2019-06-07">July 6 2019</time>
                </header>
                <picture>
                    <source
                        type="image/jpg"
                        srcSet='../static/img/anime-girlsX1280.jpg 1280vw, anime-girlsX726 726vw.jpg'
                    />
                    <source
                        type="image/webp"
                        srcSet='../static/img/anime-girlsX1280.webp 1280vw, anime-girlsX726 726vw.webp'
                    />
                    <img
                        id='blog-head-img'
                        src='../static/img/anime-girlsX1280.jpg'
                        srcSet='../static/img/anime-girlsX1280.jpg 1280vw, anime-girlsX726 726vw.jpg'
                        alt='Anime girls'
                    />
                </picture>
                <section>
                    <article>
                        <h2>Maidreamin API</h2>
                        <p>
                            <a href="https://maidreamin.now.sh" rel="nofollow">Maidreamin API</a> is a RESTful API for geting 
                            unofficial data of Maidreamin MBK Bangkok including every menu on a list.
                        </p>
                        <p>
                            With very easy and minimal setup, Maidreamin API provided a minimal set of data and easily to use with
                            existed any project.
                        </p>
                    </article>
                    <article>
                        <h2>As RESTful API</h2>
                        <p>
                            RESTful API made it easy to integrate with existed, just fetch cross-site data with CORS,
                            you're ready to use Maidreamin API!
                        </p>
                        <p>
                            <a href="https://maidreamin.now.sh" rel="nofollow">Here is 'Maidreamin API'</a>
                        </p>
                    </article>
                    <article>
                        <h2>Multiple language support</h2>
                        <p>
                            With being said, set on MBK Bangkok. Maidreamin API supports 3 language:
                            <ul>
                                <li>Thai</li>
                                <li>English</li>
                                <li>Japanses</li>
                            </ul>
                        </p>
                        <p>
                            And with over 800 lines of menu and well-written API, we're ready to serve
                            Maidreamin API!
                        </p>
                    </article>
                </section>
                <section>
                    <summary id="blog-summary">
                        <h2>Wrapping it up</h2>
                        <h3 id="blog-summary-text">
                        <a href="https://maidreamin.now.sh" rel="nofollow">Maidreamin API</a> provided Maidreamin menu from unofficial creator with easily to set up 
                            but came with very fast and rich-content response.
                        </h3>
                    </summary>
                </section>
                <footer id="blog-footer">
                    <section>
                        <h4 id='blog-writer'>
                            Written by: aomkirby123
                        </h4>
                    </section>
                    <nav id="blog-nav">
                        <a className="blog-nav-a" href="https://github.com/aomkirby123" rel="nofollow">My Github</a>
                        <a className="blog-nav-a" href="https://twitter.com/saltyAom" rel="nofollow">My Twitter</a>
                        <a className="blog-nav-a" href="https://mystiar.com" rel="nofollow">My Website</a>
                    </nav>
                </footer>
            </main>
        </Fragment>
    )
}

export default withAmp(Blog);