export default {
    boost: {
        enabled: false,
    },
    chart: {
        height: 315,
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
    },
    credits: {
        enabled: false,
    },
    legend: {
        align: 'center',
        enabled: true,
        verticalAlign: 'bottom',
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false,
            },
            showInLegend: true,
        },
    },
    series: [
        {
            colorByPoint: true,
            data: [
                {
                    id: '{"resourceId":10,"definitionId":111}',
                    name: '192.168.232.67(ms)',
                    y: 19.96355991168585,
                },
                {
                    id: '{"resourceId":11,"definitionId":111}',
                    name: '192.168.232.120(ms)',
                    y: 11.808146756233507,
                },
                {
                    id: '{"resourceId":12,"definitionId":111}',
                    name: '192.168.230.22(ms)',
                    y: 11.699056474515432,
                },
                {
                    id: '{"resourceId":13,"definitionId":111}',
                    name: '192.168.232.58(ms)',
                    y: 12.862873604391213,
                },
                {
                    id: '{"resourceId":14,"definitionId":111}',
                    name: '192.168.0.90(ms)',
                    y: 0.744667025792742,
                },
                {
                    id: '{"resourceId":15,"definitionId":111}',
                    name: '192.168.232.52(ms)',
                    y: 13.273723334466567,
                },
                {
                    id: '{"resourceId":16,"definitionId":111}',
                    name: '192.168.232.53(ms)',
                    y: 12.66964648022097,
                },
                {
                    id: '{"resourceId":17,"definitionId":111}',
                    name: '192.168.0.100(ms)',
                    y: 0.7448707578232351,
                },
                {
                    id: '{"resourceId":18,"definitionId":111}',
                    name: '192.168.0.60(ms)',
                    y: 0.745090126373903,
                },
                {
                    id: '{"resourceId":19,"definitionId":111}',
                    name: '192.168.20.92(ms)',
                    y: 2.310430873140135,
                },
                {
                    id: '{"resourceId":20,"definitionId":111}',
                    name: '192.168.232.30(ms)',
                    y: 12.102046499403084,
                },
            ],
        },
    ],
    subtitle: {
        text: null,
    },
    title: {
        text: null,
    },
    tooltip: {},
    xAxis: {
        events: {},
        tickInterval: null,
    },
    yAxis: {
        minRange: 1,
        stackLabels: {
            enabled: false,
            style: {
                color: 'gray',
                fontWeight: 'bold',
            },
        },
        title: {
            text: '',
        },
    },
};
