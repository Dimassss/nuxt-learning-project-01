import {AuthUser} from '@/assets/js/model/AuthUser';

export function fillData(store){
  const user = new AuthUser({
    firstName: 'Антон',
    lastName: 'Фокин',
    email: 'fokan15@mail.ru',
    telephone: '8-920-777-77-77',
    birthDate: '14.05.1996',
    club: 'Wegym Барклая'
  });

  store().commit('auth/setUser', user);
}
