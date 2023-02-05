# API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

## API Endpoints

#### Products

- Index `'products/' [GET]`
- Show (args: product id) `'products/:id' [GET]`
- Create (args: Product)[token required] `'products/' [POST]`
- [OPTIONAL] Top 5 most popular products
- [OPTIONAL] Products by category (args: product category)

#### Users

- Index [token required] `'users/' [GET]`
- Show (args: id)[token required] `'users/:id' [GET]`
- Create (args: User)[token required] `'users/' [POST]`

#### Orders

- Current Order by user (args: user id)[token required] `'current/:id' [GET]`
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

## Data Shapes

#### Product

- id
- name
- price
- [OPTIONAL] category

```
Table: Products (id:serial[primary key], name:text[not null], price:varchar(10)[not null], category:varchar(30))
```

#### User

- id
- firstName
- lastName
- password

```
Table: Users (id:serial[primary key], firstName:varchar(10)[not null], lastName:varchar(10)[not null], password:varchar(50)[not null])
```

#### Orders

- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)

```
Table: Orders (id:serial[primary key], product_id:integer(foreign key to products table), quantity:integer, user_id:integer(foreign key to users table), status:varchar(7)(active, complete)[not null])
```
