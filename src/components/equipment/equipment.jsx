import React from "react";
import { Image } from 'antd';
import "./equipment.scss";

class Equipment extends React.Component {
    constructor(props) {
        super(props);
        this.duplicateRemoval = this.duplicateRemoval.bind(this);
    }

    transmissionData(icon) {
        this.props.getIcon(icon);
    }

    duplicateRemoval(arr) {
        let map = new Map();
        for (let item of arr) {
            if (!map.has(item.icon)) {
                map.set(item.icon, item);
            }
        }
        return [...map.values()];
    }

    render() {
        let { EquipConfig } = this.props;

        let routines = [];

        for (const i in EquipConfig) {
            if (EquipConfig[i].type === "基础装备") {
                routines.push(EquipConfig[i])
            }
        }

        routines = this.duplicateRemoval(routines);

        return (
            <div className="equipments-box">
                <div className="equipments">
                    {
                        routines.map(item => {
                            return (
                                <div className="equipments-imags" key={Number(item.icon) + Math.random()} onClick={(e) => { this.transmissionData(item.icon) }}>
                                    <Image
                                        preview={false}
                                        width={40}
                                        src={`https://cdn.jkmobile.qq.com/jkConfig/${item.picture}`}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Equipment;