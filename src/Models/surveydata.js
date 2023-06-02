const db=require('../utils/db');
module.exports = class surveydata {
  constructor(id, data) {
    this.id = id;
    this.data = data;
  }

  save() {
    const sql = 'INSERT INTO feedback (id, data) VALUES (?, ?)';
     return db.execute(sql,this.id,this.data);
  }

  static deleteById(id) {
    const sql ="DELETE FROM table_name WHERE id = ?"
    return db.execute(sql,[id]);
  }

  static fetchqs() {
     return db.execute("SELECT * FROM qs_table");
  }

  static addnewqs(qs) {
     return db.execute("Insert into qs_table(question) VALUES(?)",qs);
}
};
