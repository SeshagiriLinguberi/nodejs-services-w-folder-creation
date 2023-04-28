const mySql= require("mysql");
const conn = mySql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"practice_project1",
    multipleStatements:true
});
conn.getConnection((err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("successfully connected to  database");
    }
});
module.exports=conn;