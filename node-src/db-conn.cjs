var pg = require('pg')
const { Pool } = pg
 
// May be smarter to use client here, but client is only required for transactions. This should suffice
const pool = new Pool({
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'bags'
})
 
async function getData() {
    const res = await pool.query('SELECT * FROM player')
    console.log("Got data")
    console.log('user:', res.rows)
}

async function addPlayer(playerName) {
    console.log("Add player: ", playerName)
    const text = "INSERT INTO player(name) VALUES($1) RETURNING *"
    const val = [playerName]
    const res = await pool.query(text, val)
    console.log("done", res.rows)
}

addPlayer('Curran')
addPlayer('Tyler')
addPlayer('Denny')
addPlayer('Justin')
getData()