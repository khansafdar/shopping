const  Sequelize = require('sequelize')

const db = new Sequelize({
  dialect: 'sqlite',
  storage: __dirname + '/shopdb.db',
  host:'', 
  username:'',
  password:'',
  database:''
})

const Users = db.define('user', {
  username: {
    type: Sequelize.STRING(30),
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING(30),
  },
  email: {
    type: Sequelize.STRING(30)
  },
  fbToken: {
    type: Sequelize.TEXT
  },
  fbId: {
    type: Sequelize.STRING(30),
    unique: true
  }
})
const Product=db.define('products',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    
    },
    name:{
      type:Sequelize.STRING,
      allowNull:false
    },

    manufacturer:{
        type:Sequelize.STRING
    },
    price:{
        type:Sequelize.FLOAT,
        allowNull:false,
        defaultValue:0.0
    }
})
const Cart=db.define('carts',{
  id:{
      type:Sequelize.INTEGER,
      autoIncrement:true,
      primaryKey:true
  
  },
  name:{
      type:Sequelize.STRING,
      allowNull:false
    },

  manufacturer:{
      type:Sequelize.STRING
  },
  price:{
      type:Sequelize.FLOAT,
      allowNull:false,
      defaultValue:0.0
  }
})
db.sync()
.then(()=>console.log("database has been crated"))
.catch((err)=>console.log("error creating database"))

module.exports = {
  db, Users,Product,Cart
}