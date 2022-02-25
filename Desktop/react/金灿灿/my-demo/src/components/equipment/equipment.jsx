import React from "react";
import { Image } from 'antd';
import "./equipment.scss";

class Equipment extends React.Component {
    renderImage() { }

    render() {
        let EquipConfig = this.props.EquipConfig;

        return (
            <div className="equipment">
                <div className="equipment-imags">
                    <Image
                        width={40}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                </div>
            </div>
        )
    }
}

export default Equipment;