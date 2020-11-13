export class Todo {
  constructor(
    public id = 0,
    public name = '',
    public content = ''
  ) {
    this.id = id;
    this.name = name;
    this.content = content;
  }
}
