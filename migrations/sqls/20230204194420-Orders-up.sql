create table Orders(
id serial primary key,
quantity integer,
product_id integer references Products(id),
user_id integer references Users(id),
status varchar(7) not null
);