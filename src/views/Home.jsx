import React from 'react';
import { Link } from "react-router-simple-transition";

import Logo from '../assets/images/logo.svg';
import Banner from '../assets/images/home/banner.png';
import Eth from '../assets/images/home/eth.png';
import Uni from '../assets/images/home/uni.png';
import Unifi from '../assets/images/home/unifi.png';
import Binance from '../assets/images/home/binance.png';
import Polkadot from '../assets/images/home/polkadot.png';
import Governance from '../assets/images/home/governance.png';
import TelegramIcon from '../assets/images/icons/telegram.svg';
import CommunityImage from '../assets/images/home/community.png';
import '../assets/scss/pages/home.scss';

const Home = () => {
  const features = [
    {
      title: 'Cross-chain DeFi',
      description: 'Easy and Affordable: True cross-chain swaps will create stability in the marketplace and allow development to thrive on several different blockchains.'
    },
    {
      title: 'Tokenomics',
      description: 'Unifi provides a tokenized rewards system which allows built in yield farming and removes the limitations created by providing native blockchain token rewards. Unifi captures the power of multi-chain and multi-platform liquidity mining into the UNFI token, Unifi’s Global Governance Token.'
    },
    {
      title: 'UNFI Reward',
      description: 'UNFI token holders can earn Staking Rewards, and may earn even more rewards from their chosen Community Council Representative. Rewards for staking UNFI and delegating incentivizes the community to contribute to the growth of the Protocol and UNFI.'
    },
    {
      title: 'Sustainable Utility',
      description: 'Unlimited Variety. Right now, you could import BUSD from Ethereum to Harmony and trade with it on uTrade on Harmony blockchain, or use it to deposit liquidity and mine UP. Whatever you can imagine, you can Unifi.'
    },
  ];

  const footerLinks = [
    {
      title: 'Products',
      menus: [
        {
          name: 'App',
          link: '/'
        },
        {
          name: 'Analytics',
          link: '/'
        },
        {
          name: 'Token Lists',
          link: '/'
        },
        {
          name: 'Sybil',
          link: '/'
        }
      ]
    },
    {
      title: 'Developers',
      menus: [
        {
          name: 'Documentation',
          link: '/'
        },
        {
          name: 'GitHub',
          link: '/'
        },
        {
          name: 'Whitepaper',
          link: '/'
        },
        {
          name: 'Audit',
          link: '/'
        },
        {
          name: 'Bug Bounty',
          link: '/'
        }
      ]
    },
    {
      title: 'Governance',
      menus: [
        {
          name: 'Naps Token',
          link: '/'
        },
        {
          name: 'Forum',
          link: '/'
        },
        {
          name: 'Voting Portal',
          link: '/'
        },
        {
          name: 'Documentation',
          link: '/'
        }
      ]
    },
    {
      title: 'Community',
      menus: [
        {
          name: 'Discord',
          link: '/'
        },
        {
          name: 'Twitter',
          link: '/'
        },
        {
          name: 'Reddit',
          link: '/'
        }
      ]
    },
    {
      title: 'About',
      menus: [
        {
          name: 'Blog',
          link: '/'
        },
        {
          name: 'Info',
          link: '/'
        },
        {
          name: 'FAQ',
          link: '/'
        },
        {
          name: 'Jobs',
          link: '/'
        },
        {
          name: 'Logo & Brand',
          link: '/'
        }
      ]
    },
  ];

  const roadmaps = [
    {
      title: 'Kick-starting Napz',
      year: '(Q2 2021)',
      items: [
        'Platforform Development',
        'Seed Sale',
        'Testnet Launch',
        'Publish Code on Github'
      ]
    },
    {
      title: 'Launching MVP',
      year: '(Q3 2021)',
      items: [
        'Platform is Live',
        'Fixed Token Swaps',
        'Tomochain Testnet Launch',
        'Exchange Listing'
      ]
    },
    {
      title: 'Accelerating Napz',
      year: '(Q4 2021)',
      items: [
        'Full Migration to Polkadot',
        'NFT Support',
        'Governance & Stacking',
        'Stable Swap Integration'
      ]
    },
    {
      title: 'Skyrocketing Napz',
      year: '(Q1 2022)',
      items: [
        'Mobile Version',
        'Multi-Wallets Integration',
        'Synthetic Token',
        'Cross-Chain Swap Integration'
      ]
    },
  ]

  return (
    <div className="home">
      <div className="header-container">
        <div className="header">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="menu">
            <ul>
              <li><Link to="/">Products</Link></li>
              <li><Link to="/">Developers</Link></li>
              <li><Link to="/">Governance</Link></li>
              <li><Link to="/">Community</Link></li>
              <li><Link to="/">About</Link></li>
            </ul>
            <button>Connect Wallet</button>
          </div>
        </div>
      </div>
      <div className="banner">
        <div className="main">
          <div className="left">
            <img src={Logo} alt="logo" className="logo" />
            <p className="title">Cross-Chain Token Pools & Auctions</p>
            <p className="description">Guaranteed liquidity for millions of users and hundreds of Ethereum applications.</p>
            <div className="btn-group">
              <button><Link to="/token">Use Napz</Link></button>
              <button>
                Telegram
                <img src={TelegramIcon} alt="telegram" />
              </button>
            </div>
            <p className="small">Reinventing decentralized swap pools.</p>
          </div>
          <div className="right">
            <img src={Banner} alt="banner" />
          </div>
        </div>
      </div>
      <div className="about">
        <div className="history">
          <div className="item">
            <p className="title">
              <span>$119B</span>
              <span className="plus">+</span>
            </p>
            <p className="description">All Time Volume</p>
          </div>
          <div className="item">
            <p className="title">
              <span>72K</span>
              <span className="plus">+</span>
            </p>
            <p className="description">Liquidity Providers</p>
          </div>
          <div className="item">
            <p className="title">
              <span>35M</span>
              <span className="plus">+</span>
            </p>
            <p className="description">All Time Trades</p>
          </div>
          <div className="item">
            <p className="title">
              <span>200</span>
              <span className="plus">+</span>
            </p>
            <p className="description">DeFi Integrations</p>
          </div>
        </div>
        <div className="detail">
          <p className="title">A growing protocol ecosystem.</p>
          <p className="description">
            Naps empowers developers, liquidity providers and traders to participate
            in a financial marketplace that is open and accessible to all.
          </p>
          <div className="btn-group">
            <button><img src={Binance} alt="binance" /></button>
            <button><img src={Eth} alt="eth" /></button>
            <button><img src={Polkadot} alt="polkadot" /></button>
            <button><img src={Uni} alt="uni" /></button>
            <button><img src={Unifi} alt="unifi" /></button>
          </div>
        </div>
      </div>
      <div className="feature">
        <p className="title">Features & Highlights</p>
        <p className="description">
          Competitive swap environment to unlock the potential of decentralized<br />
          finance & make blockchains interoperable.
        </p>
        <div className="items">
          {
            features.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <p className="title">{item.title}</p>
                  <p className="description">{item.description}</p>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="governance">
        <p className="title">Governance</p>
        <div className="content">
          <div className="left">
            <img src={Governance} alt="governance" />
          </div>
          <div className="center"><div className="bar" /></div>
          <div className="right">
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a erat magna. Pellentesque efficitur, mi ac malesuada pretium, neque sem consectetur lacus, elementum placerat mi orci eget dolor. Donec rhoncus posuere commodo. In hac habitasse platea dictumst. Quisque cursus dictum velit,  non.<br /><br />

              Pellentesque tempus, mauris et accumsan scelerisque, est nunc sollicitudin ipsum, sit amet laoreet leo ex sit amet lacus. Vestibulum ante ipsum primis in faucibus orci. Maecenas at mattis nunc, luctus vehicula metus. In non vulputate ante, non ornare lectus. Aliquam gravida sapien rhoncus velit placerat viverra. Nunc ornare mollis lorem sit amet tempus.
            </p>
          </div>
        </div>
      </div>
      <div className="roadmap">
        <p className="title">Roadmap</p>
        <div className="content">
          {
            roadmaps.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <p className="title">{item.title}<br /><span>{item.year}</span></p>
                  <ul>
                    {
                      item.items.map((subItem, subIndex) => {
                        return <li key={subIndex}><span>- {subItem}</span></li>
                      })}
                  </ul>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="community">
        <img src={CommunityImage} alt="community image" className="avatar" />
        <p className="title">A global community.</p>
        <p className="description">
          Learn more about Napz, chat with the team, others in the community, and have<br />
          your say in shaping the future of the Uniswap protocol.
        </p>
        <button>
          Telegram
          <img src={TelegramIcon} alt="telegram icon" />
        </button>
      </div>
      <div className="subscribe">
        <p className="title">Subscribe for updates.</p>
        <div className="content">
          <input type="text" placeholder="email address" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footer">
        <div className="top">
          <div className="menus">
            {
              footerLinks.map((item, index) => {
                return (
                  <div className="item" key={index}>
                    <p className="title">{item.title}</p>
                    <ul>
                      {
                        item.menus.map((subItem, subIndex) => {
                          return <li key={subIndex}><Link to={subItem.link}>{subItem.name}</Link></li>
                        })
                      }
                    </ul>
                  </div>
                );
              })
            }
          </div>
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
        </div>
        <div className="copyright">
          @ Copyright Napz Finance 2020
        </div>
      </div>
    </div>
  )
}

export default Home;