document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('container', {
      
        chart: {
            type: 'line',
          
        },
        title: {
            text: 'Report'
        },
        xAxis: {
            categories: ['Sales', 'Revenue', 'Customers'],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Values'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Metrics',
            data: [145, 3264, 1224]
        }]
    });
});
