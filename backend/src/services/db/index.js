class DB {
  id;
  data;
  constructor(){
    this.id = 0;
    this.data = [];
  }

  insert(item){
    this.id++;
    this.data.push({ id: this.id, ...item });
  }

  getAll(){
    return this.data;
  }

  getById(id){
    if(typeof(id) == 'string')
      id = Number(id);
    return this.data.filter((item) => item.id == id)[0];
  }

  remove(id) {
    if(typeof(id) == 'string')
      id = Number(id);
    this.data = this.data.filter((item) => item.id != id)
  }

  update(id, task){
    if(typeof(id) == 'string')
      id = Number(id);
    this.data = this.data.map((item) => {
      if(item.id == id){
          return { ...item, ...task };
      }
      return item
  });
  }
}

const db = new DB();

module.exports = db;