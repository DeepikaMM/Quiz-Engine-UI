import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
//import { Input } from '@angular/core/src/metadata/directives';
import { QuestionDirective} from '../question.directive';
import { AdComponents } from '../adComponent';
import { QuestionModel } from '../questionModule';
import { PlayerService } from '../player.service';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() questionComponents: AdComponents[];
  @ViewChild(QuestionDirective) questionHost: QuestionDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver,private playerService: PlayerService) { }

  ngOnInit() {
    //this.loadComponent();
   // this.playerService.getComponents();
   this.playerService.getQuestionStream().subscribe(question => this.question = question);
  }
  question : any;
  count: number = 0;
  getNextQuestion() {
    this.question =  this.playerService.getNextQuestion();
    console.log("question banthu"+ this.question);
    this.loadComponent();
  }
  loadComponent() {

    console.log("printiing question compoennt"+this.questionComponents);
    let adItem = this.questionComponents[this.count];
    this.count++;
    console.log("inside load component" + adItem.component);
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    let viewContainerRef = this.questionHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponents>componentRef.instance).data = this.question;
  }


}
