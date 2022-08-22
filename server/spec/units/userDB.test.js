import mongoose from "mongoose";
import User from '../../models/user.js'

require('../mongodb_helper');

describe('User model', () => {
  let user;

  beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
      done();
    });
    user = new User({
      userName: 'Bob',
      email: 'bob@test.com',
      password: 'guest',
      kitchen: []
    });
  });

  it('has a username', () => {
    expect(user.userName).toBe('Bob')
  })
  it('has an email', () => {
    expect(user.email).toBe('bob@test.com')
  })
  it('has a kitchen', () => {
    expect(user.kitchen).toEqual([])
  })
  it('has a password', () => {
    expect(user.password).not.toBe("")
  })
  it('has an id', () => {
    expect(user._id).not.toBe(null)
  })
  it('can save a user', (done) => {
    user.save((err) => {
      expect(err).toBeNull();

      User.find((error, testusers) => {
        expect(error).toBeNull();
  
        expect(testusers[0].userName).toBe("Bob");
      })

      done();
    });
  })
})