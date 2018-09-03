export class QuestionModel {
  public Quesid : number
  public QuestionText : string
  public Options : Option[]

}

class Option {
  public Opid : number;
  public OptionText : string;
}
