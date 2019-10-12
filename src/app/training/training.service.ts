import { Subject } from 'rxjs/Subject';

import { Task } from './Task.model';

export class TrainingService {
  TaskChanged = new Subject<Task>();
  private Tasks: Task[] = [
  { id: '1234', desc: 'Crunches', status: 'Completed', assignedTo: 'Kishore' ,assignedBy:'RaviChand',view:'ViewDetails'},
  { id: '12345', desc: 'Create', status: 'Completed', assignedTo: 'Poojitha' ,assignedBy:'Senorita',view:'ViewDetails'}]

  getCompletedOrCancelledExercises() {
    return this.Tasks.slice();
  }
}
