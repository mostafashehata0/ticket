import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  chart: Chart | undefined;

  ngOnInit() {
    this.createLineChart();
  }

  createLineChart() {
    const canvas = document.getElementById(
      'lineChartCanvas'
    ) as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    this.chart = new Chart(ctx!, {
      type: 'line',
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August ',
          'September ',
          'October ',
          'November ',
          'December',
        ],
        datasets: [
          {
            label: 'Usage',
            data: [8, 9, 6, 5, 9, 8, 14, 16, 10, 7, 6, 8],
            fill: true,
            backgroundColor: 'rgba(138, 116, 249, 0.26)',
            borderColor: 'rgba(138, 116, 249, 1)',
            tension: 0.5,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        aspectRatio: 6.0453,
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              font: {
                size: 8, // set the font size for the x-axis labels
              },
            },
          },
          y: {
            display: true,
            ticks: {
              font: {
                size: 0, // set the font size for the y-axis labels
              },
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            backgroundColor: 'rgba(30, 27, 57, 1)',
            titleColor: 'white',
            bodyColor: 'rgba(229, 229, 239, 1)',
            displayColors: false,
            callbacks: {
              footer: (tooltipItems) => {
                return `1.3%`;
              },
            },
          },
        },
      },
    });
  }
}
