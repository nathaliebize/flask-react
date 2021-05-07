DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS task;

CREATE TABLE user (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE task (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_fk INTEGER NOT NULL,
  item TEXT NOT NULL,
  achieved BOOLEAN NOT NULL,
  FOREIGN KEY (user_fk) REFERENCES user (id)
);


INSERT INTO user VALUES (1, 'nathalie', 'test');
INSERT INTO task VALUES (?, 1, 'aspi', true), (?, 1, 'vaisselle', false);
