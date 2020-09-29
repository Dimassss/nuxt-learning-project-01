import {Model} from './Model';

export class Order extends Model{
  constructor({
    id,
    date,
    time,
    name,
    paid,
    status
  }){
    super({id});

    this.date = date;
    this.time = time;
    this.name = name;
    this.paid = paid;
    this.status = status;
  }
}
