import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Head from 'next/head'


class TopHeader extends Component {

    state = {
        WishlistModal: false
    };

    toggleModalWishlist = () => {
        this.setState({
            WishlistModal: !this.state.WishlistModal
        });
    }

    handleLogout = () => {
        this.props.userLogout();
        Router.push('/');
    }

    render() {
        const { user } = this.props;
        return (
            <>
<Head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"/>
</Head>
                <div className="top-header">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <ul className="header-contact-info">
                                    <li>Welcome to Lumi Candle Boutique</li>
                                    <li style={{display:'inline'}}>
                                        <i className="social-list fa fa-facebook"></i>
                                      
                                        <i className="social-list fa fa-instagram"></i>
                                        
                                        <i className="social-list fa fa-twitter"></i>
                                     
                                     
                                    </li>

                                    <li>
                                       
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <ul className="header-top-menu">
                                    <li>
                                        <Link href="/login">
                                            <a>
                                                <i className='bx bxs-user'></i> My Account
                                            </a>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="#toggleModalWishlist">
                                            <a onClick={this.toggleModalWishlist}>
                                                <i className='bx bx-heart'></i> Wishlist
                                            </a>
                                        </Link>
                                    </li>

                              
                                    <li>
                                        {user ? (
                                            <Link href="#">
                                                <a onClick={e => {e.preventDefault(); this.handleLogout();}}>
                                                    <i className='bx bx-log-in'></i> Logout
                                                </a>
                                            </Link>
                                        ) : (
                                            <Link href="/login">
                                                <a>
                                                    <i className='bx bx-log-in'></i> Login
                                                </a>
                                            </Link>
                                        )}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wishlist Modal */}
                {/* <WishlistModal 
                    onClick={this.toggleModalWishlist} 
                    active={this.state.WishlistModal ? 'active' : ''} 
                /> */}
            </>
        );
    }
}


export default TopHeader;