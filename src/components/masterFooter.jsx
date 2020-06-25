import React, {useState} from 'react';

function masterFooter() {
    const footerlinks = [
        {id: 1, name:'首页', class: 'home'},
        {id: 2, name:'优惠', class: 'promotion' },
        {id: 3, name:'客服', class: 'customer-service' },
        {id: 4, name:'个人中心', class: 'profile' }
    ];

    const [activeLink, setActiveLink] = useState(1);

    return (
        <div id='masterfooter'>
            <nav>
                <ul>{
                        footerlinks.map(link => {
                            return (
                                <li key={link.id}
                                    onClick={() => setActiveLink(link.id)}>
                                    <a>
                                        <div className={(link.class + (link.id === activeLink ? '_on' : ''))}></div>
                                        <span>{link.name}</span>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </div>
    )
}

export default masterFooter;
