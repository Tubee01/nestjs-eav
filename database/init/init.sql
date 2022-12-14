
DROP DATABASE IF EXISTS test;    

CREATE DATABASE test;

\c test

CREATE TABLE Entity (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  parent_id int,
  min_count int DEFAULT 0,
  max_count int DEFAULT -1,
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (parent_id) REFERENCES Entity(id)
);

CREATE TABLE Attribute (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(255) NOT NULL,
  sub_type int,
  required BOOLEAN NOT NULL,
  entity_id int NOT NULL,
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (entity_id) REFERENCES Entity(id) on delete cascade
);

CREATE TABLE Object (
  id SERIAL PRIMARY KEY,
  parent_id int,
  entity_id int NOT NULL,
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (entity_id) REFERENCES Entity(id)
);

CREATE TABLE DateTimeValue (
  id SERIAL PRIMARY KEY,
  object_id int NOT NULL,
  attribute_id int NOT NULL,
  value TIMESTAMP NOT NULL,
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (object_id) REFERENCES Entity(id),
  FOREIGN KEY (attribute_id) REFERENCES Attribute(id)
);

CREATE TABLE IntValue (
  id SERIAL PRIMARY KEY,
  object_id int NOT NULL,
  attribute_id int NOT NULL,
  value VARCHAR(255) NOT NULL,
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (object_id) REFERENCES Entity(id),
  FOREIGN KEY (attribute_id) REFERENCES Attribute(id)
);

CREATE TABLE SmallStringValue (
  id SERIAL PRIMARY KEY,
  object_id int NOT NULL,
  attribute_id int NOT NULL,
  value VARCHAR(255) NOT NULL,
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (object_id) REFERENCES Entity(id),
  FOREIGN KEY (attribute_id) REFERENCES Attribute(id)
);
