const knex = require('knex')
const db = knex({
    client: 'pg',
    connection: {
      host : 'mouse.db.elephantsql.com',
      port : 5432,
      user : 'ptgrnxux',
      password : 'mQmKkCLBgvkygDrEEGdNoiPfUgCtY6nt',
      database : 'ptgrnxux'
    }
  });

  db.raw('SELECT * FROM products')
  .then(res => console.log(res.rows))
  .catch(e => console.log(e));

  db.select('name', 'price')
  .from('products')
  .then(res => console.log(res))
  .catch(e => console.log(e));

  db('products')
  .select('name', 'price')
  .where({id:4}) // .where(id,2)
//   .andWhere()
//   .orWhere() 
  .then(res => console.log(res))
  .catch(e => console.log(e));