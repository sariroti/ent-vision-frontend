import { Component, OnInit, OnChanges } from '@angular/core';
import { ChartService } from '../services/chart.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
 
  data: any[];
  options: any;
  type: string;
  columnNames: string[];
  constructor(private chartService: ChartService) { }

  ngOnInit() {
    this.data = [['', 0]];
    this.type = 'LineChart';
    this.columnNames = ['Categories', 'Total Product'];
    this.options = {
      colors: ['#e0440e', '#e6693e'],
      title: 'Total Product by Category',
      is3D: true,
      curveType: 'function'
    };

    this.chartService.getTotalProductByCategories()
      .subscribe((data: any) => {
        for (const d of data) {
          this.data.push([d.Rows.m_Item1, d.Rows.m_Item2]);
        }
        console.log(this.data);
      });
  }


}
