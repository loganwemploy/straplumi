import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import VisibilitySensor from "react-visibility-sensor";
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import styled from 'styled-components';

const StyledMainBanner = styled.div`

`;

const options = {
    loop: true,
    nav: true,
    dots: true,
    autoplayHoverPause: true,
    autoplay: false,
    smartSpeed: 400,
    items: 1,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
}

class MainBanner extends Component {
    _isMounted = false;
    state = {
        display: false,

    }
    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    
    render() {
        return (
            <StyledMainBanner>
               <Head>
                   <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.min.css"/>
               </Head>
                {this.state.display ? <OwlCarousel 
                    className="home-slides owl-carousel owl-theme"
                    {...options}
                >
                    <div className="main-banner banner-bg1">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container" style={{paddingTop:'20vh'}}>
                                    <VisibilitySensor>
                                        {({ isVisible }) => (
                                            <div className="main-banner-content text-center">
                                                <span
                                                    className={
                                                        isVisible ? "sub-title animated fadeInUp opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                   <i className="fa fa-heart"></i> Valentine's Day Special!
                                                </span>
                                                <h1
                                                    className={
                                                        isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    Champagne Rose
                                                </h1>
                                                <p
                                                    className={
                                                        isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    Take 20% Off ‘Sale Best-Smeller'
                                                </p>

                                                <div className="btn-box">
                                                    <Link href="/products-left-sidebar">
                                                        <a 
                                                            className={
                                                                `default-btn ${isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'}`
                                                            }
                                                        >
                                                            Shop Seasonals
                                                        </a>
                                                    </Link>

                                                    <Link href="/shop">
                                                        <a 
                                                            className={
                                                                `optional-btn ${isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'}`
                                                            }
                                                        >
                                                            Shop All
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        )}
                                    </VisibilitySensor>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main-banner banner-bg2">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <VisibilitySensor>
                                        {({ isVisible }) => (
                                            <div className="main-banner-content">
                                                <span
                                                style={{color:'#ddd'}}
                                                    className={
                                                        isVisible ? "sub-title animated fadeInUp slow opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    Exclusive Candle DUO of the Month!
                                                </span>
                                                <h1
                                                    className={
                                                        isVisible ? "animated fadeInUp slow opacityOne" : 'opacityZero'
                                                    }
                                                    style={{color:'#222'}}
                                                >
                                                    Champagne Rose&nbsp;&amp;&nbsp;SweetHeart!
                                                </h1>
                                                <p
                                                style={{color:'#efefef'}}
                                                    className={
                                                        isVisible ? "animated fadeInUp slow opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                   available until 1/30/2021
                                                </p>
                                                
                                                <div className="btn-box">
                                                    <Link href="/products-left-sidebar">
                                                        <a 
                                                            className={
                                                                `default-btn ${isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'}`
                                                            }
                                                        >
                                                            Shop Classics
                                                        </a>
                                                    </Link>

                                                    <Link href="/products-right-sidebar">
                                                        <a 
                                                            className={
                                                                `optional-btn ${isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'}`
                                                            }
                                                        >
                                                            Shop All
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        )}
                                    </VisibilitySensor>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main-banner banner-bg3">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <VisibilitySensor>
                                        {({ isVisible }) => (
                                            <div className="main-banner-content">
                                                <span
                                                    className={
                                                        isVisible ? "sub-title animated fadeInUp opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    &nbsp;Buy Now From Lumi Candle Boutique!
                                                </span>
                                                <h1
                                                    className={
                                                        isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    New Floral Candles
                                                </h1>
                                                <p
                                                    className={
                                                        isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    Valentines Day Specials ‘Champagne&nbsp;Rose and '
                                                </p>
                                                
                                                <div className="btn-box">
                                                    <Link href="/products-left-sidebar">
                                                        <a 
                                                            className={
                                                                `default-btn ${isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'}`
                                                            }
                                                        >
                                                            Shop This Collection
                                                        </a>
                                                    </Link>

                                                    <Link href="/products-right-sidebar">
                                                        <a 
                                                            className={
                                                                `optional-btn ${isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'}`
                                                            }
                                                        >
                                                            Shop All
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        )}
                                    </VisibilitySensor>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-banner banner-bg4">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <VisibilitySensor>
                                        {({ isVisible }) => (
                                            <div className="main-banner-content">
                                                <span
                                                style={{color:'#efefef'}}
                                                    className={
                                                        isVisible ? "sub-title animated fadeInUp slow opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    Exclusive Offer!
                                                </span>
                                                <h1
                                                style={{color:'hotpink'}}
                                                    className={
                                                        isVisible ? "animated fadeInUp slow opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    Classic Collection!
                                                </h1>
                                                <p
                                                style={{color:'#efefef'}}
                                                    className={
                                                        isVisible ? "animated fadeInUp slow opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    sale 15% OFF 02/2021 - 05/2021 
                                                </p>
                                                
                                                <div className="btn-box" style={{borderRadius:"1.23em"}}>
                                                    <Link href="/products-left-sidebar">
                                                        <a 
                                                            className={
                                                                `default-btn ${isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'}`
                                                            }
                                                        >
                                                            Shop Classics
                                                        </a>
                                                    </Link>

                                                    <Link href="/products-right-sidebar">
                                                        <a 
                                                            className={
                                                                `optional-btn ${isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'}`
                                                            }
                                                        >
                                                            Shop All
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        )}
                                    </VisibilitySensor>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </StyledMainBanner>
        );
    }
}

export default MainBanner;
