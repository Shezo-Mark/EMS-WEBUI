import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import * as moment from 'moment';

//Area Charts

export let AreaChartOptions: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  responsive: true,

  scales: {
    x: {
      ticks: {
        color: '#77778e',
      },
      grid: {
        color: 'rgba(119,119,142, 0.2)',
      },
    },
    y: {
      ticks: {
        color: '#77778e',
      },
      grid: {
        color: 'rgba(119,119,142, 0.2)',
      },
    },
  },
  plugins: {
    tooltip: {
      mode: 'index',
      intersect: false,
    },
    legend: {
      labels: {
        color: '#77778e',
      },
    },
  },
};
export let AreaChartType: ChartType = 'line';
export let AreaChartData: ChartConfiguration['data'] = {
  datasets: [
    {
      label: 'Amount Used(Mins) ',
      data: [31, 11, 25, 22, 12, 19, 18, 24, 15, 25, 28, 20],
      borderColor: ' rgb(98, 58, 162,0.5 )',
      borderWidth: 4,
      backgroundColor: ' rgb(98, 58, 162,0.3 )',
      tension: 0.5,
      fill: 'origin',
    },
    {
      label: 'Total Budgets Per Session ',
      data: [11, 29, 10, 28, 13, 18, 21, 19, 23, 24, 29, 14],
      borderColor: 'rgba(246, 107, 78, 0.5)',
      borderWidth: 4,
      backgroundColor: 'rgba(246, 107, 78, 0.3)',
      tension: 0.5,
      fill: 'origin',
    },
  ],
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'July ',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
};
export let StackedBarData: any = {
  series: [
    {
      name: 'Amount Used',
      data: [44, 55, 41, 37, 22, 43, 21,32,54,41,54,30],
    },
    {
      name: 'Total Budgets',
      data: [23, 22, 23, 22, 13, 13, 12,30,51,42,37,51],
    },
  ],
  colors: ['rgba(98, 58, 162, 0.85)', 'rgba(251, 141, 52, 0.85)'],
  chart: {
    type: 'bar',
    height: 400,
    stacked: true,
  },
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  stroke: {
    width: 0.1,
    colors: ['#fff'],
  },
  xaxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'July ',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
  },
  yaxis: {
    title: {
      text: undefined,
    },
  },
  tooltip: {
    y: {
      formatter: function (val: any) {
        return val + '';
      },
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    show: false,
    horizontalAlign: 'left',
    offsetX: 40,
  },
};
export let RadialBarCircleMultipleData: any = {
  pieseries: [55],
  chart: {
    height: 250,
    type: 'radialBar',
  },
  colors: ['#6f42c1'],
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: '22px',
        },
        value: {
          fontSize: '18px',
        },
        total: {
          show: true,
          label: 'Sales',
          color:'#6f42c1',
          formatter: function (w: any) {
            return '70%';
          },
        },
      },
    },
  },
};
export let StackedBarData1: any = {
  series: [
    {
      name: 'Series-1',
      data: [44, 55, 41, 37, 22, 43, 21, 32, 54, 41, 54, 30],
    },
  
  ],
  colors: ['rgba(98, 58, 162, 0.85)'],
  chart: {
    type: 'bar',
    height: 300,
    stacked: true,
  },
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  stroke: {
    width: 0.1,
    colors: ['#fff'],
  },
  xaxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'July ',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
   
  },
  yaxis: {
   
  },
  tooltip: {
    y: {
      formatter: function (val: any) {
        return val;
      },
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    show: false,
    position: 'top',
    horizontalAlign: 'left',
    offsetX: 40,
  },
};
export let ApexChartData2: any = {
  series: [
    {
      name: 'candle',
      data: [
        {
          x: new Date(1538778600000),
          y: [6629.81, 6650.5, 6623.04, 6633.33],
        },
        {
          x: new Date(1538780400000),
          y: [6632.01, 6643.59, 6620, 6630.11],
        },
        {
          x: new Date(1538782200000),
          y: [6630.71, 6648.95, 6623.34, 6635.65],
        },
        {
          x: new Date(1538784000000),
          y: [6635.65, 6651, 6629.67, 6638.24],
        },
        {
          x: new Date(1538785800000),
          y: [6638.24, 6640, 6620, 6624.47],
        },
        {
          x: new Date(1538787600000),
          y: [6624.53, 6636.03, 6621.68, 6624.31],
        },
        {
          x: new Date(1538789400000),
          y: [6624.61, 6632.2, 6617, 6626.02],
        },
        {
          x: new Date(1538791200000),
          y: [6627, 6627.62, 6584.22, 6603.02],
        },
        {
          x: new Date(1538793000000),
          y: [6605, 6608.03, 6598.95, 6604.01],
        },
        {
          x: new Date(1538794800000),
          y: [6604.5, 6614.4, 6602.26, 6608.02],
        },
        {
          x: new Date(1538796600000),
          y: [6608.02, 6610.68, 6601.99, 6608.91],
        },
        {
          x: new Date(1538798400000),
          y: [6608.91, 6618.99, 6608.01, 6612],
        },
        {
          x: new Date(1538800200000),
          y: [6612, 6615.13, 6605.09, 6612],
        },
        {
          x: new Date(1538802000000),
          y: [6612, 6624.12, 6608.43, 6622.95],
        },
        {
          x: new Date(1538803800000),
          y: [6623.91, 6623.91, 6615, 6615.67],
        },
        {
          x: new Date(1538805600000),
          y: [6618.69, 6618.74, 6610, 6610.4],
        },
        {
          x: new Date(1538807400000),
          y: [6611, 6622.78, 6610.4, 6614.9],
        },
        {
          x: new Date(1538809200000),
          y: [6614.9, 6626.2, 6613.33, 6623.45],
        },
        {
          x: new Date(1538811000000),
          y: [6623.48, 6627, 6618.38, 6620.35],
        },
        {
          x: new Date(1538812800000),
          y: [6619.43, 6620.35, 6610.05, 6615.53],
        },
        {
          x: new Date(1538814600000),
          y: [6615.53, 6617.93, 6610, 6615.19],
        },
        {
          x: new Date(1538816400000),
          y: [6615.19, 6621.6, 6608.2, 6620],
        },
        {
          x: new Date(1538818200000),
          y: [6619.54, 6625.17, 6614.15, 6620],
        },
        {
          x: new Date(1538820000000),
          y: [6620.33, 6634.15, 6617.24, 6624.61],
        },
        {
          x: new Date(1538821800000),
          y: [6625.95, 6626, 6611.66, 6617.58],
        },
        {
          x: new Date(1538823600000),
          y: [6619, 6625.97, 6595.27, 6598.86],
        },
        {
          x: new Date(1538825400000),
          y: [6598.86, 6598.88, 6570, 6587.16],
        },
        {
          x: new Date(1538827200000),
          y: [6588.86, 6600, 6580, 6593.4],
        },
        {
          x: new Date(1538829000000),
          y: [6593.99, 6598.89, 6585, 6587.81],
        },
        {
          x: new Date(1538830800000),
          y: [6587.81, 6592.73, 6567.14, 6578],
        },
        {
          x: new Date(1538832600000),
          y: [6578.35, 6581.72, 6567.39, 6579],
        },
        {
          x: new Date(1538834400000),
          y: [6579.38, 6580.92, 6566.77, 6575.96],
        },
        {
          x: new Date(1538836200000),
          y: [6575.96, 6589, 6571.77, 6588.92],
        },
        {
          x: new Date(1538838000000),
          y: [6588.92, 6594, 6577.55, 6589.22],
        },
        {
          x: new Date(1538839800000),
          y: [6589.3, 6598.89, 6589.1, 6596.08],
        },
        {
          x: new Date(1538841600000),
          y: [6597.5, 6600, 6588.39, 6596.25],
        },
        {
          x: new Date(1538843400000),
          y: [6598.03, 6600, 6588.73, 6595.97],
        },
        {
          x: new Date(1538845200000),
          y: [6595.97, 6602.01, 6588.17, 6602],
        },
        {
          x: new Date(1538847000000),
          y: [6602, 6607, 6596.51, 6599.95],
        },
      
       
      ],
    },
  ],
 colors: ['rgba(98, 58, 162, 0.85)', 'rgba(251, 141, 52, 0.85)'],
  chart: {
    height: 400,
    type: 'candlestick',
  },
  title: {
    text: 'CandleStick Chart - Category X-axis',
    align: 'left',
  },
  tooltip: {
    enabled: true,
  },
  xaxis: {
    type: 'category',
    labels: {
      formatter: function (val: moment.MomentInput) {
        return moment(val).format('HH:mm');
      },
    },
  },
  yaxis: {
    tooltip: {
      enabled: true,
    },
  },
};

