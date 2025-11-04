import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

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
      label: 'Data1',
      data: [31, 11, 25, 21, 10, 15, 25, 24, 36, 25, 28, 20],
      borderColor: ' rgb(98, 58, 162,0.3 )',
      borderWidth: 2,
      backgroundColor: ' rgb(98, 58, 162,0.3 )',
      tension: 0.5,
      fill: 'origin',
    },
    {
      label: 'Data2',
      data: [11, 29, 10, 21, 13, 16, 27, 19, 22, 24, 29, 14],
      borderColor: 'rgba(246, 107, 78, 0.3)',
      borderWidth: 2,
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

//Line Charts
export let lineChartOptions: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: true,
      labels: {
      
      },
    },
  },
  scales: {
    y: {
      ticks: {
       
        color: 'rgba(171, 167, 167,0.9)',
      },
      grid: {
        display: true,
        color: 'rgba(171, 167, 167,0.2)',
        
      },
    },
    x: {
      ticks: {
        // beginAtZero: true,
        // fontSize: 11,
        color: 'rgba(171, 167, 167,0.9)',
      },
      grid: {
        display: true,
        color: 'rgba(171, 167, 167,0.2)',
        
      },
    },
  },
};

export let lineChartType: ChartType = 'line';
export let lineChartLegend = false;
export let lineChartData: ChartConfiguration['data'] = {
  datasets: [
    {
      data: [10, 20, 25, 20, 30, 27, 35, 30 ],
      borderColor: '#623AA2',
      borderWidth: 4,
      fill: false,
      tension: 0.4,
      label: 'Profit',
    },
  ],
  labels: [
    'Sun',
    'Mon',
    'Teu',
    'Wed',
    'Thu',
    'Fry',
    'Sat',
    'Sun',
   
  ],
};

//STACKED BAR CHART (Vertical)
export let barChart2Options: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
  },
  scales: {
    y: {
      stacked: true,
      ticks: {
        color: 'rgba(171, 167, 167,0.9)',
      },
      grid: {
        display: true,
        color: 'rgba(171, 167, 167,0.2)',
      },
    },
    x: {
      stacked: true,
      ticks: {
        color: 'rgba(171, 167, 167,0.9)',
      },
      grid: {
        display: true,
        color: 'rgba(171, 167, 167,0.2)',
      },
    },
  },
};
export let barChart2Type: ChartType = 'bar';
export let barChart2Legend = true;

export let barChart2Data: ChartConfiguration['data'] = {
  datasets: [
    {
      label: 'bar1',
      data: [10, 24, 20, 25, 35, 50],
      backgroundColor: '#b1b9f3',
      borderWidth: 1,
      fill: true,
      barPercentage: 0.5,
      borderColor: '#b1b9f3',
      hoverBackgroundColor: '#b1b9ee',
    },
    {
      label: 'bar2',
      data: [10, 24, 20, 25, 35, 50],
      backgroundColor: '#6d7ce4',
      borderWidth: 1,
      fill: true,
      barPercentage: 0.5,
      borderColor: '#6d7ce4',
      hoverBackgroundColor: '#6d7cb3',
    },
    {
      label: 'bar3',
      data: [20, 30, 28, 33, 45, 65],
      backgroundColor: '#4454c3',
      borderWidth: 1,
      fill: true,
      barPercentage: 0.5,
      borderColor: '#4454c3',
      hoverBackgroundColor: '#4454b0',
    },
  ],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
};

//DoughNut Chart and Pie chart data

export let PieChartData: ChartConfiguration['data'] = {
  datasets: [
    {
      data: [20, 20, 30, 5, 25],
      backgroundColor: ['#285cf7', '#f10075', '#8500ff', '#7987a1', '#74de00'],
    },
  ],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
};
export let PieChartOptions: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
  },
};
export let DoughnutChartType: ChartType = 'doughnut';
export let PieChartType: ChartType = 'pie';

//SOLID COLOR
export let solidColorChartOptions: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      ticks: {
        
        color: 'rgba(171, 167, 167,0.9)',
      },
      grid: {
        display: true,
        color: 'rgba(171, 167, 167,0.2)',
       
      },
    },
    x: {
      ticks: {
      
        color: 'rgba(171, 167, 167,0.9)',
      },
      grid: {
        display: true,
        color: 'rgba(171, 167, 167,0.2)',
      
      },
    },
  },
};
export let solidColorLegend = true;
export let solidColorChartType: ChartType = 'bar';
export let solidColorChartData: ChartConfiguration['data'] = {
  datasets: [
    {
      label: 'Data1',
      data: [12, 39, 20, 10, 25, 18],
      barPercentage: 0.6,
      borderColor: ' #623AA2',
    },
    {
      label: 'Data2',
      data: [12, 39, 20, 10, 25, 18],
      barPercentage: 0.6,
      borderColor: ' rgb(98, 58, 162,0.3 )',
    },
  ],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
};

//SOLID COLOR
export let solidColorChartOptions1: ChartConfiguration['options'] = {

  maintainAspectRatio: false,
  responsive: true,
  plugins:{
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      ticks: {
        
        color: "rgba(171, 167, 167,0.9)",
      },
      grid: {
        display: true,
        color: 'rgba(171, 167, 167,0.2)',
       
      },
    },
    x: {
      ticks: {
      
        color: "rgba(171, 167, 167,0.9)",
      },
      grid: {
        display: true,
        color: 'rgba(171, 167, 167,0.2)',
       
      },
    }
  }

}
export let solidColorLegend1 = true;
export let solidColorChartType1: ChartType = 'bar';
export let solidColorChartData1: ChartConfiguration['data'] = {datasets:[{
  label: 'Sales',
  data: [12, 39, 20, 10, 25, 18],
  barPercentage: 0.6
    
}],
labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
}

export let polarAreaChartLabels: string[] = [
  'Download Sales',
  'In-Store Sales',
  'Mail Sales',
  'Telesales',
  'Corporate Sales',
];
export let polarAreaChartData: ChartData<'polarArea'> = {
  labels: polarAreaChartLabels,
  datasets: [
    {
      data: [300, 500, 100, 40, 120],
      label: 'Series',
    },
  ],
};
export let polarAreaLegend = true;
export let polarChartOptions: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};
export let polarAreaChartType: ChartType = 'polarArea';

export const radarChartOptions: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  responsive: true,
};
export const radarChartLabels: string[] = [
  'Eating',
  'Drinking',
  'Sleeping',
  'Designing',
  'Coding',
  'Cycling',
  'Running',
];

export const radarChartData: ChartData<'radar'> = {
  labels: radarChartLabels,
  datasets: [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Data 1' ,},
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Data 2' },
    
  ],
};
export const radarChartType: ChartType = 'radar';

