import React from 'react';
import { Link } from "react-router-simple-transition";
import '../assets/scss/pages/idos.scss';

import ArrowLeftIcon from '../assets/images/idos/arrow-left.svg';
import SearchIcon from '../assets/images/idos/search.svg';
import BinanceIcon from '../assets/images/idos/binance.svg';
import AIcon from '../assets/images/idos/A.svg';
import BIcon from '../assets/images/idos/B.svg';
import CIcon from '../assets/images/idos/C.svg';
import DIcon from '../assets/images/idos/D.svg';
import EIcon from '../assets/images/idos/E.svg';
import FIcon from '../assets/images/idos/F.svg';
import Logo from '../assets/images/logo.svg';
import BackgroundImage from '../assets/images/bg.png';

const IDOs = () => {
  const items = [
    {
      ido: 'Coin-A',
      avatar: AIcon,
      available: '30,000',
      limit: 1000,
      price: 15
    },
    {
      ido: 'Coin-B',
      avatar: BIcon,
      available: '30,000',
      limit: 1000,
      price: 8
    },
    {
      ido: 'Coin-C',
      avatar: CIcon,
      available: '30,000',
      limit: 1000,
      price: 3
    },
    {
      ido: 'Coin-D',
      avatar: DIcon,
      available: '30,000',
      limit: 1000,
      price: 11
    },
    {
      ido: 'Coin-E',
      avatar: EIcon,
      available: '30,000',
      limit: 1000,
      price: 24
    },
    {
      ido: 'Coin-F',
      avatar: FIcon,
      available: '30,000',
      limit: 1000,
      price: 15
    }
  ];

  return (
    <div className="idos">
      <div className="bg-image">
        <div />
        <img src={BackgroundImage} alt="background image" />
      </div>

      <div className="sidebar">
        <div className="header">
          <Link to="/token"><img src={ArrowLeftIcon} className="back" alt="arrow left icon" /></Link>
          <img src={Logo} alt="logo" className="logo" />
        </div>

        <div className="menus">
          <ul>
            <li className="active">IDOs</li>
            <li>P2P</li>
            <li>Vote</li>
            <li>Pools</li>
          </ul>
        </div>

        <div className="search-form">
          <div className="filter">
            <p className="title">Search Filters</p>
            <select name="" id="">
              <option value="">Network</option>
            </select>
            <select name="" id="">
              <option value="">Date Listed</option>
            </select>
          </div>
          <div className="range">
            <p className="title">Price Range</p>
            <input type="text" defaultValue="0.00" />
            <p className="to">To</p>
            <input type="text" defaultValue="0.00" />
          </div>
        </div>
        <div className="search-btn">
          <button>Search</button>
        </div>
      </div>
      <div className="content">
        <div className="header">
          <div className="navbar">
            <div className="search-field">
              <input type="text" placeholder="Search IDOs…" />
              <img src={SearchIcon} alt="search icon" />
            </div>
            <div className="btn-group">
              <button>Create Listing</button>
              <button>Connect Wallet</button>
            </div>
          </div>
          <div className="table-bar">
            <p className="title">Listings :</p>
            <div>
              <div>Network</div>
              <div>IDO</div>
              <div>Supply</div>
              <div>Price</div>
              <div>Sort:
                <select>
                  <option value="">Newest</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="body">
          {
            items.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <div className="col-1">
                    <img src={BinanceIcon} alt="binance icon" />
                  </div>
                  <div className="col-2">
                    <img src={item.avatar} alt="A" />
                    {item.ido}
                  </div>
                  <div className="col-3">
                    <div>
                      Available: <br />
                      Limit
                    </div>
                    <div>
                      <b>
                        {item.available} token <br />
                        ${item.limit} USD
                      </b>
                    </div>
                  </div>
                  <div className="col-4">
                    <b>${item.price} USD</b> / token
                  </div>
                  <div className="col-5">
                    <button>Buy Allocation</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default IDOs;