import React from "react";
import { Tabs, Radio, Row, Col } from 'antd';
import "./index.scss";
import Equipment from "../../components/equipment/equipment";
import axios from 'axios';

const { TabPane } = Tabs;

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.handleKey = this.handleKey.bind(this);
        this.changeEquipments = this.changeEquipments.bind(this);
        this.getData = this.getData.bind(this);

        this.state = {
            equipments: [
                {
                    label: "常规装备",
                    value: "1"
                },
                {
                    label: "特殊装备",
                    value: "2"
                }
            ],
            equipmentKey: "1",
            cols: [
                {
                    title: "英雄",
                    key: "1",
                },
                {
                    title: "装备",
                    key: "2",
                },
                {
                    title: "羁绊",
                    key: "3",
                },
                {
                    title: "小小英雄",
                    key: "4",
                },
            ],
            EquipConfig: {}
        }
    }

    handleKey(key) {
        console.log(key, "key====");
    }

    changeEquipments(e) {
        this.setState({
            equipmentKey: e.target.value,
        });
    }

    getData() {
        axios.get("jkConfig/config.json").then(res => {
            console.log(res.data.EquipConfig, "res");
            this.setState({
                EquipConfig: res.data.EquipConfig,
            });
        })
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        let { equipmentKey, cols, EquipConfig } = this.state;

        let renderEquipment = () => {
            if (equipmentKey === "1") {
                return (
                    <Equipment EquipConfig={EquipConfig} />
                )
            }
        }

        return (
            <div className="page-box">
                <Tabs defaultActiveKey="1" onChange={this.handleKey} centered>
                    <TabPane tab="时空裂缝" key="1">
                    </TabPane>
                    <TabPane tab="英雄之黎明" key="2">
                    </TabPane>
                </Tabs>
                <Row style={{ borderBottom: "1px solid #ededed" }}>
                    {
                        cols.map((item, index) => {
                            return (
                                <Col span={6} key={item.key}>
                                    <div className={`cols-title ${index === 1 ? "equipment" : null}`}>{item.title}</div>
                                </Col>
                            )
                        })
                    }
                </Row>
                <div className="conten-box">
                    <Radio.Group
                        options={this.state.equipments}
                        onChange={this.changeEquipments}
                        value={equipmentKey}
                        optionType="button"
                        buttonStyle="solid"
                    />
                    {
                        renderEquipment()
                    }
                </div>
            </div>
        )
    }
}

export default Main;