import { HubConnectionBuilder, HubConnection } from '@aspnet/signalr';
import { Injectable, EventEmitter } from '@angular/core';
import { McqComponent }  from './mcq/mcq.component';

import { AdComponents} from './adComponent';
import { QuestionModel } from './questionModule';
import { FillInTheBlanksComponent } from './fill-in-the-blanks/fill-in-the-blanks.component';
import { Subject } from 'rxjs';

@Injectable()
export class PlayerService {
  private _connection: HubConnection;
  private _question: Subject<any>;
  constructor()
  {
    this._question = new Subject();
    this._connection = new HubConnectionBuilder().withUrl("http://172.23.238.237:8050/question").build();
    this._connection.on('NextQuestion', this.onNextQuestionHandler.bind(this));
    this._connection.on('EndOfQuestions', this.onEndOfQuestionHandler);
    this._connection.start().then(() => console.log('MessageHub Connected'));
  }

  getQuestionStream() {
    return this._question;
  }

  getNextQuestion() {
    return this._connection.invoke('GetNextQuestion');
  }

  onNextQuestionHandler(nextQuestion) {
    console.log(this);
    return this._question.next(nextQuestion);
  }

  onEndOfQuestionHandler() {
    console.log("Received End of Questions");
  }
  getComponents() {
  //  var q : QuestionModel;

  //   q.Quesid = 9;

  //   q.QuestionText = "where is INdia";

    return [
      new AdComponents(McqComponent, "hello man"),
      new AdComponents(FillInTheBlanksComponent,"heelosddc")
    ];
  }
}

