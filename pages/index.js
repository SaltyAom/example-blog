import React, { Fragment } from 'react'
import { withAmp } from 'next/amp'
import Head from 'next/head'

import Card from '../components/card'

let schema = {
    "@context": {
        "name": "https://ex-maid-blog.now.sh",
        "wrapping up": "https://ex-maid-blog.now.sh#blog-summary"
    },
    "authorName": "aomkirby123",
    "publisher": {
        "@type": "Person",
        "name": "aomkirby123"
    },
    title: "Introducing, Maidreamin API!",
    "image": "https://ex-maid-blog.now.sh/static/img/anime-girls.jpg",
    "datePublished": "2019-06-07",
    "dateModified": "2019-06-08",
    "@type": "BlogPosting",
    "url":"https://ex-maid-blog.now.sh"
}

const Blog = () => {
    return(
        <Fragment>
            <style amp-custom jsx>
            {`
                body {
                    margin:0;
                    width:100%;
                    background-color: #f9fafc;
                }
                * {
                    font-family: Helvetica, sans-serif;
                    box-sizing: border-box;
                }
                #blog-body {
                    width:726px;
                    margin: 30px auto 20px auto;
                }
                #blog-head {
                    display:block;
                    margin:65px 0 25px 0;
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
                    margin: 45px 0 20px 0;
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
                #blog-summary {
                    margin: 0 0 25px 0;
                }
                #blog-summary-text {
                    padding: 10px 15px;
                    font-size: 21px;
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
                    display:flex;
                    flex-direction:row;
                    justify-content:flex-start;
                    align-items:center;
                    padding:10px 15px;
                    margin: 10px;
                }
                #blog-writer-img {
                    width: 64px;
                    height:64px;
                    object-fit:fill;
                    border-radius:32px;
                    border:1px solid #eee;
                }
                #blog-writer-name {
                    display:block;
                    text-align:right;
                    font-weight:normal;
                    margin:0;
                    font-size:21px;
                    color:#333;
                    margin-left: 25px;
                }
                #blog-nav {
                    display:flex;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: flex-start;
                    width: 960px;
                    margin: 20px auto 40px auto;
                }
                ::selection, ::-webkit-selection {
                    background-color: rgba(0,123,255,.25);
                }
                a { color: #007aff; text-decoration:none; }
                @media screen and (min-width:768px) and (max-width: 1024px){
                    #blog-nav {
                        width: 740px;
                    }
                }
                @media screen and (max-width: 767.9px){
                    #blog-head-title { font-size: 42px; }
                    #blog-body {
                        width:100%;
                        padding:0 2.5%;
                    }
                    section {
                        padding:0 2.5%;
                    }
                    #blog-nav {
                        width:100%;
                        padding:0 5%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: flex-start;
                    }
                    .blog-nav-card {
                        width:100%;
                        margin:15px 0;
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
                <link rel="icon" href="../static/img/hakutaku.png" />
                <meta httpEquiv="content-language" content="en" />

                <meta property="og:title" content="Introducting Maidreamin API - Example Blog" />
                <meta property="og:description" content="Introducing Maidreamin API, a RESTful API for geting data from Maidreamin MBK Bangkok" />
                <meta property="og:site_name" content="Introducing Maidreamin API" />

                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />

                <meta property="og:image" content="https://ex-maid-blog.now.sh/static/img/anime-girls.jpg" />
                <meta property="og:image:width" content="1920" />
                <meta property="og:image:height" content="1080" />
                <meta property="og:image:alt" content="Anime Girls" />

                <meta property="article:author" content="aomkirby123" />
                <meta property="article:published_time" content="2019-06-07" />
                <meta property="article:modified_time" content="2019-06-08" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Introducting Maidreamin API - Example Blog" />
                <meta name="twitter:description" content="Introducing Maidreamin API, a RESTful API for geting data from Maidreamin MBK Bangkok" />
                <meta name="twitter:site" content="@saltyAom" />
                <meta name="twitter:creator" content="@saltyAom" />
                <meta name="twitter:image" content="https://ex-maid-blog.now.sh/static/img/anime-girls.jpg" />

                <meta name="robots" content="index, follow" />
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>

                <link rel='dns-prefetch' href='https://maidreamin.now.sh' />

                <meta name="google-site-verification" content="a3Jdp2uVvAUeZ0TuPl7GNxo1CZT9pa90nLBZ15sIaA0" />
            </Head>
            <main id="blog-body" role="main">
                <article>
                    <header id='blog-head'>
                        <h1 id='blog-head-title'>
                            Introducing, Maidreamin API!
                        </h1>
                        <time id='blog-time' dateTime="2019-06-07">July 6 2019</time>
                    </header>
                    <picture>
                        <source
                            type="image/jpg"
                            srcSet='../static/img/anime-girlsX1280.jpg 1280w, ../static/img/anime-girlsX726.jpg 726w'
                            size="(min-width:726.1px) 1280px, (max-width:726px) 726px"
                        />
                        <source
                            type="image/webp"
                            srcSet='../static/img/anime-girlsX1280.webp 1280w, ../static/img/anime-girlsX726.webp 726w'
                            size="(min-width:726.1px) 1280px, (max-width:726px) 726px"
                        />
                        <img
                            id='blog-head-img'
                            src='../static/img/anime-girlsX1280.jpg'
                            srcSet='../static/img/anime-girlsX1280.jpg 1280w, ../static/img/anime-girlsX726.jpg 726w'
                            size="(min-width:726.1px) 1280px, (max-width:726px) 726px"
                            alt='Anime girls'
                            lazy="true"
                        />
                    </picture>
                    <section>
                            <h2>Maidreamin API</h2>
                            <p>
                                <a href="https://maidreamin.now.sh" taget="_blank" rel="nofollow">Maidreamin API</a> is a RESTful API for geting 
                                unofficial data of Maidreamin MBK Bangkok including every menu on a list.
                            </p>
                            <p>
                                With very easy and minimal setup, Maidreamin API provided a minimal set of data and easily to use with
                                existed any project.
                            </p>
                            <h2>As RESTful API</h2>
                            <p>
                                RESTful API made it easy to integrate with existed, just fetch cross-site data with CORS,
                                you're ready to use Maidreamin API!
                            </p>
                            <p>
                                <a href="https://maidreamin.now.sh" taget="_blank" rel="nofollow">Here is 'Maidreamin API'</a>
                            </p>
                            <h2>Multiple language support</h2>
                            <p>
                                With being said, set on MBK Bangkok. Maidreamin API supports 3 language:
                            </p>
                            <ul>
                                <li>Thai</li>
                                <li>English</li>
                                <li>Japanese</li>
                            </ul>
                            <p>
                                And with over 800 lines of menu and well-written API, we're ready to serve
                                Maidreamin API!
                            </p>
                    </section>
                    <section>
                        <summary id="blog-summary">
                            <h2>Wrapping it up</h2>
                            <h3 id="blog-summary-text">
                            <a href="https://maidreamin.now.sh" taget="_blank" rel="nofollow">Maidreamin API</a> provided Maidreamin menu from unofficial creator with easily to set up 
                                but came with very fast and rich-content response.
                            </h3>
                        </summary>
                    </section>
                    <footer id="blog-footer">
                        <section>
                            <div id="blog-writer">
                                <picture>
                                    <source
                                        type="image/jpg"
                                        srcSet='../static/img/aomkirby123.jpg'
                                    />
                                    <source
                                        type="image/webp"
                                        srcSet='../static/img/aomkirby123.webp'
                                    />
                                    <img
                                        id='blog-writer-img'
                                        src='../static/img/aomkirby123.jpg'
                                        alt="aomkirby123's avatar"
                                        lazy="true"
                                    />
                                </picture>
                                <h4 id="blog-writer-name">
                                    aomkirby123
                                </h4>
                            </div>
                        </section>
                    </footer>
                </article>
            </main>
            <nav id="blog-nav">
                <Card 
                    href="https://ex-maid-blog.now.sh"
                    imgDir="miku-nendoroid"
                    alt="Hatsune Miku Nendoroid"
                    title="Hatsune Miku Nendoroid Unboxing!"
                    readTime={2}
                    author="aomkirby123"
                />
                <Card 
                    href="https://ex-maid-blog.now.sh"
                    imgDir="cube"
                    alt="Stange looking cube"
                    title="What does 4th Dimensional Cube looks like?"
                    readTime={8}
                    author="aomkirby123"
                />
                <Card
                    href="https://ex-maid-blog.now.sh"
                    imgDir="mikudayo"
                    alt="Mikudayo!"
                    title="Understanding Meme: The legend of 'Mikudayo'!"
                    readTime={3}
                    author="aomkirby123"
                />
            </nav>
        </Fragment>
    )
}

export default withAmp(Blog);