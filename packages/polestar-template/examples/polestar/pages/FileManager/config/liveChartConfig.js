export default {
    boost: {
        enabled: false,
    },
    chart: {
        marginRight: 10,
        type: 'spline',
    },
    credits: {
        enabled: false,
    },
    legend: {
        align: 'center',
        enabled: true,
        verticalAlign: 'bottom',
    },
    live: {
        enabled: true,
        interval: 1000,
        period: 300000,
    },
    plotOptions: {
        series: {
            connectNulls: false,
        },
    },
    series: [
        {
            _colorIndex: 0,
            _symbolIndex: 0,
            baselineMetric: false,
            data: [
            ],
            id: '{"resourceId":3,"definitionId":61}',
            marker: {
                enabled: false,
            },
            metricId: '{"resourceId":3,"definitionId":61}',
            name: '192.168.20.236:80 > CPU 사용률(%)',
        },
        {
            _colorIndex: 1,
            _symbolIndex: 1,
            baselineMetric: false,
            data: [
            ],
            id: '{"resourceId":3,"definitionId":66}',
            marker: {
                enabled: false,
            },
            metricId: '{"resourceId":3,"definitionId":66}',
            name: '192.168.20.236:80 > 쓰레드',
        },
    ],
    subtitle: {
        text: null,
    },
    title: {
        text: null,
    },
    tooltip: {
        backgroundColor: {
            linearGradient: [
                0,
                0,
                0,
                60,
            ],
            stops: [
                [
                    0,
                    '#FFFFFF',
                ],
                [
                    1,
                    '#f3f3f3',
                ],
            ],
        },
        borderColor: '#52b2ea',
        borderWidth: 1,
        crosshairs: {
            color: 'red',
            width: 1,
        },
        shared: true,
        useHTML: true,
    },
    xAxis: {
        max: 1511935660077,
        min: 1511935360077,
        tickPixelInterval: 150,
        type: 'datetime',
    },
    yAxis: {
        plotLines: [
            {
                color: 'red',
                value: 41,
                width: 1,
            },
        ],
        title: {
            text: '',
        },
    },
};
