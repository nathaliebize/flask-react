DROP TABLE IF EXISTS list;

CREATE TABLE list (
  id INTEGER,
  item TEXT,
  auth TEXT
);

INSERT INTO list VALUES (?, ?, ?), (1, 'aspi', 'auth');
INSERT INTO list VALUES (?, ?, ?), (2, 'vaisselle', 'auth');