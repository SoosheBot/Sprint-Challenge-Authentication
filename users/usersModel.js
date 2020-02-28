const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
    return db('auth').select('id', 'username', 'password', 'department');
  }
  
  function findBy(filter) {
    return db('auth').select('id', 'username', 'password', 'department').where(filter);
  }

  function findById(id) {
    return db('auth')
      .where({ id })
      .first();
  }
  
 function add(user) {
    return db("auth")
    .insert(user)
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
  }
  
  