import React from 'react';
import {ReactComponent as Ag} from '../assets/img/_background/AG_bg.svg';
import {ReactComponent as Bti} from '../assets/img/_background/BTI_bg.svg';
import {ReactComponent as Cq} from '../assets/img/_background/CQ_bg.svg';
import {ReactComponent as Eb} from '../assets/img/_background/EB_bg.svg';
import {ReactComponent as Imesports} from '../assets/img/_background/IM-esports_bg.svg';
import {ReactComponent as Imsports} from '../assets/img/_background/IM-sports_bg.svg';
import {ReactComponent as Poker} from '../assets/img/_background/poker_bg.svg';
import {ReactComponent as Pt } from '../assets/img/_background/PT_bg.svg';
import {ReactComponent as Sports} from '../assets/img/_background/sports_bg.svg';

function home() {
    return (
        <div id='homepage'>
            <div className='egames'>
                <Ag />
                <Bti />
                <Cq />
                <Eb />
                <Imesports />
                <Imsports />
                <Poker />
                <Pt />
                <Sports />
            </div>
        </div>
    )
}

export default home;
