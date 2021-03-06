const db = require('../models');

module.exports = app => {
  // CREATE a new crypto
  app.post('/api/crypto', (req, res) => {
    db.Crypto.create(req.body).then(dbCrypto => {
      res.json(dbCrypto);
    });
  });

  // READ all cryptos
  app.get('/api/crypto', (req, res) => {
    db.Crypto.findAll({
      date: req.body.date,
      transaction: req.body.transaction,
      name: req.body.name,
      symbol: req.body.symbol,
      price: req.body.price,
      quantity: req.body.quantity,
    }).then(dbCrypto => {
      res.json(dbCrypto);
    });
  });

  // UPDATE a crypto by id
  app.put('/api/crypto/:id', (req, res) => {
    db.Crypto.update(
      // Fix below
      {
        name: req.body.coin_name,
        symbol: req.body.coin_symbol,
        date: req.body.purch_date,
        price: req.body.purch_price,
        qty: req.body.purch_quantity,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    ).then(dbCrypto => {
      res.json(dbCrypto);
    });
  });

  // DELETE a crypto by id
  app.delete('/api/crypto/:id', (req, res) => {
    db.Crypto.destroy({
      where: {
        id: req.params.id,
      },
    }).then(dbCrypto => {
      res.json(dbCrypto);
    });
  });
};
