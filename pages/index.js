import Head from "next/head";
import MainBanner from "../components/MainBanner";
import ProductsList from "../components/ProductsList";
import TopHeader from "../components/TopHeader";
import { getProducts } from "../utils/api";
import styled from 'styled-components';
import ApiStrapiCall from "../components/ApiStrapiCall";

const StyledHomePage = styled.div`

  max-width: 100vw;
  width: 100%;
  overflow-x: hidden;


.md-container {
  max-width: 800px;
  padding-top: 2rem;
}

.sml-card {
  width: 22rem;
  margin: 1rem 0;
}

.cntr-footer {
  height: 80px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #ccc;
}

.sml-logo {
  height: 1em;
  margin-left: 10px;
}




img {
  max-width: 100%;
  height: auto;
}

.d-table {
  width: 100%;
  height: 100%;
}

.d-table-cell {
  vertical-align: middle;
}

:focus {
  outline: 0 !important;
}

a {
  -webkit-transition: 0.5s;
  transition: 0.5s;
  color: #000000;
  text-decoration: none;
}

a:hover {
  color: #f53f85;
  text-decoration: none;
}

p {
  margin-bottom: 15px;
  color: #777777;
  line-height: 1.8;
  font-size: 15px;
}

p:last-child {
  margin-bottom: 0;
}

.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
  color: #000000;
  font-family: "Cabin";
}

.ptb-100 {
  padding-top: 100px;
  padding-bottom: 100px;
}

.pt-100 {
  padding-top: 100px;
}

.pb-100 {
  padding-bottom: 100px;
}

.ptb-70 {
  padding-top: 70px;
  padding-bottom: 70px;
}

.pt-70 {
  padding-top: 70px;
}

.pb-70 {
  padding-bottom: 70px;
}

.bg-f5f5f5 {
  background-color: #f5f5f5;
}

.jarallax {
  background-attachment: fixed;
}

/*default-btn&optional-btn*/
.default-btn {
  display: inline-block;
  border: 1px solid #f53f85;
  padding: 10px 30px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  text-transform: uppercase;
  background-color: #f53f85;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
}

.default-btn:hover {
  background-color: transparent;
  color: #000000;
  border-color: #000000;
}

.optional-btn {
  display: inline-block;
  border: 1px solid #000000;
  padding: 10px 30px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  text-transform: uppercase;
  background-color: transparent;
  color: #000000;
  font-size: 14px;
  font-weight: 600;
}

.optional-btn:hover {
  background-color: #f53f85;
  color: #ffffff;
  border-color: #f53f85;
}

/*section-title*/
.section-title {
  text-align: center;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
}

.section-title span {
  display: block;
  margin-bottom: 8px;
  color: #f53f85;
  font-weight: 600;
}

.section-title h2 {
  margin-bottom: 0;
  font-size: 35px;
  font-weight: 700;
}

.section-title.text-left {
  max-width: 100%;
  position: relative;
  margin-left: 0;
  margin-bottom: 30px;
  margin-right: 0;
}

.section-title.text-left .default-btn {
  position: absolute;
  right: 0;
  bottom: 0;
}

/*form-control*/
.form-control {
  background-color: #f5f5f5;
  height: 48px;
  border-radius: 0;
  -webkit-box-shadow: unset !important;
          box-shadow: unset !important;
  padding: 0 0 0 15px;
  border: 1px solid #f5f5f5;
  color: #000000;
  font-size: 15px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.form-control:focus {
  border-color: #f53f85;
  background-color: #ffffff;
}

.form-control:focus::-webkit-input-placeholder {
  color: transparent;
}

.form-control:focus:-ms-input-placeholder {
  color: transparent;
}

.form-control:focus::-ms-input-placeholder {
  color: transparent;
}

.form-control:focus::placeholder {
  color: transparent;
}

.form-control::-webkit-input-placeholder {
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.form-control:-ms-input-placeholder {
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.form-control::-ms-input-placeholder {
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.form-control::placeholder {
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

textarea.form-control {
  padding-top: 15px;
  height: auto !important;
}

/*================================================
Top Header CSS
=================================================*/
.top-header {
  background-color: #000000;
  padding-top: 12px;
  padding-bottom: 12px;
}

.top-header .container-fluid {
  padding-left: 30px;
  padding-right: 30px;
}

.header-contact-info {
  padding-left: 0;
  margin-bottom: 0;
  list-style-type: none;
}

.header-contact-info li {
  display: inline-block;
  color: #d0d0d0;
  margin-right: 30px;
  position: relative;
  font-weight: 600;
  font-size: 14px;
}

.header-contact-info li::before {
  position: absolute;
  right: -15px;
  top: 6px;
  width: 1px;
  content: '';
  height: 12px;
  background-color: #636161;
}

.header-contact-info li a {
  display: inline-block;
  color: #d0d0d0;
  position: relative;
}

.header-contact-info li a:hover {
  color: #f53f85;
}

.header-contact-info li a::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: #f53f85;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.header-contact-info li a:hover::before {
  width: 100%;
}

.header-contact-info li:last-child {
  margin-right: 0;
}

.header-contact-info li:last-child::before {
  display: none;
}

.header-contact-info li .language-switcher {
  position: relative;
}

.header-contact-info li .language-switcher .dropdown-toggle {
  padding: 0;
  border: none;
  background-color: transparent;
  color: #d0d0d0;
  font-weight: 600;
  font-size: 14.5px;
}

.header-contact-info li .language-switcher .dropdown-toggle::after {
  display: none;
}

.header-contact-info li .language-switcher .dropdown-toggle img {
  width: 30px;
  border-radius: 3px;
  border: 2px solid #ffffff;
  position: relative;
  top: -2px;
}

.header-contact-info li .language-switcher .dropdown-toggle span {
  display: inline-block;
  margin-left: 10px;
}

.header-contact-info li .language-switcher .dropdown-toggle span i {
  position: relative;
  font-size: 20px;
  top: 4px;
  margin-left: -3px;
}

.header-contact-info li .language-switcher:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  -webkit-transform: scaleX(1);
          transform: scaleX(1);
}

.header-contact-info li .language-switcher .dropdown-menu {
  padding: 15px;
  float: unset;
  border: none;
  -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
          box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  border-radius: 0;
  display: block;
  margin-top: 12px;
  opacity: 0;
  visibility: visible;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  -webkit-transform: scaleX(0);
          transform: scaleX(0);
}

.header-contact-info li .language-switcher .dropdown-menu .dropdown-item {
  padding: 0;
  color: #000000;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 15px;
}

.header-contact-info li .language-switcher .dropdown-menu .dropdown-item::before {
  display: none;
}

.header-contact-info li .language-switcher .dropdown-menu .dropdown-item:last-child {
  margin-bottom: 0;
}

.header-contact-info li .language-switcher .dropdown-menu .dropdown-item img {
  width: 30px;
  border-radius: 5px;
  border: 3px solid #ffffff;
}

.header-contact-info li .language-switcher .dropdown-menu .dropdown-item span {
  display: inline-block;
  margin-left: 10px;
}

.header-contact-info li .language-switcher .dropdown-menu .dropdown-item:hover, .header-contact-info li .language-switcher .dropdown-menu .dropdown-item:focus {
  background-color: transparent !important;
}

.header-contact-info li .language-switcher .dropdown-menu .dropdown-item:active, .header-contact-info li .language-switcher .dropdown-menu .dropdown-item.active {
  color: #000000;
  background-color: transparent;
}

.header-contact-info li .language-switcher .dropdown-menu.show {
  opacity: 1;
  visibility: visible;
  -webkit-transform: scaleX(1);
          transform: scaleX(1);
}

.top-header-discount-info {
  text-align: center;
}

.top-header-discount-info p {
  margin-bottom: 0;
  line-height: initial;
  font-size: 14.5px;
  color: #ffffff;
}

.top-header-discount-info p a {
  display: inline-block;
  font-weight: 700;
  position: relative;
  color: #ffffff;
}

.top-header-discount-info p a::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: #f53f85;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.top-header-discount-info p a:hover {
  color: #f53f85;
}

.top-header-discount-info p a:hover::before {
  width: 100%;
}

.header-top-menu {
  text-align: right;
  padding-left: 0;
  margin-bottom: 0;
  list-style-type: none;
}

.header-top-menu li {
  display: inline-block;
  color: #d0d0d0;
  font-weight: 600;
  margin-right: 30px;
  position: relative;
  font-size: 14px;
}

.header-top-menu li::before {
  position: absolute;
  right: -15px;
  top: 6px;
  width: 1px;
  content: '';
  height: 12px;
  background-color: #636161;
}

.header-top-menu li i {
  position: absolute;
  left: 0;
  top: 2.5px;
  font-size: 16px;
}

.header-top-menu li a {
  display: inline-block;
  color: #d0d0d0;
  padding-left: 22px;
  position: relative;
}

.header-top-menu li a:hover {
  color: #f53f85;
}

.header-top-menu li a::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: #f53f85;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.header-top-menu li a:hover::before {
  width: 100%;
}

.header-top-menu li:last-child {
  margin-right: 0;
}

.header-top-menu li:last-child::before {
  display: none;
}

.header-top-others-option {
  display: none;
  padding-left: 0;
  list-style-type: none;
  margin-top: 15px;
  margin-bottom: 0;
}

.header-top-others-option .option-item {
  display: inline-block;
  margin-left: 15px;
  position: relative;
  z-index: 3;
  color: #d0d0d0;
}

.header-top-others-option .option-item:first-child {
  margin-left: 0;
}

.header-top-others-option .option-item .search-btn-box {
  position: relative;
  top: 2px;
}

.header-top-others-option .option-item .search-btn-box .search-btn {
  font-size: 20px;
  cursor: pointer;
  color: #d0d0d0;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.header-top-others-option .option-item .cart-btn {
  font-size: 20px;
  position: relative;
  line-height: 1;
}

.header-top-others-option .option-item .cart-btn a {
  display: inline-block;
  position: relative;
  color: #d0d0d0;
}

.header-top-others-option .option-item .cart-btn a span {
  position: absolute;
  right: -4px;
  top: -4px;
  width: 14px;
  height: 14px;
  text-align: center;
  line-height: 13.9px;
  border-radius: 50%;
  color: #ffffff;
  background-color: #f53f85;
  font-size: 10px;
  font-weight: 600;
}

/*================================================
Navbar CSS
=================================================*/
.navbar-area.is-sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  -webkit-box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.06);
          box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.06);
  background: #ffffff !important;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.navbar-area.navbar-style-two .main-nav .navbar .navbar-nav {
  margin-left: 50px;
  margin-right: auto;
}

.main-nav {
  background-color: #ffffff;
}

.main-nav .container-fluid {
  padding-left: 40px;
  padding-right: 40px;
}

.main-nav .navbar {
  position: inherit;
  padding-left: 0;
  padding-right: 0;
}

.main-nav .navbar .navbar-brand {
  font-size: 30px;
  line-height: 1;
  font-weight: bold;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
}

.main-nav .navbar ul {
  padding-left: 0;
  list-style-type: none;
  margin-bottom: 0;
}

.main-nav .navbar .navbar-nav {
  margin-left: auto;
  margin-right: auto;
}

.main-nav .navbar .navbar-nav .nav-item {
  position: relative;
}

.main-nav .navbar .navbar-nav .nav-item a {
  color: #000000;
  font-size: 16.5px;
  font-weight: 600;
  padding-left: 0;
  padding-right: 0;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-left: 13px;
  margin-right: 13px;
}

.main-nav .navbar .navbar-nav .nav-item a i {
  font-size: 18px;
  position: relative;
  top: 2px;
  display: inline-block;
  margin-left: -3px;
  margin-right: -3px;
}

.main-nav .navbar .navbar-nav .nav-item a:hover, .main-nav .navbar .navbar-nav .nav-item a:focus, .main-nav .navbar .navbar-nav .nav-item a.active {
  color: #f53f85;
}

.main-nav .navbar .navbar-nav .nav-item:last-child a {
  margin-right: 0;
}

.main-nav .navbar .navbar-nav .nav-item:first-child a {
  margin-left: 0;
}

.main-nav .navbar .navbar-nav .nav-item:hover a, .main-nav .navbar .navbar-nav .nav-item.active a {
  color: #f53f85;
}

.main-nav .navbar .navbar-nav .nav-item .dropdown-menu {
  -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
          box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  background: #ffffff;
  position: absolute;
  border: none;
  top: 70px;
  left: 0;
  width: 250px;
  z-index: 99;
  display: block;
  opacity: 0;
  visibility: hidden;
  border-radius: 0;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  padding: 0;
  -webkit-transform: scaleX(0);
          transform: scaleX(0);
}

.main-nav .navbar .navbar-nav .nav-item .dropdown-menu li a {
  padding: 13px 20px 11px;
  margin: 0;
  position: relative;
  display: block;
  color: #666666;
  border-bottom: 1px dashed #e5e5e5;
  font-size: 15px;
  font-weight: 600;
  font-family: "Cabin";
}

.main-nav .navbar .navbar-nav .nav-item .dropdown-menu li a i {
  margin: 0;
  position: absolute;
  top: 50%;
  font-size: 20px;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  right: 10px;
}

.main-nav .navbar .navbar-nav .nav-item .dropdown-menu li a:hover, .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li a:focus, .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li a.active {
  color: #f53f85;
}

.main-nav .navbar .navbar-nav .nav-item .dropdown-menu li a span {
  background-color: red;
  color: #fff;
  font-size: 8px;
  padding: 2px 5px;
  border-radius: 4px;
  position: relative;
  top: -8px;
  left: 7px;
}

.main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu {
  left: -250px;
  top: 0;
  opacity: 0;
  visibility: hidden;
  -webkit-transform: scaleY(0);
          transform: scaleY(0);
}

.main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li a {
  color: #515050;
}

.main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li a:hover, .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li a:focus, .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li a.active {
  color: #f53f85;
}

.main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu {
  left: 250px;
  top: 0;
  opacity: 0;
  visibility: hidden;
  -webkit-transform: scaleY(0);
          transform: scaleY(0);
}

.main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li a {
  color: #515050;
}

.main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li a:hover, .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li a:focus, .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li a.active {
  color: #f53f85;
}

.main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu {
  left: -250px;
  top: 0;
  opacity: 0;
  visibility: hidden;
  -webkit-transform: scaleY(0);
          transform: scaleY(0);
}

.main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a {
  color: #515050;
}

.main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a:hover, .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a:focus, .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a.active {
  color: #f53f85;
}

.main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu {
  left: 250px;
  top: 0;
  opacity: 0;
  visibility: hidden;
  -webkit-transform: scaleY(0);
          transform: scaleY(0);
}

.main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a {
  color: #515050;
}

.main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a:hover, .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a:focus, .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a.active {
  color: #f53f85;
}

.main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu {
  left: -250px;
  top: 0;
  opacity: 0;
  visibility: hidden;
  -webkit-transform: scaleY(0);
          transform: scaleY(0);
}

.main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a {
  color: #515050;
}

.main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a:hover, .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a:focus, .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a.active {
  color: #f53f85;
}

.main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu {
  left: 250px;
  top: 0;
  opacity: 0;
  visibility: hidden;
  -webkit-transform: scaleY(0);
          transform: scaleY(0);
}

.main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a {
  color: #515050;
}

.main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a:hover, .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a:focus, .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a.active {
  color: #f53f85;
}

.main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li.active a {
  color: #f53f85;
}

.main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  -webkit-transform: scaleY(1);
          transform: scaleY(1);
}

.main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li.active a {
  color: #f53f85;
}

.main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  -webkit-transform: scaleY(1);
          transform: scaleY(1);
}

.main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li.active a {
  color: #f53f85;
}

.main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  -webkit-transform: scaleY(1);
          transform: scaleY(1);
}

.main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li.active a {
  color: #f53f85;
}

.main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  -webkit-transform: scaleY(1);
          transform: scaleY(1);
}

.main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li.active a {
  color: #f53f85;
}

.main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  -webkit-transform: scaleY(1);
          transform: scaleY(1);
}

.main-nav .navbar .navbar-nav .nav-item .dropdown-menu li.active a {
  color: #f53f85;
}

.main-nav .navbar .navbar-nav .nav-item .dropdown-menu li:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  -webkit-transform: scaleY(1);
          transform: scaleY(1);
}

.main-nav .navbar .navbar-nav .nav-item:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  -webkit-transform: scaleX(1);
          transform: scaleX(1);
}

.main-nav .navbar .navbar-nav .nav-item.megamenu {
  position: inherit;
}

.main-nav .navbar .navbar-nav .nav-item.megamenu .container {
  display: block;
  -ms-flex-wrap: unset;
      flex-wrap: unset;
  -webkit-box-align: unset;
      -ms-flex-align: unset;
          align-items: unset;
  -webkit-box-pack: unset;
      -ms-flex-pack: unset;
          justify-content: unset;
}

.main-nav .navbar .navbar-nav .nav-item.megamenu .dropdown-menu {
  width: 100%;
  margin-top: 8px;
  position: absolute;
  top: auto;
  left: 0;
  padding: 30px 0;
  -webkit-transform: unset !important;
          transform: unset !important;
}

.main-nav .navbar .navbar-nav .nav-item.megamenu .dropdown-menu .submenu-title {
  color: #000000;
  position: relative;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 8px;
  text-transform: uppercase;
  margin-bottom: 20px;
  margin-top: 25px;
  font-size: 15.5px;
  font-weight: 600;
}

.main-nav .navbar .navbar-nav .nav-item.megamenu .dropdown-menu .submenu-title::before {
  width: 30px;
  height: 1px;
  content: '';
  position: absolute;
  left: 0;
  bottom: -1px;
  background-color: #f53f85;
}

.main-nav .navbar .navbar-nav .nav-item.megamenu .dropdown-menu .submenu-title:first-child {
  margin-top: 0;
}

.main-nav .navbar .navbar-nav .nav-item.megamenu .dropdown-menu a {
  border-bottom: none !important;
}

.main-nav .navbar .navbar-nav .nav-item.megamenu .dropdown-menu .megamenu-submenu li a {
  margin-top: 14px;
  color: #666666;
  padding: 0;
  font-weight: 400;
}

.main-nav .navbar .navbar-nav .nav-item.megamenu .dropdown-menu .megamenu-submenu li a:hover, .main-nav .navbar .navbar-nav .nav-item.megamenu .dropdown-menu .megamenu-submenu li a.active {
  color: #f53f85;
}

.main-nav .navbar .navbar-nav .nav-item.megamenu .dropdown-menu .megamenu-submenu .aside-trending-products {
  overflow: hidden;
  position: relative;
  text-align: center;
}

.main-nav .navbar .navbar-nav .nav-item.megamenu .dropdown-menu .megamenu-submenu .aside-trending-products img {
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.main-nav .navbar .navbar-nav .nav-item.megamenu .dropdown-menu .megamenu-submenu .aside-trending-products .category {
  position: absolute;
  left: 0;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
  padding: 15px;
  margin-left: 10px;
  margin-right: 10px;
}

.main-nav .navbar .navbar-nav .nav-item.megamenu .dropdown-menu .megamenu-submenu .aside-trending-products .category h4 {
  text-transform: uppercase;
  margin-bottom: 0;
  position: relative;
  z-index: 1;
  font-size: 15px;
  font-weight: 600;
}

.main-nav .navbar .navbar-nav .nav-item.megamenu .dropdown-menu .megamenu-submenu .aside-trending-products .link-btn {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  z-index: 3;
}

.main-nav .navbar .navbar-nav .nav-item.megamenu .dropdown-menu .megamenu-submenu .aside-trending-products:not(:first-child) {
  margin-top: 15px;
}

.main-nav .navbar .navbar-nav .nav-item.megamenu .dropdown-menu .megamenu-submenu .aside-trending-products:hover img {
  -webkit-transform: scale(1.3);
          transform: scale(1.3);
}

.main-nav .navbar .navbar-nav .nav-item.megamenu .dropdown-menu .megamenu-submenu .aside-trending-products:hover .category {
  bottom: 10px;
}

.main-nav .navbar .navbar-nav .nav-item.megamenu .dropdown-menu .brand-slides {
  margin-top: 30px;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
  border-left: 1px solid #eeeeee;
}

.main-nav .navbar .others-option .option-item {
  display: inline-block;
  margin-left: 15px;
  position: relative;
  z-index: 3;
}

.main-nav .navbar .others-option .option-item:first-child {
  margin-left: 0;
}

.main-nav .navbar .others-option .option-item .search-btn-box {
  position: relative;
  top: 1px;
}

.main-nav .navbar .others-option .option-item .search-btn-box .search-btn {
  font-size: 25px;
  cursor: pointer;
  color: #000000;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.main-nav .navbar .others-option .option-item .cart-btn {
  font-size: 25px;
  position: relative;
  line-height: 1;
}

.main-nav .navbar .others-option .option-item .cart-btn a {
  display: inline-block;
  position: relative;
  color: #000000;
}

.main-nav .navbar .others-option .option-item .cart-btn a span {
  position: absolute;
  right: -4px;
  top: -4px;
  width: 14px;
  height: 14px;
  text-align: center;
  line-height: 13.9px;
  border-radius: 50%;
  color: #ffffff;
  background-color: #f53f85;
  font-size: 10px;
  font-weight: 600;
}

.main-nav .navbar .others-option .option-item .burger-menu {
  cursor: pointer;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  position: relative;
  top: 4px;
  margin-left: 5px;
}

.main-nav .navbar .others-option .option-item .burger-menu span {
  height: 1px;
  width: 25px;
  background: #000000;
  display: block;
  margin: 6px 0;
  -webkit-transition: all .50s ease-in-out;
  transition: all .50s ease-in-out;
}

.main-nav .navbar .others-option .option-item .burger-menu.active span.top-bar {
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
  -webkit-transform-origin: 10% 10%;
          transform-origin: 10% 10%;
}

.main-nav .navbar .others-option .option-item .burger-menu.active span.middle-bar {
  opacity: 0;
}

.main-nav .navbar .others-option .option-item .burger-menu.active span.bottom-bar {
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
  -webkit-transform-origin: 10% 90%;
          transform-origin: 10% 90%;
  margin-top: 5px;
}

.navbar-toggler {
  border: none;
  background: #eee !important;
  padding: 10px;
  border-radius: 0;
}

.navbar-toggler .icon-bar {
  width: 28px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  background: #f53f85;
  height: 2px;
  display: block;
}

.navbar-toggler .top-bar {
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
  -webkit-transform-origin: 10% 10%;
          transform-origin: 10% 10%;
  left: 4px;
  position: relative;
}

.navbar-toggler .middle-bar {
  opacity: 0;
  margin: 6px 0;
}

.navbar-toggler .bottom-bar {
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
  -webkit-transform-origin: 10% 90%;
          transform-origin: 10% 90%;
  left: 4px;
  position: relative;
}

.navbar-toggler.collapsed .top-bar {
  -webkit-transform: rotate(0);
          transform: rotate(0);
  left: 0;
}

.navbar-toggler.collapsed .middle-bar {
  opacity: 1;
}

.navbar-toggler.collapsed .bottom-bar {
  -webkit-transform: rotate(0);
          transform: rotate(0);
  left: 0;
}

@media only screen and (max-width: 991px) {
  .navbar-area {
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .navbar-area.header-sticky {
    display: none;
  }
}

/*================================================
Search Overlay CSS
=================================================*/
.search-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99999;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all 400ms ease-in-out;
  transition: all 400ms ease-in-out;
  overflow: hidden;
}

.search-overlay .search-overlay-layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  -webkit-transform: translateX(100%);
          transform: translateX(100%);
}

.search-overlay .search-overlay-layer:nth-child(1) {
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-transition: all 400ms ease-in-out 0s;
  transition: all 400mss ease-in-out 0s;
}

.search-overlay .search-overlay-layer:nth-child(2) {
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-transition: all 400ms ease-in-out 400ms;
  transition: all 400ms ease-in-out 400ms;
}

.search-overlay .search-overlay-layer:nth-child(3) {
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  -webkit-transition: all 0.9s ease-in-out 0.6s;
  transition: all 0.9s ease-in-out 0.6s;
}

.search-overlay .search-overlay-close {
  position: absolute;
  top: 40px;
  right: 40px;
  width: 50px;
  z-index: 2;
  text-align: center;
  cursor: pointer;
  padding: 10px;
  -webkit-transition: all 0.4s ease-in-out 1.5s;
  transition: all 0.4s ease-in-out 0.5s;
  opacity: 0;
  visibility: hidden;
}

.search-overlay .search-overlay-close .search-overlay-close-line {
  width: 100%;
  height: 3px;
  float: left;
  margin-bottom: 5px;
  background-color: #ffffff;
  -webkit-transition: all 500ms ease;
  transition: all 400ms ease;
}

.search-overlay .search-overlay-close .search-overlay-close-line:nth-child(1) {
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}

.search-overlay .search-overlay-close .search-overlay-close-line:nth-child(2) {
  margin-top: -7px;
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
}

.search-overlay .search-overlay-close:hover .search-overlay-close-line {
  background: #f53f85;
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.search-overlay .search-overlay-form {
  -webkit-transition: all 0.9s ease-in-out 1.4s;
  transition: all 0.9s ease-in-out 1.4s;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translateY(-50%) translateX(-50%);
          transform: translateY(-50%) translateX(-50%);
  z-index: 2;
  max-width: 500px;
  width: 500px;
}

.search-overlay .search-overlay-form form {
  position: relative;
}

.search-overlay .search-overlay-form form .input-search {
  display: block;
  width: 100%;
  height: 55px;
  border: none;
  border-radius: 30px;
  padding-left: 20px;
  color: #000000;
  font-size: 15px;
}

.search-overlay .search-overlay-form form button {
  position: absolute;
  right: 5px;
  top: 5px;
  width: 45px;
  color: #ffffff;
  height: 45px;
  border-radius: 50%;
  background-color: #f53f85;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  border: none;
  font-size: 20px;
  line-height: 45px;
}

.search-overlay .search-overlay-form form button:hover {
  background-color: #000000;
  color: #ffffff;
}

.search-overlay.active.search-overlay {
  opacity: 1;
  visibility: visible;
}

.search-overlay.active.search-overlay .search-overlay-layer {
  -webkit-transform: translateX(0);
          transform: translateX(0);
}

.search-overlay.active.search-overlay .search-overlay-close {
  opacity: 1;
  visibility: visible;
}

.search-overlay.active.search-overlay .search-overlay-form {
  opacity: 1;
  visibility: visible;
}
.social-list {
  background-color: #05f;
  padding: 5px 7px 5px 7px;
  border-radius: 0.32em;
  margin-left: 7px;
  
}
/*================================================
Main Banner CSS
=================================================*/
.main-banner {
  height: 800px;
  position: relative;
  z-index: 1;
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
}
@media screen and (max-width: 800px){
  .main-banner {
  height: 75vh !important;
  position: relative;
  z-index: 1;
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
}

}
.banner-bg1 {
  background-image: url('https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FuZGxlJTIwdmFsZW50aW5lcyUyMGRheXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60');
}

.banner-bg2 {
  background-image: url('https://images.pexels.com/photos/5417666/pexels-photo-5417666.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500');
}

.banner-bg3 {
  background-image: url('https://images.unsplash.com/photo-1579621970936-fbac90155f8f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTU4fHxmbG93ZXJzJTIwcGV0YWxzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60');
}

.banner-bg4 {
  background-image: url('https://images.unsplash.com/photo-1532592068623-db1978e40df5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGNhbmRsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60');
}


.banner-section {
  height: 650px;
  position: relative;
  z-index: 1;
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
}

.banner-section .main-banner-content {
  max-width: 100%;
  margin-left: 0;
}

.main-banner-content .sub-title {
  display: block;
  margin-bottom: 7px;
  font-size: 17.5px;
  font-weight: 600;
}

.main-banner-content h1 {
  margin-bottom: 12px;
  font-size: 65px;
  font-weight: 700;
}

.main-banner-content p {
  color: #000000;
  font-weight: 500;
  font-size: 17px;
}

.main-banner-content .btn-box {
  margin-top: 28px;
}

.main-banner-content .btn-box .optional-btn {
  margin-left: 15px;
}

.main-banner-content.text-white .submenu-title {
  color: #ffffff;
}

.main-banner-content.text-white h1 {
  color: #ffffff;
}

.main-banner-content.text-white p {
  color: #ffffff;
  opacity: 0.92;
}

.main-banner-content.text-white .btn-box .default-btn {
  background-color: #ffffff;
  color: #000000;
  border-color: #ffffff;
}

.main-banner-content.text-white .btn-box .default-btn:hover {
  color: #ffffff;
  background-color: #000000;
  border-color: #000000;
}

.main-banner-content.text-white .btn-box .optional-btn {
  border-color: #ffffff;
  color: #ffffff;
}

.main-banner-content.text-white .btn-box .optional-btn:hover {
  color: #ffffff;
  background-color: #000000;
  border-color: #000000;
}

.main-banner-content.text-center .btn-box .optional-btn {
  margin-left: 10px;
}

.main-banner-content.text-center .btn-box .default-btn {
  margin-right: 10px;
}

.banner-content {
  position: relative;
  overflow: hidden;
  padding: 55px;
  max-width: 640px;
  z-index: 1;
  margin-left: auto;
}

.banner-content .line {
  top: 0;
  left: 0;
  content: "";
  z-index: -1;
  width: 100%;
  height: 100%;
  position: absolute;
  display: inline-block;
  border: 9px solid #000000;
  -webkit-clip-path: polygon(0 0, 60% 0, 36% 100%, 0 100%);
          clip-path: polygon(0 0, 60% 0, 36% 100%, 0 100%);
}

.banner-content .sub-title {
  display: block;
  font-weight: 300;
  font-size: 30px;
}

.banner-content h1 {
  margin: 12px 0 20px;
  font-size: 65px;
  font-weight: 700;
}

.banner-content p {
  color: #000000;
  max-width: 495px;
  line-height: 1.6;
  font-size: 20px;
  font-weight: 300;
}

.banner-content .btn-box {
  margin-top: 25px;
}

.banner-content .btn-box .optional-btn {
  margin-left: 15px;
}

.banner-content.text-white .submenu-title {
  color: #ffffff;
}

.banner-content.text-white .line {
  border-color: #ffffff;
}

.banner-content.text-white h1 {
  color: #ffffff;
}

.banner-content.text-white p {
  color: #ffffff;
  opacity: 0.92;
}

.banner-content.text-white .btn-box .default-btn {
  background-color: #ffffff;
  color: #000000;
  border-color: #ffffff;
}

.banner-content.text-white .btn-box .default-btn:hover {
  color: #ffffff;
  background-color: #000000;
  border-color: #000000;
}

.banner-content.text-white .btn-box .optional-btn {
  border-color: #ffffff;
  color: #ffffff;
}

.banner-content.text-white .btn-box .optional-btn:hover {
  color: #ffffff;
  background-color: #000000;
  border-color: #000000;
}

.hero-banner {
  padding-top: 30px;
  position: relative;
  z-index: 1;
  background-color: #f4f4f4;
}

.hero-banner .main-banner-content {
  max-width: 100%;
  margin-left: 0;
}

.banner-image {
  text-align: center;
  position: relative;
  z-index: 1;
}

.banner-image .circle {
  width: 470px;
  height: 470px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.6);
  z-index: -1;
  position: absolute;
  left: 0;
  top: 5%;
  right: 0;
  margin: 0 auto;
}

.banner-image img {
  width: unset !important;
  display: inline-block !important;
}

.owl-item.active .banner-content .sub-title {
  -webkit-animation-duration: 1s;
          animation-duration: 1s;
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
  -webkit-animation-name: fadeInDown;
          animation-name: fadeInDown;
  -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s;
}

.owl-item.active .banner-content h1 {
  -webkit-animation-duration: 1s;
          animation-duration: 1s;
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
  -webkit-animation-name: fadeInDown;
          animation-name: fadeInDown;
  -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s;
}

.owl-item.active .banner-content p {
  -webkit-animation-duration: 1s;
          animation-duration: 1s;
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
  -webkit-animation-name: fadeInUp;
          animation-name: fadeInUp;
  -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s;
}

.owl-item.active .banner-content .btn-box {
  -webkit-animation-duration: 1s;
          animation-duration: 1s;
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
  -webkit-animation-name: fadeInUp;
          animation-name: fadeInUp;
  -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s;
}

.owl-item.active .banner-content .line {
  -webkit-animation-duration: 1s;
          animation-duration: 1s;
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
  -webkit-animation-name: fadeInLeft;
          animation-name: fadeInLeft;
  -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s;
}

.home-slides.owl-theme .owl-nav {
  margin-top: 0;
}

.home-slides.owl-theme .owl-nav [class*=owl-] {
  color: #000000;
  font-size: 45px;
  margin: 0;
  padding: 0;
  background: transparent;
  display: inline-block;
  border-radius: 0;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  position: absolute;
  left: 0;
  top: 50%;
  opacity: 0;
  visibility: hidden;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
}

.home-slides.owl-theme .owl-nav [class*=owl-].owl-next {
  left: auto;
  right: 0;
}

.home-slides.owl-theme .owl-nav [class*=owl-]:hover {
  color: #000000;
  -webkit-transform: translateX(-10px) translateY(-50%);
          transform: translateX(-10px) translateY(-50%);
}

.home-slides.owl-theme .owl-nav [class*=owl-]:hover.owl-next {
  -webkit-transform: translateX(10px) translateY(-50%);
          transform: translateX(10px) translateY(-50%);
}

.home-slides.owl-theme .owl-dots {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 20px;
}

.home-slides.owl-theme .owl-dots .owl-dot span {
  width: 15px;
  height: 15px;
  margin: 0 4px;
  background: transparent;
  position: relative;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  border-radius: 50%;
  border: 1px solid transparent;
}

.home-slides.owl-theme .owl-dots .owl-dot span::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  background-color: #000000;
  margin: 2px;
}

.home-slides.owl-theme .owl-dots .owl-dot:hover span, .home-slides.owl-theme .owl-dots .owl-dot.active span {
  border-color: #000000;
}

.home-slides.owl-theme:hover .owl-nav [class*=owl-] {
  left: 20px;
  opacity: 1;
  visibility: visible;
}

.home-slides.owl-theme:hover .owl-nav [class*=owl-].owl-next {
  left: auto;
  right: 20px;
}

.home-slides-two.owl-theme .owl-nav {
  margin-top: 0;
}

.home-slides-two.owl-theme .owl-nav [class*=owl-] {
  color: #ffffff;
  font-size: 45px;
  margin: 0;
  padding: 0;
  background: transparent;
  display: inline-block;
  border-radius: 0;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  position: absolute;
  left: 0;
  top: 50%;
  opacity: 0;
  visibility: hidden;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
}

.home-slides-two.owl-theme .owl-nav [class*=owl-].owl-next {
  left: auto;
  right: 0;
}

.home-slides-two.owl-theme .owl-nav [class*=owl-]:hover {
  color: #ffffff;
  -webkit-transform: translateX(-10px) translateY(-50%);
          transform: translateX(-10px) translateY(-50%);
}

.home-slides-two.owl-theme .owl-nav [class*=owl-]:hover.owl-next {
  -webkit-transform: translateX(10px) translateY(-50%);
          transform: translateX(10px) translateY(-50%);
}

.home-slides-two.owl-theme .owl-dots {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 20px;
}

.home-slides-two.owl-theme .owl-dots .owl-dot span {
  width: 15px;
  height: 15px;
  margin: 0 4px;
  background: transparent;
  position: relative;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  border-radius: 50%;
  border: 1px solid transparent;
}

.home-slides-two.owl-theme .owl-dots .owl-dot span::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  background-color: #000000;
  margin: 2px;
}

.home-slides-two.owl-theme .owl-dots .owl-dot:hover span, .home-slides-two.owl-theme .owl-dots .owl-dot.active span {
  border-color: #000000;
}

.home-slides-two.owl-theme:hover .owl-nav [class*=owl-] {
  left: 20px;
  opacity: 1;
  visibility: visible;
}

.home-slides-two.owl-theme:hover .owl-nav [class*=owl-].owl-next {
  left: auto;
  right: 20px;
}

.home-slides-three.owl-theme .owl-dots {
  position: absolute;
  right: 20px;
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  margin-top: 0 !important;
}

.home-slides-three.owl-theme .owl-dots .owl-dot {
  display: block;
}

.home-slides-three.owl-theme .owl-dots .owl-dot span {
  width: 15px;
  height: 15px;
  background: transparent;
  position: relative;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  border-radius: 50%;
  border: 1px solid transparent;
  margin-left: 0;
  margin-right: 0;
  margin-top: 3px;
  margin-bottom: 3px;
}

.home-slides-three.owl-theme .owl-dots .owl-dot span::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  background-color: #000000;
  margin: 2px;
}

.home-slides-three.owl-theme .owl-dots .owl-dot:hover span, .home-slides-three.owl-theme .owl-dots .owl-dot.active span {
  border-color: #000000;
}

/*================================================
About CSS
=================================================*/
.about-area {
  position: relative;
  z-index: 1;
}

.about-image {
  position: relative;
  padding-right: 100px;
  padding-bottom: 50px;
}

.about-image img {
  border-radius: 5px;
}

.about-image img:nth-child(2) {
  position: absolute;
  right: 10px;
  bottom: 0;
  z-index: 1;
}

.about-content {
  padding-left: 15px;
}

.about-content .sub-title {
  display: block;
  margin-bottom: 8px;
  color: #f53f85;
  font-weight: 600;
}

.about-content h2 {
  margin-bottom: 15px;
  line-height: 1.3;
  font-size: 35px;
  font-weight: 700;
}

.about-content h6 {
  margin-bottom: 14px;
  line-height: 1.6;
  font-size: 16px;
}

.about-content .features-text {
  margin-top: 25px;
}

.about-content .features-text h5 {
  margin-bottom: 22px;
  position: relative;
  font-size: 17px;
  font-weight: 600;
  padding-left: 47px;
  padding-top: 7px;
}

.about-content .features-text i {
  position: absolute;
  left: 0;
  top: 0;
  width: 35px;
  height: 35px;
  background-color: #f53f85;
  text-align: center;
  line-height: 35px;
  color: #ffffff;
  font-size: 20px;
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 50%;
}

.about-inner-area {
  margin-top: 80px;
}

.about-text h3 {
  position: relative;
  margin-bottom: 20px;
  padding-bottom: 8px;
  border-bottom: 1px solid #eeeeee;
  font-size: 22px;
  font-weight: 700;
}

.about-text h3::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 50px;
  background-color: #f53f85;
  height: 1px;
}

.about-text p {
  color: #000000;
  font-size: 16px;
}

.about-text .features-list {
  padding-left: 0;
  list-style-type: none;
  margin-top: 20px;
  margin-bottom: 0;
}

.about-text .features-list li {
  position: relative;
  margin-bottom: 13px;
  color: #000000;
  padding-left: 30px;
}

.about-text .features-list li i {
  font-size: 16px;
  color: #000000;
  background-color: #eaeaf2;
  width: 20px;
  height: 20px;
  line-height: 20px;
  border-radius: 50%;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  text-align: center;
  position: absolute;
  left: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
}

.about-text .features-list li:last-child {
  margin-bottom: 0;
}

.about-text .features-list li:hover i {
  background-color: #f53f85;
  color: #ffffff;
}

/*================================================
Categories Banner CSS
=================================================*/
.single-categories-box {
  margin-bottom: 30px;
  overflow: hidden;
  border-radius: 5px;
  position: relative;
}

.single-categories-box img {
  -webkit-transition: 0.5s;
  transition: 0.5s;
  border-radius: 5px;
  width: 100%;
  max-height: 14em;
}

.single-categories-box .content {
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 25px 25px 0;
  text-align: right;
}

.single-categories-box .content span {
  display: block;
  margin-bottom: 8px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  color: #f53f85;
  font-weight: 600;
  -webkit-transform: translateY(12px);
          transform: translateY(12px);
}

.single-categories-box .content h3 {
  margin-bottom: 0;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  -webkit-transform: translateY(12px);
          transform: translateY(12px);
  font-size: 30px;
  font-weight: 700;
}

.single-categories-box .content .default-btn {
  background-color: transparent;
  color: #000000;
  border-color: #000000;
  opacity: 0;
  visibility: hidden;
  -webkit-transform: translateY(10px);
          transform: translateY(10px);
}

.single-categories-box .content.text-white span {
  color: #ffffff;
}

.single-categories-box .content.text-white h3 {
  color: #ffffff;
}

.single-categories-box .link-btn {
  display: block;
  width: 100%;
  height: 100%;
  z-index: 2;
  left: 0;
  top: 0;
  position: absolute;
}

.single-categories-box:hover img {
  -webkit-transform: scale(1.07);
          transform: scale(1.07);
}

.single-categories-box:hover .content span {
  -webkit-transform: translateY(-30px);
          transform: translateY(-30px);
}

.single-categories-box:hover .content h3 {
  -webkit-transform: translateY(-30px);
          transform: translateY(-30px);
}

.single-categories-box:hover .content .default-btn {
  background-color: #f53f85;
  color: #ffffff;
  border-color: #f53f85;
  opacity: 1;
  visibility: visible;
  -webkit-transform: translateY(-15px);
          transform: translateY(-15px);
}

.categories-box {
  margin-bottom: 30px;
  overflow: hidden;
  position: relative;
}

.categories-box img {
  -webkit-transition: 0.5s;
  transition: 0.5s;
  width: 100%;
}

.categories-box .link-btn {
  display: block;
  width: 100%;
  height: 100%;
  z-index: 2;
  left: 0;
  top: 0;
  position: absolute;
}

.categories-box .content {
  position: absolute;
  top: 30px;
  left: 30px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  background-color: #ffffff;
  -webkit-box-shadow: 1px 1px 3px rgba(136, 136, 136, 0.19);
          box-shadow: 1px 1px 3px rgba(136, 136, 136, 0.19);
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 25px;
  padding-right: 25px;
}

.categories-box .content h3 {
  margin-bottom: 0;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  font-size: 20px;
  font-weight: 700;
  font-style: italic;
}

.categories-box:hover img {
  -webkit-transform: scale(1.07);
          transform: scale(1.07);
}

.categories-box:hover .content {
  background-color: #f53f85;
}

.categories-box:hover .content h3 {
  color: #ffffff;
}

/*================================================
Products CSS
=================================================*/
.all-products-area .container .container {
  max-width: 100%;
  padding-left: 30px;
  padding-right: 30px;
}

.all-products-area .facility-area {
  margin-bottom: 30px;
  background-color: #ffffff;
}

.all-products-area .products-area {
  margin-bottom: 30px;
  background-color: #ffffff;
}

.all-products-area .facility-slides.owl-theme .owl-nav [class*=owl-] {
  color: #87a1c1;
  background-color: #ffffff;
  border-color: #ffffff;
}

.all-products-area .facility-slides.owl-theme .owl-nav [class*=owl-]:hover {
  background-color: #f53f85;
  color: #ffffff;
  border-color: #f53f85;
}

.all-products-area .brand-area {
  background-color: #ffffff;
}

.all-products-area .brand-item a {
  background-color: #f5f5f5;
  border-color: #e7e4e4;
}

.all-products-area .categories-banner-area {
  background-color: #ffffff;
  margin-bottom: 30px;
}

.all-products-area .ptb-100 {
  padding-top: 30px;
  padding-bottom: 30px;
}

.all-products-area .pb-70 {
  padding-bottom: 0;
}

.all-products-area .pt-100 {
  padding-top: 30px;
}

.all-products-area .pb-100 {
  padding-bottom: 30px;
}

.single-products-box {
  position: relative;
  margin-bottom: 30px;
}

.single-products-box .products-image {
  text-align: center;
  position: relative;
  overflow: hidden;
}

.single-products-box .products-image a {
  position: relative;
  display: block;
}

.single-products-box .products-image a img {
  -webkit-transition: .8s;
  transition: .8s;
}

.single-products-box .products-image a .hover-image {
  position: absolute;
  left: 0;
  right: 0;
  opacity: 0;
  visibility: hidden;
  -webkit-transform: scale(1.07);
          transform: scale(1.07);
}

.single-products-box .products-image .products-button {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1;
}

.single-products-box .products-image .products-button ul {
  padding-left: 0;
  margin-bottom: 0;
  list-style-type: none;
}

.single-products-box .products-image .products-button ul li {
  margin-bottom: 8px;
  opacity: 0;
  visibility: hidden;
  -webkit-transform: translateX(30px);
          transform: translateX(30px);
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.single-products-box .products-image .products-button ul li a {
  display: inline-block;
  font-size: 25px;
  line-height: 1;
  color: #000000;
  position: relative;
}

.single-products-box .products-image .products-button ul li a:hover {
  color: #f53f85;
}

.single-products-box .products-image .products-button ul li a .tooltip-label {
  right: 110%;
  top: 45%;
  -webkit-transform: translateX(0) translateY(-45%);
          transform: translateX(0) translateY(-45%);
  position: absolute;
  padding: 0 10px;
  line-height: 28px;
  font-size: 12px;
  letter-spacing: .3px;
  visibility: hidden;
  white-space: nowrap;
  opacity: 0;
  color: transparent;
  background-color: transparent;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
  background-color: #f53f85;
  color: #ffffff;
}

.single-products-box .products-image .products-button ul li a .tooltip-label::before {
  content: "\e9ff";
  color: #f53f85;
  top: 50%;
  position: absolute;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
  right: -13px;
  font-family: "boxicons" !important;
  font-weight: normal;
  font-style: normal;
  font-size: 20px;
}

.single-products-box .products-image .products-button ul li a:hover .tooltip-label {
  visibility: visible;
  opacity: 1;
  right: 135%;
}

.single-products-box .products-image .products-button ul li:last-child {
  margin-bottom: 0;
}

.single-products-box .products-image .products-button ul li:nth-child(1) {
  -webkit-transition-delay: 0.1s;
          transition-delay: 0.1s;
}

.single-products-box .products-image .products-button ul li:nth-child(2) {
  -webkit-transition-delay: 0.2s;
          transition-delay: 0.2s;
}

.single-products-box .products-image .products-button ul li:nth-child(3) {
  -webkit-transition-delay: 0.3s;
          transition-delay: 0.3s;
}

.single-products-box .products-image .sale-tag {
  position: absolute;
  right: 20px;
  top: 20px;
  background-color: red;
  color: #ffffff;
  width: 55px;
  height: 55px;
  line-height: 55px;
  text-align: center;
  border-radius: 50%;
  z-index: 2;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
}

.single-products-box .products-image .new-tag {
  position: absolute;
  left: 20px;
  top: 20px;
  background-color: green;
  color: #ffffff;
  text-align: center;
  z-index: 2;
  padding: 1px 7px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
}

.single-products-box .products-content {
  margin-top: 20px;
  position: relative;
}

.single-products-box .products-content h3 {
  margin-bottom: 0;
  font-size: 20px;
  font-weight: 600;
}

.single-products-box .products-content h3 a {
  display: inline-block;
  color: #000000;
}

.single-products-box .products-content h3 a:hover {
  color: #f53f85;
}

.single-products-box .products-content .price {
  margin-top: 8px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  font-size: 15px;
  font-weight: 600;
}

.single-products-box .products-content .price .old-price {
  text-decoration: line-through;
  color: #999999;
  font-weight: 500;
  margin-right: 10px;
}

.single-products-box .products-content .star-rating {
  position: absolute;
  right: 0;
  bottom: 0;
  color: #f49f0b;
}

.single-products-box .products-content .star-rating i {
  display: inline-block;
}

.single-products-box .products-content .add-to-cart {
  position: absolute;
  left: 0;
  bottom: 0;
  text-transform: uppercase;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  display: inline-block;
  color: #777777;
  opacity: 0;
  visibility: hidden;
  -webkit-transform: translateX(20px);
          transform: translateX(20px);
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
}

.single-products-box .products-content .add-to-cart:hover {
  color: #f53f85;
}

.single-products-box .products-content .products-discount {
  position: absolute;
  top: -6.1px;
  right: 10px;
  display: inline-block;
}

.single-products-box .products-content .products-discount span {
  position: relative;
  display: block;
  text-align: center;
  line-height: 1;
  padding: 12px 8px 10px;
  border-top-right-radius: 8px;
  width: 90px;
  background-color: red;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
}

.single-products-box .products-content .products-discount span:before {
  height: 6px;
  width: 6px;
  left: -6px;
  position: absolute;
  content: "";
  top: 0;
  background: red;
}

.single-products-box .products-content .products-discount span:after {
  position: absolute;
  content: "";
  height: 6px;
  width: 8px;
  left: -8px;
  top: 0;
  border-radius: 8px 8px 0 0;
  background: red;
}

.single-products-box .products-discount {
  position: absolute;
  top: -6.1px;
  left: 10px;
  display: inline-block;
}

.single-products-box .products-discount span {
  position: relative;
  display: block;
  text-align: center;
  line-height: 1;
  padding: 12px 8px 10px;
  border-top-left-radius: 8px;
  width: 90px;
  background-color: red;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
}

.single-products-box .products-discount span:before {
  height: 6px;
  width: 6px;
  right: -6px;
  position: absolute;
  content: "";
  top: 0;
  background: red;
}

.single-products-box .products-discount span:after {
  position: absolute;
  content: "";
  height: 6px;
  width: 8px;
  right: -8px;
  top: 0;
  border-radius: 8px 8px 0 0;
  background: red;
}

.single-products-box:hover .products-content .price {
  opacity: 0;
  visibility: hidden;
}

.single-products-box:hover .products-content .add-to-cart {
  -webkit-transform: translateX(0);
          transform: translateX(0);
  opacity: 1;
  visibility: visible;
}

.single-products-box:hover .products-image a .main-image {
  opacity: 0;
  visibility: hidden;
  -webkit-transform: scale(1.07);
          transform: scale(1.07);
}

.single-products-box:hover .products-image a .hover-image {
  opacity: 1;
  visibility: visible;
  -webkit-transform: scale(1);
          transform: scale(1);
}

.single-products-box:hover .products-image .products-button ul li {
  -webkit-transform: translateX(0);
          transform: translateX(0);
  opacity: 1;
  visibility: visible;
}

.products-box {
  margin-bottom: 30px;
  position: relative;
}

.products-box .products-image {
  text-align: center;
  position: relative;
  overflow: hidden;
}

.products-box .products-image a {
  position: relative;
  display: block;
}

.products-box .products-image a img {
  -webkit-transition: .8s;
  transition: .8s;
}

.products-box .products-image a .hover-image {
  position: absolute;
  left: 0;
  right: 0;
  opacity: 0;
  visibility: hidden;
  -webkit-transform: scale(1.07);
          transform: scale(1.07);
}

.products-box .products-image .products-button {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  -webkit-transform: translateX(-50%) translateY(-50%);
          transform: translateX(-50%) translateY(-50%);
}

.products-box .products-image .products-button ul {
  padding-left: 0;
  margin-bottom: 0;
  list-style-type: none;
}

.products-box .products-image .products-button ul li {
  opacity: 0;
  visibility: hidden;
  display: inline-block;
  -webkit-transform: translateX(30px);
          transform: translateX(30px);
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
  margin-left: 3px;
  margin-right: 3px;
}

.products-box .products-image .products-button ul li a {
  display: inline-block;
  font-size: 22px;
  line-height: 1;
  color: #000000;
  position: relative;
  width: 40px;
  border-radius: 50%;
  line-height: 43px;
  -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
          box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  height: 40px;
}

.products-box .products-image .products-button ul li a:hover {
  background-color: #f53f85;
  color: #ffffff;
}

.products-box .products-image .products-button ul li a .tooltip-label {
  right: 50%;
  top: -15px;
  -webkit-transform: translateX(50%);
          transform: translateX(50%);
  position: absolute;
  padding: 0 10px;
  line-height: 28px;
  font-size: 12px;
  letter-spacing: .3px;
  visibility: hidden;
  white-space: nowrap;
  opacity: 0;
  color: transparent;
  background-color: transparent;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
  background-color: #000000;
  color: #ffffff;
}

.products-box .products-image .products-button ul li a .tooltip-label::before {
  content: "\e9ff";
  color: #000000;
  left: 50%;
  position: absolute;
  -webkit-transform: translateX(-50%) rotate(90deg);
          transform: translateX(-50%) rotate(90deg);
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
  bottom: -16px;
  font-family: "boxicons" !important;
  font-weight: normal;
  font-style: normal;
  font-size: 20px;
}

.products-box .products-image .products-button ul li a:hover .tooltip-label {
  visibility: visible;
  opacity: 1;
  top: -45px;
}

.products-box .products-image .products-button ul li:nth-child(1) {
  -webkit-transition-delay: 0.1s;
          transition-delay: 0.1s;
}

.products-box .products-image .products-button ul li:nth-child(2) {
  -webkit-transition-delay: 0.2s;
          transition-delay: 0.2s;
}

.products-box .products-image .products-button ul li:nth-child(3) {
  -webkit-transition-delay: 0.3s;
          transition-delay: 0.3s;
}

.products-box .products-image .sale-tag {
  position: absolute;
  left: 20px;
  top: 20px;
  background-color: red;
  color: #ffffff;
  width: 55px;
  height: 55px;
  line-height: 55px;
  text-align: center;
  border-radius: 50%;
  z-index: 2;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
}

.products-box .products-image .new-tag {
  position: absolute;
  left: 20px;
  top: 20px;
  background-color: green;
  color: #ffffff;
  text-align: center;
  z-index: 2;
  padding: 1px 7px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
}

.products-box .products-content {
  margin-top: 20px;
  position: relative;
}

.products-box .products-content .category {
  display: block;
  margin-bottom: 7px;
  text-transform: uppercase;
  color: #f53f85;
  font-weight: 600;
  font-size: 14px;
}

.products-box .products-content h3 {
  margin-bottom: 0;
  font-size: 20px;
  font-weight: 600;
}

.products-box .products-content h3 a {
  display: inline-block;
  color: #000000;
}

.products-box .products-content h3 a:hover {
  color: #f53f85;
}

.products-box .products-content .price {
  -webkit-transition: 0.5s;
  transition: 0.5s;
  margin-top: 8px;
  font-size: 15px;
  font-weight: 600;
}

.products-box .products-content .price .old-price {
  text-decoration: line-through;
  color: #999999;
  font-weight: 500;
  margin-right: 10px;
}

.products-box .products-content .star-rating {
  color: #f49f0b;
  position: absolute;
  right: 0;
  bottom: 0;
}

.products-box .products-content .star-rating i {
  display: inline-block;
}

.products-box .products-content .add-to-cart {
  position: absolute;
  left: 0;
  bottom: 0;
  text-transform: uppercase;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  display: inline-block;
  color: #777777;
  opacity: 0;
  visibility: hidden;
  -webkit-transform: translateX(20px);
          transform: translateX(20px);
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
}

.products-box .products-content .add-to-cart:hover {
  color: #f53f85;
}

.products-box .products-discount {
  position: absolute;
  top: -6.1px;
  right: 10px;
  display: inline-block;
}

.products-box .products-discount span {
  position: relative;
  display: block;
  text-align: center;
  line-height: 1;
  padding: 12px 8px 10px;
  border-top-right-radius: 8px;
  width: 90px;
  background-color: red;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
}

.products-box .products-discount span:before {
  height: 6px;
  width: 6px;
  left: -6px;
  position: absolute;
  content: "";
  top: 0;
  background: red;
}

.products-box .products-discount span:after {
  position: absolute;
  content: "";
  height: 6px;
  width: 8px;
  left: -8px;
  top: 0;
  border-radius: 8px 8px 0 0;
  background: red;
}

.products-box:hover .products-content .price {
  opacity: 0;
  visibility: hidden;
}

.products-box:hover .products-content .add-to-cart {
  -webkit-transform: translateX(0);
          transform: translateX(0);
  opacity: 1;
  visibility: visible;
}

.products-box:hover .products-image a .main-image {
  opacity: 0;
  visibility: hidden;
  -webkit-transform: scale(1.07);
          transform: scale(1.07);
}

.products-box:hover .products-image a .hover-image {
  opacity: 1;
  visibility: visible;
  -webkit-transform: scale(1);
          transform: scale(1);
}

.products-box:hover .products-image .products-button ul li {
  -webkit-transform: translateX(0);
          transform: translateX(0);
  opacity: 1;
  visibility: visible;
}

.single-productsBox {
  margin-bottom: 30px;
  position: relative;
  text-align: center;
}

.single-productsBox .products-image {
  position: relative;
  overflow: hidden;
}

.single-productsBox .products-image a {
  position: relative;
  display: block;
}

.single-productsBox .products-image a img {
  -webkit-transition: .8s;
  transition: .8s;
}

.single-productsBox .products-image a .hover-image {
  position: absolute;
  left: 0;
  right: 0;
  opacity: 0;
  visibility: hidden;
  -webkit-transform: scale(1.07);
          transform: scale(1.07);
}

.single-productsBox .products-image .products-button {
  position: absolute;
  left: 50%;
  z-index: 1;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
  bottom: 20px;
}

.single-productsBox .products-image .products-button ul {
  padding-left: 0;
  margin-bottom: 0;
  list-style-type: none;
}

.single-productsBox .products-image .products-button ul li {
  opacity: 0;
  visibility: hidden;
  display: inline-block;
  -webkit-transform: translateX(30px);
          transform: translateX(30px);
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
  margin-left: 3px;
  margin-right: 3px;
}

.single-productsBox .products-image .products-button ul li a {
  display: inline-block;
  font-size: 22px;
  line-height: 1;
  color: #000000;
  position: relative;
  width: 40px;
  border-radius: 50%;
  line-height: 43px;
  -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
          box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  height: 40px;
}

.single-productsBox .products-image .products-button ul li a:hover {
  background-color: #f53f85;
  color: #ffffff;
}

.single-productsBox .products-image .products-button ul li a .tooltip-label {
  right: 50%;
  top: -15px;
  -webkit-transform: translateX(50%);
          transform: translateX(50%);
  position: absolute;
  padding: 0 10px;
  line-height: 28px;
  font-size: 12px;
  letter-spacing: .3px;
  visibility: hidden;
  white-space: nowrap;
  opacity: 0;
  color: transparent;
  background-color: transparent;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
  background-color: #000000;
  color: #ffffff;
}

.single-productsBox .products-image .products-button ul li a .tooltip-label::before {
  content: "\e9ff";
  color: #000000;
  left: 50%;
  position: absolute;
  -webkit-transform: translateX(-50%) rotate(90deg);
          transform: translateX(-50%) rotate(90deg);
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
  bottom: -16px;
  font-family: "boxicons" !important;
  font-weight: normal;
  font-style: normal;
  font-size: 20px;
}

.single-productsBox .products-image .products-button ul li a:hover .tooltip-label {
  visibility: visible;
  opacity: 1;
  top: -45px;
}

.single-productsBox .products-image .products-button ul li:nth-child(1) {
  -webkit-transition-delay: 0.1s;
          transition-delay: 0.1s;
}

.single-productsBox .products-image .products-button ul li:nth-child(2) {
  -webkit-transition-delay: 0.2s;
          transition-delay: 0.2s;
}

.single-productsBox .products-image .products-button ul li:nth-child(3) {
  -webkit-transition-delay: 0.3s;
          transition-delay: 0.3s;
}

.single-productsBox .products-image .sale-tag {
  position: absolute;
  left: 20px;
  top: 20px;
  background-color: red;
  color: #ffffff;
  width: 55px;
  height: 55px;
  line-height: 55px;
  text-align: center;
  border-radius: 50%;
  z-index: 2;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
}

.single-productsBox .products-image .new-tag {
  position: absolute;
  left: 20px;
  top: 20px;
  background-color: green;
  color: #ffffff;
  text-align: center;
  z-index: 2;
  padding: 1px 7px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
}

.single-productsBox .products-content {
  margin-top: 20px;
  position: relative;
}

.single-productsBox .products-content .category {
  display: block;
  margin-bottom: 7px;
  text-transform: uppercase;
  color: #f53f85;
  font-weight: 600;
  font-size: 14px;
}

.single-productsBox .products-content h3 {
  margin-bottom: 0;
  font-size: 20px;
  font-weight: 600;
}

.single-productsBox .products-content h3 a {
  display: inline-block;
  color: #000000;
}

.single-productsBox .products-content h3 a:hover {
  color: #f53f85;
}

.single-productsBox .products-content .price {
  -webkit-transition: 0.5s;
  transition: 0.5s;
  margin-top: 8px;
  font-size: 15px;
  font-weight: 600;
}

.single-productsBox .products-content .price .old-price {
  text-decoration: line-through;
  color: #999999;
  font-weight: 500;
}

.single-productsBox .products-content .star-rating {
  color: #f49f0b;
  margin-top: 8px;
}

.single-productsBox .products-content .star-rating i {
  display: inline-block;
  margin-left: -2px;
}

.single-productsBox .products-content .add-to-cart {
  position: absolute;
  left: 50%;
  bottom: 0;
  text-transform: uppercase;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  display: inline-block;
  color: #777777;
  opacity: 0;
  visibility: hidden;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
  margin-left: 15px;
  font-size: 14px;
  font-weight: 600;
}

.single-productsBox .products-content .add-to-cart:hover {
  color: #f53f85;
}

.single-productsBox .products-discount {
  position: absolute;
  top: -6.1px;
  right: 10px;
  display: inline-block;
}

.single-productsBox .products-discount span {
  position: relative;
  display: block;
  text-align: center;
  line-height: 1;
  padding: 12px 8px 10px;
  border-top-right-radius: 8px;
  width: 90px;
  background-color: red;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
}

.single-productsBox .products-discount span:before {
  height: 6px;
  width: 6px;
  left: -6px;
  position: absolute;
  content: "";
  top: 0;
  background: red;
}

.single-productsBox .products-discount span:after {
  position: absolute;
  content: "";
  height: 6px;
  width: 8px;
  left: -8px;
  top: 0;
  border-radius: 8px 8px 0 0;
  background: red;
}

.single-productsBox:hover .products-content .price {
  opacity: 0;
  visibility: hidden;
}

.single-productsBox:hover .products-content .add-to-cart {
  opacity: 1;
  margin-left: 0;
  visibility: visible;
}

.single-productsBox:hover .products-image a .main-image {
  opacity: 0;
  visibility: hidden;
  -webkit-transform: scale(1.07);
          transform: scale(1.07);
}

.single-productsBox:hover .products-image a .hover-image {
  opacity: 1;
  visibility: visible;
  -webkit-transform: scale(1);
          transform: scale(1);
}

.single-productsBox:hover .products-image .products-button ul li {
  -webkit-transform: translateX(0);
          transform: translateX(0);
  opacity: 1;
  visibility: visible;
}

.products-slides .single-products-box .products-image a img {
  width: auto !important;
  display: inline-block !important;
}

.products-slides .single-products-box .products-image .new-tag {
  top: 45px;
}

.products-slides .single-products-box .products-discount {
  top: 0;
}

.products-slides.owl-theme .owl-nav {
  margin-top: 0;
}

.products-slides.owl-theme .owl-nav [class*=owl-] {
  color: #87a1c1;
  font-size: 20px;
  background-color: #ffffff;
  margin: 0;
  padding: 0;
  width: 50px;
  height: 50px;
  line-height: 48px;
  position: absolute;
  left: 0;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  opacity: 0;
  visibility: hidden;
  border-radius: 50%;
  border-style: solid;
  border-color: #ffffff;
  border-width: 1.5px;
}

.products-slides.owl-theme .owl-nav [class*=owl-].owl-next {
  left: auto;
  right: 0;
}

.products-slides.owl-theme .owl-nav [class*=owl-]:hover {
  background-color: #f53f85;
  color: #ffffff;
  border-color: #f53f85;
}

.products-slides.owl-theme:hover .owl-nav [class*=owl-] {
  left: -30px;
  opacity: 1;
  visibility: visible;
}

.products-slides.owl-theme:hover .owl-nav [class*=owl-].owl-next {
  left: auto;
  right: -30px;
}

.products-collections-area .container-fluid {
  width: 90%;
}

.products-filter-options {
  margin-bottom: 25px;
}

.products-filter-options .products-ordering-list .nice-select {
  background-color: transparent;
  border: none;
  height: 40px;
  line-height: 40px;
  color: #777777;
  font-size: 15px;
  padding-left: 0;
  padding-right: 0;
}

.products-filter-options .products-ordering-list .nice-select::after {
  right: 2px;
  width: 7px;
  height: 7px;
  border-color: #727695;
  border-width: 1px;
}

.products-filter-options .products-ordering-list .nice-select .current {
  color: #777777;
  font-family: "Cabin";
}

.products-filter-options .products-ordering-list .nice-select .list {
  background-color: #ffffff;
  border-radius: 0;
  -webkit-box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
          box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 5px;
  padding-bottom: 5px;
}

.products-filter-options .products-ordering-list .nice-select .list .option {
  -webkit-transition: 0.5s;
  transition: 0.5s;
  line-height: 35px;
  min-height: 35px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 15px;
}

.products-filter-options .products-ordering-list .nice-select .list .option:hover, .products-filter-options .products-ordering-list .nice-select .list .option.focus, .products-filter-options .products-ordering-list .nice-select .list .option.selected.focus {
  background-color: transparent;
  color: #f53f85;
}

.products-filter-options .products-ordering-list .nice-select .list .option.selected {
  font-weight: 700;
}

.products-filter-options p {
  line-height: initial;
  margin-bottom: 0;
  font-family: "Cabin";
}

.products-filter-options .sub-title {
  color: #000000;
  display: inline-block;
  padding-right: 5px;
  font-size: 15px;
  font-weight: 600;
}

.products-filter-options .sub-title a {
  text-transform: uppercase;
  color: #000000;
  font-weight: 700;
  margin-right: 15px;
  padding-left: 22px;
  display: block;
  position: relative;
}

.products-filter-options .sub-title a i {
  font-size: 18px;
  position: absolute;
  left: 0;
  top: 1px;
}

.products-filter-options .sub-title a:hover {
  color: #f53f85;
}

.products-filter-options .view-list-row {
  position: relative;
  top: 2px;
}

.products-filter-options .view-list-row .view-column a {
  display: inline-block;
}

.products-filter-options .view-list-row .view-column .icon-view-one span {
  cursor: pointer;
  width: 7px;
  height: 14px;
  display: block;
  float: left;
  border: 1px solid #d0d0d0;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.products-filter-options .view-list-row .view-column .icon-view-one.active span, .products-filter-options .view-list-row .view-column .icon-view-one:hover span {
  border-color: #f53f85;
}

.products-filter-options .view-list-row .view-column .icon-view-two {
  margin-left: 2px;
}

.products-filter-options .view-list-row .view-column .icon-view-two span {
  cursor: pointer;
  width: 7px;
  height: 14px;
  display: block;
  float: left;
  border: 1px solid #d0d0d0;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.products-filter-options .view-list-row .view-column .icon-view-two span:not(:first-child) {
  margin-left: 1px;
}

.products-filter-options .view-list-row .view-column .icon-view-two.active span, .products-filter-options .view-list-row .view-column .icon-view-two:hover span {
  border-color: #f53f85;
}

.products-filter-options .view-list-row .view-column .icon-view-three {
  margin-left: 2px;
}

.products-filter-options .view-list-row .view-column .icon-view-three span {
  width: 7px;
  height: 14px;
  display: block;
  float: left;
  border: 1px solid #d0d0d0;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.products-filter-options .view-list-row .view-column .icon-view-three span:not(:first-child) {
  margin-left: 1px;
}

.products-filter-options .view-list-row .view-column .icon-view-three.active span, .products-filter-options .view-list-row .view-column .icon-view-three:hover span {
  border-color: #f53f85;
}

.products-filter-options .view-list-row .view-column .icon-view-four {
  margin-left: 2px;
}

.products-filter-options .view-list-row .view-column .icon-view-four span {
  width: 7px;
  height: 14px;
  display: block;
  float: left;
  border: 1px solid #d0d0d0;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.products-filter-options .view-list-row .view-column .icon-view-four span:not(:first-child) {
  margin-left: 1px;
}

.products-filter-options .view-list-row .view-column .icon-view-four.active span, .products-filter-options .view-list-row .view-column .icon-view-four:hover span {
  border-color: #f53f85;
}

.products-filter-options .view-list-row .view-column .icon-view-five {
  margin-left: 2px;
}

.products-filter-options .view-list-row .view-column .icon-view-five span {
  width: 5px;
  height: 14px;
  display: block;
  float: left;
  border: 1px solid #d0d0d0;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.products-filter-options .view-list-row .view-column .icon-view-five span:not(:first-child) {
  margin-left: 1px;
}

.products-filter-options .view-list-row .view-column .icon-view-five.active span, .products-filter-options .view-list-row .view-column .icon-view-five:hover span {
  border-color: #f53f85;
}

.products-filter-options .view-list-row .view-column .icon-view-six {
  margin-left: 2px;
}

.products-filter-options .view-list-row .view-column .icon-view-six span {
  width: 3px;
  height: 14px;
  display: block;
  float: left;
  border: 1px solid #d0d0d0;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.products-filter-options .view-list-row .view-column .icon-view-six span:not(:first-child) {
  margin-left: 1px;
}

.products-filter-options .view-list-row .view-column .icon-view-six.active span, .products-filter-options .view-list-row .view-column .icon-view-six:hover span {
  border-color: #f53f85;
}

.products-filter-options .view-list-row .view-column .view-grid-switch {
  margin-left: 2px;
}

.products-filter-options .view-list-row .view-column .view-grid-switch span {
  width: 24px;
  height: 6px;
  display: block;
  position: relative;
  background-color: #d0d0d0;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.products-filter-options .view-list-row .view-column .view-grid-switch span::before {
  content: '';
  position: absolute;
  top: 0;
  left: 6px;
  background-color: #ffffff;
  display: block;
  width: 2px;
  height: 6px;
}

.products-filter-options .view-list-row .view-column .view-grid-switch span:not(:first-child) {
  margin-top: 2px;
}

.products-filter-options .view-list-row .view-column .view-grid-switch.active span, .products-filter-options .view-list-row .view-column .view-grid-switch:hover span {
  background-color: #f53f85;
}

#products-collections-filter.products-col-one .products-col-item {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 100%;
          flex: 0 0 100%;
  max-width: 100%;
}

#products-collections-filter.products-col-one .products-col-item .single-products-box .products-image a img {
  width: 100%;
}

#products-collections-filter.products-col-one .products-col-item .products-box .products-image a img {
  width: 100%;
}

#products-collections-filter.products-col-one .products-col-item .single-productsBox .products-image a img {
  width: 100%;
}

#products-collections-filter.products-col-three .products-col-item {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 33.333333%;
          flex: 0 0 33.333333%;
  max-width: 33.333333%;
}

#products-collections-filter.products-row-view .products-col-item {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 100%;
          flex: 0 0 100%;
  max-width: 100%;
}

#products-collections-filter.products-row-view .products-col-item .single-products-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-align: center !important;
      -ms-flex-align: center !important;
          align-items: center !important;
  background-color: #fdfdfd;
}

#products-collections-filter.products-row-view .products-col-item .single-products-box .products-image {
  position: relative;
  -webkit-box-flex: 0;
      -ms-flex: 0 0 41.666667%;
          flex: 0 0 41.666667%;
  max-width: 41.666667%;
}

#products-collections-filter.products-row-view .products-col-item .single-products-box .products-content {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 58.333333%;
          flex: 0 0 58.333333%;
  max-width: 58.333333%;
  text-align: left;
  padding-left: 30px;
  padding-right: 30px;
}

#products-collections-filter.products-row-view .products-col-item .single-products-box .products-content .add-to-cart {
  left: 30px;
}

#products-collections-filter.products-row-view .products-col-item .single-products-box .products-content .star-rating {
  right: 30px;
}

#products-collections-filter.products-row-view .products-col-item .products-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-align: center !important;
      -ms-flex-align: center !important;
          align-items: center !important;
  background-color: #fdfdfd;
}

#products-collections-filter.products-row-view .products-col-item .products-box .products-image {
  position: relative;
  -webkit-box-flex: 0;
      -ms-flex: 0 0 41.666667%;
          flex: 0 0 41.666667%;
  max-width: 41.666667%;
}

#products-collections-filter.products-row-view .products-col-item .products-box .products-content {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 58.333333%;
          flex: 0 0 58.333333%;
  max-width: 58.333333%;
  text-align: left;
  padding-left: 30px;
  padding-right: 30px;
}

#products-collections-filter.products-row-view .products-col-item .products-box .products-content .add-to-cart {
  left: 30px;
}

#products-collections-filter.products-row-view .products-col-item .single-productsBox {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-align: center !important;
      -ms-flex-align: center !important;
          align-items: center !important;
  background-color: #fdfdfd;
}

#products-collections-filter.products-row-view .products-col-item .single-productsBox .products-image {
  position: relative;
  -webkit-box-flex: 0;
      -ms-flex: 0 0 41.666667%;
          flex: 0 0 41.666667%;
  max-width: 41.666667%;
}

#products-collections-filter.products-row-view .products-col-item .single-productsBox .products-content {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 58.333333%;
          flex: 0 0 58.333333%;
  max-width: 58.333333%;
  text-align: left;
  padding-left: 30px;
  padding-right: 30px;
}

#products-collections-filter.products-row-view .products-col-item .single-productsBox .products-content .add-to-cart {
  left: 30px;
  -webkit-transform: translateX(0);
          transform: translateX(0);
}

#products-collections-filter.products-row-view .products-col-item.col-lg-4 {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 50%;
          flex: 0 0 50%;
  max-width: 50%;
}

#products-collections-filter.products-col-two .col-lg-4 {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 50%;
          flex: 0 0 50%;
  max-width: 50%;
}

#products-collections-filter.products-col-four .col-lg-4 {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 25%;
          flex: 0 0 25%;
  max-width: 25%;
}

.full-width-area .container-fluid {
  max-width: 2500px;
}

/*================================================
Products Details CSS
=================================================*/
.products-details-image img {
  width: 100%;
}

.products-details-image .slick-slider {
  position: relative;
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.products-details-image .slick-dots {
  padding: 0;
  text-align: center;
  list-style-type: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  margin-left: -5px;
  margin-right: -5px;
  margin-top: 0;
  margin-bottom: 0;
}

.products-details-image .slick-dots li {
  display: block;
  -webkit-box-flex: 0;
      -ms-flex: 0 0 20%;
          flex: 0 0 20%;
  max-width: 20%;
  position: relative;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 10px;
}

.products-details-image .slick-dots li button {
  padding: 0;
  outline: 0;
  display: block;
  border: none;
  margin: 0;
  cursor: pointer;
}

.products-details-image .slick-dots li img {
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.products-details-image .slick-dots li:hover img, .products-details-image .slick-dots li.slick-active img {
  opacity: .4;
}

.products-details-image .slick-thumbs {
  display: none;
}

.products-details-image .row {
  margin-left: -8px;
  margin-right: -8px;
  margin-top: -15px;
}

.products-details-image .row .col-lg-6 {
  padding-left: 8px;
  padding-right: 8px;
}

.products-details-image .row .col-lg-6 .single-products-details-image {
  margin-top: 15px;
}

.products-details-image .single-products-details-image {
  margin-top: 30px;
}

.products-details-image .single-products-details-image:first-child {
  margin-top: 0;
}

.products-details-image-slider.owl-theme {
  margin-bottom: 30px;
}

.products-details-image-slider.owl-theme .owl-nav {
  margin-top: 0;
}

.products-details-image-slider.owl-theme .owl-nav [class*=owl-] {
  color: #87a1c1;
  font-size: 15px;
  margin: 0;
  padding: 0;
  background: #ffffff;
  width: 40px;
  height: 40px;
  line-height: 35px;
  position: absolute;
  left: 15px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  top: 50%;
  padding-right: 2px !important;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  border-radius: 50%;
  border-style: solid;
  border-color: #ffffff;
  border-width: 1.5px;
}

.products-details-image-slider.owl-theme .owl-nav [class*=owl-].owl-next {
  left: auto;
  right: 15px;
  padding-right: 0 !important;
  padding-left: 2px !important;
}

.products-details-image-slider.owl-theme .owl-nav [class*=owl-]:hover {
  background-color: #f53f85;
  color: #ffffff;
  border-color: #f53f85;
}

.products-details-desc h3 {
  margin-bottom: 18px;
  font-size: 22px;
  font-weight: 700;
}

.products-details-desc .price {
  margin-bottom: 10px;
  color: #f53f85;
  font-size: 15px;
  font-weight: 600;
}

.products-details-desc .price .old-price {
  text-decoration: line-through;
  color: #828893;
  font-weight: normal;
  margin-right: 10px;
}

.products-details-desc .products-review {
  margin-bottom: 5px;
}

.products-details-desc .products-review .rating {
  display: inline-block;
  padding-right: 10px;
  font-size: 18px;
}

.products-details-desc .products-review .rating i {
  color: #ffba0a;
  display: inline-block;
}

.products-details-desc .products-review .rating-count {
  display: inline-block;
  color: #000000;
  border-bottom: 1px solid #000000;
  line-height: initial;
  position: relative;
  top: -2px;
  font-weight: 600;
}

.products-details-desc .products-review .rating-count:hover {
  color: #f53f85;
  border-color: #f53f85;
}

.products-details-desc .products-info {
  list-style-type: none;
  padding-left: 0;
  margin-top: 5px;
  margin-bottom: 0;
}

.products-details-desc .products-info li {
  color: #000000;
  margin-bottom: 8px;
  font-size: 16px;
}

.products-details-desc .products-info li:last-child {
  margin-bottom: 0;
}

.products-details-desc .products-info li span {
  color: #777777;
  margin-right: 5px;
}

.products-details-desc .products-info li a {
  display: inline-block;
  font-weight: 600;
  color: #000000;
}

.products-details-desc .products-info li a:hover {
  color: #f53f85;
}

.products-details-desc .products-color-switch {
  margin-top: 10px;
}

.products-details-desc .products-color-switch span {
  margin-bottom: 8px;
  display: block;
  font-size: 17px;
  font-weight: 600;
}

.products-details-desc .products-color-switch ul {
  padding-left: 0;
  list-style-type: none;
  margin-bottom: 0;
  margin-top: -3px;
  margin-left: -3px;
}

.products-details-desc .products-color-switch ul li {
  display: inline-block;
  margin-left: 3px;
  margin-top: 3px;
}

.products-details-desc .products-color-switch ul li a {
  display: block;
  position: relative;
  border: 1px solid transparent;
  width: 22px;
  height: 22px;
  border-radius: 50%;
}

.products-details-desc .products-color-switch ul li a::before {
  position: absolute;
  content: '';
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #eeeeee;
  border-radius: 50%;
  margin: 2px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.products-details-desc .products-color-switch ul li a:hover, .products-details-desc .products-color-switch ul li a:focus {
  border-color: #000000;
}

.products-details-desc .products-color-switch ul li a.color-white::before {
  background: #ffffff;
  border: 1px solid #eeeeee;
}

.products-details-desc .products-color-switch ul li a.color-black::before {
  background: #000000;
}

.products-details-desc .products-color-switch ul li a.color-red::before {
  background: red;
}

.products-details-desc .products-color-switch ul li a.color-blue::before {
  background: blue;
}

.products-details-desc .products-color-switch ul li a.color-green::before {
  background: green;
}

.products-details-desc .products-color-switch ul li a.color-yellow::before {
  background: yellow;
}

.products-details-desc .products-color-switch ul li a.color-yellowgreen::before {
  background: yellowgreen;
}

.products-details-desc .products-color-switch ul li a.color-pink::before {
  background: pink;
}

.products-details-desc .products-color-switch ul li a.color-violet::before {
  background: violet;
}

.products-details-desc .products-color-switch ul li a.color-teal::before {
  background: teal;
}

.products-details-desc .products-color-switch ul li a.color-plum::before {
  background: plum;
}

.products-details-desc .products-color-switch ul li a.color-lime::before {
  background: lime;
}

.products-details-desc .products-color-switch ul li a.color-blueviolet::before {
  background: blueviolet;
}

.products-details-desc .products-color-switch ul li.active a {
  border-color: #000000;
}

.products-details-desc .products-size-wrapper {
  margin-top: 8px;
  margin-bottom: 25px;
}

.products-details-desc .products-size-wrapper span {
  margin-bottom: 8px;
  display: block;
  font-size: 17px;
  font-weight: 600;
}

.products-details-desc .products-size-wrapper ul {
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 0;
  margin-top: -8px;
  margin-left: -8px;
}

.products-details-desc .products-size-wrapper ul li {
  display: inline-block;
  margin-left: 8px;
  margin-top: 8px;
}

.products-details-desc .products-size-wrapper ul li a {
  width: 38px;
  height: 35px;
  display: block;
  line-height: 32px;
  border: 1px solid #eeeeee;
  color: #858585;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
}

.products-details-desc .products-size-wrapper ul li a:hover {
  border-color: #f53f85;
  color: #f53f85;
}

.products-details-desc .products-size-wrapper ul li.active a {
  border-color: #f53f85;
  color: #f53f85;
}

.products-details-desc .products-info-btn {
  margin-bottom: 25px;
}

.products-details-desc .products-info-btn a {
  text-transform: uppercase;
  display: inline-block;
  position: relative;
  padding-left: 22px;
  line-height: initial;
  font-size: 14px;
  font-weight: 600;
}

.products-details-desc .products-info-btn a::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 1.5px;
  background: #f53f85;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.products-details-desc .products-info-btn a i {
  font-size: 18px;
  position: absolute;
  left: 0;
  top: 0;
}

.products-details-desc .products-info-btn a:hover {
  color: #f53f85;
}

.products-details-desc .products-info-btn a:hover::before {
  width: 100%;
}

.products-details-desc .products-info-btn a:not(:first-child) {
  margin-left: 15px;
}

.products-details-desc .products-add-to-cart .input-counter {
  max-width: 120px;
  min-width: 120px;
  margin-right: 10px;
  text-align: center;
  display: inline-block;
  position: relative;
}

.products-details-desc .products-add-to-cart .input-counter span {
  position: absolute;
  top: 0;
  background-color: transparent;
  cursor: pointer;
  color: #d0d0d0;
  width: 40px;
  height: 100%;
  line-height: 50px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  font-size: 22px;
}

.products-details-desc .products-add-to-cart .input-counter span.minus-btn {
  left: 0;
}

.products-details-desc .products-add-to-cart .input-counter span.plus-btn {
  right: 0;
}

.products-details-desc .products-add-to-cart .input-counter span:hover {
  color: #f53f85;
}

.products-details-desc .products-add-to-cart .input-counter input {
  height: 45px;
  color: #000000;
  outline: 0;
  display: block;
  border: none;
  background-color: #f8f8f8;
  text-align: center;
  width: 100%;
  font-size: 17px;
  font-weight: 600;
}

.products-details-desc .products-add-to-cart .input-counter input::-webkit-input-placeholder {
  color: #000000;
}

.products-details-desc .products-add-to-cart .input-counter input:-ms-input-placeholder {
  color: #000000;
}

.products-details-desc .products-add-to-cart .input-counter input::-ms-input-placeholder {
  color: #000000;
}

.products-details-desc .products-add-to-cart .input-counter input::placeholder {
  color: #000000;
}

.products-details-desc .wishlist-compare-btn {
  margin-top: 20px;
}

.products-details-desc .wishlist-compare-btn .optional-btn {
  padding-top: 8px;
  padding-bottom: 10px;
}

.products-details-desc .wishlist-compare-btn .optional-btn i {
  font-size: 20px;
  position: relative;
  top: 3px;
  margin-right: 5px;
}

.products-details-desc .wishlist-compare-btn .optional-btn:not(:first-child) {
  margin-left: 10px;
}

.products-details-desc .buy-checkbox-btn {
  margin-top: 20px;
}

.products-details-desc .buy-checkbox-btn input {
  display: none;
}

.products-details-desc .buy-checkbox-btn .cbx {
  margin: auto;
  -webkit-user-select: none;
  -moz-user-select: none;
   -ms-user-select: none;
       user-select: none;
  cursor: pointer;
}

.products-details-desc .buy-checkbox-btn .cbx span {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
}

.products-details-desc .buy-checkbox-btn .cbx span:first-child {
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 3px;
  -webkit-transform: scale(1);
          transform: scale(1);
  vertical-align: middle;
  border: 1px solid #ebebeb;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.products-details-desc .buy-checkbox-btn .cbx span:first-child svg {
  position: absolute;
  top: 3px;
  left: 2px;
  fill: none;
  stroke: #ffffff;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 16px;
  stroke-dashoffset: 16px;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  -webkit-transition-delay: 0.1s;
          transition-delay: 0.1s;
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.products-details-desc .buy-checkbox-btn .cbx span:first-child:before {
  content: "";
  width: 100%;
  height: 100%;
  background: #f53f85;
  display: block;
  -webkit-transform: scale(0);
          transform: scale(0);
  opacity: 1;
  border-radius: 50%;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.products-details-desc .buy-checkbox-btn .cbx span:last-child {
  padding-left: 10px;
  color: #000000;
  position: relative;
  top: -1px;
}

.products-details-desc .buy-checkbox-btn .cbx:hover span:first-child {
  border-color: #f53f85;
}

.products-details-desc .buy-checkbox-btn .inp-cbx:checked + .cbx span:first-child {
  background: #f53f85;
  border-color: #f53f85;
  -webkit-animation: wave 0.4s ease;
          animation: wave 0.4s ease;
}

.products-details-desc .buy-checkbox-btn .inp-cbx:checked + .cbx span:first-child svg {
  stroke-dashoffset: 0;
}

.products-details-desc .buy-checkbox-btn .inp-cbx:checked + .cbx span:first-child:before {
  -webkit-transform: scale(3.5);
          transform: scale(3.5);
  opacity: 0;
  -webkit-transition: all 0.6s ease;
  transition: all 0.6s ease;
}

.products-details-desc .buy-checkbox-btn .item:not(:first-child) {
  margin-top: 20px;
}

.products-details-desc .buy-checkbox-btn .default-btn {
  display: block;
  text-align: center;
}

.products-details-desc .products-details-accordion {
  margin-top: 25px;
}

.products-details-desc .products-details-accordion .accordion {
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 0;
  border: none;
}

.products-details-desc .products-details-accordion .accordion .accordion__item {
  border-radius: 5px;
  display: block;
  background: #ffffff;
  margin-bottom: 15px;
  border: none;
}

.products-details-desc .products-details-accordion .accordion .accordion__item:last-child {
  margin-bottom: 0;
}

.products-details-desc .products-details-accordion .accordion .accordion__button {
  background-color: transparent;
  padding-left: 28px;
  color: #000000;
  text-decoration: none;
  position: relative;
  display: block;
  padding: 0;
  font-size: 16px;
  font-weight: 700;
}

.products-details-desc .products-details-accordion .accordion .accordion__button i {
  position: absolute;
  left: 0;
  top: 1px;
  font-size: 25px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.products-details-desc .products-details-accordion .accordion .accordion__button.active i {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.products-details-desc .products-details-accordion .accordion .accordion__panel {
  padding: 0;
}

.products-details-desc .products-details-accordion .accordion .accordion-content {
  position: relative;
  margin-top: -5px;
  padding-top: 15px;
}

.products-details-desc .products-details-accordion .accordion .accordion-content ul, .products-details-desc .products-details-accordion .accordion .accordion-content ol {
  padding-left: 0;
  list-style-type: none;
  margin-bottom: 0;
}

.products-details-desc .products-details-accordion .accordion .accordion-content ul li, .products-details-desc .products-details-accordion .accordion .accordion-content ol li {
  margin-bottom: 10px;
  position: relative;
  padding-left: 13px;
  color: #777777;
}

.products-details-desc .products-details-accordion .accordion .accordion-content ul li::before, .products-details-desc .products-details-accordion .accordion .accordion-content ol li::before {
  content: '';
  position: absolute;
  top: 8px;
  left: 0;
  width: 6px;
  height: 6px;
  background: #f53f85;
  border-radius: 50%;
}

.products-details-desc .products-details-accordion .accordion .accordion-content ul li:last-child, .products-details-desc .products-details-accordion .accordion .accordion-content ol li:last-child {
  margin-bottom: 0;
}

.products-details-desc .products-details-accordion .accordion .accordion-content .table {
  margin-bottom: 0;
}

.products-details-desc .products-details-accordion .accordion .accordion-content .table.table-striped tbody tr td {
  border-top: none;
  vertical-align: middle;
  white-space: nowrap;
  padding: 10px 15px;
  color: #000000;
}

.products-details-desc .products-details-accordion .accordion .accordion-content .table.table-striped tbody tr td:first-child {
  font-weight: 500;
}

.products-details-desc .products-details-accordion .accordion .accordion-content .table.table-bordered tbody tr td {
  vertical-align: middle;
  white-space: nowrap;
  padding: 10px 15px;
  color: #777777;
  line-height: 1.7;
  border-color: #eeeeee;
}

.products-details-desc .products-details-accordion .accordion .accordion-content .table.table-bordered tbody tr td:first-child {
  color: #000000;
  font-weight: 500;
}

.products-details-desc .products-details-accordion .accordion .accordion-content h3 {
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: 700;
}

.products-details-desc .products-details-accordion .accordion .accordion-content .products-review-form {
  margin-top: 10px;
}

.products-details-desc .products-details-accordion .accordion .accordion-content .products-review-form .review-title {
  position: relative;
}

.products-details-desc .products-details-accordion .accordion .accordion-content .products-review-form .review-title .rating {
  display: inline-block;
}

.products-details-desc .products-details-accordion .accordion .accordion-content .products-review-form .review-title .rating .bx.bxs-star {
  color: #ffba0a;
}

.products-details-desc .products-details-accordion .accordion .accordion-content .products-review-form .review-title .rating i {
  color: #ebebeb;
  font-size: 16px;
  margin-right: -1px;
}

.products-details-desc .products-details-accordion .accordion .accordion-content .products-review-form .review-title p {
  margin-bottom: 0;
  display: inline-block;
  padding-left: 5px;
  line-height: initial;
  position: relative;
  top: -2px;
}

.products-details-desc .products-details-accordion .accordion .accordion-content .products-review-form .review-title .default-btn {
  position: absolute;
  right: 0;
  bottom: 0;
}

.products-details-desc .products-details-accordion .accordion .accordion-content .products-review-form .review-comments {
  margin-top: 35px;
}

.products-details-desc .products-details-accordion .accordion .accordion-content .products-review-form .review-comments .review-item {
  margin-top: 20px;
  position: relative;
  border-top: 1px dashed #eeeeee;
  padding-top: 20px;
}

.products-details-desc .products-details-accordion .accordion .accordion-content .products-review-form .review-comments .review-item .rating .bx.bxs-star {
  color: #ffba0a;
}

.products-details-desc .products-details-accordion .accordion .accordion-content .products-review-form .review-comments .review-item .rating i {
  font-size: 17px;
  color: #ebebeb;
  margin-right: -1px;
}

.products-details-desc .products-details-accordion .accordion .accordion-content .products-review-form .review-comments .review-item h3 {
  font-size: 18px;
  margin-top: 8px;
  margin-bottom: 8px;
}

.products-details-desc .products-details-accordion .accordion .accordion-content .products-review-form .review-comments .review-item span {
  margin-bottom: 10px;
  font-size: 15px;
  display: block;
}

.products-details-desc .products-details-accordion .accordion .accordion-content .products-review-form .review-comments .review-item span strong {
  font-weight: 500;
}

.products-details-desc .products-details-accordion .accordion .accordion-content .products-review-form .review-comments .review-item p {
  margin-bottom: 0;
}

.products-details-desc .products-details-accordion .accordion .accordion-content .products-review-form .review-form {
  margin-top: 30px;
}

.products-details-desc .products-details-accordion .accordion .accordion-content .products-review-form .review-form h3 {
  margin-bottom: 20px;
}

.products-details-desc .products-details-accordion .accordion .accordion-content .products-review-form .review-form form .form-group {
  margin-bottom: 15px;
}

.products-details-desc .products-details-accordion .accordion .accordion-content .products-review-form .review-form form .default-btn {
  margin-top: 10px;
}

.products-details-tab {
  margin-top: 50px;
}

.products-details-tab .tabs {
  list-style-type: none;
  margin-bottom: -1px;
  padding-left: 0;
}

.products-details-tab .tabs li {
  display: inline-block;
  line-height: initial;
  margin-right: 5px;
}

.products-details-tab .tabs li a {
  display: block;
  position: relative;
  color: #000000;
  border: 1px dashed #eeeeee;
  padding: 13px 30px 13px 48px;
  font-weight: 600;
  font-size: 15px;
}

.products-details-tab .tabs li a .dot {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  left: 30px;
  width: 12px;
  height: 12px;
  border: 1px solid #000000;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  border-radius: 50%;
}

.products-details-tab .tabs li a .dot::before {
  position: absolute;
  top: 0;
  content: '';
  left: 0;
  right: 0;
  bottom: 0;
  background: #000000;
  margin: 2px;
  border-radius: 50%;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.products-details-tab .tabs li a:hover {
  color: #ffffff;
  background-color: #f53f85;
  border-color: #f53f85;
}

.products-details-tab .tabs li a:hover .dot {
  border-color: #ffffff;
}

.products-details-tab .tabs li a:hover .dot::before {
  background: #ffffff;
}

.products-details-tab .tabs li.current a {
  color: #ffffff;
  background-color: #f53f85;
  border-color: #f53f85;
}

.products-details-tab .tabs li.current a .dot {
  border-color: #ffffff;
}

.products-details-tab .tabs li.current a .dot::before {
  background: #ffffff;
}

.products-details-tab .tabs li:last-child {
  margin-right: 0;
}

.products-details-tab .tab-content {
  border: 1px dashed #eeeeee;
  padding: 30px;
}

.products-details-tab .tab-content .tabs-item .products-details-tab-content ul, .products-details-tab .tab-content .tabs-item .products-details-tab-content ol {
  padding-left: 0;
  list-style-type: none;
  margin-bottom: 0;
}

.products-details-tab .tab-content .tabs-item .products-details-tab-content ul li, .products-details-tab .tab-content .tabs-item .products-details-tab-content ol li {
  margin-bottom: 10px;
  position: relative;
  padding-left: 13px;
  color: #777777;
}

.products-details-tab .tab-content .tabs-item .products-details-tab-content ul li::before, .products-details-tab .tab-content .tabs-item .products-details-tab-content ol li::before {
  content: '';
  position: absolute;
  top: 8px;
  left: 0;
  width: 6px;
  height: 6px;
  background: #f53f85;
  border-radius: 50%;
}

.products-details-tab .tab-content .tabs-item .products-details-tab-content ul li:last-child, .products-details-tab .tab-content .tabs-item .products-details-tab-content ol li:last-child {
  margin-bottom: 0;
}

.products-details-tab .tab-content .tabs-item .products-details-tab-content .table {
  margin-bottom: 0;
}

.products-details-tab .tab-content .tabs-item .products-details-tab-content .table.table-striped tbody tr td {
  border-top: none;
  vertical-align: middle;
  white-space: nowrap;
  padding: 10px 15px;
  color: #000000;
}

.products-details-tab .tab-content .tabs-item .products-details-tab-content .table.table-striped tbody tr td:first-child {
  font-weight: 600;
}

.products-details-tab .tab-content .tabs-item .products-details-tab-content .table.table-bordered tbody tr td {
  vertical-align: middle;
  white-space: nowrap;
  padding: 10px 15px;
  color: #777777;
  line-height: 1.7;
  border-color: #eeeeee;
}

.products-details-tab .tab-content .tabs-item .products-details-tab-content .table.table-bordered tbody tr td:first-child {
  color: #000000;
  font-weight: 600;
}

.products-details-tab .tab-content .tabs-item .products-details-tab-content h3 {
  margin-bottom: 15px;
  font-size: 22px;
  font-weight: 700;
}

.products-details-tab .tab-content .tabs-item .products-details-tab-content .products-review-form .review-title {
  position: relative;
}

.products-details-tab .tab-content .tabs-item .products-details-tab-content .products-review-form .review-title .rating {
  display: inline-block;
}

.products-details-tab .tab-content .tabs-item .products-details-tab-content .products-review-form .review-title .rating .bx.bxs-star {
  color: #ffba0a;
}

.products-details-tab .tab-content .tabs-item .products-details-tab-content .products-review-form .review-title .rating i {
  color: #ebebeb;
  font-size: 18px;
  margin-right: -1px;
}

.products-details-tab .tab-content .tabs-item .products-details-tab-content .products-review-form .review-title p {
  margin-bottom: 0;
  display: inline-block;
  padding-left: 5px;
  line-height: initial;
  position: relative;
  top: -2px;
}

.products-details-tab .tab-content .tabs-item .products-details-tab-content .products-review-form .review-title .default-btn {
  position: absolute;
  right: 0;
  bottom: 0;
}

.products-details-tab .tab-content .tabs-item .products-details-tab-content .products-review-form .review-comments {
  margin-top: 35px;
}

.products-details-tab .tab-content .tabs-item .products-details-tab-content .products-review-form .review-comments .review-item {
  margin-top: 30px;
  position: relative;
  padding-right: 200px;
  border-top: 1px dashed #eeeeee;
  padding-top: 30px;
}

.products-details-tab .tab-content .tabs-item .products-details-tab-content .products-review-form .review-comments .review-item .rating .bx.bxs-star {
  color: #ffba0a;
}

.products-details-tab .tab-content .tabs-item .products-details-tab-content .products-review-form .review-comments .review-item .rating i {
  font-size: 17px;
  color: #ebebeb;
  margin-right: -1px;
}

.products-details-tab .tab-content .tabs-item .products-details-tab-content .products-review-form .review-comments .review-item h3 {
  font-size: 20px;
  margin-top: 8px;
  margin-bottom: 8px;
}

.products-details-tab .tab-content .tabs-item .products-details-tab-content .products-review-form .review-comments .review-item span {
  margin-bottom: 10px;
  font-size: 15px;
  display: block;
}

.products-details-tab .tab-content .tabs-item .products-details-tab-content .products-review-form .review-comments .review-item span strong {
  font-weight: 500;
}

.products-details-tab .tab-content .tabs-item .products-details-tab-content .products-review-form .review-comments .review-item p {
  margin-bottom: 0;
}

.products-details-tab .tab-content .tabs-item .products-details-tab-content .products-review-form .review-form {
  margin-top: 30px;
}

.products-details-tab .tab-content .tabs-item .products-details-tab-content .products-review-form .review-form h3 {
  margin-bottom: 20px;
}

.products-details-tab .tab-content .tabs-item .products-details-tab-content .products-review-form .review-form form .form-group {
  margin-bottom: 15px;
}

.products-details-tab .tab-content .tabs-item .products-details-tab-content .products-review-form .review-form form .default-btn {
  margin-top: 10px;
}

.related-products {
  margin-top: 70px;
}

/*================================================
Offer CSS
=================================================*/
.offer-area {
  background-color: mistyrose;
  position: relative;
  z-index: 1;
  background-position: 100% 10%;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('https://scontent.ford4-1.fna.fbcdn.net/v/t1.0-9/142514795_120491476605938_6542932390101172954_n.jpg?_nc_cat=101&ccb=2&_nc_sid=8bfeb9&_nc_ohc=f6uK-QJy_JwAX-qvUJh&_nc_ht=scontent.ford4-1.fna&oh=108ee375729d93b80c671783c2b2652c&oe=60364C6C');
  /* background-image: url('https://scontent.ford4-1.fna.fbcdn.net/v/t1.0-9/142514795_120491476605938_6542932390101172954_n.jpg?_nc_cat=101&ccb=2&_nc_sid=8bfeb9&_nc_ohc=f6uK-QJy_JwAX-qvUJh&_nc_ht=scontent.ford4-1.fna&oh=108ee375729d93b80c671783c2b2652c&oe=60364C6C'); */
  /* filter: contrast(112%) brightness(120%); */
}

/* .offer-area.bg-image1 {
  background-image: url(../../../images/offer-bg.jpg);
}

.offer-area.bg-image2 {
  background-image: url(../../../images/offer-bg2.jpg);
}

.offer-area.bg-image3 {
  background-image: url(../../../images/home6/offer-bg3.jpg);
} */

.offer-content {
  max-width: 550px;
  border: 1px solid #ffffff;
  margin-left: auto;
  text-align: center;
  border-radius: 5px;
  padding: 70px 40px;
  position: relative;
  z-index: 1;
}

.offer-content span {
  display: block;
  margin-bottom: 10px;
  color: #f53f85;
  font-weight: 600;
}

.offer-content h2 {
  margin-bottom: 0;
  font-size: 45px;
  font-weight: 700;
}

.offer-content p {
  line-height: initial;
  margin-top: 10px;
}

.offer-content .default-btn {
  margin-top: 12px;
}

.offer-content::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: #ffffff;
  z-index: -1;
  border-radius: 5px;
  margin: 10px;
}

.offer-content-box {
  max-width: 720px;
  margin-right: auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

.offer-content-box span {
  display: block;
  color: #ffffff;
  font-weight: 300;
  font-size: 30px;
}

.offer-content-box h2 {
  margin: 10px 0 10px;
  color: #ffffff;
  font-size: 65px;
  font-weight: 700;
}

.offer-content-box p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 300;
}

.offer-content-box .default-btn {
  margin-top: 10px;
}

.single-offer-products {
  position: relative;
  border-radius: 5px;
  padding-right: 100px;
}

.single-offer-products img {
  display: inline-block !important;
  width: auto !important;
}

.single-offer-products .image {
  border-radius: 5px;
}

.single-offer-products .image a {
  display: block;
  border-radius: 5px;
}

.single-offer-products .image a img {
  border-radius: 5px;
}

.single-offer-products .content {
  position: absolute;
  right: 15px;
  -webkit-box-shadow: 0px 8px 16px 0px rgba(146, 184, 255, 0.2);
          box-shadow: 0px 8px 16px 0px rgba(146, 184, 255, 0.2);
  background-color: #ffffff;
  border-radius: 5px;
  padding: 40px;
  max-width: 415px;
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  z-index: 5;
}

.single-offer-products .content h3 {
  margin-bottom: 0;
  font-size: 30px;
  font-weight: 700;
}

.single-offer-products .content p {
  margin-top: 10px;
}

.offer-products-slides.owl-theme .owl-dots {
  margin-top: 0 !important;
  position: absolute;
  left: 20px;
  bottom: 20px;
}

.offer-products-slides.owl-theme .owl-dots .owl-dot span {
  width: 15px;
  height: 15px;
  margin: 0 4px;
  background: transparent;
  position: relative;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  border-radius: 50%;
  border: 1px solid transparent;
}

.offer-products-slides.owl-theme .owl-dots .owl-dot span::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  background-color: #ffffff;
  margin: 2px;
}

.offer-products-slides.owl-theme .owl-dots .owl-dot:hover span, .offer-products-slides.owl-theme .owl-dots .owl-dot.active span {
  border-color: #ffffff;
}

/*================================================
Facility CSS
=================================================*/
.facility-area {
  position: relative;
  z-index: 1;
}

.single-facility-box {
  margin-bottom: 30px;
  text-align: center;
  cursor: pointer;
}

.single-facility-box .icon {
  background-color: #F9F9F9;
  width: 150px;
  height: 150px;
  position: relative;
  border-radius: 50%;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  font-size: 65px;
  margin-left: auto;
  margin-right: auto;
}

.single-facility-box .icon i {
  position: absolute;
  left: 0;
  right: 0;
  top: 40%;
  -webkit-transform: translateY(-40%);
          transform: translateY(-40%);
}

.single-facility-box h3 {
  display: block;
  background-color: #ffffff;
  position: relative;
  padding-top: 18px;
  z-index: 1;
  margin-top: -25px;
  margin-bottom: 0;
  font-size: 20px;
  font-weight: 700;
}

.single-facility-box:hover .icon {
  background-color: #f53f85;
  color: #ffffff;
}

.facility-slides.owl-theme .owl-nav {
  margin-top: 0;
}

.facility-slides.owl-theme .owl-nav [class*=owl-] {
  color: #87a1c1;
  font-size: 20px;
  margin: 0;
  padding: 0;
  background: transparent;
  width: 50px;
  height: 50px;
  line-height: 48px;
  position: absolute;
  left: 0;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  opacity: 0;
  visibility: hidden;
  border-radius: 50%;
  border-style: solid;
  border-color: #e3e4ef;
  border-width: 1.5px;
}

.facility-slides.owl-theme .owl-nav [class*=owl-].owl-next {
  left: auto;
  right: 0;
}

.facility-slides.owl-theme .owl-nav [class*=owl-]:hover {
  background-color: #f53f85;
  color: #ffffff;
  border-color: #f53f85;
}

.facility-slides.owl-theme:hover .owl-nav [class*=owl-] {
  left: -30px;
  opacity: 1;
  visibility: visible;
}

.facility-slides.owl-theme:hover .owl-nav [class*=owl-].owl-next {
  left: auto;
  right: -30px;
}

/*================================================
Partner CSS
=================================================*/
.partner-area {
  background-color: #f4f4f4;
}

.partner-item {
  text-align: center;
}

.partner-item a {
  display: block;
}

.partner-item a img {
  width: auto !important;
  display: inline-block !important;
}

/*================================================
Testimonials CSS
=================================================*/
.testimonials-area {
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.single-testimonials-item {
  background-color: #ffffff;
  padding: 35px 30px 95px;
  -webkit-box-shadow: 6px 5px 25px rgba(0, 0, 0, 0.06);
          box-shadow: 6px 5px 25px rgba(0, 0, 0, 0.06);
  text-align: center;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  position: relative;
  margin-bottom: 100px;
}

.single-testimonials-item p {
  margin-bottom: 0;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  color: #000000;
  font-style: italic;
  font-size: 17px;
  font-weight: 600;
}

.single-testimonials-item .info {
  position: absolute;
  left: 0;
  bottom: -100px;
  right: 0;
}

.single-testimonials-item .info img {
  width: 100px !important;
  height: 100px;
  display: inline-block !important;
  border: 3px solid #ffffff;
}

.single-testimonials-item .info h3 {
  margin-bottom: 6px;
  margin-top: 20px;
  font-size: 22px;
  font-weight: 700;
}

.single-testimonials-item .info span {
  color: #f53f85;
  display: block;
  font-weight: 600;
  text-transform: uppercase;
}

.owl-item .single-testimonials-item {
  -webkit-box-shadow: unset;
          box-shadow: unset;
  margin-top: 30px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  opacity: .5;
}

.owl-item.active.center .single-testimonials-item {
  -webkit-box-shadow: 6px 5px 25px rgba(0, 0, 0, 0.06);
          box-shadow: 6px 5px 25px rgba(0, 0, 0, 0.06);
  margin-top: 0;
  background-color: #f53f85;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  opacity: 1;
}

.owl-item.active.center .single-testimonials-item p {
  color: #ffffff;
}

.testimonials-slides.owl-theme .owl-dots {
  margin-top: 15px;
}

.testimonials-slides.owl-theme .owl-dots .owl-dot span {
  width: 13px;
  height: 13px;
  margin: 0 5px;
  background: #dddddd;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  border-radius: 50%;
  -webkit-transform: scale(0.9);
          transform: scale(0.9);
}

.testimonials-slides.owl-theme .owl-dots .owl-dot:hover span, .testimonials-slides.owl-theme .owl-dots .owl-dot.active span {
  background-color: #f53f85;
}

.testimonials-slides.owl-theme .owl-dots .owl-dot.active span {
  -webkit-transform: scale(1.2);
          transform: scale(1.2);
}

/*================================================
Brand CSS
=================================================*/
.brand-area {
  background-color: #f4f4f4;
}

.brand-item {
  text-align: center;
}

.brand-item a {
  display: block;
  background-color: #ffffff;
  border-right: 1px solid #eeeeee;
  padding: 20px;
}

.brand-item a img {
  width: auto !important;
  display: inline-block !important;
  opacity: 0.5;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.brand-item a:hover img {
  opacity: 1;
}

/*================================================
Blog CSS
=================================================*/
.blog-area .container-fluid {
  padding-left: 30px;
  padding-right: 30px;
}

.single-blog-post {
  position: relative;
  margin-bottom: 30px;
}

.single-blog-post .post-image {
  overflow: hidden;
  position: relative;
  border-radius: 5px 5px 0 0;
}

.single-blog-post .post-image a {
  display: block;
  border-radius: 5px 5px 0 0;
}

.single-blog-post .post-image a img {
  border-radius: 5px 5px 0 0;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  width: 100%;
}

.single-blog-post .post-image .date {
  position: absolute;
  right: -100%;
  top: 20px;
  background-color: #ffffff;
  color: #000000;
  padding: 5px 10px 6px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  visibility: hidden;
  font-style: italic;
  font-size: 15px;
  font-weight: 600;
}

.single-blog-post .post-content {
  margin-top: 20px;
}

.single-blog-post .post-content .category {
  display: block;
  margin-bottom: 10px;
  text-transform: uppercase;
  color: #f53f85;
  font-weight: 600;
  font-size: 13px;
}

.single-blog-post .post-content h3 {
  margin-bottom: 0;
  line-height: 1.3;
  font-size: 23px;
  font-weight: 700;
}

.single-blog-post .post-content h3 a {
  display: inline-block;
}

.single-blog-post .post-content .details-btn {
  margin-top: 13px;
  display: inline-block;
  position: relative;
  font-size: 15px;
  font-weight: 600;
}

.single-blog-post .post-content .details-btn::before {
  width: 100%;
  height: 1px;
  background-color: #000000;
  content: '';
  position: absolute;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  left: 0;
  bottom: 0;
}

.single-blog-post .post-content .details-btn:hover {
  color: #f53f85;
}

.single-blog-post .post-content .details-btn:hover::before {
  background-color: #f53f85;
}

.single-blog-post:hover .post-image img {
  -webkit-transform: scale(1.07) rotate(2deg);
          transform: scale(1.07) rotate(2deg);
}

.single-blog-post:hover .post-image .date {
  visibility: visible;
  right: 0;
}

.blog-slides.owl-theme .owl-dots {
  margin-top: 20px !important;
  margin-bottom: 30px;
}

.blog-slides.owl-theme .owl-dots .owl-dot span {
  width: 15px;
  height: 15px;
  margin: 0 4px;
  background: transparent;
  position: relative;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  border-radius: 50%;
  border: 1px solid transparent;
}

.blog-slides.owl-theme .owl-dots .owl-dot span::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  border-radius: 50%;
  background-color: #000000;
  margin: 2px;
}

.blog-slides.owl-theme .owl-dots .owl-dot:hover span, .blog-slides.owl-theme .owl-dots .owl-dot.active span {
  border-color: #f53f85;
}

.blog-slides.owl-theme .owl-dots .owl-dot:hover span::before, .blog-slides.owl-theme .owl-dots .owl-dot.active span::before {
  background-color: #f53f85;
}

.blog-items {
  margin-left: -15px;
  margin-right: -15px;
}

/*================================================
Blog Details CSS
=================================================*/
.blog-details-desc .article-image img {
  width: 100%;
}

.blog-details-desc .article-image-slides.owl-theme .owl-nav {
  margin-top: 0;
}

.blog-details-desc .article-image-slides.owl-theme .owl-nav [class*=owl-] {
  color: #87a1c1;
  font-size: 18px;
  margin: 0;
  padding: 0;
  background: #ffffff;
  width: 45px;
  height: 45px;
  line-height: 40px;
  position: absolute;
  left: 20px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  top: 50%;
  padding-right: 2px !important;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  border-radius: 50%;
  border-style: solid;
  border-color: #ffffff;
  border-width: 1.5px;
}

.blog-details-desc .article-image-slides.owl-theme .owl-nav [class*=owl-].owl-next {
  left: auto;
  right: 20px;
  padding-right: 0 !important;
  padding-left: 2px !important;
}

.blog-details-desc .article-image-slides.owl-theme .owl-nav [class*=owl-]:hover {
  background-color: #f53f85;
  color: #ffffff;
  border-color: #f53f85;
}

.blog-details-desc .article-video iframe {
  width: 100%;
  height: 400px;
  border: none !important;
}

.blog-details-desc .article-content {
  margin-top: 30px;
}

.blog-details-desc .article-content .entry-meta ul {
  padding-left: 0;
  margin-bottom: 0;
  list-style-type: none;
}

.blog-details-desc .article-content .entry-meta ul li {
  margin-right: 20px;
  position: relative;
  display: inline-block;
  border-right: 1px solid #eeeeee;
  font-weight: 500;
  font-size: 16px;
  padding-right: 20px;
  padding-left: 45px;
}

.blog-details-desc .article-content .entry-meta ul li i {
  font-size: 32px;
  color: #cfcfcf;
  position: absolute;
  left: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
}

.blog-details-desc .article-content .entry-meta ul li span {
  display: block;
  color: #f53f85;
  text-transform: uppercase;
  margin-bottom: 2px;
  font-size: 14px;
  font-weight: 500;
}

.blog-details-desc .article-content .entry-meta ul li a {
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
}

.blog-details-desc .article-content .entry-meta ul li:last-child {
  padding-right: 0;
  margin-right: 0;
  border-right: none;
}

.blog-details-desc .article-content h3 {
  margin-bottom: 17px;
  margin-top: 25px;
  font-size: 25px;
  font-weight: 700;
}

.blog-details-desc .article-content .wp-block-gallery.columns-3 {
  padding-left: 0;
  list-style-type: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  margin-right: -10px;
  margin-left: -10px;
  margin-bottom: 30px;
  margin-top: 30px;
}

.blog-details-desc .article-content .wp-block-gallery.columns-3 li {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 33.3333%;
          flex: 0 0 33.3333%;
  max-width: 33.3333%;
  padding-right: 10px;
  padding-left: 10px;
}

.blog-details-desc .article-content .wp-block-gallery.columns-3 li figure {
  margin-bottom: 0;
}

.blog-details-desc .article-content .features-list {
  padding-left: 0;
  list-style-type: none;
  margin-top: 25px;
  margin-bottom: 30px;
}

.blog-details-desc .article-content .features-list li {
  margin-bottom: 15px;
  position: relative;
  padding-left: 26px;
  color: #777777;
}

.blog-details-desc .article-content .features-list li i {
  color: #f53f85;
  display: inline-block;
  font-size: 20px;
  position: absolute;
  left: 0;
  top: 1px;
}

.blog-details-desc .article-content .features-list li:last-child {
  margin-bottom: 0;
}

.blog-details-desc .article-footer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  border-top: 1px solid #eeeeee;
  padding-top: 30px;
  margin-top: 30px;
}

.blog-details-desc .article-footer .article-tags {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 50%;
          flex: 0 0 50%;
  max-width: 50%;
  color: #777777;
}

.blog-details-desc .article-footer .article-tags span {
  display: inline-block;
  color: #000000;
  margin-right: 5px;
  position: relative;
  top: 3px;
  font-size: 20px;
}

.blog-details-desc .article-footer .article-tags a {
  display: inline-block;
  position: relative;
  margin-right: 5px;
  padding-right: 4px;
  font-weight: 600;
}

.blog-details-desc .article-footer .article-tags a::before {
  content: ",";
  position: absolute;
  right: 0;
}

.blog-details-desc .article-footer .article-tags a:last-child {
  margin-right: 0;
  padding-right: 0;
}

.blog-details-desc .article-footer .article-tags a:last-child::before {
  display: none;
}

.blog-details-desc .article-footer .article-share {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 50%;
          flex: 0 0 50%;
  max-width: 50%;
}

.blog-details-desc .article-footer .article-share .social {
  padding-left: 0;
  list-style-type: none;
  text-align: right;
  margin-bottom: 0;
}

.blog-details-desc .article-footer .article-share .social li {
  display: inline-block;
}

.blog-details-desc .article-footer .article-share .social li span {
  display: inline-block;
  margin-right: 5px;
  font-weight: 600;
  position: relative;
  top: -2px;
}

.blog-details-desc .article-footer .article-share .social li a {
  display: block;
  width: 32px;
  height: 32px;
  line-height: 32px;
  border-radius: 50%;
  background-color: #f53f85;
  color: #ffffff;
  border: 1px solid #f53f85;
  text-align: center;
  font-size: 17px;
  margin-left: 5px;
}

.blog-details-desc .article-footer .article-share .social li a:hover, .blog-details-desc .article-footer .article-share .social li a:focus {
  color: #f53f85;
  background-color: transparent;
}

.blog-details-desc .article-footer .article-share .social li a.facebook {
  background-color: #3b5998;
  border-color: #3b5998;
  color: #ffffff;
}

.blog-details-desc .article-footer .article-share .social li a.facebook:hover, .blog-details-desc .article-footer .article-share .social li a.facebook:focus {
  color: #3b5998;
  background-color: transparent;
}

.blog-details-desc .article-footer .article-share .social li a.twitter {
  background-color: #1da1f2;
  border-color: #1da1f2;
  color: #ffffff;
}

.blog-details-desc .article-footer .article-share .social li a.twitter:hover, .blog-details-desc .article-footer .article-share .social li a.twitter:focus {
  color: #1da1f2;
  background-color: transparent;
}

.blog-details-desc .article-footer .article-share .social li a.linkedin {
  background-color: #007bb5;
  border-color: #007bb5;
  color: #ffffff;
}

.blog-details-desc .article-footer .article-share .social li a.linkedin:hover, .blog-details-desc .article-footer .article-share .social li a.linkedin:focus {
  color: #007bb5;
  background-color: transparent;
}

.blog-details-desc .article-footer .article-share .social li a.instagram {
  background-color: #c13584;
  border-color: #c13584;
  color: #ffffff;
}

.blog-details-desc .article-footer .article-share .social li a.instagram:hover, .blog-details-desc .article-footer .article-share .social li a.instagram:focus {
  color: #c13584;
  background-color: transparent;
}

.blog-details-desc .article-author {
  margin-top: 30px;
  border-radius: 5px;
  background: #f4f4f4;
}

.blog-details-desc .article-author .author-profile-header {
  height: 115px;
  border-radius: 5px 5px 0 0;
  background-color: #f53f85;
  /* background-image: url(../../../images/bg.jpg); */
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

.blog-details-desc .article-author .author-profile {
  padding: 0 25px 25px;
}

.blog-details-desc .article-author .author-profile .author-profile-title {
  position: relative;
  z-index: 1;
  margin-bottom: 15px;
  margin-top: -45px;
}

.blog-details-desc .article-author .author-profile .author-profile-title img {
  display: inline-block;
  border: 3px solid #ffffff;
  width: 100px;
  height: 100px;
}

.blog-details-desc .article-author .author-profile .author-profile-title .author-profile-title-details {
  margin-top: 15px;
}

.blog-details-desc .article-author .author-profile .author-profile-title .author-profile-title-details .author-profile-details h4 {
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: 700;
}

.blog-details-desc .article-author .author-profile .author-profile-title .author-profile-title-details .author-profile-details span {
  color: #777777;
}

.blog-details-desc .article-author .author-profile .author-profile-title .author-profile-raque-profile a {
  color: #000000;
  padding: 5px 12px 4px;
  border-radius: 2px;
  display: inline-block;
  background-color: #ffffff;
  font-weight: 600;
}

.blog-details-desc .article-author .author-profile .author-profile-title .author-profile-raque-profile a:hover, .blog-details-desc .article-author .author-profile .author-profile-title .author-profile-raque-profile a:focus {
  background-color: #f53f85;
  color: #ffffff;
}

blockquote, .blockquote {
  overflow: hidden;
  background-color: #fafafa;
  padding: 50px !important;
  position: relative;
  text-align: center;
  z-index: 1;
  margin-bottom: 20px;
  margin-top: 20px;
}

blockquote p, .blockquote p {
  color: #000000;
  line-height: 1.6;
  margin-bottom: 0;
  font-style: italic;
  font-weight: 500;
  font-size: 22px !important;
}

blockquote cite, .blockquote cite {
  display: none;
}

blockquote::before, .blockquote::before {
  color: #efefef;
  position: absolute;
  -webkit-animation: fade-up 1.5s infinite linear;
          animation: fade-up 1.5s infinite linear;
  left: 50px;
  top: -50px;
  z-index: -1;
  content: "\ee33";
  font-family: "boxicons" !important;
  font-weight: normal;
  font-style: normal;
  font-variant: normal;
  font-size: 135px;
}

blockquote::after, .blockquote::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background-color: #f53f85;
  margin-top: 20px;
  margin-bottom: 20px;
}

.xton-post-navigation {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  margin-top: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
}

.prev-link-wrapper {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 50%;
          flex: 0 0 50%;
  max-width: 50%;
  padding-right: 15px;
}

.prev-link-wrapper a {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.prev-link-wrapper a:hover .image-prev::after {
  opacity: 1;
  visibility: visible;
}

.prev-link-wrapper a:hover .image-prev .post-nav-title {
  opacity: 1;
  visibility: visible;
}

.prev-link-wrapper a:hover .prev-link-info-wrapper {
  color: #f53f85;
}

.prev-link-wrapper .image-prev {
  display: inline-block;
  min-width: 100px;
  width: 100px;
  border-radius: 5px;
  overflow: hidden;
  vertical-align: top;
  margin-right: 20px;
  position: relative;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.prev-link-wrapper .image-prev img {
  border-radius: 5px;
}

.prev-link-wrapper .image-prev::after {
  display: block;
  content: '';
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 5px;
  opacity: 0;
  background-color: #f53f85;
  visibility: hidden;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.prev-link-wrapper .image-prev .post-nav-title {
  position: absolute;
  left: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  right: 0;
  margin: 0 auto;
  text-align: center;
  text-transform: uppercase;
  z-index: 2;
  color: #ffffff;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  font-size: 16px;
  font-weight: 500;
}

.prev-link-wrapper .prev-link-info-wrapper {
  color: #000000;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.prev-link-wrapper .prev-title {
  display: inline-block;
  font-weight: 700;
  font-size: 17px;
}

.prev-link-wrapper .meta-wrapper {
  display: block;
  color: #777777;
  text-transform: capitalize;
  margin-top: 5px;
  font-weight: 500;
  font-size: 15px;
}

.next-link-wrapper {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 50%;
          flex: 0 0 50%;
  max-width: 50%;
  text-align: right;
  padding-left: 15px;
}

.next-link-wrapper a {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.next-link-wrapper a:hover .image-next::after {
  opacity: 1;
  visibility: visible;
}

.next-link-wrapper a:hover .image-next .post-nav-title {
  opacity: 1;
  visibility: visible;
}

.next-link-wrapper a:hover .next-link-info-wrapper {
  color: #f53f85;
}

.next-link-wrapper .image-next {
  display: inline-block;
  min-width: 100px;
  width: 100px;
  border-radius: 5px;
  overflow: hidden;
  vertical-align: top;
  margin-left: 20px;
  position: relative;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.next-link-wrapper .image-next img {
  border-radius: 5px;
}

.next-link-wrapper .image-next::after {
  display: block;
  content: '';
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 5px;
  opacity: 0;
  background-color: #f53f85;
  visibility: hidden;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.next-link-wrapper .image-next .post-nav-title {
  position: absolute;
  left: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  right: 0;
  margin: 0 auto;
  text-align: center;
  text-transform: uppercase;
  z-index: 2;
  color: #ffffff;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  font-size: 16px;
  font-weight: 500;
}

.next-link-wrapper .next-link-info-wrapper {
  -webkit-transition: 0.5s;
  transition: 0.5s;
  color: #000000;
}

.next-link-wrapper .next-title {
  display: inline-block;
  font-weight: 700;
  font-size: 17px;
}

.next-link-wrapper .meta-wrapper {
  display: block;
  color: #777777;
  text-transform: capitalize;
  margin-top: 5px;
  font-weight: 500;
  font-size: 15px;
}

.comments-area {
  margin-top: 30px;
}

.comments-area .comments-title {
  margin-bottom: 30px;
  line-height: initial;
  font-size: 22px;
  font-weight: 700;
}

.comments-area ol, .comments-area ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.comments-area .comment-list {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.comments-area .children {
  margin-left: 20px;
}

.comments-area .comment-body {
  border-bottom: 1px dashed #eeeeee;
  padding-left: 65px;
  color: #000000;
  font-size: 14px;
  margin-bottom: 20px;
  padding-bottom: 20px;
}

.comments-area .comment-body .reply {
  margin-top: 15px;
}

.comments-area .comment-body .reply a {
  border: 1px dashed #ded9d9;
  color: #000000;
  display: inline-block;
  padding: 5px 20px;
  border-radius: 30px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 600;
}

.comments-area .comment-body .reply a:hover {
  color: #ffffff;
  background-color: #f53f85;
  border-color: #f53f85;
}

.comments-area .comment-author {
  font-size: 18px;
  margin-bottom: 0.4em;
  position: relative;
  z-index: 2;
}

.comments-area .comment-author .avatar {
  height: 50px;
  left: -65px;
  position: absolute;
  width: 50px;
}

.comments-area .comment-author .fn {
  font-weight: 600;
}

.comments-area .comment-author .says {
  display: none;
}

.comments-area .comment-metadata {
  margin-bottom: .8em;
  color: #777777;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 400;
}

.comments-area .comment-metadata span {
  display: inline-block;
  color: #777777;
}

.comments-area .comment-metadata span:hover {
  color: #f53f85;
}

.comments-area .comment-respond {
  margin-top: 30px;
}

.comments-area .comment-respond .comment-reply-title {
  margin-bottom: 0;
  font-size: 22px;
  font-weight: 700;
}

.comments-area .comment-respond .comment-reply-title #cancel-comment-reply-link {
  display: inline-block;
}

.comments-area .comment-respond .comment-form {
  overflow: hidden;
}

.comments-area .comment-respond .comment-notes {
  margin-bottom: 20px;
  margin-top: 10px;
}

.comments-area .comment-respond .comment-notes .required {
  color: red;
}

.comments-area .comment-respond .comment-form-comment {
  float: left;
  width: 100%;
}

.comments-area .comment-respond label {
  display: none;
}

.comments-area .comment-respond input[type="date"], .comments-area .comment-respond input[type="time"], .comments-area .comment-respond input[type="datetime-local"], .comments-area .comment-respond input[type="week"], .comments-area .comment-respond input[type="month"], .comments-area .comment-respond input[type="text"], .comments-area .comment-respond input[type="email"], .comments-area .comment-respond input[type="url"], .comments-area .comment-respond input[type="password"], .comments-area .comment-respond input[type="search"], .comments-area .comment-respond input[type="tel"], .comments-area .comment-respond input[type="number"], .comments-area .comment-respond textarea {
  display: block;
  width: 100%;
  background-color: #f4f4f4;
  border: none;
  padding: 0 0 0 15px;
  height: 50px;
  outline: 0;
  border-radius: 3px;
  color: #000000;
  font-weight: 500;
  font-size: 15px;
}

.comments-area .comment-respond input[type="date"]::-webkit-input-placeholder, .comments-area .comment-respond input[type="time"]::-webkit-input-placeholder, .comments-area .comment-respond input[type="datetime-local"]::-webkit-input-placeholder, .comments-area .comment-respond input[type="week"]::-webkit-input-placeholder, .comments-area .comment-respond input[type="month"]::-webkit-input-placeholder, .comments-area .comment-respond input[type="text"]::-webkit-input-placeholder, .comments-area .comment-respond input[type="email"]::-webkit-input-placeholder, .comments-area .comment-respond input[type="url"]::-webkit-input-placeholder, .comments-area .comment-respond input[type="password"]::-webkit-input-placeholder, .comments-area .comment-respond input[type="search"]::-webkit-input-placeholder, .comments-area .comment-respond input[type="tel"]::-webkit-input-placeholder, .comments-area .comment-respond input[type="number"]::-webkit-input-placeholder, .comments-area .comment-respond textarea::-webkit-input-placeholder {
  -webkit-transition: 0.5s;
  transition: 0.5s;
  color: #777777;
}

.comments-area .comment-respond input[type="date"]:-ms-input-placeholder, .comments-area .comment-respond input[type="time"]:-ms-input-placeholder, .comments-area .comment-respond input[type="datetime-local"]:-ms-input-placeholder, .comments-area .comment-respond input[type="week"]:-ms-input-placeholder, .comments-area .comment-respond input[type="month"]:-ms-input-placeholder, .comments-area .comment-respond input[type="text"]:-ms-input-placeholder, .comments-area .comment-respond input[type="email"]:-ms-input-placeholder, .comments-area .comment-respond input[type="url"]:-ms-input-placeholder, .comments-area .comment-respond input[type="password"]:-ms-input-placeholder, .comments-area .comment-respond input[type="search"]:-ms-input-placeholder, .comments-area .comment-respond input[type="tel"]:-ms-input-placeholder, .comments-area .comment-respond input[type="number"]:-ms-input-placeholder, .comments-area .comment-respond textarea:-ms-input-placeholder {
  -webkit-transition: 0.5s;
  transition: 0.5s;
  color: #777777;
}

.comments-area .comment-respond input[type="date"]::-ms-input-placeholder, .comments-area .comment-respond input[type="time"]::-ms-input-placeholder, .comments-area .comment-respond input[type="datetime-local"]::-ms-input-placeholder, .comments-area .comment-respond input[type="week"]::-ms-input-placeholder, .comments-area .comment-respond input[type="month"]::-ms-input-placeholder, .comments-area .comment-respond input[type="text"]::-ms-input-placeholder, .comments-area .comment-respond input[type="email"]::-ms-input-placeholder, .comments-area .comment-respond input[type="url"]::-ms-input-placeholder, .comments-area .comment-respond input[type="password"]::-ms-input-placeholder, .comments-area .comment-respond input[type="search"]::-ms-input-placeholder, .comments-area .comment-respond input[type="tel"]::-ms-input-placeholder, .comments-area .comment-respond input[type="number"]::-ms-input-placeholder, .comments-area .comment-respond textarea::-ms-input-placeholder {
  -webkit-transition: 0.5s;
  transition: 0.5s;
  color: #777777;
}

.comments-area .comment-respond input[type="date"]::placeholder, .comments-area .comment-respond input[type="time"]::placeholder, .comments-area .comment-respond input[type="datetime-local"]::placeholder, .comments-area .comment-respond input[type="week"]::placeholder, .comments-area .comment-respond input[type="month"]::placeholder, .comments-area .comment-respond input[type="text"]::placeholder, .comments-area .comment-respond input[type="email"]::placeholder, .comments-area .comment-respond input[type="url"]::placeholder, .comments-area .comment-respond input[type="password"]::placeholder, .comments-area .comment-respond input[type="search"]::placeholder, .comments-area .comment-respond input[type="tel"]::placeholder, .comments-area .comment-respond input[type="number"]::placeholder, .comments-area .comment-respond textarea::placeholder {
  -webkit-transition: 0.5s;
  transition: 0.5s;
  color: #777777;
}

.comments-area .comment-respond input[type="date"]:focus::-webkit-input-placeholder, .comments-area .comment-respond input[type="time"]:focus::-webkit-input-placeholder, .comments-area .comment-respond input[type="datetime-local"]:focus::-webkit-input-placeholder, .comments-area .comment-respond input[type="week"]:focus::-webkit-input-placeholder, .comments-area .comment-respond input[type="month"]:focus::-webkit-input-placeholder, .comments-area .comment-respond input[type="text"]:focus::-webkit-input-placeholder, .comments-area .comment-respond input[type="email"]:focus::-webkit-input-placeholder, .comments-area .comment-respond input[type="url"]:focus::-webkit-input-placeholder, .comments-area .comment-respond input[type="password"]:focus::-webkit-input-placeholder, .comments-area .comment-respond input[type="search"]:focus::-webkit-input-placeholder, .comments-area .comment-respond input[type="tel"]:focus::-webkit-input-placeholder, .comments-area .comment-respond input[type="number"]:focus::-webkit-input-placeholder, .comments-area .comment-respond textarea:focus::-webkit-input-placeholder {
  color: transparent;
}

.comments-area .comment-respond input[type="date"]:focus:-ms-input-placeholder, .comments-area .comment-respond input[type="time"]:focus:-ms-input-placeholder, .comments-area .comment-respond input[type="datetime-local"]:focus:-ms-input-placeholder, .comments-area .comment-respond input[type="week"]:focus:-ms-input-placeholder, .comments-area .comment-respond input[type="month"]:focus:-ms-input-placeholder, .comments-area .comment-respond input[type="text"]:focus:-ms-input-placeholder, .comments-area .comment-respond input[type="email"]:focus:-ms-input-placeholder, .comments-area .comment-respond input[type="url"]:focus:-ms-input-placeholder, .comments-area .comment-respond input[type="password"]:focus:-ms-input-placeholder, .comments-area .comment-respond input[type="search"]:focus:-ms-input-placeholder, .comments-area .comment-respond input[type="tel"]:focus:-ms-input-placeholder, .comments-area .comment-respond input[type="number"]:focus:-ms-input-placeholder, .comments-area .comment-respond textarea:focus:-ms-input-placeholder {
  color: transparent;
}

.comments-area .comment-respond input[type="date"]:focus::-ms-input-placeholder, .comments-area .comment-respond input[type="time"]:focus::-ms-input-placeholder, .comments-area .comment-respond input[type="datetime-local"]:focus::-ms-input-placeholder, .comments-area .comment-respond input[type="week"]:focus::-ms-input-placeholder, .comments-area .comment-respond input[type="month"]:focus::-ms-input-placeholder, .comments-area .comment-respond input[type="text"]:focus::-ms-input-placeholder, .comments-area .comment-respond input[type="email"]:focus::-ms-input-placeholder, .comments-area .comment-respond input[type="url"]:focus::-ms-input-placeholder, .comments-area .comment-respond input[type="password"]:focus::-ms-input-placeholder, .comments-area .comment-respond input[type="search"]:focus::-ms-input-placeholder, .comments-area .comment-respond input[type="tel"]:focus::-ms-input-placeholder, .comments-area .comment-respond input[type="number"]:focus::-ms-input-placeholder, .comments-area .comment-respond textarea:focus::-ms-input-placeholder {
  color: transparent;
}

.comments-area .comment-respond input[type="date"]:focus::placeholder, .comments-area .comment-respond input[type="time"]:focus::placeholder, .comments-area .comment-respond input[type="datetime-local"]:focus::placeholder, .comments-area .comment-respond input[type="week"]:focus::placeholder, .comments-area .comment-respond input[type="month"]:focus::placeholder, .comments-area .comment-respond input[type="text"]:focus::placeholder, .comments-area .comment-respond input[type="email"]:focus::placeholder, .comments-area .comment-respond input[type="url"]:focus::placeholder, .comments-area .comment-respond input[type="password"]:focus::placeholder, .comments-area .comment-respond input[type="search"]:focus::placeholder, .comments-area .comment-respond input[type="tel"]:focus::placeholder, .comments-area .comment-respond input[type="number"]:focus::placeholder, .comments-area .comment-respond textarea:focus::placeholder {
  color: transparent;
}

.comments-area .comment-respond textarea {
  height: auto !important;
  padding-top: 15px;
}

.comments-area .comment-respond .comment-form-author {
  float: left;
  width: 50%;
  padding-right: 10px;
  margin-bottom: 20px;
}

.comments-area .comment-respond .comment-form-email {
  float: left;
  width: 50%;
  padding-left: 12px;
  margin-bottom: 20px;
}

.comments-area .comment-respond .comment-form-url {
  float: left;
  width: 100%;
  margin-bottom: 20px;
}

.comments-area .comment-respond .comment-form-cookies-consent {
  width: 100%;
  float: left;
  position: relative;
  padding-left: 20px;
  margin-bottom: 20px;
  margin-top: 15px;
}

.comments-area .comment-respond .comment-form-cookies-consent input {
  position: absolute;
  left: 0;
  top: 5px;
}

.comments-area .comment-respond .comment-form-cookies-consent label {
  display: inline-block;
  margin: 0;
  color: #777777;
  position: relative;
  top: -3.5px;
  font-weight: normal;
  font-size: 16px;
}

.comments-area .comment-respond .form-submit {
  float: left;
  width: 100%;
}

.comments-area .comment-respond .form-submit input {
  background: #f53f85;
  border: none;
  color: #ffffff;
  padding: 10px 30px 9px;
  display: inline-block;
  cursor: pointer;
  text-transform: uppercase;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  border-radius: 0;
  font-weight: 700;
  font-size: 15px;
}

.comments-area .comment-respond .form-submit input:hover, .comments-area .comment-respond .form-submit input:focus {
  color: #ffffff;
  background-color: #000000;
}

/*================================================
Instagram CSS
=================================================*/
.instagram-area {
  position: relative;
  z-index: 1;
}

.instagram-area .container-fluid {
  padding-left: 0;
  padding-right: 0;
}

.instagram-title {
  margin-bottom: 50px;
  text-align: center;
}

.instagram-title a {
  display: inline-block;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding-left: 32px;
  font-size: 15px;
  font-weight: 300;
}

.instagram-title a i {
  position: absolute;
  left: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  font-size: 25px;
}

.single-instagram-post {
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.single-instagram-post i {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  width: 32px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  color: #ffffff;
  font-size: 30px;
  border-radius: 2px;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  margin-top: 10px;
  background: radial-gradient(circle at 30% 107%, #fdf497 0, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%);
}

.single-instagram-post .link-btn {
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.single-instagram-post::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  opacity: 0;
  visibility: hidden;
}

.single-instagram-post:hover i {
  margin-top: 0;
  opacity: 1;
  visibility: visible;
}

.single-instagram-post:hover::before {
  visibility: visible;
  opacity: .50;
}

/*================================================
Modal CSS
=================================================*/
.productsQuickView .modal-dialog {
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0;
}

.productsQuickView .modal-content {
  border: none;
  padding: 40px;
  border-radius: 0;
}

.productsQuickView .modal-content button.close {
  position: absolute;
  right: 0;
  top: 0;
  outline: 0;
  opacity: 1;
  color: #000000;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  line-height: 35px;
  padding: 0;
  margin: 0;
  font-size: 25px;
  width: 35px;
  text-shadow: unset;
  height: 35px;
}

.productsQuickView .modal-content button.close:hover {
  background-color: red;
  color: #ffffff;
}

.productsQuickView .modal-content .products-image {
  position: relative;
}

.productsQuickView .modal-content .products-image .sale-tag {
  position: absolute;
  left: 20px;
  top: 20px;
  background-color: red;
  color: #ffffff;
  width: 55px;
  height: 55px;
  line-height: 55px;
  text-align: center;
  border-radius: 50%;
  z-index: 2;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
}

.productsQuickView .modal-content .products-content h3 {
  margin-bottom: 0;
  font-size: 22px;
  font-weight: 600;
}

.productsQuickView .modal-content .products-content h3 a {
  color: #000000;
}

.productsQuickView .modal-content .products-content h3 a:hover {
  color: #000000;
}

.productsQuickView .modal-content .products-content .price {
  -webkit-transition: 0.5s;
  transition: 0.5s;
  margin-top: 12px;
  margin-bottom: 15px;
  font-size: 15px;
  font-weight: 600;
}

.productsQuickView .modal-content .products-content .price .old-price {
  text-decoration: line-through;
  color: #999999;
  font-weight: 500;
  margin-right: 10px;
}

.productsQuickView .modal-content .products-content .products-review .rating {
  display: inline-block;
  padding-right: 10px;
}

.productsQuickView .modal-content .products-content .products-review .rating i {
  color: #f49f0b;
  display: inline-block;
  margin-right: -2px;
}

.productsQuickView .modal-content .products-content .products-review .rating-count {
  display: inline-block;
  color: #000000;
  border-bottom: 1px solid #000000;
  line-height: initial;
  position: relative;
  top: -1px;
}

.productsQuickView .modal-content .products-content .products-review .rating-count:hover {
  color: #f53f85;
  border-color: #f53f85;
}

.productsQuickView .modal-content .products-content .products-info {
  list-style-type: none;
  padding-left: 0;
  margin-top: 20px;
  margin-bottom: 0;
}

.productsQuickView .modal-content .products-content .products-info li {
  font-size: 16px;
  color: #000000;
  margin-bottom: 8px;
}

.productsQuickView .modal-content .products-content .products-info li:last-child {
  margin-bottom: 0;
}

.productsQuickView .modal-content .products-content .products-info li span {
  color: #777777;
  margin-right: 5px;
}

.productsQuickView .modal-content .products-content .products-info li a {
  display: inline-block;
  font-weight: 600;
  color: #000000;
}

.productsQuickView .modal-content .products-content .products-info li a:hover {
  color: #000000;
}

.productsQuickView .modal-content .products-content .products-color-switch {
  margin-top: 8px;
}

.productsQuickView .modal-content .products-content .products-color-switch h4 {
  font-size: 16px;
  color: #777777;
  margin-bottom: 6px;
}

.productsQuickView .modal-content .products-content .products-color-switch ul {
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 0;
  margin-top: -4px;
  margin-left: -4px;
}

.productsQuickView .modal-content .products-content .products-color-switch ul li {
  display: inline-block;
  margin-left: 4px;
  margin-top: 4px;
}

.productsQuickView .modal-content .products-content .products-color-switch ul li a {
  display: inline-block;
  position: relative;
  border: 1px solid transparent;
  width: 25px;
  height: 25px;
  border-radius: 50%;
}

.productsQuickView .modal-content .products-content .products-color-switch ul li a::before {
  position: absolute;
  content: '';
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #eeeeee;
  border-radius: 50%;
  margin: 2px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.productsQuickView .modal-content .products-content .products-color-switch ul li a:hover, .productsQuickView .modal-content .products-content .products-color-switch ul li a:focus {
  border-color: #000000;
}

.productsQuickView .modal-content .products-content .products-color-switch ul li a.color-white::before {
  background: #ffffff;
  border: 1px solid #eeeeee;
}

.productsQuickView .modal-content .products-content .products-color-switch ul li a.color-black::before {
  background: #000000;
}

.productsQuickView .modal-content .products-content .products-color-switch ul li a.color-red::before {
  background: red;
}

.productsQuickView .modal-content .products-content .products-color-switch ul li a.color-blue::before {
  background: blue;
}

.productsQuickView .modal-content .products-content .products-color-switch ul li a.color-green::before {
  background: green;
}

.productsQuickView .modal-content .products-content .products-color-switch ul li a.color-yellow::before {
  background: yellow;
}

.productsQuickView .modal-content .products-content .products-color-switch ul li a.color-yellowgreen::before {
  background: yellowgreen;
}

.productsQuickView .modal-content .products-content .products-color-switch ul li a.color-pink::before {
  background: pink;
}

.productsQuickView .modal-content .products-content .products-color-switch ul li a.color-violet::before {
  background: violet;
}

.productsQuickView .modal-content .products-content .products-color-switch ul li a.color-teal::before {
  background: teal;
}

.productsQuickView .modal-content .products-content .products-color-switch ul li a.color-plum::before {
  background: plum;
}

.productsQuickView .modal-content .products-content .products-color-switch ul li a.color-lime::before {
  background: lime;
}

.productsQuickView .modal-content .products-content .products-color-switch ul li a.color-blueviolet::before {
  background: blueviolet;
}

.productsQuickView .modal-content .products-content .products-color-switch ul li.active a {
  border-color: #000000;
}

.productsQuickView .modal-content .products-content .products-size-wrapper {
  margin-top: 8px;
  margin-bottom: 25px;
}

.productsQuickView .modal-content .products-content .products-size-wrapper h4 {
  font-size: 16px;
  color: #777777;
  margin-bottom: 8px;
}

.productsQuickView .modal-content .products-content .products-size-wrapper ul {
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 0;
  margin-top: -8px;
  margin-left: -8px;
}

.productsQuickView .modal-content .products-content .products-size-wrapper ul li {
  display: inline-block;
  margin-left: 8px;
  margin-top: 8px;
}

.productsQuickView .modal-content .products-content .products-size-wrapper ul li a {
  width: 35px;
  height: 30px;
  display: inline-block;
  line-height: 28px;
  border: 1px solid #eeeeee;
  color: #858585;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
}

.productsQuickView .modal-content .products-content .products-size-wrapper ul li a:hover, .productsQuickView .modal-content .products-content .products-size-wrapper ul li a:focus {
  border-color: #000000;
  color: #000000;
}

.productsQuickView .modal-content .products-content .products-size-wrapper ul li.active a {
  border-color: #000000;
  color: #000000;
}

.productsQuickView .modal-content .products-content .products-add-to-cart .input-counter {
  max-width: 110px;
  min-width: 110px;
  margin-right: 10px;
  text-align: center;
  display: inline-block;
  position: relative;
}

.productsQuickView .modal-content .products-content .products-add-to-cart .input-counter span {
  position: absolute;
  top: 0;
  background-color: transparent;
  cursor: pointer;
  color: #d0d0d0;
  width: 40px;
  height: 100%;
  line-height: 50px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  font-size: 18px;
}

.productsQuickView .modal-content .products-content .products-add-to-cart .input-counter span.minus-btn {
  left: 0;
}

.productsQuickView .modal-content .products-content .products-add-to-cart .input-counter span.plus-btn {
  right: 0;
}

.productsQuickView .modal-content .products-content .products-add-to-cart .input-counter span:hover {
  color: #f53f85;
}

.productsQuickView .modal-content .products-content .products-add-to-cart .input-counter input {
  height: 45px;
  color: #000000;
  outline: 0;
  display: block;
  border: none;
  background-color: #f8f8f8;
  text-align: center;
  width: 100%;
  font-size: 17px;
  font-weight: 600;
}

.productsQuickView .modal-content .products-content .products-add-to-cart .input-counter input::-webkit-input-placeholder {
  color: #000000;
}

.productsQuickView .modal-content .products-content .products-add-to-cart .input-counter input:-ms-input-placeholder {
  color: #000000;
}

.productsQuickView .modal-content .products-content .products-add-to-cart .input-counter input::-ms-input-placeholder {
  color: #000000;
}

.productsQuickView .modal-content .products-content .products-add-to-cart .input-counter input::placeholder {
  color: #000000;
}

.productsQuickView .modal-content .products-content .view-full-info {
  margin-top: 25px;
  color: #000000;
  line-height: initial;
  display: inline-block;
  position: relative;
  font-weight: 600;
  font-size: 15px;
}

.productsQuickView .modal-content .products-content .view-full-info::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: #000000;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.productsQuickView .modal-content .products-content .view-full-info:hover::before {
  width: 0;
}

.productsQuickView.active {
  opacity: 1;
  overflow: visible;
  display: block;
  background: rgba(0, 0, 0, 0.6);
}

.shoppingCartModal.right {
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 99999;
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.shoppingCartModal.right .modal-innter-content {
  width: 320px;
  background-color: #ffffff;
  height: 100%;
  margin-left: auto;
  overflow-y: auto;
  margin-right: -500px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.shoppingCartModal.right .modal-innter-content .modal-body {
  padding: 25px 15px;
}

.shoppingCartModal.right .modal-innter-content .modal-body h3 {
  font-size: 17px;
  text-transform: uppercase;
  margin-bottom: 25px;
}

.shoppingCartModal.right .modal-innter-content .modal-body .products-cart-content .products-cart {
  position: relative;
  border-bottom: 1px dashed #eeeeee;
  margin-bottom: 15px;
  padding-left: 70px;
  padding-bottom: 15px;
}

.shoppingCartModal.right .modal-innter-content .modal-body .products-cart-content .products-cart .products-image {
  position: absolute;
  left: 0;
  top: 0;
  width: 55px;
}

.shoppingCartModal.right .modal-innter-content .modal-body .products-cart-content .products-cart .products-image a {
  display: block;
}

.shoppingCartModal.right .modal-innter-content .modal-body .products-cart-content .products-cart .products-content {
  position: relative;
}

.shoppingCartModal.right .modal-innter-content .modal-body .products-cart-content .products-cart .products-content h3 {
  font-size: 15px;
  text-transform: initial;
  margin-bottom: 5px;
}

.shoppingCartModal.right .modal-innter-content .modal-body .products-cart-content .products-cart .products-content h3 a {
  display: inline-block;
}

.shoppingCartModal.right .modal-innter-content .modal-body .products-cart-content .products-cart .products-content span {
  font-size: 12px;
  display: block;
  margin-bottom: 3px;
  color: #777777;
}

.shoppingCartModal.right .modal-innter-content .modal-body .products-cart-content .products-cart .products-content .products-price span {
  display: inline-block;
  margin-bottom: 0;
  font-size: 13px;
  color: #777777;
  margin-right: 3px;
}

.shoppingCartModal.right .modal-innter-content .modal-body .products-cart-content .products-cart .products-content .products-price span.price {
  font-size: 14px;
  color: #000000;
}

.shoppingCartModal.right .modal-innter-content .modal-body .products-cart-content .products-cart .products-content .remove-btn {
  position: absolute;
  right: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  display: inline-block;
  color: #777777;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.shoppingCartModal.right .modal-innter-content .modal-body .products-cart-content .products-cart .products-content .remove-btn:hover {
  color: red;
}

.shoppingCartModal.right .modal-innter-content .modal-body .products-cart-content .products-cart .products-content:hover .remove-btn {
  opacity: 1;
  visibility: visible;
}

.shoppingCartModal.right .modal-innter-content .modal-body .products-cart-subtotal {
  overflow: hidden;
  margin-bottom: 15px;
  border-bottom: 1px dashed #eeeeee;
  padding-bottom: 15px;
}

.shoppingCartModal.right .modal-innter-content .modal-body .products-cart-subtotal span {
  text-transform: uppercase;
  display: inline-block;
  font-size: 15px;
  font-weight: 600;
}

.shoppingCartModal.right .modal-innter-content .modal-body .products-cart-subtotal span.subtotal {
  float: right;
}

.shoppingCartModal.right .modal-innter-content .modal-body .products-cart-btn .default-btn {
  display: block;
  width: 100%;
  text-align: center;
}

.shoppingCartModal.right .modal-innter-content .modal-body .products-cart-btn .optional-btn {
  display: block;
  width: 100%;
  margin-top: 15px;
  text-align: center;
}

.shoppingCartModal.right.active {
  opacity: 1;
  visibility: visible;
}

.shoppingCartModal.right.active .modal-innter-content {
  margin-right: 0;
}

.shoppingCartModal .close {
  color: #000000;
  font-size: 30px;
  outline: 0 !important;
  line-height: initial;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  position: absolute;
  right: 15px;
  top: 17px;
  z-index: 1;
}

.shoppingCartModal .close:not(:disabled):not(.disabled):hover, .shoppingCartModal .close:not(:disabled):not(.disabled):focus {
  color: red;
  text-decoration: none;
  opacity: 1;
}

.sidebarModal.right {
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 99999;
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.sidebarModal.right .modal-innter-content {
  width: 400px;
  background-color: #ffffff;
  height: 100%;
  margin-left: auto;
  overflow-y: auto;
  margin-right: -500px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.sidebarModal.right .modal-innter-content .modal-body {
  padding: 40px;
}

.sidebarModal.right .modal-innter-content .modal-body h3 {
  margin-bottom: 25px;
  padding-bottom: 5px;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 20px;
  font-weight: 600;
}

.sidebarModal.right .modal-innter-content .modal-body h3::before {
  width: 50px;
  height: 1px;
  bottom: -1px;
  content: '';
  position: absolute;
  left: 0;
  background-color: #f53f85;
}

.sidebarModal.right .modal-innter-content .modal-body .sidebar-about-content .about-the-store .sidebar-contact-info {
  padding-left: 0;
  margin-bottom: 0;
  list-style-type: none;
}

.sidebarModal.right .modal-innter-content .modal-body .sidebar-about-content .about-the-store .sidebar-contact-info li {
  margin-bottom: 12px;
  position: relative;
  padding-left: 25px;
}

.sidebarModal.right .modal-innter-content .modal-body .sidebar-about-content .about-the-store .sidebar-contact-info li i {
  position: absolute;
  left: 0;
  top: 2px;
  font-size: 18px;
}

.sidebarModal.right .modal-innter-content .modal-body .sidebar-about-content .about-the-store .sidebar-contact-info li a {
  display: inline-block;
  font-weight: 600;
  position: relative;
}

.sidebarModal.right .modal-innter-content .modal-body .sidebar-about-content .about-the-store .sidebar-contact-info li a:hover::before {
  width: 100%;
}

.sidebarModal.right .modal-innter-content .modal-body .sidebar-about-content .about-the-store .sidebar-contact-info li a::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  background-color: #f53f85;
}

.sidebarModal.right .modal-innter-content .modal-body .sidebar-about-content .about-the-store .sidebar-contact-info li:last-child {
  margin-bottom: 0;
}

.sidebarModal.right .modal-innter-content .modal-body .sidebar-about-content .social-link {
  padding-left: 0;
  list-style-type: none;
  margin-top: 20px;
  margin-bottom: 0;
}

.sidebarModal.right .modal-innter-content .modal-body .sidebar-about-content .social-link li {
  display: inline-block;
  margin-right: 10px;
}

.sidebarModal.right .modal-innter-content .modal-body .sidebar-about-content .social-link li:last-child {
  margin-right: 0;
}

.sidebarModal.right .modal-innter-content .modal-body .sidebar-about-content .social-link li a {
  width: 30px;
  height: 30px;
  text-align: center;
  color: #f53f85;
  background-color: #f4f4f4;
  font-size: 18px;
  position: relative;
  border-radius: 2px;
}

.sidebarModal.right .modal-innter-content .modal-body .sidebar-about-content .social-link li a i {
  position: absolute;
  left: 0;
  top: 50%;
  right: 0;
  -webkit-transform: translateY(-49%);
          transform: translateY(-49%);
}

.sidebarModal.right .modal-innter-content .modal-body .sidebar-about-content .social-link li a:hover {
  background-color: #f53f85;
  color: #ffffff;
}

.sidebarModal.right .modal-innter-content .modal-body .sidebar-new-in-store {
  margin-top: 30px;
}

.sidebarModal.right .modal-innter-content .modal-body .sidebar-new-in-store .products-list {
  padding-left: 0;
  list-style-type: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  margin-top: -10px;
  margin-bottom: 20px;
  margin-left: -5px;
  margin-right: -5px;
}

.sidebarModal.right .modal-innter-content .modal-body .sidebar-new-in-store .products-list li {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 25%;
          flex: 0 0 25%;
  max-width: 25%;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 10px;
}

.sidebarModal.right .modal-innter-content .modal-body .sidebar-new-in-store .products-list li a {
  display: block;
  position: relative;
}

.sidebarModal.right .modal-innter-content .modal-body .sidebar-new-in-store .products-list li a::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #f53f85;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  opacity: 0;
  visibility: hidden;
}

.sidebarModal.right .modal-innter-content .modal-body .sidebar-new-in-store .products-list li a:hover::before {
  opacity: 0.88;
  visibility: visible;
}

.sidebarModal.right .modal-innter-content .modal-body .sidebar-new-in-store .shop-now-btn {
  display: inline-block;
  text-transform: uppercase;
  border-bottom: 1px solid #f53f85;
  font-weight: 600;
  font-size: 14px;
}

.sidebarModal.right .modal-innter-content .modal-body .sidebar-new-in-store .shop-now-btn:hover {
  color: #f53f85;
  border-color: #f53f85;
}

.sidebarModal.right.active {
  opacity: 1;
  visibility: visible;
}

.sidebarModal.right.active .modal-innter-content {
  margin-right: 0;
}

.sidebarModal .close {
  color: #000000;
  font-size: 28px;
  outline: 0 !important;
  line-height: initial;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  position: absolute;
  right: 40px;
  top: 37px;
  z-index: 1;
}

.sidebarModal .close:not(:disabled):not(.disabled):hover, .sidebarModal .close:not(:disabled):not(.disabled):focus {
  color: red;
  text-decoration: none;
  opacity: 1;
}

.sizeGuideModal .modal-dialog {
  max-width: 900px;
  margin: 0 auto;
}

.sizeGuideModal .modal-content {
  border: none;
  padding: 40px;
  border-radius: 0;
}

.sizeGuideModal .modal-content button.close {
  position: absolute;
  right: 0;
  top: 0;
  outline: 0;
  opacity: 1;
  color: #000000;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  line-height: 35px;
  padding: 0;
  margin: 0;
  font-size: 20px;
  width: 35px;
  text-shadow: unset;
  height: 35px;
}

.sizeGuideModal .modal-content button.close:hover {
  background-color: red;
  color: #ffffff;
}

.sizeGuideModal .modal-content .modal-sizeguide {
  text-align: center;
}

.sizeGuideModal .modal-content .modal-sizeguide h3 {
  margin-bottom: 7px;
  font-size: 22px;
  font-weight: 700;
}

.sizeGuideModal .modal-content .modal-sizeguide p {
  margin-bottom: 25px;
}

.sizeGuideModal .modal-content .modal-sizeguide .table {
  margin-bottom: 0;
}

.sizeGuideModal .modal-content .modal-sizeguide .table thead {
  background-color: #000000;
  color: #ffffff;
}

.sizeGuideModal .modal-content .modal-sizeguide .table thead th {
  border-bottom: none;
  white-space: nowrap;
  color: #ffffff;
  vertical-align: middle;
  padding: 10px 15px;
}

.sizeGuideModal .modal-content .modal-sizeguide .table tr td, .sizeGuideModal .modal-content .modal-sizeguide .table tr th {
  border-top: none;
  white-space: nowrap;
  vertical-align: middle;
  font-size: 15px;
  padding: 10px 15px;
}

.productsShippingModal .modal-dialog {
  max-width: 900px;
  margin: 0 auto;
}

.productsShippingModal .modal-content {
  border: none;
  padding: 40px;
  border-radius: 0;
}

.productsShippingModal .modal-content button.close {
  position: absolute;
  right: 0;
  top: 0;
  outline: 0;
  opacity: 1;
  color: #000000;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  line-height: 35px;
  padding: 0;
  margin: 0;
  font-size: 25px;
  width: 35px;
  text-shadow: unset;
  height: 35px;
}

.productsShippingModal .modal-content button.close:hover {
  background-color: red;
  color: #ffffff;
}

.productsShippingModal .modal-content .shipping-content h3 {
  margin-bottom: 15px;
  margin-top: 30px;
  font-size: 22px;
  font-weight: 700;
}

.productsShippingModal .modal-content .shipping-content h3:first-child {
  margin-top: 0;
}

.productsShippingModal .modal-content .shipping-content ul {
  padding-left: 0;
  margin-bottom: 0;
  list-style-type: none;
}

.productsShippingModal .modal-content .shipping-content ul li {
  margin-bottom: 12px;
  color: #777777;
  position: relative;
  padding-left: 13px;
}

.productsShippingModal .modal-content .shipping-content ul li::before {
  content: '';
  position: absolute;
  top: 9px;
  left: 0;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #f53f85;
}

.productsShippingModal .modal-content .shipping-content ul li:last-child {
  margin-bottom: 0;
}

.shoppingWishlistModal.right {
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 99999;
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.shoppingWishlistModal.right .modal-innter-content {
  width: 320px;
  background-color: #ffffff;
  height: 100%;
  margin-left: auto;
  overflow-y: auto;
  margin-right: -400px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.shoppingWishlistModal.right .modal-innter-content .modal-body {
  padding: 25px 15px;
}

.shoppingWishlistModal.right .modal-innter-content .modal-body h3 {
  font-size: 17px;
  text-transform: uppercase;
  margin-bottom: 25px;
}

.shoppingWishlistModal.right .modal-innter-content .modal-body .products-cart-content .products-cart {
  position: relative;
  border-bottom: 1px dashed #eeeeee;
  margin-bottom: 15px;
  padding-left: 70px;
  padding-bottom: 15px;
}

.shoppingWishlistModal.right .modal-innter-content .modal-body .products-cart-content .products-cart .products-image {
  position: absolute;
  left: 0;
  top: 0;
  width: 55px;
}

.shoppingWishlistModal.right .modal-innter-content .modal-body .products-cart-content .products-cart .products-image a {
  display: block;
}

.shoppingWishlistModal.right .modal-innter-content .modal-body .products-cart-content .products-cart .products-content {
  position: relative;
}

.shoppingWishlistModal.right .modal-innter-content .modal-body .products-cart-content .products-cart .products-content h3 {
  font-size: 15px;
  text-transform: initial;
  margin-bottom: 5px;
}

.shoppingWishlistModal.right .modal-innter-content .modal-body .products-cart-content .products-cart .products-content h3 a {
  display: inline-block;
}

.shoppingWishlistModal.right .modal-innter-content .modal-body .products-cart-content .products-cart .products-content span {
  font-size: 12px;
  display: block;
  margin-bottom: 3px;
  color: #777777;
}

.shoppingWishlistModal.right .modal-innter-content .modal-body .products-cart-content .products-cart .products-content .products-price span {
  display: inline-block;
  margin-bottom: 0;
  font-size: 13px;
  color: #777777;
  margin-right: 3px;
}

.shoppingWishlistModal.right .modal-innter-content .modal-body .products-cart-content .products-cart .products-content .products-price span:last-child {
  margin-right: 0;
}

.shoppingWishlistModal.right .modal-innter-content .modal-body .products-cart-content .products-cart .products-content .products-price span.price {
  font-size: 14px;
  color: #000000;
}

.shoppingWishlistModal.right .modal-innter-content .modal-body .products-cart-content .products-cart .products-content .remove-btn {
  position: absolute;
  right: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  display: inline-block;
  color: #777777;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.shoppingWishlistModal.right .modal-innter-content .modal-body .products-cart-content .products-cart .products-content .remove-btn:hover {
  color: red;
}

.shoppingWishlistModal.right .modal-innter-content .modal-body .products-cart-content .products-cart .products-content:hover .remove-btn {
  opacity: 1;
  visibility: visible;
}

.shoppingWishlistModal.right .modal-innter-content .modal-body .products-cart-btn .default-btn {
  display: block;
  width: 100%;
  text-align: center;
}

.shoppingWishlistModal.right .modal-innter-content .modal-body .products-cart-btn .optional-btn {
  display: block;
  width: 100%;
  margin-top: 15px;
  text-align: center;
}

.shoppingWishlistModal.right.active {
  opacity: 1;
  visibility: visible;
}

.shoppingWishlistModal.right.active .modal-innter-content {
  margin-right: 0;
}

.shoppingWishlistModal .close {
  color: #000000;
  font-size: 30px;
  outline: 0 !important;
  line-height: initial;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  position: absolute;
  right: 15px;
  top: 17px;
  z-index: 1;
}

.shoppingWishlistModal .close:not(:disabled):not(.disabled):hover, .shoppingWishlistModal .close:not(:disabled):not(.disabled):focus {
  color: red;
  text-decoration: none;
  opacity: 1;
}

.productsFilterModal.modal.left .modal-dialog {
  position: fixed;
  margin: auto;
  width: 400px;
  height: 100%;
  -webkit-transform: translate3d(0%, 0, 0);
          transform: translate3d(0%, 0, 0);
}

.productsFilterModal.modal.left.fade .modal-dialog {
  left: -320px;
  -webkit-transition: opacity 0.3s linear, left 0.3s ease-out;
  transition: opacity 0.3s linear, left 0.3s ease-out;
}

.productsFilterModal.modal.left.fade.show .modal-dialog {
  left: 0;
}

.productsFilterModal .modal-content {
  height: 100%;
  overflow-y: auto;
  border-radius: 0;
  border: none;
  position: relative;
  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 30px;
  padding-right: 30px;
}

.productsFilterModal .modal-content .modal-body {
  padding: 0;
}

.productsFilterModal .modal-content .modal-body .woocommerce-widget-area .filter-list-widget .selected-filters-wrap-list ul li a i {
  top: 0;
  padding-left: 0;
}

.productsFilterModal button.close {
  position: absolute;
  left: 30px;
  top: 20px;
  outline: 0;
  padding-left: 25px;
  text-shadow: unset;
  opacity: 1;
  line-height: initial;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  font-size: 15px;
}

.productsFilterModal button.close i {
  font-size: 24px;
  position: absolute;
  left: 0;
  top: -3.8px;
}

.productsFilterModal button.close:hover {
  color: red;
}

/*================================================
Page Title CSS
=================================================*/
.page-title-area {
  background-color: #f8f8f8;
  padding-top: 35px;
  padding-bottom: 30px;
}

.page-title-content {
  position: relative;
}

.page-title-content h2 {
  margin-bottom: 0;
  font-size: 25px;
  font-weight: 700;
}

.page-title-content ul {
  text-align: right;
  position: absolute;
  right: 0;
  padding-left: 0;
  margin-bottom: 0;
  list-style-type: none;
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
}

.page-title-content ul li {
  display: inline-block;
  margin-left: 20px;
  font-weight: 600;
  color: #f53f85;
  position: relative;
}

.page-title-content ul li::before {
  content: '';
  position: absolute;
  left: -10px;
  top: 6px;
  height: 12px;
  width: 1px;
  background-color: #777777;
}

.page-title-content ul li:first-child {
  margin-left: 0;
}

.page-title-content ul li:first-child::before {
  display: none;
}

.page-title-content ul li a {
  display: block;
}

/*================================================
Gallery CSS
=================================================*/
.gallery-area .container-fluid {
  padding-left: 0;
  padding-right: 0;
}

.gallery-area .row {
  margin-left: 0;
  margin-right: 0;
}

.gallery-area .row .col-lg-1, .gallery-area .row .col-lg-2, .gallery-area .row .col-lg-3, .gallery-area .row .col-lg-4, .gallery-area .row .col-lg-5, .gallery-area .row .col-lg-6, .gallery-area .row .col-lg-7, .gallery-area .row .col-lg-8, .gallery-area .row .col-lg-9, .gallery-area .row .col-lg-10, .gallery-area .row .col-lg-11, .gallery-area .row .col-lg-12 {
  padding-left: 0;
  padding-right: 0;
}

.single-gallery-item {
  position: relative;
  overflow: hidden;
  text-align: center;
}

.single-gallery-item img {
  -webkit-transition: 0.5s;
  transition: 0.5s;
  width: 100%;
}

.single-gallery-item .popup-btn {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.single-gallery-item .gallery-content {
  position: absolute;
  bottom: 0;
  left: 10px;
  border: 1px solid #ffffff;
  right: 10px;
  padding: 25px 15px;
  z-index: 1;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.single-gallery-item .gallery-content::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: 5px;
  background-color: #ffffff;
  z-index: -1;
}

.single-gallery-item .gallery-content span {
  display: block;
  color: #f53f85;
  text-transform: uppercase;
  margin-bottom: 5px;
  font-size: 14px;
}

.single-gallery-item .gallery-content h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}

.single-gallery-item:hover img {
  -webkit-transform: rotate(8deg) scale(1.3);
          transform: rotate(8deg) scale(1.3);
}

.single-gallery-item:hover .gallery-content {
  bottom: 10px;
  opacity: 1;
  visibility: visible;
}

.gallery-items .single-gallery-item {
  margin-bottom: 30px;
}

/*================================================
Look Book CSS
=================================================*/
.lookbook-items {
  margin-left: -15px;
  margin-right: -15px;
}

.single-lookbook-box {
  position: relative;
  margin-bottom: 30px;
}

.single-lookbook-box a {
  display: block;
}

.single-lookbook-box .content {
  -webkit-transition: 0.5s;
  transition: 0.5s;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  position: relative;
  -webkit-box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.06);
          box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.06);
  top: 0;
  margin-left: 10px;
  margin-top: -10px;
  margin-right: 10px;
}

.single-lookbook-box .content p {
  display: block;
  margin-bottom: 8px;
  font-size: 15px;
  font-weight: 600;
}

.single-lookbook-box .content p a {
  display: inline-block;
  padding-right: 3px;
}

.single-lookbook-box .content p:last-child {
  margin-bottom: 0;
}

.single-lookbook-box:hover .content {
  top: -10px;
}

/*================================================
Woocommerce Widget Sidebar CSS
=================================================*/
.woocommerce-widget-area .woocommerce-widget {
  margin-bottom: 35px;
}

.woocommerce-widget-area .woocommerce-widget .woocommerce-widget-title {
  margin-bottom: 25px;
  position: relative;
  padding-bottom: 8px;
  border-bottom: 1px solid #eeeeee;
  font-size: 20px;
  font-weight: 700;
}

.woocommerce-widget-area .woocommerce-widget .woocommerce-widget-title::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50px;
  height: 1px;
  bottom: -1px;
  background-color: #f53f85;
}

.woocommerce-widget-area .woocommerce-widget:last-child {
  margin-bottom: 0;
}

.woocommerce-widget-area .filter-list-widget .selected-filters-wrap-list ul {
  padding-left: 0;
  margin-bottom: 0;
  list-style-type: none;
}

.woocommerce-widget-area .filter-list-widget .selected-filters-wrap-list ul li {
  margin-bottom: 9px;
  font-size: 14.5px;
  font-weight: 600;
}

.woocommerce-widget-area .filter-list-widget .selected-filters-wrap-list ul li a {
  position: relative;
  padding-left: 28px;
  display: inline-block;
}

.woocommerce-widget-area .filter-list-widget .selected-filters-wrap-list ul li a i {
  display: inline-block;
  background-color: #f53f85;
  width: 18px;
  height: 18px;
  color: #ffffff;
  border-radius: 50%;
  text-align: center;
  line-height: 19px;
  position: absolute;
  left: 0;
  top: 1px;
  padding-left: 1px;
}

.woocommerce-widget-area .filter-list-widget .selected-filters-wrap-list ul li:last-child {
  margin-bottom: 0;
}

.woocommerce-widget-area .filter-list-widget .selected-filters-wrap-list .delete-selected-filters {
  display: inline-block;
  margin-top: 15px;
  font-size: 15px;
  font-weight: 600;
}

.woocommerce-widget-area .filter-list-widget .selected-filters-wrap-list .delete-selected-filters:hover {
  color: red;
}

.woocommerce-widget-area .filter-list-widget .selected-filters-wrap-list .delete-selected-filters span {
  text-decoration: underline;
}

.woocommerce-widget-area .collections-list-widget .collections-list-row {
  padding-left: 0;
  margin-bottom: 0;
  list-style-type: none;
}

.woocommerce-widget-area .collections-list-widget .collections-list-row li {
  margin-bottom: 9px;
}

.woocommerce-widget-area .collections-list-widget .collections-list-row li a {
  display: inline-block;
  position: relative;
  padding-left: 25px;
  font-size: 15px;
  font-weight: 600;
}

.woocommerce-widget-area .collections-list-widget .collections-list-row li a::before {
  content: '';
  position: absolute;
  left: 0;
  top: 2.5px;
  width: 15px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  height: 15px;
  border-radius: 50%;
  border: 1px solid #000000;
}

.woocommerce-widget-area .collections-list-widget .collections-list-row li a:hover {
  color: #f53f85;
}

.woocommerce-widget-area .collections-list-widget .collections-list-row li a:hover::before {
  border-color: #f53f85;
}

.woocommerce-widget-area .collections-list-widget .collections-list-row li a.active::before {
  background-color: #f53f85;
  border-color: #f53f85;
}

.woocommerce-widget-area .collections-list-widget .collections-list-row li.active a::before {
  background-color: #f53f85;
  border-color: #f53f85;
}

.woocommerce-widget-area .collections-list-widget .collections-list-row li:last-child {
  display: inline-block;
}

.woocommerce-widget-area .price-list-widget .collection-filter-by-price {
  margin-top: 20px;
}

.woocommerce-widget-area .price-list-widget .collection-filter-by-price .irs-handle {
  cursor: pointer;
}

.woocommerce-widget-area .price-list-widget .collection-filter-by-price .irs--flat .irs-from, .woocommerce-widget-area .price-list-widget .collection-filter-by-price .irs--flat .irs-to, .woocommerce-widget-area .price-list-widget .collection-filter-by-price .irs--flat .irs-single {
  background-color: #f53f85;
  padding: 1px 5px 1px 11.5px;
}

.woocommerce-widget-area .price-list-widget .collection-filter-by-price .irs--flat .irs-from::before, .woocommerce-widget-area .price-list-widget .collection-filter-by-price .irs--flat .irs-to::before, .woocommerce-widget-area .price-list-widget .collection-filter-by-price .irs--flat .irs-single::before {
  border-top-color: #f53f85;
}

.woocommerce-widget-area .price-list-widget .collection-filter-by-price .irs--flat .irs-from::after, .woocommerce-widget-area .price-list-widget .collection-filter-by-price .irs--flat .irs-to::after, .woocommerce-widget-area .price-list-widget .collection-filter-by-price .irs--flat .irs-single::after {
  content: '$';
  position: absolute;
  left: 5px;
  top: 0.5px;
}

.woocommerce-widget-area .price-list-widget .collection-filter-by-price .irs--flat .irs-bar {
  background-color: #f53f85;
}

.woocommerce-widget-area .price-list-widget .collection-filter-by-price .irs--flat .irs-handle > i:first-child {
  background-color: #f53f85;
}

.woocommerce-widget-area .price-list-widget .collection-filter-by-price .irs--flat .irs-min, .woocommerce-widget-area .price-list-widget .collection-filter-by-price .irs--flat .irs-max {
  padding: 1px 3px 1px 9.5px;
}

.woocommerce-widget-area .price-list-widget .collection-filter-by-price .irs--flat .irs-min::before, .woocommerce-widget-area .price-list-widget .collection-filter-by-price .irs--flat .irs-max::before {
  content: '$';
  position: absolute;
  left: 3px;
  top: 0.5px;
}

.woocommerce-widget-area .price-list-widget .collection-filter-by-price .js-range-of-price {
  width: 100%;
  height: 45px;
  border: 1px solid #eeeeee;
  padding: 6px 15px;
  font-size: 15px;
}

.woocommerce-widget-area .size-list-widget .size-list-row {
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 0;
  margin-top: -10px;
}

.woocommerce-widget-area .size-list-widget .size-list-row li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
}

.woocommerce-widget-area .size-list-widget .size-list-row li a {
  width: 35px;
  height: 35px;
  display: inline-block;
  line-height: 33px;
  border: 1px solid #eeeeee;
  text-align: center;
  font-size: 13px;
  font-weight: 600;
}

.woocommerce-widget-area .size-list-widget .size-list-row li a:hover, .woocommerce-widget-area .size-list-widget .size-list-row li a:focus {
  border-color: #f53f85;
  color: #ffffff;
  background-color: #f53f85;
}

.woocommerce-widget-area .size-list-widget .size-list-row li a.active a {
  border-color: #f53f85;
  color: #ffffff;
  background-color: #f53f85;
}

.woocommerce-widget-area .size-list-widget .size-list-row li.active a {
  border-color: #f53f85;
  color: #ffffff;
  background-color: #f53f85;
}

.woocommerce-widget-area .color-list-widget .color-list-row {
  list-style-type: none;
  padding-left: 0;
  margin-bottom: -5px;
  margin-top: -4px;
}

.woocommerce-widget-area .color-list-widget .color-list-row li {
  display: inline-block;
  margin-right: 4px;
  margin-top: 4px;
}

.woocommerce-widget-area .color-list-widget .color-list-row li a {
  display: block;
  position: relative;
  border: 1px solid transparent;
  width: 25px;
  height: 25px;
  border-radius: 50%;
}

.woocommerce-widget-area .color-list-widget .color-list-row li a::before {
  position: absolute;
  content: '';
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #eeeeee;
  border-radius: 50%;
  margin: 2px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.woocommerce-widget-area .color-list-widget .color-list-row li a:hover {
  border-color: #000000;
}

.woocommerce-widget-area .color-list-widget .color-list-row li a.color-white::before {
  background: #ffffff;
  border: 1px solid #eeeeee;
}

.woocommerce-widget-area .color-list-widget .color-list-row li a.color-black::before {
  background: #000000;
}

.woocommerce-widget-area .color-list-widget .color-list-row li a.color-red::before {
  background: red;
}

.woocommerce-widget-area .color-list-widget .color-list-row li a.color-blue::before {
  background: blue;
}

.woocommerce-widget-area .color-list-widget .color-list-row li a.color-green::before {
  background: green;
}

.woocommerce-widget-area .color-list-widget .color-list-row li a.color-yellow::before {
  background: yellow;
}

.woocommerce-widget-area .color-list-widget .color-list-row li a.color-yellowgreen::before {
  background: yellowgreen;
}

.woocommerce-widget-area .color-list-widget .color-list-row li a.color-pink::before {
  background: pink;
}

.woocommerce-widget-area .color-list-widget .color-list-row li a.color-violet::before {
  background: violet;
}

.woocommerce-widget-area .color-list-widget .color-list-row li a.color-teal::before {
  background: teal;
}

.woocommerce-widget-area .color-list-widget .color-list-row li a.color-plum::before {
  background: plum;
}

.woocommerce-widget-area .color-list-widget .color-list-row li a.color-lime::before {
  background: lime;
}

.woocommerce-widget-area .color-list-widget .color-list-row li a.color-blueviolet::before {
  background: blueviolet;
}

.woocommerce-widget-area .color-list-widget .color-list-row li.active a {
  border-color: #000000;
}

.woocommerce-widget-area .brands-list-widget .brands-list-row {
  padding-left: 0;
  margin-bottom: 0;
  list-style-type: none;
}

.woocommerce-widget-area .brands-list-widget .brands-list-row li {
  margin-bottom: 9px;
}

.woocommerce-widget-area .brands-list-widget .brands-list-row li a {
  display: inline-block;
  position: relative;
  padding-left: 25px;
  font-size: 15px;
  font-weight: 600;
}

.woocommerce-widget-area .brands-list-widget .brands-list-row li a::before {
  content: '';
  position: absolute;
  left: 0;
  top: 2.5px;
  width: 15px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  height: 15px;
  border-radius: 3px;
  border: 1px solid #000000;
}

.woocommerce-widget-area .brands-list-widget .brands-list-row li a:hover {
  color: #f53f85;
}

.woocommerce-widget-area .brands-list-widget .brands-list-row li a:hover::before {
  border-color: #f53f85;
}

.woocommerce-widget-area .brands-list-widget .brands-list-row li a.active::before {
  background-color: #f53f85;
  border-color: #f53f85;
}

.woocommerce-widget-area .brands-list-widget .brands-list-row li.active a::before {
  background-color: #f53f85;
  border-color: #f53f85;
}

.woocommerce-widget-area .brands-list-widget .brands-list-row li:last-child {
  display: inline-block;
}

.woocommerce-widget-area .aside-trending-widget .aside-trending-products {
  overflow: hidden;
  position: relative;
  text-align: center;
}

.woocommerce-widget-area .aside-trending-widget .aside-trending-products .category {
  position: absolute;
  left: 0;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  right: 0;
  background-color: #ffffff;
  padding: 20px;
  bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
}

.woocommerce-widget-area .aside-trending-widget .aside-trending-products .category h3 {
  text-transform: uppercase;
  margin-bottom: 7px;
  position: relative;
  z-index: 1;
  font-size: 20px;
}

.woocommerce-widget-area .aside-trending-widget .aside-trending-products .category span {
  color: #777777;
  display: block;
}

.woocommerce-widget-area .aside-trending-widget .aside-trending-products img {
  -webkit-transition: 0.5s;
  transition: 0.5s;
  width: 100%;
}

.woocommerce-widget-area .aside-trending-widget .aside-trending-products .link-btn {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
}

.woocommerce-widget-area .aside-trending-widget .aside-trending-products:hover img, .woocommerce-widget-area .aside-trending-widget .aside-trending-products:focus img {
  -webkit-transform: scale(1.3) rotate(4deg);
          transform: scale(1.3) rotate(4deg);
}

/*================================================
Sizing Guide CSS
=================================================*/
.sizing-guide-table h3 {
  margin-bottom: 18px;
  font-size: 22px;
  font-weight: 700;
}

.sizing-guide-table table {
  margin-bottom: 0;
}

.sizing-guide-table table thead {
  background-color: #f53f85;
  color: #ffffff;
}

.sizing-guide-table table thead th {
  border-bottom: none;
  vertical-align: middle;
  color: #ffffff;
  white-space: nowrap;
  font-size: 17px;
  font-weight: 600;
  padding-left: 15px;
  padding-right: 15px;
}

.sizing-guide-table table tr td {
  border-top: none;
  white-space: nowrap;
  vertical-align: middle;
  font-size: 15px;
  padding-left: 15px;
  padding-right: 15px;
}

.sizing-guide-table table tr td:first-child {
  font-weight: 600;
}

.sizing-guide-table .sizing-guide-info {
  padding-left: 0;
  list-style-type: none;
  margin-top: 30px;
  margin-bottom: 0;
}

.sizing-guide-table .sizing-guide-info li {
  margin-bottom: 12px;
}

.sizing-guide-table .sizing-guide-info li:last-child {
  margin-bottom: 0;
}

.sizing-guide-table .sizing-guide-info li span {
  font-weight: 700;
}

.sizing-guide-table:not(:first-child) {
  margin-top: 35px;
}

/*================================================
Cart CSS
=================================================*/
.cart-table table {
  margin-bottom: 0;
}

.cart-table table thead tr th {
  border-bottom-width: 0px;
  vertical-align: middle;
  padding: 0 0 15px;
  text-transform: uppercase;
  border: none;
  white-space: nowrap;
  font-size: 15px;
  font-weight: 600;
}

.cart-table table tbody tr td {
  vertical-align: middle;
  color: #777777;
  white-space: nowrap;
  padding-left: 0;
  padding-right: 0;
  padding-top: 15px;
  padding-bottom: 15px;
  border-color: #eaedff;
  border-left: none;
  border-right: none;
}

.cart-table table tbody tr td.product-thumbnail a {
  display: inline-block;
}

.cart-table table tbody tr td.product-thumbnail a img {
  width: 100px;
}

.cart-table table tbody tr td.product-name a {
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
}

.cart-table table tbody tr td.product-name ul {
  padding-left: 0;
  list-style-type: none;
  margin-top: 10px;
  margin-bottom: 0;
}

.cart-table table tbody tr td.product-name ul li {
  margin-bottom: 6px;
  font-size: 13.5px;
}

.cart-table table tbody tr td.product-name ul li span {
  display: inline;
  color: #000000;
}

.cart-table table tbody tr td.product-name ul li:last-child {
  margin-bottom: 0;
}

.cart-table table tbody tr td.product-subtotal {
  overflow: hidden;
}

.cart-table table tbody tr td.product-subtotal .subtotal-amount {
  color: #000000;
  font-weight: 600;
}

.cart-table table tbody tr td.product-subtotal .remove {
  color: red;
  float: right;
  display: block;
  position: relative;
  top: -1px;
  font-size: 18px;
}

.cart-table table tbody tr td.product-quantity .input-counter {
  max-width: 130px;
  min-width: 130px;
  text-align: center;
  display: inline-block;
  position: relative;
}

.cart-table table tbody tr td.product-quantity .input-counter span {
  position: absolute;
  top: 0;
  background-color: transparent;
  cursor: pointer;
  color: #d0d0d0;
  width: 40px;
  height: 100%;
  line-height: 50px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  font-size: 22px;
}

.cart-table table tbody tr td.product-quantity .input-counter span.minus-btn {
  left: 0;
}

.cart-table table tbody tr td.product-quantity .input-counter span.plus-btn {
  right: 0;
}

.cart-table table tbody tr td.product-quantity .input-counter span:hover {
  color: #f53f85;
}

.cart-table table tbody tr td.product-quantity .input-counter input {
  height: 45px;
  color: #000000;
  outline: 0;
  display: block;
  border: none;
  background-color: #f8f8f8;
  text-align: center;
  width: 100%;
  font-size: 17px;
  font-weight: 600;
}

.cart-table table tbody tr td.product-quantity .input-counter input::-webkit-input-placeholder {
  color: #000000;
}

.cart-table table tbody tr td.product-quantity .input-counter input:-ms-input-placeholder {
  color: #000000;
}

.cart-table table tbody tr td.product-quantity .input-counter input::-ms-input-placeholder {
  color: #000000;
}

.cart-table table tbody tr td.product-quantity .input-counter input::placeholder {
  color: #000000;
}

.cart-table table tbody tr td .unit-amount {
  color: #000000;
  font-weight: 600;
}

.cart-buttons {
  margin-top: 30px;
}

.cart-totals {
  background: #ffffff;
  padding: 40px;
  max-width: 500px;
  -webkit-box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
          box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  margin-left: auto;
  margin-top: 50px;
  margin-right: auto;
}

.cart-totals h3 {
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: 700;
}

.cart-totals ul {
  padding-left: 0;
  margin: 0 0 25px;
  list-style-type: none;
}

.cart-totals ul li {
  border: 1px solid #eaedff;
  padding: 10px 15px;
  color: #000000;
  overflow: hidden;
  font-weight: 600;
}

.cart-totals ul li:first-child {
  border-bottom: none;
}

.cart-totals ul li:last-child {
  font-size: 20px;
  border-top: none;
}

.cart-totals ul li:last-child span {
  color: #000000;
}

.cart-totals ul li span {
  float: right;
  font-weight: normal;
}

/*================================================
Checkout CSS
=================================================*/
.user-actions {
  -webkit-box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
          box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
  background: #ffffff;
  padding: 15px 20px;
  border-top: 3px solid #f53f85;
  position: relative;
  margin-bottom: 40px;
}

.user-actions i {
  color: #f53f85;
  margin-right: 5px;
  font-size: 20px;
  position: relative;
  top: 3px;
}

.user-actions span {
  display: inline-block;
  color: #f53f85;
  font-weight: 500;
  font-size: 16px;
}

.user-actions span a {
  display: inline-block;
  color: #000000;
}

.user-actions span a:hover, .user-actions span a:focus {
  color: #f53f85;
}

.billing-details .title {
  margin-bottom: 30px;
  position: relative;
  padding-bottom: 10px;
  border-bottom: 1px solid #eeeeee;
  font-size: 22px;
  font-weight: 700;
}

.billing-details .title::before {
  content: '';
  position: absolute;
  background: #f53f85;
  bottom: -1px;
  left: 0;
  width: 50px;
  height: 1px;
}

.billing-details .form-group {
  margin-bottom: 25px;
}

.billing-details .form-group label {
  display: block;
  margin-bottom: 8px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
}

.billing-details .form-group label .required {
  color: red;
}

.billing-details .form-group .nice-select {
  float: unset;
  line-height: 48px;
  color: #000000;
  border: none;
  background-color: #f5f5f5 !important;
  font-weight: normal;
  font-size: 15px;
  padding-top: 0;
  padding-bottom: 0;
}

.billing-details .form-group .nice-select .list {
  background-color: #ffffff;
  -webkit-box-shadow: 0px 0px 29px 0px rgba(102, 102, 102, 0.1);
          box-shadow: 0px 0px 29px 0px rgba(102, 102, 102, 0.1);
  border-radius: 0;
  margin-top: 0;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
}

.billing-details .form-group .nice-select .list .option {
  -webkit-transition: 0.5s;
  transition: 0.5s;
  padding-left: 20px;
  padding-right: 20px;
}

.billing-details .form-group .nice-select .list .option:hover {
  background-color: #f53f85 !important;
  color: #ffffff;
}

.billing-details .form-group .nice-select .list .option.selected {
  background-color: transparent;
  font-weight: 600;
}

.billing-details .form-group .nice-select:after {
  right: 20px;
}

.billing-details .form-check {
  margin-bottom: 20px;
}

.billing-details .form-check .form-check-label {
  color: #000000;
}

.billing-details .form-check label {
  position: relative;
  left: -3px;
  top: 1px;
  font-weight: 500;
}

.billing-details .col-lg-12:last-child .form-group {
  margin-bottom: 0;
}

.order-details .title {
  margin-bottom: 30px;
  position: relative;
  padding-bottom: 10px;
  border-bottom: 1px solid #eeeeee;
  font-size: 22px;
  font-weight: 700;
}

.order-details .title::before {
  content: '';
  position: absolute;
  background: #f53f85;
  bottom: -1px;
  left: 0;
  width: 50px;
  height: 1px;
}

.order-details .order-table table {
  margin-bottom: 0;
}

.order-details .order-table table thead tr th {
  border-bottom-width: 0;
  vertical-align: middle;
  border-color: #eaedff;
  padding: 12px 20px 10px;
  font-weight: 700;
  font-size: 17px;
}

.order-details .order-table table tbody tr td {
  vertical-align: middle;
  border-color: #eaedff;
  font-size: 15px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;
  padding-bottom: 13px;
}

.order-details .order-table table tbody tr td.product-name a {
  display: inline-block;
  font-weight: 500;
}

.order-details .order-table table tbody tr td.order-subtotal span, .order-details .order-table table tbody tr td.order-shipping span, .order-details .order-table table tbody tr td.total-price span {
  color: #000000;
  font-weight: 700;
}

.order-details .order-table table tbody tr td.shipping-price, .order-details .order-table table tbody tr td.order-subtotal-price, .order-details .order-table table tbody tr td.product-subtotal {
  font-weight: 700;
  color: #000000;
}

.order-details .payment-box {
  background-color: #ffffff;
  -webkit-box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.06);
          box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.06);
  margin-top: 30px;
  padding: 30px;
}

.order-details .payment-box .payment-method p [type="radio"]:checked, .order-details .payment-box .payment-method p [type="radio"]:not(:checked) {
  display: none;
}

.order-details .payment-box .payment-method p [type="radio"]:checked + label, .order-details .payment-box .payment-method p [type="radio"]:not(:checked) + label {
  padding-left: 27px;
  cursor: pointer;
  display: block;
  color: #000000;
  position: relative;
  margin-bottom: 8px;
  font-weight: 600;
}

.order-details .payment-box .payment-method p [type="radio"]:checked + label::before, .order-details .payment-box .payment-method p [type="radio"]:not(:checked) + label::before {
  content: '';
  position: absolute;
  left: 0;
  top: 5px;
  width: 18px;
  height: 18px;
  border: 1px solid #dddddd;
  border-radius: 50%;
  background: #ffffff;
}

.order-details .payment-box .payment-method p [type="radio"]:checked + label::after, .order-details .payment-box .payment-method p [type="radio"]:not(:checked) + label::after {
  content: '';
  width: 12px;
  height: 12px;
  background: #f53f85;
  position: absolute;
  top: 8px;
  left: 3px;
  border-radius: 50%;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.order-details .payment-box .payment-method p [type="radio"]:not(:checked) + label::after {
  opacity: 0;
  visibility: hidden;
  -webkit-transform: scale(0);
          transform: scale(0);
}

.order-details .payment-box .payment-method p [type="radio"]:checked + label::after {
  opacity: 1;
  visibility: visible;
  -webkit-transform: scale(1);
          transform: scale(1);
}

.order-details .payment-box .default-btn {
  margin-top: 20px;
  -webkit-box-shadow: 0px 5px 28.5px 1.5px rgba(149, 152, 200, 0.2);
          box-shadow: 0px 5px 28.5px 1.5px rgba(149, 152, 200, 0.2);
  display: block;
  text-align: center;
}

.order-details .payment-box .default-btn.disabled-btn {
  opacity: 0.5;
}

/*================================================
FAQ CSS
=================================================*/
.faq-accordion-tab .tabs {
  padding-left: 0;
  list-style-type: none;
  margin-bottom: 60px;
  text-align: center;
}

.faq-accordion-tab .tabs li {
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
  color: #000000;
  text-decoration: none;
  border-radius: 5px;
  padding: 20px;
  display: block;
  -webkit-box-shadow: 2px 8px 20px 0 rgba(25, 42, 70, 0.13) !important;
          box-shadow: 2px 8px 20px 0 rgba(25, 42, 70, 0.13) !important;
  font-size: 17px;
  font-weight: 700;
}

.faq-accordion-tab .tabs li i {
  font-size: 30px;
}

.faq-accordion-tab .tabs li span {
  display: block;
  margin-top: 8px;
}

.faq-accordion-tab .tabs li:hover {
  background-color: #f53f85;
  color: #ffffff;
}

.faq-accordion-tab .tabs li.current {
  background-color: #f53f85;
  color: #ffffff;
}

.tab .tabs-item {
  display: none;
}

.tab .tabs-item:first-child {
  display: block;
}

.faq-accordion .accordion {
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: 0;
  border: none;
}

.faq-accordion .accordion .accordion__item {
  border-radius: 5px;
  display: block;
  -webkit-box-shadow: 2px 8px 20px 0 rgba(25, 42, 70, 0.13) !important;
          box-shadow: 2px 8px 20px 0 rgba(25, 42, 70, 0.13) !important;
  background: #ffffff;
  margin-bottom: 15px;
  border: none;
}

.faq-accordion .accordion .accordion__item:last-child {
  margin-bottom: 0;
}

.faq-accordion .accordion .accordion__button {
  background-color: #ffffff;
  padding: 20px 25px;
  color: #000000;
  text-decoration: none;
  position: relative;
  display: block;
  border-radius: 5px;
  font-size: 17px;
  font-weight: 700;
}

.faq-accordion .accordion .accordion__button i {
  position: absolute;
  left: 25px;
  top: 18px;
  font-size: 25px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.faq-accordion .accordion .accordion__button.active i {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.faq-accordion .accordion .accordion__panel {
  padding: 25px 30px;
  border-top: 1px solid #eee;
}

.faq-accordion .accordion .accordion-content p {
  font-size: 16px;
  line-height: 1.8;
}

.faq-accordion .accordion .accordion-content.show {
  display: block;
}

.faq-accordion .accordion .accordion-content ul {
  padding-left: 0;
  list-style-type: none;
  margin-bottom: 0;
}

.faq-accordion .accordion .accordion-content ul li {
  color: #777777;
  position: relative;
  margin-bottom: 12px;
  line-height: 25px;
  padding-left: 15px;
  font-size: 16px;
}

.faq-accordion .accordion .accordion-content ul li::before {
  content: '';
  position: absolute;
  top: 10px;
  left: 0;
  width: 6px;
  height: 6px;
  background: #f53f85;
  border-radius: 50%;
}

.faq-accordion .accordion .accordion-content ul li:last-child {
  margin-bottom: 0;
}

/*================================================
404 Error CSS
=================================================*/
.error-content {
  text-align: center;
  margin: 0 auto;
  max-width: 520px;
}

.error-content h3 {
  font-size: 30px;
  font-weight: 700;
  margin-top: 30px;
  margin-bottom: 15px;
}

.error-content p {
  margin-bottom: 25px;
}

/*================================================
Customer Service CSS
=================================================*/
.customer-service-content h3 {
  position: relative;
  padding-left: 30px;
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: 700;
}

.customer-service-content h3 i {
  position: absolute;
  top: 2px;
  left: 0;
  color: #f53f85;
}

.customer-service-content h3:not(:first-child) {
  margin-top: 30px;
}

.customer-service-content ul {
  padding-left: 0;
  list-style-type: none;
  margin-bottom: 0;
}

.customer-service-content ul li {
  color: #777777;
  margin-bottom: 12px;
  position: relative;
  padding-left: 13px;
}

.customer-service-content ul li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 9px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #f53f85;
}

.customer-service-content ul li:last-child {
  margin-bottom: 0;
}

.customer-service-content ul li a {
  display: inline-block;
  color: #777777;
}

.customer-service-content ul li a:hover {
  color: #000000;
}

/*================================================
Compare CSS
=================================================*/
.products-compare-table table {
  margin-bottom: 0;
}

.products-compare-table table tr td {
  color: #777777;
  vertical-align: middle;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
}

.products-compare-table table tr td:first-child {
  text-transform: uppercase;
  color: #000000;
  font-weight: 600;
}

.products-compare-table table tr td .remove-btn {
  margin-bottom: 15px;
}

.products-compare-table table tr td .remove-btn a {
  color: red;
  display: inline-block;
}

.products-compare-table table tr:first-child {
  background-color: transparent !important;
}

.products-compare-table table tr:first-child td {
  border-bottom: 1px solid #eeeeee;
}

/*================================================
Pagination CSS
=================================================*/
.pagination-area {
  position: relative;
  z-index: 1;
  margin-top: 30px;
}

.pagination-area::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  width: 100%;
  height: 1px;
  background-color: #eeeeee;
  z-index: -1;
}

.pagination-area .page-numbers {
  color: #000000;
  display: inline-block;
  line-height: 1;
  background-color: #ffffff;
  font-weight: 600;
  font-size: 20px;
  margin-left: -1px;
  margin-right: -1px;
  margin-top: -10px;
  margin-bottom: -10px;
  padding-left: 8px;
  padding-right: 8px;
}

.pagination-area .page-numbers:hover, .pagination-area .page-numbers:focus, .pagination-area .page-numbers.current {
  color: #f53f85;
}

.pagination-area .page-numbers.prev {
  padding-right: 0;
}

.pagination-area .page-numbers.next {
  padding-left: 0;
}

.pagination-area .page-numbers.prev, .pagination-area .page-numbers.next {
  font-size: 28px;
  position: relative;
  top: 5px;
  margin-left: -3px;
  margin-right: -3px;
}

/*================================================
Widget Sidebar CSS
=================================================*/
.widget-area {
  padding-left: 15px;
}

.widget-area .widget {
  margin-bottom: 35px;
}

.widget-area .widget:last-child {
  margin-bottom: 0;
}

.widget-area .widget .widget-title {
  margin-bottom: 25px;
  position: relative;
  padding-bottom: 8px;
  border-bottom: 1px solid #eeeeee;
  font-size: 21px;
  font-weight: 700;
}

.widget-area .widget .widget-title::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50px;
  height: 1px;
  bottom: -1px;
  background-color: #f53f85;
}

.widget-area .widget_search form {
  position: relative;
}

.widget-area .widget_search form .screen-reader-text {
  display: none;
}

.widget-area .widget_search form label {
  display: block;
  margin-bottom: 0;
}

.widget-area .widget_search form .search-field {
  height: 50px;
  color: #000000;
  background-color: #eef5f9;
  display: block;
  width: 100%;
  border-radius: 5px;
  padding: 0 0 0 15px;
  border: none;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  font-size: 15px;
  font-weight: 500;
}

.widget-area .widget_search form .search-field::-webkit-input-placeholder {
  color: #777777;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.widget-area .widget_search form .search-field:-ms-input-placeholder {
  color: #777777;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.widget-area .widget_search form .search-field::-ms-input-placeholder {
  color: #777777;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.widget-area .widget_search form .search-field::placeholder {
  color: #777777;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.widget-area .widget_search form .search-field:focus::-webkit-input-placeholder {
  color: transparent;
}

.widget-area .widget_search form .search-field:focus:-ms-input-placeholder {
  color: transparent;
}

.widget-area .widget_search form .search-field:focus::-ms-input-placeholder {
  color: transparent;
}

.widget-area .widget_search form .search-field:focus::placeholder {
  color: transparent;
}

.widget-area .widget_search form button {
  border: none;
  background-color: #f53f85;
  color: #ffffff;
  height: 40px;
  width: 40px;
  position: absolute;
  right: 5px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  border-radius: 5px;
  top: 5px;
  font-size: 20px;
}

.widget-area .widget_search form button:hover, .widget-area .widget_search form button:focus {
  background-color: #000000;
  color: #ffffff;
}

.widget-area .widget_posts_thumb {
  position: relative;
  overflow: hidden;
}

.widget-area .widget_posts_thumb .item {
  overflow: hidden;
  margin-bottom: 15px;
}

.widget-area .widget_posts_thumb .item:last-child {
  margin-bottom: 0;
}

.widget-area .widget_posts_thumb .item .thumb {
  float: left;
  height: 80px;
  overflow: hidden;
  display: block;
  position: relative;
  width: 80px;
  margin-right: 15px;
  z-index: 1;
}

.widget-area .widget_posts_thumb .item .thumb .fullimage {
  width: 80px;
  height: 80px;
  display: inline-block;
  border-radius: 5px;
  background-size: cover !important;
  background-repeat: no-repeat;
  background-position: center center !important;
}

.widget-area .widget_posts_thumb .item .thumb .fullimage.bg1 {
  /* background-image: url(../../../images/blog/blog7.jpg); */
}

.widget-area .widget_posts_thumb .item .thumb .fullimage.bg2 {
  /* background-image: url(../../../images/blog/blog8.jpg); */
}

.widget-area .widget_posts_thumb .item .thumb .fullimage.bg3 {
  /* background-image: url(../../../images/blog/blog5.jpg); */
}

.widget-area .widget_posts_thumb .item .thumb::before, .widget-area .widget_posts_thumb .item .thumb::after {
  -webkit-transition: all 0.8s cubic-bezier(0.2, 1, 0.22, 1);
  transition: all 0.8s cubic-bezier(0.2, 1, 0.22, 1);
  content: '';
  background-color: #ffffff;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
}

.widget-area .widget_posts_thumb .item .thumb::before {
  width: 40px;
  height: 1px;
  left: 100%;
}

.widget-area .widget_posts_thumb .item .thumb::after {
  height: 40px;
  width: 1px;
  top: 0;
}

.widget-area .widget_posts_thumb .item .info {
  overflow: hidden;
  margin-top: 5px;
}

.widget-area .widget_posts_thumb .item .info span {
  display: block;
  color: #777777;
  text-transform: uppercase;
  margin-top: -2px;
  margin-bottom: 5px;
  font-size: 12px;
}

.widget-area .widget_posts_thumb .item .info .title {
  margin-bottom: 0;
  line-height: 1.4;
  font-size: 18px;
  font-weight: 600;
}

.widget-area .widget_posts_thumb .item .info .title a {
  display: inline-block;
}

.widget-area .widget_posts_thumb .item:hover .thumb::before, .widget-area .widget_posts_thumb .item:hover .thumb::after {
  opacity: 1;
  top: 50%;
  left: 50%;
}

.widget-area .widget_categories ul {
  padding-left: 0;
  margin-bottom: 0;
  list-style-type: none;
}

.widget-area .widget_categories ul li {
  position: relative;
  margin-bottom: 12px;
  overflow: hidden;
  color: #000000;
  padding-left: 18px;
  font-weight: 600;
  font-size: 15px;
}

.widget-area .widget_categories ul li:last-child {
  margin-bottom: 0;
}

.widget-area .widget_categories ul li::before {
  background: #f53f85;
  height: 8px;
  width: 8px;
  content: '';
  border-radius: 50%;
  left: 0;
  top: 7px;
  position: absolute;
}

.widget-area .widget_categories ul li a {
  color: #000000;
  display: block;
}

.widget-area .widget_categories ul li a:hover {
  color: #f53f85;
}

.widget-area .widget_categories ul li .post-count {
  color: #777777;
  font-size: 14px;
  float: right;
}

.widget-area .widget_tag_cloud .widget-title {
  margin-bottom: 17px;
}

.widget-area .tagcloud a {
  display: inline-block;
  background-color: #f6f6f6;
  color: #000000;
  padding: 7px 15px;
  border: none;
  border-radius: 3px;
  font-weight: 600;
  font-size: 14px !important;
  margin-top: 8px;
  margin-right: 4px;
}

.widget-area .tagcloud a:hover, .widget-area .tagcloud a:focus {
  color: #ffffff;
  background-color: #f53f85;
}

.widget-area .widget_instagram ul {
  padding-left: 0;
  list-style-type: none;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: -10px;
  margin-left: -5px;
  margin-right: -5px;
}

.widget-area .widget_instagram ul li {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 33.3333333333%;
          flex: 0 0 33.3333333333%;
  max-width: 33.3333333333%;
  padding-bottom: 10px;
  padding-right: 5px;
  padding-left: 5px;
}

.widget-area .widget_instagram ul li a {
  position: relative;
}

.widget-area .widget_instagram ul li a::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #f53f85;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  opacity: 0;
  visibility: hidden;
}

.widget-area .widget_instagram ul li a:hover::before {
  opacity: .70;
  visibility: visible;
}

.widget-area .widget_contact {
  position: relative;
  z-index: 1;
  border-radius: 5px;
  height: 400px;
  text-align: center;
  /* background-image: url(../../../images/offer-bg.jpg); */
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

.widget-area .widget_contact::before {
  width: 100%;
  height: 100%;
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 5px;
  background-color: #f53f85;
  opacity: .70;
  z-index: -1;
}

.widget-area .widget_contact .text {
  position: absolute;
  left: 0;
  bottom: 25px;
  right: 0;
}

.widget-area .widget_contact .text .icon {
  width: 65px;
  height: 65px;
  border: 2px dashed #f53f85;
  position: relative;
  border-radius: 50%;
  font-size: 35px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  background-color: #ffffff;
  color: #f53f85;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 17px;
}

.widget-area .widget_contact .text .icon i {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
}

.widget-area .widget_contact .text span {
  display: block;
  color: #ffffff;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 600;
}

.widget-area .widget_contact .text h4 {
  color: #ffffff;
  margin: 0;
  font-weight: 800;
  font-size: 25px;
}

/*================================================
Coming Soon CSS
=================================================*/
.coming-soon-area {
  height: 100vh;
  position: relative;
  z-index: 1;
  background: #f6f7fb;
  /* background-image: url(../../../images/coming-soon-bg.jpg); */
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
}

.coming-soon-content {
  max-width: 700px;
  background: #ffffff;
  border-radius: 5px;
  overflow: hidden;
  text-align: center;
  padding: 40px 60px;
  -webkit-box-shadow: 1px 5px 24px 0 rgba(68, 102, 242, 0.05);
          box-shadow: 1px 5px 24px 0 rgba(68, 102, 242, 0.05);
  margin-left: 100px;
}

.coming-soon-content .logo {
  display: inline-block;
}

.coming-soon-content h2 {
  font-size: 40px;
  font-weight: 700;
  margin-top: 30px;
  margin-bottom: 0;
}

.coming-soon-content #timer {
  margin-top: 40px;
}

.coming-soon-content #timer div {
  background-color: #333333;
  color: #ffffff;
  width: 100px;
  height: 105px;
  border-radius: 5px;
  font-size: 35px;
  font-weight: 900;
  margin-left: 10px;
  margin-right: 10px;
}

.coming-soon-content #timer div span {
  display: block;
  margin-top: -1px;
  font-size: 16px;
  font-weight: 600;
}

.coming-soon-content form {
  position: relative;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
}

.coming-soon-content form .form-group {
  margin-bottom: 25px;
  width: 100%;
  position: relative;
}

.coming-soon-content form .form-group .label-title {
  margin-bottom: 0;
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  pointer-events: none;
  width: 100%;
  height: 100%;
  color: #000000;
}

.coming-soon-content form .form-group .label-title i {
  position: absolute;
  left: 0;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  top: 9px;
  font-size: 22px;
}

.coming-soon-content form .form-group .label-title::before {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  background: #f53f85;
}

.coming-soon-content form .form-group .input-newsletter {
  border-radius: 0;
  border: none;
  border-bottom: 2px solid #eeeeee;
  padding: 0 0 0 32px;
  color: #000000;
  height: 45px;
  display: block;
  width: 100%;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  font-size: 16px;
  font-weight: 400;
}

.coming-soon-content form .form-group .input-newsletter::-webkit-input-placeholder {
  color: #A1A1A1;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.coming-soon-content form .form-group .input-newsletter:-ms-input-placeholder {
  color: #A1A1A1;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.coming-soon-content form .form-group .input-newsletter::-ms-input-placeholder {
  color: #A1A1A1;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.coming-soon-content form .form-group .input-newsletter::placeholder {
  color: #A1A1A1;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.coming-soon-content form .form-group .input-newsletter:focus::-webkit-input-placeholder {
  color: transparent;
}

.coming-soon-content form .form-group .input-newsletter:focus:-ms-input-placeholder {
  color: transparent;
}

.coming-soon-content form .form-group .input-newsletter:focus::-ms-input-placeholder {
  color: transparent;
}

.coming-soon-content form .form-group .input-newsletter:focus::placeholder {
  color: transparent;
}

.coming-soon-content form .validation-danger {
  margin-top: 15px;
  color: red;
}

.coming-soon-content form .validation-success {
  margin-top: 15px;
}

.coming-soon-content form p {
  margin-bottom: 0;
  margin-top: 20px;
}

/*================================================
Track Order CSS
=================================================*/
.track-order-content {
  max-width: 700px;
  background-color: #ffffff;
  -webkit-box-shadow: 3px 5px 25px 0 rgba(0, 0, 0, 0.1);
          box-shadow: 3px 5px 25px 0 rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 40px;
  margin-left: auto;
  margin-right: auto;
}

.track-order-content h2 {
  margin-bottom: 30px;
  font-size: 35px;
  font-weight: 700;
}

.track-order-content form {
  text-align: left;
  padding-left: 30px;
  padding-right: 30px;
}

.track-order-content form .form-group label {
  display: block;
  color: #000000;
  margin-bottom: 9px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
}

.track-order-content form .default-btn {
  margin-top: 5px;
}

/*================================================
Login CSS
=================================================*/
.login-content h2 {
  margin-bottom: 25px;
  font-size: 25px;
  font-weight: 700;
}

.login-content .login-form {
  padding-right: 15px;
}

.login-content .login-form .form-group {
  margin-bottom: 20px;
}

.login-content .login-form .form-group .form-control {
  height: 50px;
}

.login-content .login-form .default-btn {
  display: block;
  width: 100%;
  padding: 14px 25px;
}

.login-content .login-form .forgot-password {
  display: inline-block;
  margin-top: 15px;
  position: relative;
  font-weight: 600;
}

.login-content .login-form .forgot-password::before {
  width: 100%;
  height: 1.5px;
  background: #777777;
  bottom: 0;
  left: 0;
  position: absolute;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  content: '';
}

.login-content .login-form .forgot-password:hover::before {
  width: 0;
}

.new-customer-content {
  padding-left: 15px;
}

.new-customer-content h2 {
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: 700;
}

.new-customer-content span {
  display: block;
  margin-bottom: 10px;
  font-size: 17px;
  font-weight: 600;
}

.new-customer-content .optional-btn {
  margin-top: 5px;
}

/*================================================
Signup CSS
=================================================*/
.signup-content {
  max-width: 520px;
  margin-left: auto;
  margin-right: auto;
}

.signup-content h2 {
  margin-bottom: 25px;
  text-align: center;
  font-size: 25px;
  font-weight: 700;
}

.signup-content .signup-form .form-group {
  margin-bottom: 20px;
}

.signup-content .signup-form .form-group label {
  display: block;
  text-transform: uppercase;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 600;
}

.signup-content .signup-form .form-group .form-control {
  height: 50px;
}

.signup-content .signup-form .default-btn {
  display: block;
  width: 100%;
  padding: 14px 25px;
}

.signup-content .signup-form .return-store {
  display: inline-block;
  margin-top: 15px;
  color: #777777;
  position: relative;
  font-size: 15px;
}

.signup-content .signup-form .return-store::before {
  width: 100%;
  height: 1.5px;
  background: #777777;
  bottom: 0;
  left: 0;
  position: absolute;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  content: '';
}

.signup-content .signup-form .return-store:hover {
  color: #000000;
}

.signup-content .signup-form .return-store:hover::before {
  width: 0;
}

/*================================================
Contact CSS
=================================================*/
.contact-info h3 {
  margin-bottom: 15px;
  font-size: 22px;
  font-weight: 700;
}

.contact-info p a {
  display: inline;
  font-weight: 500;
}

.contact-info .contact-list {
  padding-left: 0;
  margin-bottom: 25px;
  list-style-type: none;
}

.contact-info .contact-list li {
  margin-bottom: 12px;
  position: relative;
  padding-left: 28px;
}

.contact-info .contact-list li i {
  position: absolute;
  left: 0;
  top: 2px;
  color: #f53f85;
  font-size: 20px;
}

.contact-info .contact-list li a {
  display: inline-block;
  font-weight: 600;
  position: relative;
}

.contact-info .contact-list li a:hover::before {
  width: 100%;
}

.contact-info .contact-list li a::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  background-color: #f53f85;
}

.contact-info .contact-list li:last-child {
  margin-bottom: 0;
}

.contact-info .opening-hours {
  padding-left: 0;
  margin-bottom: 25px;
  list-style-type: none;
}

.contact-info .opening-hours li {
  margin-bottom: 10px;
}

.contact-info .opening-hours li:last-child {
  margin-bottom: 0;
}

.contact-info .social {
  padding-left: 0;
  list-style-type: none;
  margin-bottom: 0;
}

.contact-info .social li {
  display: inline-block;
  margin-right: 8px;
}

.contact-info .social li:last-child {
  margin-right: 0;
}

.contact-info .social li a {
  width: 30px;
  height: 30px;
  text-align: center;
  display: block;
  color: #f53f85;
  background-color: #f4f4f4;
  font-size: 18px;
  position: relative;
  border-radius: 2px;
}

.contact-info .social li a i {
  position: absolute;
  left: 0;
  top: 50%;
  right: 0;
  -webkit-transform: translateY(-49%);
          transform: translateY(-49%);
}

.contact-info .social li a:hover {
  background-color: #f53f85;
  color: #ffffff;
}

.contact-form h3 {
  margin-bottom: 15px;
  font-size: 22px;
  font-weight: 700;
}

.contact-form form .form-group label {
  display: block;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
}

.contact-form form .form-group label span {
  color: red;
}

.contact-form form .with-errors ul {
  padding-left: 0;
  list-style-type: none;
  margin-top: 10px;
  margin-bottom: 0;
}

.contact-form form .with-errors ul li {
  color: red;
  font-size: 15px;
}

.contact-form form #msgSubmit {
  margin-bottom: 0;
}

.contact-form form #msgSubmit.text-danger, .contact-form form #msgSubmit.text-success {
  margin-top: 15px;
}

#map {
  width: 100%;
  height: 500px;
}

/*================================================
Footer CSS
=================================================*/
.footer-area {
  padding-top: 100px;
  background-color: #000000;
  position: relative;
  z-index: 1;
}

.single-footer-widget {
  margin-bottom: 30px;
}

.single-footer-widget h3 {
  color: #ffffff;
  margin-bottom: 25px;
  padding-bottom: 10px;
  position: relative;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 22px;
  font-weight: 700;
}

.single-footer-widget h3::before {
  width: 50px;
  height: 1px;
  bottom: -1px;
  content: '';
  position: absolute;
  left: 0;
  background-color: #f53f85;
}

.single-footer-widget p {
  color: #ffffff;
}

.single-footer-widget .about-the-store p {
  font-weight: 600;
}

.single-footer-widget .about-the-store .footer-contact-info {
  padding-left: 0;
  margin-bottom: 0;
  list-style-type: none;
}

.single-footer-widget .about-the-store .footer-contact-info li {
  margin-bottom: 12px;
  color: #ffffff;
  position: relative;
  padding-left: 25px;
}

.single-footer-widget .about-the-store .footer-contact-info li i {
  position: absolute;
  left: 0;
  top: 2px;
  font-size: 18px;
}

.single-footer-widget .about-the-store .footer-contact-info li a {
  display: inline-block;
  color: #ffffff;
  font-weight: 600;
  position: relative;
}

.single-footer-widget .about-the-store .footer-contact-info li a:hover {
  color: #f53f85;
}

.single-footer-widget .about-the-store .footer-contact-info li a:hover::before {
  width: 100%;
}

.single-footer-widget .about-the-store .footer-contact-info li a::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  background-color: #f53f85;
}

.single-footer-widget .about-the-store .footer-contact-info li:last-child {
  margin-bottom: 0;
}

.single-footer-widget .social-link {
  padding-left: 0;
  list-style-type: none;
  margin-top: 20px;
  margin-bottom: 0;
}

.single-footer-widget .social-link li {
  display: inline-block;
  margin-right: 10px;
}

.single-footer-widget .social-link li:last-child {
  margin-right: 0;
}

.single-footer-widget .social-link li a {
  width: 30px;
  height: 30px;
  text-align: center;
  color: #f53f85;
  background-color: #ffffff;
  font-size: 18px;
  position: relative;
  border-radius: 2px;
}

.single-footer-widget .social-link li a i {
  position: absolute;
  left: 0;
  top: 50%;
  right: 0;
  -webkit-transform: translateY(-49%);
          transform: translateY(-49%);
}

.single-footer-widget .social-link li a:hover {
  background-color: #f53f85;
  color: #ffffff;
}

.single-footer-widget .quick-links {
  padding-left: 0;
  margin-bottom: 0;
  list-style-type: none;
}

.single-footer-widget .quick-links li {
  margin-bottom: 12px;
  color: #ffffff;
}

.single-footer-widget .quick-links li a {
  display: inline-block;
  color: #ffffff;
  font-weight: 600;
  position: relative;
}

.single-footer-widget .quick-links li a:hover {
  color: #f53f85;
}

.single-footer-widget .quick-links li a:hover::before {
  width: 100%;
}

.single-footer-widget .quick-links li a::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  background-color: #f53f85;
}

.single-footer-widget .quick-links li:last-child {
  margin-bottom: 0;
}

.single-footer-widget .customer-support {
  padding-left: 0;
  margin-bottom: 0;
  list-style-type: none;
}

.single-footer-widget .customer-support li {
  margin-bottom: 12px;
  color: #ffffff;
}

.single-footer-widget .customer-support li a {
  display: inline-block;
  color: #ffffff;
  font-weight: 600;
  position: relative;
}

.single-footer-widget .customer-support li a:hover {
  color: #f53f85;
}

.single-footer-widget .customer-support li a:hover::before {
  width: 100%;
}

.single-footer-widget .customer-support li a::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  background-color: #f53f85;
}

.single-footer-widget .customer-support li:last-child {
  margin-bottom: 0;
}

.single-footer-widget .footer-newsletter-box .newsletter-form {
  position: relative;
  margin-top: -5px;
}

.single-footer-widget .footer-newsletter-box .newsletter-form label {
  display: block;
  color: #ffffff;
  font-weight: 600;
  margin-bottom: 10px;
}

.single-footer-widget .footer-newsletter-box .newsletter-form .input-newsletter {
  width: 100%;
  background-color: transparent;
  border: 1px solid #848282;
  border-radius: 0;
  height: 45px;
  padding: 10px 15px;
  color: #ffffff;
  font-size: 15px;
  border-radius: .25rem;
}

.single-footer-widget .footer-newsletter-box .newsletter-form .input-newsletter::-webkit-input-placeholder {
  -webkit-transition: 0.5s;
  transition: 0.5s;
  color: #cccccc;
}

.single-footer-widget .footer-newsletter-box .newsletter-form .input-newsletter:-ms-input-placeholder {
  -webkit-transition: 0.5s;
  transition: 0.5s;
  color: #cccccc;
}

.single-footer-widget .footer-newsletter-box .newsletter-form .input-newsletter::-ms-input-placeholder {
  -webkit-transition: 0.5s;
  transition: 0.5s;
  color: #cccccc;
}

.single-footer-widget .footer-newsletter-box .newsletter-form .input-newsletter::placeholder {
  -webkit-transition: 0.5s;
  transition: 0.5s;
  color: #cccccc;
}

.single-footer-widget .footer-newsletter-box .newsletter-form .input-newsletter:focus::-webkit-input-placeholder {
  color: transparent;
}

.single-footer-widget .footer-newsletter-box .newsletter-form .input-newsletter:focus:-ms-input-placeholder {
  color: transparent;
}

.single-footer-widget .footer-newsletter-box .newsletter-form .input-newsletter:focus::-ms-input-placeholder {
  color: transparent;
}

.single-footer-widget .footer-newsletter-box .newsletter-form .input-newsletter:focus::placeholder {
  color: transparent;
}

.single-footer-widget .footer-newsletter-box .newsletter-form button {
  display: block;
  margin-top: .8rem;
  width: 100%;
  border-radius: .25rem;
  background-color: #f53f85;
  color: #ffffff;
  border: none;
  padding: 12px 25px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  font-weight: 600;
  font-size: 15px;
}

.single-footer-widget .footer-newsletter-box .newsletter-form button:hover {
  color: #000000;
  background-color: #ffffff;
}

.single-footer-widget .footer-newsletter-box .newsletter-form #validator-newsletter {
  position: absolute;
  left: 0;
  bottom: -32px;
  color: #ffffff !important;
}

.footer-bottom-area {
  margin-top: 70px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 25px;
  padding-bottom: 25px;
}

.footer-bottom-area p {
  margin-bottom: 0;
  color: #cecdcd;
  font-weight: 500;
}

.footer-bottom-area p i {
  position: relative;
  top: 1px;
}

.footer-bottom-area p a {
  display: inline-block;
  color: #ffffff;
  font-weight: 600;
  position: relative;
}

.footer-bottom-area p a::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  height: 1px;
  background-color: #f53f85;
}

.footer-bottom-area p a:hover {
  color: #f53f85;
}

.footer-bottom-area p a:hover::before {
  width: 100%;
}

.footer-bottom-area .payment-types {
  padding: 0;
  margin: 0;
  list-style-type: none;
  text-align: right;
}

.footer-bottom-area .payment-types li {
  display: inline-block;
}

.footer-bottom-area .payment-types li a {
  display: block;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.footer-bottom-area .payment-types li a:hover {
  -webkit-transform: translateY(-5px);
          transform: translateY(-5px);
}

.lines {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  margin: auto;
  width: 90vw;
  z-index: -1;
}

.lines .line {
  position: absolute;
  width: 1px;
  height: 100%;
  top: 0;
  left: 50%;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

.lines .line::after {
  content: "";
  display: block;
  position: absolute;
  height: 15vh;
  width: 100%;
  top: -50%;
  left: 0;
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0)), color-stop(75%, #ffffff), to(#ffffff));
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #ffffff 75%, #ffffff 100%);
  -webkit-animation: run 7s 0s infinite;
          animation: run 7s 0s infinite;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
  -webkit-animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
          animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
}

.lines .line:nth-child(1) {
  margin-left: -25%;
}

.lines .line:nth-child(1)::after {
  -webkit-animation-delay: 2s;
          animation-delay: 2s;
}

.lines .line:nth-child(3) {
  margin-left: 25%;
}

.lines .line:nth-child(3)::after {
  -webkit-animation-delay: 2.5s;
          animation-delay: 2.5s;
}

@-webkit-keyframes run {
  0% {
    top: -50%;
  }
  100% {
    top: 110%;
  }
}

@keyframes run {
  0% {
    top: -50%;
  }
  100% {
    top: 110%;
  }
}

/*================================================
Go Top CSS
=================================================*/
.go-top {
  position: fixed;
  cursor: pointer;
  bottom: 0;
  right: 15px;
  color: #ffffff;
  background-color: #f53f85;
  z-index: 4;
  width: 42px;
  text-align: center;
  height: 42px;
  line-height: 45px;
  font-size: 28px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  border-radius: 5px 5px 0 0;
  visibility: hidden;
}

.go-top.active {
  visibility: visible;
}

.go-top:hover {
  background-color: #000000;
  color: #ffffff;
}

/*================================================
Products Details Area CSS
=================================================*/
.products-page-gallery {
  text-align: center;
}

.products-page-gallery .slick-slider .slick-list .slick-track .slick-slide {
  padding: 0 3px;
  cursor: pointer;
}

.products-page-gallery .slick-slider .slick-list .slick-track .slick-slide img {
  width: 100%;
}

#products-collections-filter .single-products-box .products-image .new-tag {
  top: 40px;
}

.covid-19-offer .default-btn:hover {
  background-color: #ffffff;
  color: #f53f85;
}

/* Grocery Demo CSS */
.grocery-main-banner {
  padding-top: 200px;
  padding-bottom: 200px;
  /* background-image: url("../../../images/grocery-banner-bg.jpg"); */
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

.grocery-main-banner.electronics-banner {
  /* background-image: url("../../../images/electronics-banner-bg.jpg"); */
}

.grocery-banner-content {
  max-width: 720px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.grocery-banner-content h1 {
  font-size: 58px;
  font-weight: 800;
  font-style: italic;
  margin-top: 0;
  margin-bottom: 18px;
}

.grocery-banner-content p {
  color: #000000;
  font-size: 20px;
  font-weight: 600;
}

.grocery-banner-content h2 {
  color: #e7160e;
  font-size: 50px;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: 0;
}

.grocery-banner-content .default-btn {
  margin-top: 20px;
}

.left-categories {
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.left-categories .content {
  right: auto;
  text-align: left;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.left-categories:hover {
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.left-categories:hover .content {
  bottom: 15px;
}

.single-categories-box.hover-active .content span {
  -webkit-transform: translateY(-30px);
          transform: translateY(-30px);
}

.single-categories-box.hover-active .content h3 {
  -webkit-transform: translateY(-30px);
          transform: translateY(-30px);
}

.single-categories-box.hover-active .content .default-btn {
  background-color: #f53f85;
  color: #ffffff;
  border-color: #f53f85;
  opacity: 1;
  visibility: visible;
  -webkit-transform: translateY(-15px);
          transform: translateY(-15px);
}

.single-categories-box.overly {
  position: relative;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.single-categories-box.overly::before {
  position: absolute;
  content: '';
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.testimonials-section {
  background-color: #f5f5f5;
}

/* Furniture Banner CSS */
.furniture-banner {
  background-color: #D5F3FE;
  /* background-image: url("../../../images/furniture-banner-bg.jpg"); */
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 200px;
  padding-bottom: 200px;
}

.furniture-banner-content {
  margin-left: 50px;
}

.furniture-banner-content .sub-title {
  display: block;
  margin-bottom: 7px;
  font-size: 17.5px;
  font-weight: 600;
}

.furniture-banner-content h1 {
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 65px;
  font-weight: 700;
}

.furniture-banner-content p {
  color: #334d68;
  font-weight: 500;
  font-size: 17px;
}

.furniture-banner-content .btn-box {
  margin-top: 28px;
}

.furniture-banner-content .btn-box .optional-btn {
  margin-left: 15px;
}

/* jewelry Demo CSS */
.jewelry-main-banner {
  padding-top: 200px;
  padding-bottom: 200px;
  padding-left: 50px;
  padding-right: 50px;
  /* background-image: url("../../../images/jewelry-banner-bg.jpg"); */
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
}

.jewelry-banner-content {
  max-width: 755px;
  position: relative;
  overflow: hidden;
  padding: 55px;
  z-index: 1;
}

.jewelry-banner-content .line {
  top: 0;
  left: 0;
  content: "";
  z-index: -1;
  width: 100%;
  height: 100%;
  position: absolute;
  display: inline-block;
  border: 9px solid #000000;
  -webkit-clip-path: polygon(0 0, 60% 0, 36% 100%, 0 100%);
          clip-path: polygon(0 0, 60% 0, 36% 100%, 0 100%);
}

.jewelry-banner-content .sub-title {
  display: block;
  color: #fff;
  font-size: 25px;
}

.jewelry-banner-content h1 {
  margin: 18px 0 15px;
  color: #fff;
  font-size: 65px;
  font-weight: 700;
}

.jewelry-banner-content p {
  color: #fff;
  max-width: 495px;
  margin-bottom: 0;
  line-height: 1.6;
  font-size: 20px;
  font-weight: 300;
}

.jewelry-banner-content .default-btn {
  margin-top: 25px;
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  body {
    font-size: 13.5px;
  }
  p {
    font-size: 13.5px;
  }
  .ptb-100 {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .pt-100 {
    padding-top: 60px;
  }
  .pb-100 {
    padding-bottom: 60px;
  }
  .ptb-70 {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .pt-70 {
    padding-top: 30px;
  }
  .pb-70 {
    padding-bottom: 30px;
  }
  .default-btn {
    padding: 10px 24px;
    font-size: 13px;
  }
  .optional-btn {
    padding: 10px 24px;
    font-size: 13px;
  }
  .section-title {
    margin-bottom: 35px;
  }
  .section-title h2 {
    font-size: 28px;
  }
  .section-title.text-left {
    margin-bottom: 25px;
  }
  .section-title.text-left .default-btn {
    display: none;
  }
  .form-control {
    height: 45px;
    padding: 0 0 0 12px;
    font-size: 14px;
  }
  textarea.form-control {
    padding-top: 12px;
  }
  .top-header {
    text-align: center;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .header-contact-info li {
    font-size: 13.5px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
  .header-contact-info li:first-child {
    margin-left: 0;
  }
  .header-contact-info li:last-child {
    margin-right: 0;
  }
  .top-header-discount-info {
    margin-top: 0;
  }
  .top-header-discount-info p {
    line-height: 1.8;
    font-size: 14px;
  }
  .header-top-menu {
    text-align: center;
  }
  .header-top-menu li {
    font-size: 13.5px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
  }
  .header-top-menu li:first-child {
    margin-left: 0;
  }
  .header-top-menu li:last-child {
    margin-right: 0;
  }
  .header-top-menu li a {
    padding-left: 20px;
  }
  .header-top-menu li a i {
    font-size: 14px;
  }
  .header-top-menu li::before {
    right: -13px;
    top: 5px;
    height: 12px;
  }
  .header-top-others-option {
    display: block;
  }
  .main-nav .navbar {
    padding: 0;
    position: relative;
  }
  .main-nav .navbar .navbar-nav {
    padding-top: 10px;
    overflow-y: auto;
  }
  .main-nav .navbar .navbar-nav .nav-item .dropdown-menu {
    top: 40px;
  }
  .main-nav .navbar .navbar-nav .nav-item:first-child a {
    margin-left: 15px;
  }
  .main-nav .navbar .navbar-nav .nav-item a {
    font-size: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-left: 15px;
    margin-right: 15px;
  }
  .main-nav .navbar .navbar-nav .nav-item.megamenu {
    position: relative;
  }
  .main-nav .navbar .navbar-nav .nav-item.megamenu .container .col {
    width: 100%;
    -ms-flex-preferred-size: auto;
        flex-basis: auto;
    margin-bottom: 20px;
  }
  .main-nav .navbar .navbar-nav .nav-item.megamenu .container .col:last-child {
    margin-bottom: 0;
  }
  .main-nav .container-fluid {
    padding-left: 15px;
    padding-right: 15px;
  }
  .navbar-area {
    position: relative;
  }
  .navbar-area .others-option {
    position: absolute;
    top: 10px;
    right: 60px;
  }
  .navbar-area .others-option .burger-menu {
    display: none;
  }
  .main-banner {
    height: auto;
    padding-top: 100px;
    padding-bottom: 130px;
  }
  .main-banner.banner-bg6 {
    background-position: top left;
  }
  .main-banner.banner-bg2 {
    background-position: top left;
  }
  .main-banner.single-main-banner {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .hero-banner {
    padding-top: 100px;
    padding-bottom: 0;
  }
  .main-banner-content .sub-title {
    margin-bottom: 12px;
    font-size: 15px;
  }
  .main-banner-content h1 {
    margin-bottom: 12px;
    font-size: 30px;
  }
  .main-banner-content p {
    font-size: 15px;
  }
  .main-banner-content .btn-box {
    margin-top: 20px;
  }
  .main-banner-content .btn-box .optional-btn {
    margin-left: 5px;
  }
  .main-banner-content.text-center .btn-box .optional-btn {
    margin-left: 2.5px;
  }
  .main-banner-content.text-center .btn-box .default-btn {
    margin-right: 2.5px;
  }
  .banner-content {
    padding: 20px;
    max-width: 100%;
    margin-left: 0;
  }
  .banner-content .line {
    border-width: 2px;
  }
  .banner-content .sub-title {
    font-size: 17px;
  }
  .banner-content h1 {
    margin: 10px 0 15px;
    font-size: 35px;
  }
  .banner-content p {
    max-width: 100%;
    font-size: 15px;
    font-weight: 300;
  }
  .banner-content .btn-box {
    margin-top: 20px;
  }
  .banner-content .btn-box .default-btn {
    padding: 10px 18px;
    font-size: 12px;
  }
  .banner-content .btn-box .optional-btn {
    padding: 10px 18px;
    font-size: 12px;
    margin-left: 5px;
  }
  .banner-image {
    margin-top: 30px;
  }
  .banner-image .circle {
    width: 290px;
    height: 290px;
  }
  .home-slides.owl-theme .owl-nav {
    display: none;
  }
  .home-slides-two.owl-theme .owl-nav [class*=owl-] {
    font-size: 45px;
    left: 15px;
    opacity: 1;
    visibility: visible;
    font-size: 20px;
    top: auto;
    -webkit-transform: unset;
            transform: unset;
    bottom: 15px;
  }
  .home-slides-two.owl-theme .owl-nav [class*=owl-].owl-next {
    left: auto;
    right: 15px;
  }
  .home-slides-two.owl-theme .owl-nav [class*=owl-]:hover {
    -webkit-transform: unset;
            transform: unset;
  }
  .home-slides-two.owl-theme .owl-nav [class*=owl-]:hover.owl-next {
    -webkit-transform: unset;
            transform: unset;
  }
  .home-slides-two.owl-theme:hover .owl-nav [class*=owl-] {
    left: 15px;
  }
  .home-slides-two.owl-theme:hover .owl-nav [class*=owl-].owl-next {
    left: auto;
    right: 15px;
  }
  .single-categories-box .content {
    padding: 15px 15px 0;
    text-align: right;
  }
  .single-categories-box .content h3 {
    font-size: 23px;
  }
  .categories-box .content {
    top: 20px;
    left: 20px;
    padding-top: 7px;
    padding-bottom: 7px;
    padding-left: 17px;
    padding-right: 17px;
  }
  .categories-box .content h3 {
    font-size: 16px;
  }
  .about-image {
    padding-right: 0;
    padding-bottom: 0;
  }
  .about-image img {
    width: 100%;
  }
  .about-image img:nth-child(2) {
    position: relative;
    right: 0;
    margin-top: 20px;
  }
  .about-content {
    padding-left: 0;
    margin-top: 30px;
  }
  .about-content h2 {
    font-size: 25px;
  }
  .about-content h6 {
    font-size: 15px;
  }
  .about-content .features-text h5 {
    font-size: 16px;
    padding-top: 0;
  }
  .about-inner-area {
    margin-top: 0;
  }
  .about-text {
    margin-top: 30px;
  }
  .about-text h3 {
    font-size: 18px;
  }
  .single-testimonials-item {
    padding: 25px 20px 95px;
  }
  .single-testimonials-item p {
    font-size: 16px;
  }
  .search-overlay .search-overlay-form {
    max-width: 250px;
    width: 250px;
  }
  .customer-service-content h3 {
    padding-left: 25px;
    font-size: 18px;
  }
  .login-content {
    text-align: center;
  }
  .login-content h2 {
    margin-bottom: 20px;
    font-size: 22px;
  }
  .new-customer-content {
    padding-left: 0;
    margin-top: 30px;
    text-align: center;
  }
  .new-customer-content h2 {
    margin-bottom: 13px;
    font-size: 22px;
  }
  .new-customer-content span {
    font-size: 15px;
  }
  .signup-content {
    max-width: 100%;
  }
  .signup-content h2 {
    font-size: 22px;
  }
  .faq-accordion-tab .tabs {
    margin-bottom: 20px;
  }
  .faq-accordion-tab .tabs li {
    margin-bottom: 20px;
    padding: 15px;
    font-size: 14px;
  }
  .faq-accordion-tab .tabs li i {
    font-size: 25px;
  }
  .faq-accordion .accordion .accordion_title {
    font-size: 15px;
  }
  .faq-accordion .accordion .accordion_title i {
    left: 15px;
    top: 16px;
  }
  .faq-accordion .accordion .accordion-content p {
    font-size: 14.5px;
    line-height: 1.8;
  }
  .single-products-box .products-content h3 {
    font-size: 18px;
  }
  .single-products-box .products-content .price {
    font-size: 14px;
  }
  .products-box .products-content .category {
    font-size: 13px;
  }
  .products-box .products-content h3 {
    font-size: 18px;
  }
  .products-box .products-content .price {
    margin-top: 7px;
    font-size: 14px;
  }
  .single-productsBox .products-content .category {
    font-size: 13px;
  }
  .single-productsBox .products-content h3 {
    font-size: 18px;
  }
  .single-productsBox .products-content .price {
    margin-top: 7px;
    font-size: 14px;
  }
  .products-area .woocommerce-widget-area {
    display: none;
  }
  .error-content h3 {
    font-size: 25px;
    margin-bottom: 10px;
  }
  .error-content p {
    margin-bottom: 20px;
  }
  .coming-soon-area {
    height: 100%;
    padding-top: 100px;
    padding-bottom: 100px;
    padding-left: 15px;
    padding-right: 15px;
  }
  .coming-soon-content {
    margin-left: 0;
    padding: 30px 25px;
  }
  .coming-soon-content h2 {
    margin-top: 25px;
    font-size: 27px;
  }
  .coming-soon-content #timer {
    margin-top: 10px;
  }
  .coming-soon-content #timer div {
    width: 95px;
    height: 100px;
    font-size: 35px;
    margin-top: 20px;
  }
  .coming-soon-content #timer div span {
    font-size: 14px;
  }
  .coming-soon-content form {
    max-width: 100%;
    margin-top: 40px;
  }
  .offer-content {
    max-width: 100%;
    margin-left: 0;
    padding: 35px;
  }
  .offer-content::before {
    margin: 5px;
  }
  .offer-content h2 {
    font-size: 28px;
  }
  .offer-content .default-btn {
    margin-top: 10px;
  }
  .offer-content-box {
    max-width: 100%;
    margin-left: 0;
    text-align: center;
  }
  .offer-content-box span {
    font-size: 17px;
  }
  .offer-content-box h2 {
    font-size: 30px;
  }
  .offer-content-box p {
    font-size: 15px;
  }
  .offer-content-box .default-btn {
    margin-top: 0;
  }
  .track-order-content {
    max-width: 100%;
    padding: 30px;
  }
  .track-order-content h2 {
    font-size: 22px;
  }
  .track-order-content form {
    padding-left: 0;
    padding-right: 0;
  }
  .products-compare-table table tr td {
    white-space: nowrap;
  }
  .productsQuickView {
    overflow-y: auto !important;
  }
  .productsQuickView .modal-dialog {
    -webkit-transform: translate(0, 0px) !important;
            transform: translate(0, 0px) !important;
  }
  .productsQuickView .modal-dialog {
    max-width: 540px;
    margin: 0 auto;
  }
  .productsQuickView .modal-content {
    padding: 35px 15px 15px;
  }
  .productsQuickView .modal-content .products-content {
    margin-top: 30px;
  }
  .productsQuickView .modal-content .products-content h3 {
    font-size: 19px;
  }
  .productsQuickView .modal-content .products-content .products-info li {
    font-size: 15px;
  }
  .productsQuickView .modal-content .products-content .products-color-switch h4 {
    font-size: 15px;
  }
  .productsQuickView .modal-content .products-content .products-size-wrapper h4 {
    font-size: 15px;
  }
  .sizeGuideModal .modal-content {
    padding: 30px 20px;
  }
  .sizeGuideModal .modal-content .modal-sizeguide h3 {
    margin-bottom: 5px;
    font-size: 20px;
  }
  .productsShippingModal .modal-content {
    padding: 35px 20px;
  }
  .productsShippingModal .modal-content .shipping-content h3 {
    margin-bottom: 15px;
    font-size: 20px;
  }
  .productsFilterModal.modal.left .modal-dialog {
    width: 320px;
  }
  .woocommerce-widget-area .woocommerce-widget .woocommerce-widget-title {
    font-size: 18px;
  }
  .woocommerce-widget-area .aside-trending-widget .aside-trending-products .category h3 {
    font-size: 18px;
  }
  .all-products-area .container .container {
    padding-left: 15px;
    padding-right: 15px;
  }
  .products-slides.owl-theme .owl-nav [class*=owl-] {
    font-size: 16px;
    width: 40px;
    height: 40px;
    line-height: 38px;
    left: -20px;
    opacity: 1;
    visibility: visible;
  }
  .products-slides.owl-theme .owl-nav [class*=owl-].owl-next {
    left: auto;
    right: -20px;
  }
  .products-slides.owl-theme:hover .owl-nav [class*=owl-] {
    left: -20px;
  }
  .products-slides.owl-theme:hover .owl-nav [class*=owl-].owl-next {
    left: auto;
    right: -20px;
  }
  .products-collections-area .container-fluid {
    width: 100%;
  }
  .contact-info h3 {
    margin-bottom: 13px;
    font-size: 19px;
  }
  .contact-form {
    margin-top: 30px;
  }
  .contact-form h3 {
    margin-bottom: 13px;
    font-size: 19px;
  }
  .single-gallery-item .gallery-content h3 {
    font-size: 18px;
  }
  .products-details-desc {
    margin-top: 30px;
  }
  .products-details-desc h3 {
    margin-bottom: 15px;
    font-size: 20px;
  }
  .products-details-desc .price {
    font-size: 14px;
  }
  .products-details-desc .products-info li {
    font-size: 15px;
  }
  .products-details-desc .products-color-switch span {
    font-size: 16px;
  }
  .products-details-desc .products-size-wrapper span {
    font-size: 16px;
  }
  .products-details-desc .products-size-wrapper ul li a {
    font-size: 14px;
  }
  .products-details-desc .products-info-btn {
    margin-bottom: 18px;
  }
  .products-details-desc .products-info-btn a {
    font-size: 13px;
    margin-bottom: 7px;
  }
  .products-details-desc .products-info-btn a i {
    font-size: 17px;
  }
  .products-details-desc .products-add-to-cart .input-counter input {
    height: 40px;
    font-size: 16px;
  }
  .products-details-desc .products-add-to-cart .input-counter span {
    width: 40px;
    line-height: 44px;
    font-size: 20px;
  }
  .products-details-desc .products-add-to-cart .default-btn {
    position: relative;
    top: -2px;
  }
  .products-details-desc .wishlist-compare-btn .optional-btn {
    display: block;
    text-align: center;
  }
  .products-details-desc .wishlist-compare-btn .optional-btn i {
    top: 4px;
  }
  .products-details-desc .wishlist-compare-btn .optional-btn:not(:first-child) {
    margin-left: 0;
    margin-top: 15px;
  }
  .products-details-desc .products-details-accordion .accordion .accordion-content .products-review-form .review-title .default-btn {
    position: relative;
    margin-top: 15px;
  }
  .products-details-desc .products-details-accordion .accordion .accordion-content .products-review-form .review-comments {
    margin-top: 25px;
  }
  .products-details-desc .products-details-accordion .accordion .accordion-content .products-review-form .review-comments .review-item {
    padding-right: 0;
  }
  .products-details-desc .products-details-accordion .accordion .accordion-content .products-review-form .review-comments .review-item h3 {
    font-size: 18px;
  }
  .products-details-tab .tabs li {
    display: block;
    margin-right: 0;
  }
  .products-details-tab .tabs li a {
    padding: 13px 30px 13px 40px;
    font-size: 14px;
  }
  .products-details-tab .tabs li a .dot {
    left: 20px;
  }
  .products-details-tab .tab-content {
    padding: 20px;
  }
  .products-details-tab .tab-content .tabs-item .products-details-tab-content h3 {
    margin-bottom: 12px;
    font-size: 18px;
  }
  .products-details-tab .tab-content .tabs-item .products-details-tab-content ul li:first-child, .products-details-tab .tab-content .tabs-item .products-details-tab-content ol li:first-child {
    margin-top: 10px;
  }
  .products-details-tab .tab-content .tabs-item .products-details-tab-content .products-review-form .review-title .default-btn {
    position: relative;
    margin-top: 15px;
  }
  .products-details-tab .tab-content .tabs-item .products-details-tab-content .products-review-form .review-comments {
    margin-top: 25px;
  }
  .products-details-tab .tab-content .tabs-item .products-details-tab-content .products-review-form .review-comments .review-item {
    padding-right: 0;
  }
  .products-details-tab .tab-content .tabs-item .products-details-tab-content .products-review-form .review-comments .review-item h3 {
    font-size: 18px;
  }
  .related-products {
    margin-top: 45px;
  }
  .related-products .products-slides.owl-theme .owl-nav [class*=owl-] {
    left: -15px;
  }
  .related-products .products-slides.owl-theme .owl-nav [class*=owl-].owl-next {
    left: auto;
    right: -15px;
  }
  .related-products .products-slides.owl-theme:hover .owl-nav [class*=owl-] {
    left: -15px;
  }
  .related-products .products-slides.owl-theme:hover .owl-nav [class*=owl-].owl-next {
    left: auto;
    right: -15px;
  }
  .cart-table table thead tr th {
    padding: 0 65px 15px 0;
    font-size: 14px;
  }
  .cart-table table tbody tr td.product-name a {
    font-size: 15px;
  }
  .cart-table table tbody tr td.product-name ul {
    margin-top: 8px;
  }
  .cart-buttons .text-right {
    text-align: center !important;
    margin-top: 15px;
  }
  .cart-totals {
    padding: 20px;
    max-width: 100%;
    margin-left: 0;
    margin-top: 30px;
    margin-right: 0;
  }
  .cart-totals h3 {
    font-size: 19px;
  }
  .cart-totals ul {
    margin: 0 0 20px;
  }
  .cart-totals ul li:last-child {
    font-size: 17px;
  }
  .sizing-guide-table h3 {
    font-size: 18px;
  }
  .sizing-guide-table .sizing-guide-table table thead th {
    font-size: 16px;
    padding-right: 30px;
  }
  .user-actions {
    padding: 15px;
  }
  .user-actions span {
    font-size: 14px;
  }
  .user-actions i {
    margin-right: 0;
    font-size: 17px;
    top: 2px;
  }
  .billing-details .title {
    font-size: 19px;
  }
  .billing-details .form-group .nice-select {
    font-size: 14px;
    line-height: 45px;
  }
  .order-details {
    margin-top: 30px;
  }
  .order-details .title {
    font-size: 19px;
  }
  .order-details .order-table table thead tr th {
    font-size: 15px;
    white-space: nowrap;
  }
  .order-details .order-table table tbody tr td {
    font-size: 14px;
    white-space: nowrap;
  }
  .order-details .payment-box {
    padding: 25px;
  }
  .order-details .payment-box .payment-method p [type="radio"]:checked + label::before, .order-details .payment-box .payment-method p [type="radio"]:not(:checked) + label::before {
    top: 3px;
  }
  .order-details .payment-box .payment-method p [type="radio"]:checked + label::after, .order-details .payment-box .payment-method p [type="radio"]:not(:checked) + label::after {
    top: 6px;
  }
  .facility-slides.owl-theme .owl-nav [class*=owl-] {
    font-size: 15px;
    width: 35px;
    height: 35px;
    line-height: 31px;
    opacity: 1;
    visibility: visible;
    border-width: 1px;
  }
  .facility-slides.owl-theme:hover .owl-nav [class*=owl-] {
    left: 0;
  }
  .facility-slides.owl-theme:hover .owl-nav [class*=owl-].owl-next {
    left: auto;
    right: 0;
  }
  .page-title-area {
    padding-top: 40px;
    padding-bottom: 35px;
  }
  .page-title-content {
    text-align: center;
  }
  .page-title-content h2 {
    font-size: 22px;
  }
  .page-title-content ul {
    text-align: center;
    position: relative;
    top: 0;
    -webkit-transform: unset;
            transform: unset;
    margin-top: 10px;
  }
  .page-title-content ul li {
    margin-left: 7px;
    margin-right: 7px;
  }
  .page-title-content ul li:first-child {
    margin-left: 0;
  }
  .page-title-content ul li::before {
    left: -8px;
    top: 5px;
  }
  .products-filter-options {
    text-align: center;
  }
  .products-filter-options p {
    font-size: 15px;
    margin-top: 12px;
    margin-bottom: 8px;
  }
  .products-filter-options .products-ordering-list {
    max-width: 200px;
    margin-left: auto;
    margin-right: auto;
  }
  .products-filter-options .products-ordering-list .nice-select {
    height: 30px;
    line-height: 30px;
    font-size: 15px;
  }
  #products-collections-filter.products-row-view .products-col-item .single-products-box {
    display: block;
    -ms-flex-wrap: unset;
        flex-wrap: unset;
    -webkit-box-align: unset !important;
        -ms-flex-align: unset !important;
            align-items: unset !important;
  }
  #products-collections-filter.products-row-view .products-col-item .single-products-box .products-image {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
            flex: 0 0 100%;
    max-width: 100%;
  }
  #products-collections-filter.products-row-view .products-col-item .single-products-box .products-content {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
            flex: 0 0 100%;
    max-width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
  #products-collections-filter.products-row-view .products-col-item .single-products-box .products-content .add-to-cart {
    left: 0;
  }
  #products-collections-filter.products-row-view .products-col-item .single-products-box .products-content .star-rating {
    right: 0;
  }
  #products-collections-filter.products-row-view .products-col-item .products-box {
    display: block;
    -ms-flex-wrap: unset;
        flex-wrap: unset;
    -webkit-box-align: unset !important;
        -ms-flex-align: unset !important;
            align-items: unset !important;
  }
  #products-collections-filter.products-row-view .products-col-item .products-box .products-image {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
            flex: 0 0 100%;
    max-width: 100%;
  }
  #products-collections-filter.products-row-view .products-col-item .products-box .products-content {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
            flex: 0 0 100%;
    max-width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
  #products-collections-filter.products-row-view .products-col-item .products-box .products-content .add-to-cart {
    left: 0;
  }
  #products-collections-filter.products-row-view .products-col-item .single-productsBox {
    display: block;
    -ms-flex-wrap: unset;
        flex-wrap: unset;
    -webkit-box-align: unset !important;
        -ms-flex-align: unset !important;
            align-items: unset !important;
  }
  #products-collections-filter.products-row-view .products-col-item .single-productsBox .products-image {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
            flex: 0 0 100%;
    max-width: 100%;
  }
  #products-collections-filter.products-row-view .products-col-item .single-productsBox .products-content {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
            flex: 0 0 100%;
    max-width: 100%;
    text-align: center;
    padding-left: 0;
    padding-right: 0;
  }
  #products-collections-filter.products-row-view .products-col-item .single-productsBox .products-content .add-to-cart {
    left: 50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
  }
  .single-offer-products {
    border-radius: 0;
    padding-right: 0;
  }
  .single-offer-products .image {
    border-radius: 0;
  }
  .single-offer-products .image a {
    border-radius: 0;
  }
  .single-offer-products .image a img {
    border-radius: 0;
  }
  .single-offer-products .content {
    border: 1px solid #eeeeee;
    border-bottom: none;
    position: relative;
    right: 0;
    -webkit-box-shadow: unset;
            box-shadow: unset;
    border-radius: 0;
    padding: 25px;
    max-width: 100%;
    top: 0;
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  .single-offer-products .content h3 {
    font-size: 22px;
  }
  .single-blog-post .post-content .category {
    font-size: 13px;
  }
  .single-blog-post .post-content h3 {
    font-size: 18px;
    line-height: 1.3;
  }
  .single-blog-post .post-content .details-btn {
    margin-top: 12px;
    font-size: 13.5px;
  }
  .instagram-title {
    margin-bottom: 30px;
  }
  .pagination-area {
    margin-top: 15px;
  }
  .pagination-area .page-numbers {
    font-size: 17px;
  }
  .pagination-area .page-numbers.prev, .pagination-area .page-numbers.next {
    top: 6px;
  }
  .widget-area {
    margin-top: 35px;
  }
  .widget-area .widget .widget-title {
    font-size: 18px;
  }
  .widget-area .widget_posts_thumb .item .info .title {
    font-size: 16px;
  }
  .blog-details-desc .article-content .entry-meta {
    margin-bottom: -15px;
  }
  .blog-details-desc .article-content .entry-meta ul li {
    font-size: 14px;
    margin-bottom: 15px;
    margin-right: 15px;
    padding-right: 15px;
    padding-left: 0;
  }
  .blog-details-desc .article-content .entry-meta ul li i {
    display: none;
  }
  .blog-details-desc .article-content .entry-meta ul li span {
    font-size: 13px;
  }
  .blog-details-desc .article-content h3 {
    font-size: 19px;
    margin-bottom: 13px;
    line-height: 1.5;
  }
  .blog-details-desc .article-footer {
    padding-top: 25px;
    text-align: center;
  }
  .blog-details-desc .article-footer .article-tags {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
            flex: 0 0 100%;
    max-width: 100%;
  }
  .blog-details-desc .article-footer .article-share {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
            flex: 0 0 100%;
    max-width: 100%;
  }
  .blog-details-desc .article-footer .article-share .social {
    text-align: center;
    margin-top: 15px;
  }
  .blog-details-desc .article-author .author-profile {
    padding: 0 20px 20px;
  }
  .blog-details-desc .article-author .author-profile .author-profile-title .author-profile-title-details .author-profile-details h4 {
    font-size: 15px;
  }
  .blog-details-desc .article-author .author-profile .author-profile-title .author-profile-title-details .author-profile-details span {
    font-size: 13px;
  }
  .blog-details-desc .article-author .author-profile .author-profile-title .author-profile-title-details a {
    padding: 5px 10px 4px;
    font-size: 13px;
  }
  .comments-area .comments-title {
    font-size: 19px;
  }
  .comments-area .comment-author .avatar {
    height: 50px;
    left: 0;
    position: relative;
    width: 50px;
    display: block;
    margin-bottom: 10px;
  }
  .comments-area .comment-body {
    padding-left: 0;
  }
  .comments-area .comment-respond .comment-reply-title {
    font-size: 19px;
  }
  .comments-area .comment-respond .comment-form-author {
    width: 100%;
    padding-right: 0;
  }
  .comments-area .comment-respond .comment-form-email {
    width: 100%;
    padding-left: 0;
  }
  .comments-area .comment-respond .form-submit input {
    font-size: 14px;
    padding: 10px 30px 10px;
  }
  .comments-area .comment-respond .comment-form-cookies-consent label {
    font-size: 15px;
  }
  .comments-area .comment-respond input[type="date"], .comments-area .comment-respond input[type="time"], .comments-area .comment-respond input[type="datetime-local"], .comments-area .comment-respond input[type="week"], .comments-area .comment-respond input[type="month"], .comments-area .comment-respond input[type="text"], .comments-area .comment-respond input[type="email"], .comments-area .comment-respond input[type="url"], .comments-area .comment-respond input[type="password"], .comments-area .comment-respond input[type="search"], .comments-area .comment-respond input[type="tel"], .comments-area .comment-respond input[type="number"], .comments-area .comment-respond textarea {
    font-size: 14px;
  }
  blockquote, .blockquote {
    padding: 20px !important;
  }
  blockquote p, .blockquote p {
    font-size: 17px !important;
  }
  .prev-link-wrapper {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
            flex: 0 0 100%;
    max-width: 100%;
    padding-right: 0;
  }
  .prev-link-wrapper .prev-title {
    font-size: 15px;
  }
  .prev-link-wrapper .meta-wrapper {
    font-size: 13px;
  }
  .next-link-wrapper {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
            flex: 0 0 100%;
    max-width: 100%;
    padding-left: 0;
    margin-top: 30px;
  }
  .next-link-wrapper .next-title {
    font-size: 15px;
  }
  .next-link-wrapper .meta-wrapper {
    font-size: 13px;
  }
  .footer-area {
    padding-top: 60px;
  }
  .single-footer-widget h3 {
    margin-bottom: 20px;
    font-size: 19px;
  }
  .single-footer-widget.pl-4, .single-footer-widget.px-4 {
    padding-left: 0 !important;
  }
  .footer-bottom-area {
    text-align: center;
    margin-top: 30px;
    padding-top: 25px;
    padding-bottom: 25px;
  }
  .footer-bottom-area p {
    line-height: 1.8;
  }
  .footer-bottom-area .payment-types {
    margin-top: 15px;
    text-align: center;
  }
  .go-top {
    right: 10px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 24px;
  }
  .single-facility-box h3 {
    font-size: 18px;
  }
  .single-products-box .products-content .price, .products-box .products-content .price {
    opacity: 1 !important;
    visibility: visible !important;
  }
  .single-products-box .products-content .add-to-cart, .products-box .products-content .add-to-cart {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
    visibility: visible;
    left: 17px;
    bottom: 85px;
    background: #f53f85;
    color: #fff;
    padding: 5px 15px;
    font-size: 12px;
    border-radius: 5px;
  }
  .sidebarModal.right .modal-innter-content {
    width: 320px;
  }
  .sidebarModal.right .modal-innter-content .modal-body {
    padding: 25px;
  }
  .sidebarModal.right .close {
    right: 25px;
    top: 23px;
  }
  .main-nav .navbar .navbar-brand {
    font-size: 20px;
  }
  .main-nav .navbar .navbar-brand img {
    max-width: 100px;
  }
  .grocery-main-banner {
    padding-top: 150px;
    padding-bottom: 150px;
    padding-left: 15px;
    padding-right: 15px;
  }
  .grocery-main-banner h1 {
    font-size: 33px;
  }
  .grocery-main-banner p {
    font-size: 18px;
  }
  .left-categories .content {
    text-align: left;
  }
  .furniture-banner {
    padding-top: 150px;
    padding-bottom: 150px;
  }
  .furniture-banner-content {
    margin-left: 0;
    padding-left: 15px;
    padding-right: 15px;
  }
  .furniture-banner-content h1 {
    font-size: 33px;
  }
  .furniture-banner-content p {
    font-size: 18px;
  }
  .jewelry-main-banner {
    padding-top: 100px;
    padding-bottom: 100px;
    padding-left: 15px;
    padding-right: 15px;
  }
  .jewelry-main-banner .line {
    display: none;
  }
  .jewelry-banner-content {
    padding: 0;
  }
  .jewelry-banner-content .sub-title {
    font-size: 20px;
  }
  .jewelry-banner-content h1 {
    font-size: 35px;
  }
  .jewelry-banner-content p {
    font-size: 18px;
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .header-top-menu {
    display: inline-block;
  }
  .header-top-others-option {
    display: inline-block;
    position: relative;
    top: 3px;
    margin-top: 0;
    margin-left: 15px;
  }
  .offer-content {
    max-width: 300px;
  }
  .blog-details-desc .article-footer {
    text-align: left;
  }
  .blog-details-desc .article-footer .article-tags {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
            flex: 0 0 50%;
    max-width: 50%;
  }
  .blog-details-desc .article-footer .article-share {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
            flex: 0 0 50%;
    max-width: 50%;
  }
  .blog-details-desc .article-footer .article-share .social {
    text-align: right;
    margin-top: 0;
  }
  .comments-area .comment-author .avatar {
    position: absolute;
    display: inline-block;
    margin-bottom: 0;
    left: -65px;
  }
  .comments-area .comment-body {
    padding-left: 65px;
  }
  .products-details-desc .wishlist-compare-btn .optional-btn {
    display: inline-block;
  }
  .products-details-desc .wishlist-compare-btn .optional-btn:not(:first-child) {
    margin-left: 10px;
    margin-top: 0;
  }
  .products-details-tab .tabs li {
    display: inline-block;
    margin-right: 0;
  }
}

/* Min width 991px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .navbar-area {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .navbar-area .main-nav .navbar {
    padding: 0;
  }
  .top-header {
    text-align: center;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .top-header-discount-info {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .header-top-menu {
    display: inline-block;
    text-align: center;
  }
  .header-top-others-option {
    display: inline-block;
    position: relative;
    top: 3px;
    margin-top: 0;
    margin-left: 15px;
  }
  .home-slides.owl-theme .owl-nav {
    display: none;
  }
  .main-banner {
        height: auto;
        padding-top: 24vh;
        padding-bottom: 20vh;
  }
  .main-banner.banner-bg2 {
    background-position: top left;
  }
  .main-banner-content {
    max-width: 700px;
    margin-left: auto;
  }
  .main-banner-content .sub-title {
    font-size: 16.5px;
  }
  .main-banner-content h1 {
    font-size: 45px;
  }
  .main-banner-content p {
    font-size: 16px;
  }
  .banner-content {
    max-width: 690px;
    padding: 35px;
  }
  .banner-content .sub-title {
    font-size: 20px;
  }
  .banner-content h1 {
    font-size: 50px;
    margin: 12px 0 15px;
  }
  .banner-content p {
    font-size: 17px;
  }
  .banner-image {
    margin-top: 30px;
  }
  .banner-image .circle {
    width: 290px;
    height: 290px;
  }
  .hero-banner {
    padding-top: 100px;
    padding-bottom: 0;
  }
  .hero-banner .main-banner-content {
    text-align: center;
  }
  .single-facility-box h3 {
    font-size: 19px;
  }
  .products-area .woocommerce-widget-area {
    display: none;
  }
  .products-filter-options .sub-title a {
    margin-right: 8px;
  }
  .about-content {
    padding-left: 0;
    margin-top: 30px;
  }
  .about-inner-area {
    margin-top: 20px;
  }
  .about-text {
    margin-top: 30px;
  }
  .faq-accordion-tab .tabs {
    margin-bottom: 30px;
  }
  .faq-accordion-tab .tabs li {
    margin-left: 6px;
    margin-right: 6px;
    padding: 15px 17px;
    font-size: 14px;
  }
  .coming-soon-content {
    margin-left: auto;
    margin-right: auto;
  }
  .products-details-desc {
    margin-top: 30px;
  }
  .cart-table table thead tr th {
    padding: 0 20px 15px 0;
  }
  .order-details {
    margin-top: 30px;
  }
  .contact-form {
    margin-top: 30px;
  }
  .main-nav .navbar .navbar-nav .nav-item a {
    margin-left: 8px;
    margin-right: 8px;
    font-size: 15px;
  }
  .single-categories-box .content h3 {
    font-size: 25px;
  }
  .section-title h2 {
    font-size: 30px;
  }
  .single-products-box .products-content .price, .products-box .products-content .price {
    opacity: 1 !important;
    visibility: visible !important;
  }
  .single-products-box .products-content .add-to-cart, .products-box .products-content .add-to-cart {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
    visibility: visible;
    left: 17px;
    bottom: 85px;
    background: #f53f85;
    color: #fff;
    padding: 5px 15px;
    font-size: 12px;
    border-radius: 5px;
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .header-contact-info {
    margin-bottom: -5px;
  }
  .header-contact-info li {
    margin-bottom: 5px;
  }
  .header-top-menu {
    margin-bottom: -5px;
  }
  .header-top-menu li {
    margin-bottom: 5px;
  }
  .main-banner {
    height: 700px;
  }
  .main-banner-content h1 {
    font-size: 50px;
  }
  .banner-content {
    padding: 30px;
    max-width: 425px;
  }
  .banner-content .sub-title {
    font-size: 25px;
  }
  .banner-content h1 {
    font-size: 50px;
  }
  .banner-content p {
    font-size: 17px;
  }
  .single-categories-box .content {
    padding: 15px 15px 0;
  }
  .single-categories-box .content h3 {
    font-size: 22px;
  }
  .categories-box .content {
    top: 10px;
    left: 10px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .categories-box .content h3 {
    font-size: 17px;
  }
  .coming-soon-content {
    margin-left: auto;
    margin-right: auto;
  }
  .single-blog-post .post-content h3 {
    font-size: 20px;
  }
  .full-width-area .products-box .products-content h3 {
    font-size: 18px;
  }
}

@media only screen and (min-width: 1550px) {
  .banner-content {
    max-width: 755px;
  }
}
`;

const HomePage = ({ products }) => {
  return (
    <StyledHomePage>
      <Head>
        <title>Strapi Next.js E-commerce</title>
        {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"/> */}
      </Head>

     <MainBanner />
     {/* <ApiStrapiCall /> */}
     
      <ProductsList products={products} />
    </StyledHomePage>
  );
};

export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products } };
}

export default HomePage;
