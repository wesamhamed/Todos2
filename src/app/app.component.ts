import { Component } from "@angular/core";
class Task {
  constructor(
    private _id: number,
    private _title: string,
    private _isDone: boolean
  ) {}
  get id() {
    return this._id;
  }
  set id(id: number) {
    this._id = id;
  }
  get title() {
    return this._title;
  }
  set title(title: string) {
    this._title = title;
  }
  get isDone() {
    return this._isDone;
  }
  set isDone(done: boolean) {
    this._isDone = done;
  }
}
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title;
  // tasks: Task[] = [
  //   new Task(1, "task 1", false),
  //   new Task(2, "task 2", false),
  //   new Task(3, "task 3", true)
  // ];
  tasks: Task[] = [];
  add() {
    this.tasks.push(new Task(this.tasks.length, this.title, false));
    // console.log(this.tasks);
    this.title = "";
  }
  remove(id) {
    const tasks = this.tasks.filter(task => {
      return task.id !== id;
    });
    this.tasks = tasks;
  }
  isDone(id) {
    this.tasks.filter(task => {
      if (task.id === id) {
        task.isDone = !task.isDone;
      }
    });
  }
}
