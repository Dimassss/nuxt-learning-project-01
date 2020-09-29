import { User } from '@/assets/js/model/User';
import { Order } from '@/assets/js/model/Order';


function updateOrAddRecord(records, record){
  if(record.id !== null && records.find(r => r.id == record.id || r == record)){
    records.forEach((r,i) => {
      if(record.id == r.id || r == record) records[i] = record;
    });
  }else{
    records.push(Object.assign({}, record));
  }

  return records;
}


export const state = () => ({
  users: [],
  orders: [],
  newslatters: [],
  coaches: []
});

export const mutations = {
  updateOrAddUser(state, user){
    let records = JSON.parse(JSON.stringify(state.users));
    state.users = updateOrAddRecord(records, user);
  },
  updateOrAddOrder(state, order){
    let records = JSON.parse(JSON.stringify(state.orders));
    state.orders = updateOrAddRecord(records, order);
  },
  updateOrAddNewslatter(state, newslatter){
    let records = JSON.parse(JSON.stringify(state.newslatters));
    state.newslatters = updateOrAddRecord(records, newslatter);
  },
  updateOrAddCoach(state, coach){
    let records = JSON.parse(JSON.stringify(state.coaches));
    state.coaches = updateOrAddRecord(records, coach);
  },
  deleteUsers(state, filters){
    state.users
      = state.users
        .map(u => {
          for(let field in filters)
            if(filters[field] !== u[field])
              return u;

          return null;
        })
        .filter(u => !!u);
  }
};

export const getters = {
  user: state => filters =>{
    if(Object.keys(filters).length) throw Exception('no filters was given');

    let nullUsers = [];
    const user = state.users.find((user, i) => {
      if(!user){
        nullUsers.push(i);
      }else{
          for(let field in filters)
            if(filters[field] !== user[field])
              return false;

          return true;
      }

      return false;
    });

    return new User(user);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  getters
};
