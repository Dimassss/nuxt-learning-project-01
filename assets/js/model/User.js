import {Model} from './Model';

export class User extends Model{
  constructor({
    id,
    name,
    birthday,
    photo,
    createDate,
    lastVisit,
    status,
    isGymMember,
    email,
    phone,
    sex,
    club,
    cardDate
  }){
    super({id});

    this.name = name;
    this.birthday = birthday;
    this.photo = photo;
    this.createDate = createDate;
    this.lastVisit = lastVisit;
    this.status = status;
    this.isGymMember = isGymMember;
    this.email = email;
    this.phone = phone;
    this.sex = sex;
    this.club = club;
    this.cardDate = cardDate;
  }
}
