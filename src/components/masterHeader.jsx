import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../assets/img/_banner/banner-image3.png';
import {ReactComponent as Image2} from '../assets/img/_icon/messages.svg';
import {ReactComponent as Image3} from '../assets/img/_icon/deposit.svg';
import {ReactComponent as Image4} from '../assets/img/_icon/withdrawal.svg';
import {ReactComponent as Image5} from '../assets/img/_icon/transfer.svg';

function masterHeader() {

    const link = [
        {
            id: 1,
            name: "全部",
        },
        {
          id: 2,
          name: "体育赛事",
        },
        {
          id: 3,
          name: "真人娛乐",
        },
        {
          id: 4,
          name: "电子竞技",
        },
        {
          id: 5,
          name: "电子游戏",
        },
        {
          id: 6,
          name: "棋牌",
        }
      ];
    const [lobbyNav,setLobbyNav] = useState(link);
    const [activeLink,setactiveLink] = useState(1);

    return (
      <div id='masterheader'>
        <div className='header-bg'>
            <div className='banner'>
            <Carousel>
                <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={image1}
                    alt='First slide'
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={image1}
                    alt='Third slide'
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={image1}
                    alt='Third slide'
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={image1}
                    alt='Fourth slide'
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={image1}
                    alt='Fifth slide'
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={image1}
                    alt='Sixth slide'
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={image1}
                    alt='Seventh slide'
                />
                </Carousel.Item>
            </Carousel>
            </div>
            <div className='marquee'>
                <span>尊敬会员大家好一人民银行已经维护完毕，大家可以正常进行取款即可</span>
            </div>
            <div className='account-summary'>
                <div className='account-name'>testaccount</div>
                <div className='account-wallet'>
                    <label>中心:</label>
                    <span className='wallet-amount'>
                        <span className='currency'>&#165;</span>
                        <span className='amount'>44.0</span>
                    </span>
                </div>
            </div>
            <div className='account-nav'>
                <nav>
                    <ul>
                        <li>
                            <Image2 />
                            <span className='acc-nav-title'>信息</span>
                        </li>
                        <li>
                            <Image3 />
                            <span className='acc-nav-title'>充值</span>
                        </li>
                        <li>
                            <Image4 />
                            <span className='acc-nav-title'>提款</span>
                        </li>
                        <li>
                            <Image5 />
                            <span className='acc-nav-title'>转帐</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div className='lobby-nav'>
            <div className='acc-nav-bg'></div>
            <nav>
                <ul>
                {lobbyNav.map(link => {
                    return (
                            <li key={link.id}
                                onClick={() => setactiveLink(link.id)}
                                className={(link.id === activeLink ? " active" : "")} >
                                <a href='#'>
                                {link.name}
                                </a>
                            </li>
                    )}
                )}
                </ul>
            </nav>
        </div>
      </div>
    );
}

export default masterHeader;