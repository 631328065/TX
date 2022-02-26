import React from "react";
import { Tabs, Radio, Row, Col } from 'antd';
import "./index.scss";
import Equipment from "../../components/equipment/equipment";
import axios from 'axios';
import Formings from "../../components/forming/forming";
import Special from "../../components/special/special";

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
            EquipConfig: {},
            formings: [],
            special: []
        }
    }

    handleKey(key) {
        console.log(key, "key====");
    }

    changeEquipments(e) {
        let { EquipConfig } = this.state;

        let special = [];
        for (const i in EquipConfig) {
            if (EquipConfig[i].type === "特殊装备") {
                special.push(EquipConfig[i]);
            }
        }

        this.setState({
            equipmentKey: e.target.value,
            special
        });
    }

    getData() {
        axios.get("jkConfig/config.json").then(res => {
            this.setState({
                EquipConfig: res.data.EquipConfig,
            });
        })
    }

    componentDidMount() {
        this.getData();
    }

    getIcon(icon) {
        let { EquipConfig } = this.state;
        let formings = [];
        for (const i in EquipConfig) {
            if (EquipConfig[i].synthesis1 === icon || EquipConfig[i].synthesis2 === icon) {
                formings.push(EquipConfig[i])
            }
        }

        this.setState({
            formings
        })
    }

    render() {
        let { equipmentKey, cols, EquipConfig, formings, special } = this.state;

        let renderEquipment = () => {
            if (equipmentKey === "1") {
                return (
                    <div>
                        <Equipment EquipConfig={EquipConfig} getIcon={this.getIcon.bind(this)} />
                        <Formings formings={formings}></Formings>
                    </div>
                )
            } else {
                return (
                    <Special special={special}></Special>
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
                    <div className="conten-btn">
                        <Radio.Group
                            options={this.state.equipments}
                            onChange={this.changeEquipments}
                            value={equipmentKey}
                            optionType="button"
                            buttonStyle="solid"
                        />
                    </div>
                    {
                        renderEquipment()
                    }
                </div>
            </div>
        )
    }
}

export default Main;