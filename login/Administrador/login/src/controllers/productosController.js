const bcrypt = require('bcrypt');


function indexp(req, res) {
    req.getConnection((err, conn) => {
      conn.query('SELECT * FROM product', (err, pers) => {
        if(err) {
          res.json(err);
        }
        console.log("--------",pers)
        res.render('pages/productos', { pers });
      });
    });
  }
  
  function create(req, res) {
  
    res.render('pages/createprod');
  }
  
  function store(req, res) {
    const data=req.body;
    
          //bcrypt.hash(data.password, 12).then(hash => {
            //console.log(hash);
            //data.password=hash;
            //console.log(data);
            req.getConnection((err,conn) => {
                conn.query('INSERT INTO product SET ?',[data], (err,rows) => {
                  res.redirect('/productos'); 
                });
            });
        
          //});
}
  
  function destroy(req, res) {
    const id_producto = req.body.id;
    
    req.getConnection((err, conn) => {
      conn.query('DELETE FROM product WHERE id_producto = ?', [id_producto], (err, rows) => {
        res.redirect('/productos');
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
        res.render('pages/editprod', { pers });
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
        res.redirect('/productos');
      });
    });
   //});
  }
  
  
  module.exports = {
    indexp: indexp,
    create: create,
    store: store,
    destroy: destroy,
    edit: edit,
    update: update,
  }