DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS classes;
DROP TABLE IF EXISTS grades;

CREATE TABLE students (
    studentId serial,
    name text
);

CREATE TABLE classes (
    classId serial,
    name text
);

CREATE TABLE grades (
    gradeId serial,
    studentId integer,
    classId integer,
    grade varchar(2)
);

INSERT INTO students (name) VALUES ('Mickey');
INSERT INTO students (name) VALUES ('Minney');
INSERT INTO students (name) VALUES ('Donald');
INSERT INTO students (name) VALUES ('Scrooge');
INSERT INTO students (name) VALUES ('Peter');
INSERT INTO students (name) VALUES ('Charlette');
INSERT INTO students (name) VALUES ('Timmy');

INSERT INTO classes (name) VALUES ('Programming');
INSERT INTO classes (name) VALUES ('Math');

INSERT INTO grades (studentId, classId, grade) VALUES (1, 1, 'A');
INSERT INTO grades (studentId, classId, grade) VALUES (2, 1, 'A');
INSERT INTO grades (studentId, classId, grade) VALUES (3, 1, 'B');
INSERT INTO grades (studentId, classId, grade) VALUES (4, 1, 'C');
INSERT INTO grades (studentId, classId, grade) VALUES (5, 1, 'A');
INSERT INTO grades (studentId, classId, grade) VALUES (1, 2, 'B');
INSERT INTO grades (studentId, classId, grade) VALUES (2, 2, 'A');
INSERT INTO grades (studentId, classId, grade) VALUES (3, 2, 'C');
