
  
  create DATABASE burgers_db;

  use burgers_db;

  create TABLE burgers(
      id INT NOT NULL auto_increment,
      burger_name varchar(30) NOT NULL,
      devoured BOOLEAN NOT NULL,
      primary key (id)
  );
  
  
  
 