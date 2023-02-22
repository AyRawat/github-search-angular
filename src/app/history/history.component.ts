import { Component,OnInit ,Input,DoCheck} from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})

export class HistoryComponent implements OnInit ,DoCheck{
   HISTORY_KEY:string = 'searchHistory';
  history: string[] = JSON.parse(localStorage.getItem(this.HISTORY_KEY) as string) || [];
  constructor() { }
  @Input() username:any;
  addToHistory(searchQuery: string) {
    this.history.unshift(searchQuery);
    localStorage.setItem(this.HISTORY_KEY, JSON.stringify(this.history));
  }

  clearHistory(index: number) {
    this.history.splice(index, 1);
    localStorage.setItem(this.HISTORY_KEY, JSON.stringify(this.history));
  }
  getHistory(){
    localStorage.getItem
  }
  refresh(){
    console.log(this.username);
 //   this.addToHistory(this.username);
  }
  ngDoCheck(){
    this.refresh();
  }
  ngOnInit(): void {
    this.refresh();
  }
}
