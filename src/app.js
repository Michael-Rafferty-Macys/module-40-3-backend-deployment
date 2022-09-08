if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();

const productsRouter = require("./products/products.router");
const categoriesRouter = require("./categories/categories.router");
const suppliersRouter = require("./suppliers/suppliers.router");

const commentsRouter = require("./comments/comments.router");
const postsRouter = require("./posts/posts.router");
const usersRouter = require("./users/users.router");

const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");

app.use(express.json());

app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);
app.use("/suppliers", suppliersRouter);

app.use("/comments", commentsRouter);
app.use("/posts", postsRouter);
app.use("/users", usersRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
