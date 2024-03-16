const pool = require("./database");

const getThings = (req, res) => {
  let lastName = req.params.lastname;
  let city = req.params.city;
  lastName = lastName[0].toUpperCase() + lastName.slice(1);
  city = city[0].toUpperCase() + city.slice(1);
  console.log(lastName, city);
  const queryText = `SELECT r.title, r.label, r.genre, r.rrp, COUNT(rc.copyID) AS copies_available FROM record AS r JOIN recordcopy AS rc ON r.recordID = rc.recordID JOIN recordshop AS rs ON rc.recordshopID = rs.recordshopID JOIN artist AS a ON r.artistID = a.artistID WHERE a.lastname = '${lastName}' AND rs.city = '${city}' GROUP BY r.title, r.label, r.genre, r.rrp;`;
  pool.query(queryText, (err, results) => {
    if (err) {
      console.log(err);
    }
    res.status(200).json(results.rows);
  });
};

module.exports = getThings;
