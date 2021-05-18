CREATE TYPE scholarshipState AS ENUM (
'En estudio', 'Rechazada', 'Aprobada', 'Empty'
);

CREATE TYPE scholarshipType AS ENUM (
'Media beca', 'Beca completa'
);

CREATE TYPE relation AS ENUM (
'Padre', 'Madre', 'Hermano', 'Hermana'
);

CREATE TABLE public.Student (
idStudent INTEGER NOT NULL,
name VARCHAR(20) NOT NULL,
lastName VARCHAR(20) NOT NULL,
course VARCHAR(10) NOT NULL,
room INTEGER NOT NULL,
year INTEGER NOT NULL,
sec INTEGER,
turn INTEGER NOT NULL,
dni INTEGER NOT NULL,
nationality  VARCHAR(20) NOT NULL,
dateBorn DATE NOT NULL,
cuil INTEGER NOT NULL,
address VARCHAR(40) NOT NULL,
cp INTEGER,
city VARCHAR(20) NOT NULL,
bar VARCHAR(20),
email VARCHAR(40) NOT NULL,
phone INTEGER,
PRIMARY KEY (idStudent)
);

CREATE TABLE public.Scholarship(
id INTEGER NOT NULL,
state scholarshipState NOT NULL,
type scholarshipType NOT NULL,
idStudent Integer,
FOREIGN KEY(idStudent) REFERENCES public.Student (idStudent),
PRIMARY KEY (id)
);


CREATE TABLE public.Parents(
idParent INTEGER NOT NULL,
name VARCHAR(20) NOT NULL,
lastName VARCHAR(20) NOT NULL,
age INTEGER NOT NULL,
occupation VARCHAR(40),
workPlace VARCHAR(40),
money INTEGER NOT NULL,
live BOOLEAN NOT NULL,
relation RELATION NOT NULL,
idScholarship INTEGER NOT NULL,
FOREIGN KEY(idScholarship) REFERENCES public.Scholarship (id),
PRIMARY KEY (idParent)
);

CREATE TABLE public.School (
idSchool INTEGER NOT NULL,
cue INTEGER NOT NULL,
password VARCHAR(20) NOT NULL,
    PRIMARY KEY (idSchool)
);