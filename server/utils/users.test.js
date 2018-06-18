const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mohamed',
      room: 'Sophomore'
    }, {
      id: '2',
      name: 'Ahmed',
      room: 'Junior'
    }, {
      id: '3',
      name: 'Nagy',
      room: 'Senior1'
    }, {
      id: '4',
      name: 'Wael',
      room: 'Senior1'
    }
  ];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Mohamed',
      room: 'Senior1'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(3);
  });

  it('should not remove user', () => {
    var userId = '55';
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(4);
  });

  it('should find user', () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    var userId = '55';
    var user = users.getUser(userId);

    expect(user).toNotExist();
  });

  it('should return names of Senior Students', () => {
    var userList = users.getUserList('Senior1');

    expect(userList).toEqual(['Nagy', 'Wael']);
  });

  it('should return names of Junior Students', () => {
    var userList = users.getUserList('Junior');

    expect(userList).toEqual(['Ahmed']);
  });
});
