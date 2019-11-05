import React from 'react';

export default function Foot() {
    return (
        <div className="foot">
            <div className="footer">
                <div className="link">
                    <a href="/rss">RSS</a>  
                    &nbsp;|&nbsp;
                    <a href="https://github.com/cnodejs/nodeclub/">源码地址</a>
                </div>
                <div className="col_fade">
                    <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
                    <p>服务器赞助商为
                        <a href="#">
                            <img src="//static.cnodejs.org/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9" width="92px"/>
                        </a>，存储赞助商为
                        <a href="#">
                            <img src="//static.cnodejs.org/Fg0jtDIcTqVC049oVu5-sn6Om4NX" width="115px"/>
                        </a>，由s
                        <a href="#">
                            <img src="//static.cnodejs.org/FpMZk31PDyxkC8yStmMQL4XroaGD" height="54px" width="166px"/>
                        </a>提供应用性能服务。
                    </p>
                    <p>新手搭建 Node.js 服务器，推荐使用无需备案的 
                        <a href="#">DigitalOcean(https://www.digitalocean.com/)</a>
                    </p>
                </div>
            </div>
        </div>
    )
}


