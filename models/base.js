// const knex = require("./knex");
const config = require('../knexfile');
const knex = require('knex')(config);

class Base {
  constructor(props) {
    this.table = props;
  }
  all() {
    return knex.select().table(this.table);
  }
  select(params) {
    return knex(this.table).select().where(params)
  }
  insert(params) {
    return knex(this.table).insert(params);
  }
  update(id, params) {
    return knex(this.table).where("id", "=", id).update(params);
  }
  delete(id) {
    return knex(this.table).where("id", "=", id).del();
  }
}

module.exports = Base;
