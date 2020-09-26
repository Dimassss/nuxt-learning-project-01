import {Model} from './Model';

export class AuthUser extends Model{
  constructor({
    id,
    avatar = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsociology.columbia.edu%2Fcontent%2Fma-students&psig=AOvVaw3a2hrhmbDkF8uMW4YzUy_p&ust=1601214064994000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjdmrP5huwCFQAAAAAdAAAAABAO',
    firstName,
    lastName,
    email,
    telephone,
    birthDate,
    club,
  }){
    super({id});

    this.avatar = avatar;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.telephone = telephone;
    this.birthDate = birthDate;
    this.club = club;
  }
}
