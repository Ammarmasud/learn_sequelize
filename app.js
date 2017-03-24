require('dotenv').config()
const Sequelize = require('sequelize');

const connection = new Sequelize(
  'demo_schema',
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
     dialect: 'postgres'
  }
);

const Article = connection.define('article', {
  // title: Sequelize.STRING,
  // body: Sequelize.TEXT,
  title: {
    type: Sequelize.STRING,
    unique: true
  },
  body: {
    type: Sequelize.TEXT
    defaultValue: 'Coming soon...'
  }
})

connection.sync().then(() => {
  // Article.create({
  //   title: 'demo title',
  //   body: 'placeholder body.'
  // });
  // Article.findAll().then((articles)=>{
  //   console.log(articles.length);
  // });
  // Article.findById(1).then((article)=>{
  //   console.log(article.dataValues);
  // });


});