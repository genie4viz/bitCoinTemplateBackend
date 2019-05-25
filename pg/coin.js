const { Pool } = require('pg')
const config = require('../config');

const pool = new Pool({
  connectionString: config.POSTGRES_URI,
})

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

exports.list = (req, res) => {

  pool.connect((err, client, done) => {
    if (err) throw err
    client.query('SELECT coin_id, coin_title, coin_symbol, full_name FROM cc_coins', (err, result) => {
      done()

      if (err) {
        return res.status(500).json({
          error: err.stack
        });
      } else {
        return res.status(200).json(result.rows);
      }
    })
  })
}

exports.show = (req, res) => {

  pool.connect((err, client, done) => {
    if (err) throw err
    client.query('SELECT coin_id, coin_title, coin_symbol, full_name FROM cc_coins WHERE coin_id = $1', [req.params.id], (err, result) => {
      done()

      if (err) {
        return res.status(500).json({
          error: err.stack
        });
      } else {
        return res.status(200).json(result.rows[0]);
      }
    })
  })
}
