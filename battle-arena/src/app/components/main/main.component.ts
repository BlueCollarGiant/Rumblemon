import { Component } from '@angular/core';
import { WinnerBoxComponent } from '../winner-box/winner-box.component';
import { HistoryContainerComponent } from '../history-container/history-container.component';
import { PlayerActiveListComponent } from '../player-active-list/player-active-list.component';
import { ComputerContainerComponent } from '../computer-container/computer-container.component';
import { HoldingContainerComponent } from '../holding-container/holding-container.component';

@Component({
  selector: 'app-main',
  imports: [HoldingContainerComponent,
      ComputerContainerComponent,
      PlayerActiveListComponent,
      HistoryContainerComponent,
      WinnerBoxComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