export let StackedBarData3: any = {
  series: [
    {
      name: 'Sales',
      type: 'column',
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 316],
    },
    {
      name: 'Profit',
      type: 'line',
      data: [223, 342, 635, 300, 550, 200, 370, 431, 220, 220, 582, 316],
    },
  ],
  colors: ['rgba(98, 58, 162, 0.85)', 'rgba(251, 141, 52, 0.85)'],
  chart: {
    height: 370,
    type: 'line',
  },
  stroke: {
    width: [0, 3],
  },

  dataLabels: {
    enabled: true,
    enabledOnSeries: [1],
  },
  labels: [
    '01 Jan ',
    '02 Jan ',
    '03 Jan ',
    '04 Jan ',
    '05 Jan ',
    '06 Jan ',
    '07 Jan ',
    '08 Jan ',
    '09 Jan ',
    '10 Jan ',
    '11 Jan ',
    '12 Jan ',
  ],
  xaxis: {
    categories: [
      '01 Jan ',
      '02 Jan ',
      '03 Jan ',
      '04 Jan ',
      '05 Jan ',
      '06 Jan ',
      '07 Jan ',
      '08 Jan ',
      '09 Jan ',
      '10 Jan ',
      '11 Jan ',
      '12 Jan ',
    ],
    labels: {
      formatter: function (val: any) {
        return val + 'K';
      },
    },
  },
  yaxis: {
    title: {
      text: undefined,
    },
  },
  tooltip: {
    y: {
      formatter: function (val: any) {
        return val + 'K';
      },
    },
  },
  fill: {
    opacity: 5,
  },
};
