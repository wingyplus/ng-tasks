export class Task {
  id: number;
  description: string;
  done: boolean;

  constructor(id: number, description: string, done: boolean) {
    this.id = id;
    this.description = description;
    this.done = done;
  }
}
