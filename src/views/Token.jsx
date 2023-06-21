import React, { useState } from 'react';
import { Link } from "react-router-simple-transition";

// styles
import '../assets/scss/pages/token.scss';

// images
import BitcoinIcon from '../assets/images/token/bitcoin.svg';
import EthereumSmallIcon from '../assets/images/token/ethereum-sm.svg';
import EthereumLargeIcon from '../assets/images/token/ethereum-eth-logo.svg';
import BinanceSmallIcon from '../assets/images/token/binance-sm.svg';
import BinanceLargeIcon from '../assets/images/token/binance.svg';
import PolkadotSmallIcon from '../assets/images/token/polkadot-sm.svg';
import PolkadotLargeIcon from '../assets/images/token/polkadot.svg';
import ListIcon from '../assets/images/token/list.svg';
import SettingIcon from '../assets/images/token/setting.svg';
import UniswapUni from '../assets/images/token/uniswap-uni-logo.svg';
import Uniswap from '../assets/images/token/UP-token-icon.svg';
import SelectBoxIcon from '../assets/images/token/select-box-icon.svg';
import ArrowDownIcon from '../assets/images/token/arrow-down-icon.svg';
import DiamondIcon from '../assets/images/token/diamond.svg';
import Logo from '../assets/images/logo.svg';
import BackgroundImage from '../assets/images/bg.png';
import TokenItem from '../components/TokenItem';

const Token = () => {
  const [selectedToken, setSelectedToken] = useState(null);
  const [unit, setUnit] = useState(null);
  const handleSelectToken = (data) => {
    setSelectedToken(data);
  }

  const [tokenItems, setTokenItems] = useState([
    {
      name: 'Bitcoin',
      avatar: BitcoinIcon,
      rate: '56.078,97',
      amount: '65.0821',
      active: false,
      price: 5623.32
    },
    {
      name: 'Uniswap',
      avatar: UniswapUni,
      rate: '32.98',
      amount: '37.0821',
      active: false,
      price: 5623.32
    },
    {
      name: 'Uniswap',
      avatar: Uniswap,
      rate: '32.98',
      amount: '78.9821',
      active: false,
      price: 5623.32
    },
    {
      name: 'Polkadot',
      avatar: PolkadotLargeIcon,
      rate: '56.078,97',
      amount: '85.0821',
      active: false,
      price: 5623.32
    },
    {
      name: 'Binance',
      avatar: BinanceLargeIcon,
      rate: '32.98',
      amount: '7.7821',
      active: false,
      price: 5623.32
    },
    {
      name: 'Ethereum',
      avatar: EthereumLargeIcon,
      rate: '32.98',
      amount: '55.0821',
      active: false,
      price: 5623.32
    },
    {
      name: 'Bitcoin',
      avatar: BitcoinIcon,
      rate: '56.078,97',
      amount: '65.0821',
      active: false,
      price: 5623.32
    },
    {
      name: 'Uniswap',
      avatar: UniswapUni,
      rate: '32.98',
      amount: '37.0821',
      active: false,
      price: 5623.32
    },
    {
      name: 'Uniswap',
      avatar: Uniswap,
      rate: '32.98',
      amount: '78.9821',
      active: false,
      price: 5623.32
    },
    {
      name: 'Polkadot',
      avatar: PolkadotLargeIcon,
      rate: '56.078,97',
      amount: '85.0821',
      active: false,
      price: 5623.32
    },
    {
      name: 'Binance',
      avatar: BinanceLargeIcon,
      rate: '32.98',
      amount: '7.7821',
      active: false,
      price: 5623.32
    },
    {
      name: 'Ethereum',
      avatar: EthereumLargeIcon,
      rate: '32.98',
      amount: '55.0821',
      active: false,
      price: 5623.32
    },
  ]);

  const handleChange = (event) => {
    setUnit(event.target.value);
  }

  return (
    <div className="token">
      <div className="bg-image">
        <div />
        <img src={BackgroundImage} alt="background image" />
      </div>
      <div className="sidebar">
        <div className="menus">
          <ul>
            <li className="active">
              <img src={EthereumSmallIcon} alt="Ethereum" />
            </li>
            <li>
              <img src={BinanceSmallIcon} alt="binance" />
            </li>
            <li>
              <img src={PolkadotSmallIcon} alt="polkadot" />
            </li>
            <li>
              <Link to="/idos"><img src={ListIcon} alt="list" /></Link>
            </li>
          </ul>
        </div>
        <button className="setting">
          <img src={SettingIcon} alt="setting" />
        </button>
      </div>
      <div className="content">
        <div className="header">
          <img src={Logo} alt="logo" className="logo" />
          <button>Connect Wallet</button>
        </div>
        <div className="boardcast">
          <div className="left">
            <p className="title">Token List</p>
            <p className="description">
              ERC20 token lists in a manner that is inclusive, transparent, and decentralized.
            </p>
          </div>
          <div className="right">
            <div className="left">
              <p className="title">Wallets</p>
              <p className="address">0x0000000000000000000000000000000000000000</p>
            </div>
            <div className="right">
              <p className="title">Total Balance</p>
              <p className="balance">
                <span>130,920.98 USDT</span>
                <span>9000.00 NAPZ</span>
              </p>
            </div>
          </div>
        </div>
        <div className="main">
          <div className="left">
            {
              tokenItems.map((item, index) => <TokenItem handleClick={handleSelectToken} active={selectedToken === item} data={item} key={index} />)
            }
          </div>
          <div className="right">
            <div className="form">
              <div className="header">
                {
                  selectedToken &&
                  (
                    <>
                      <div className="avatar">
                        <img src={selectedToken.avatar} />
                      </div>
                      <div>
                        <p className="name">{selectedToken.name}</p>
                        <p className="amount">{selectedToken.rate} USDT</p>
                      </div>
                    </>
                  )
                }
              </div>
              <div className="body">
                <div>
                  <span>Amount</span>
                  <div className="select">
                    <img src={DiamondIcon} className="diamond" alt="diamond" />
                    <select onChange={handleChange}>
                      <option>USDT</option>
                      <option>USDC</option>
                      <option>BUSD</option>
                    </select>
                    <img src={SelectBoxIcon} className="icon" alt="select box icon" />
                  </div>
                </div>
                <div className="inputField">
                  <input type="text" defaultValue={`${selectedToken ? '56,783' : '0.00'}`} />
                  <span>{unit || 'USDT'}</span>
                </div>
                <div className="converted">
                  <span>${selectedToken ? selectedToken.price : '0.00'}</span>
                  <span>USD</span>
                </div>
                <img src={ArrowDownIcon} className="arrow-down" alt="arrow icon" />
                <div className="label">
                  <span>Amount</span>
                </div>
                <div className="inputField">
                  <input type="text" defaultValue={`${selectedToken ? '1.00284' : '0.00'}`} />
                  <span>BTC</span>
                </div>
                <button disabled={selectedToken ? false : true}>Use Napz</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Token;