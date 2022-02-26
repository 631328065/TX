import React from "react";
import { Image } from 'antd';
import "./special.scss"

class Special extends React.Component {
    render() {
        let { special } = this.props;

        return (
            <div className="special-box">
                {
                    special.map(item => {
                        return (
                            <div className="special-items" key={Number(item.icon) + Math.random()}>
                                <div className="special-items-img">
                                    <Image
                                        preview={false}
                                        width={80}
                                        src={`https://cdn.jkmobile.qq.com/jkConfig/${item.picture}`}
                                    />
                                </div>
                                <div className="special-items-content">
                                    <div className="special-items-content-title">
                                        {item.name}
                                    </div>
                                    <div className="special-items-content-desc">
                                        <span>效果</span>
                                        <div>{item.basicDesc}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Special;