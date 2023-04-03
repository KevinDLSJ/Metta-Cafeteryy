const bcrypt = require('bcrypt');


function index(req, res) {
    req.getConnection((err, conn) => {
      conn.query('SELECT * FROM product', (err, pers) => {
        if(err) {
          res.json(err);
        }
        console.log("--------",pers)
        res.render('pages/personal', { pers });
      });
    });
  }
  
  function create(req, res) {
  
    res.render('pages/create');
  }
  
  function store(req, res) {
    const data=req.body;
    
          //bcrypt.hash(data.password, 12).then(hash => {
            //console.log(hash);
            //data.password=hash;
            //console.log(data);
            req.getConnection((err,conn) => {
                conn.query('INSERT INTO product SET ?',[data], (err,rows) => {
                  res.redirect('/pers'); 
                });
            });
        
          //});
}
  
  function destroy(req, res) {
    const id_producto = req.body.id;
    
    req.getConnection((err, conn) => {
      conn.query('DELETE FROM product WHERE id_producto = ?', [id_producto], (err, rows) => {
        res.redirect('/pers');
       });
   })
 
 }
  
  function edit(req, res) {
    const id_producto = req.params.id;

    req.getConnection((err, conn) => {
     conn.query('SELECT * FROM product WHERE id_producto = ?', [id_producto], (err, pers) => {
        if(err) {
          res.json(err);
        }
        res.render('pages/edit', { pers });
      });
    });
  }
  
  function update(req, res) {
    const id_producto = req.params.id;
    const data = req.body;

    //bcrypt.hash(data.password, 12).then(hash => {
      //console.log(hash);
      //data.password=hash;
  
    req.getConnection((err, conn) => {
      conn.query('UPDATE product SET ? WHERE id_producto = ?', [data, id_producto], (err, rows) => {
        if(err) {
            res.json(err);
        }
        res.redirect('/pers');
      });
    });
   //});
  }
  
  
  module.exports = {
    index: index,
    create: create,
    store: store,
    destroy: destroy,
    edit: edit,
    update: update,
  }