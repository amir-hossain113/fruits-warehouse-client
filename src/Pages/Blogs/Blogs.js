import React from "react";
import { Card } from "react-bootstrap";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="container blogs mt-5 mb-5">
      <Card className="mb-3 text-start border-warning card">
        <Card.Body>
          <Card.Title className="text-warning">
            Difference between javascript and nodeJS
          </Card.Title>
          <Card.Text>
            <b>Javascript : </b>Javascript is a programming language that is
            used for writing scripts on the website. Javascript can only be run
            in the browsers. It is basically used on the client-side. Javascript
            is capable enough to add HTML and play with the DOM. It is the
            upgraded version of ECMA script that uses Chrome’s V8 engine written
            in C++. <br /> <br />
            <b>NodeJS : </b>NodeJS is a Javascript runtime environment. We can
            run Javascript outside the browser with the help of NodeJS. It is
            mostly used on the server-side. Nodejs does not have capability to
            add HTML tags. Nodejs is written in C, C++ and Javascript.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="mb-3 text-start border-warning card">
        <Card.Body>
          <Card.Title className="text-warning">
            When should you use nodejs and when should you use mongodb?
          </Card.Title>
          <Card.Text>
            MongoDB and NodeJS are two different technologies. <br />
            <b>NodeJS : </b>Nodejs is a Javascript engine that you can write any
            application you want with (by programming in the Javascript
            language). It runs your Javascript code. Most commonly, it is used
            to build servers that can respond to web requests, though it can be
            used for lots of other types of code too.
            <br />
            <br />
            <b>Mongodb : </b>MonogDB is a database system which gives you a
            chance to efficiently store documents in a database and to perform
            operations like data updates, or to search documents by some
            criterias.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="mb-3 text-start border-warning card">
        <Card.Body>
          <Card.Title className="text-warning">
            Difference between SQL and NoSQL database
          </Card.Title>
          <Card.Text>
            <b>Sql : </b>SQL databases are relational. SQL databases use
            structured query language and have a predefined schema. SQL
            databases are vertically scalable. SQL databases are table-based.
            SQL databases are better for multi-row transactions.
            <br />
            <br />
            <b>No Sql : </b>NoSQL databases are non-relational. NoSQL databases
            have dynamic schemas for unstructured data. NoSQL databases are
            horizontally scalable. NoSQL databases are document, key-value,
            graph, or wide-column stores. NoSQL is better for unstructured data
            like documents or JSON.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="mb-3 text-start border-warning card">
        <Card.Body>
          <Card.Title className="text-warning">
            What is the purpose of jwt and how does it work?
          </Card.Title>
          <Card.Text>
            JWT or JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued. <br /> The Purpose of
            JWT: Stateless Authentication. <br />
            <br />
            JWTs differ from other web tokens in that they contain a set of
            claims. Claims are used to transmit information between two parties.
            What these claims are depends on the use case at hand. For example,
            a claim may assert who issued the token, how long it is valid for,
            or what permissions the client has been granted. A JWT is a string
            made up of three parts, separated by dots (.), and serialized using
            base64. In the most common serialization format, compact
            serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
            Once decoded, you will get two JSON strings: (1) The header and the
            payload. (2) The signature.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blogs;
