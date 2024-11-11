var mysql = require('mysql');

var DatabaseConnectionConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "school"
}

var con = mysql.createConnection(DatabaseConnectionConfig);

con.connect(function (error) {
  if (error) {
    console.log("Connection Fail")
  }
  else {
    console.log("Connection Success")
    // InsertData(con);
    // DeleteDataByID(con);
    // UpdateData(con);
    SelectData(con);
  }
});

function InsertData(con) {
  let SQLQuery = "INSERT INTO `student_list`(`name`, `roll`, `class`, `phone`, `city`) VALUES ('Rabbil', '01', 'Ten', '01700000000', 'Dhaka')";
  con.query(SQLQuery, function (error) {
    if (error) {
      console.log("Data insert fail");
    }
    else {
      console.log("Data insert success")
    }
  })
}

function DeleteDataByID(con) {
  let SQLQuery = "DELETE FROM `student_list` WHERE `roll`=`01`";
  con.query(SQLQuery, function (error) {
    if (error) {
      console.log("Data Delete fail");
    }
    else {
      console.log("Data Delete Success");
    }
  })
}

function UpdateData(con) {
  let SQLQuery = "UPDATE `student_list` SET `phone`='111111', `city`='Rangpur' WHERE `id`='2'";
  con.query(SQLQuery, function (error) {
    if (error) {
      console.log('Data update fail')
    }
    else {
      console.log('Data update success')
    }
  })
}

function SelectData(con) {
  let SQLQuery = "SELECT * FROM `student_list`";
  con.query(SQLQuery, function (error, result) {
    if (error) {
      console.log("Data Select Fail")
    }
    else {
      console.log(result);
    }
  })
}