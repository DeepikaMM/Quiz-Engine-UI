import { Component } from '@angular/core';
import { AdComponents } from './adComponent';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quize-Engine-UI';
  questionComponents: AdComponents[];

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.questionComponents = this.playerService.getComponents();
  }
}
