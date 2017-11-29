import React from 'react';
import { Row, Col } from 'antd';
import TryCatch from 'react-try-catch';
import { Box, Header, Footer, Button, Grid, Form, Chart } from 'polestar-ui-kit';

import liveChartConfig from './config/liveChartConfig';
import pieChartConfig from './config/pieChartConfig';

const { PolestarHighcharts } = Chart;

class FileManager extends React.PureComponent {
    componentDidMount() {
        this.timer = setInterval(() => {
            // '{"resourceId":3,"definitionId":61}', '{"resourceId":3,"definitionId":66}',
            const x = (new Date()).getTime(); // current time
            let y = Math.random() * 100;
            this.liveChart.addPoint('{"resourceId":3,"definitionId":61}', [x, y]);
            y = Math.random() * 100;
            this.liveChart.addPoint('{"resourceId":3,"definitionId":66}', [x, y]);
        }, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = null;
    }

    handleHighchartsCallBack = () => {
        console.log('Highchart is initialized!');
    }

    render() {
        const basicChartConfig = {
            chart: {
                type: 'line',
            },
            title: {
                text: null,
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            },
            series: [{
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            }],
        };
        const basicChartDomConfig = {
            style: {
                height: '100%',
                width: '100%',
                position: 'absolute',
            },
        };
        return (
            <Row gutter={48} style={{ height: '350px' }}>
                <Col span={12} style={{ height: '100%' }}>
                    <h2>Basic Chart</h2>
                    <PolestarHighcharts
                        config={basicChartConfig}
                        domConfig={basicChartDomConfig}
                        callback={this.handleHighchartsCallBack}
                    />
                </Col>
                <Col span={12} style={{ height: '100%' }}>
                    <h2>Realtime Chart</h2>
                    <PolestarHighcharts
                        ref={(chart) => { this.liveChart = chart; }}
                        config={liveChartConfig}
                    />
                </Col>
                <Col>
                    <h2>Pie Chart</h2>
                    <PolestarHighcharts
                        config={pieChartConfig}
                    />
                </Col>
            </Row>
        );
    }
}

export default FileManager;