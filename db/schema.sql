  create DATABASE burgers_db;

  use burgers_db;

  create TABLE burgers(
      id INT auto_increment NOT NULL,
      burger_name varchar(30),
      devoured BOOLEAN NOT NULL,
      primary key (id)
  );
  
  
  
 