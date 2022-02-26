import React from "react";
import { Image } from 'antd';
import "./forming.scss"

class Formings extends React.Component {
    render() {
        let { formings } = this.props;

        return (
            <div className="formings-box">
                {
                    formings.map(item => {
                        return (
                            <div className="formings-items" key={Number(item.icon) + Math.random()}>
                                <div className="formings-items-img">
                                    <Image
                                        preview={false}
                                        width={80}
                                        src={`https://cdn.jkmobile.qq.com/jkConfig/${item.picture}`}
                                    />
                                </div>
                                <div className="formings-items-content">
                                    <div className="formings-items-content-title">
                                        {item.name}
                                    </div>
                                    <div className="formings-items-content-desc">
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

export default Formings;