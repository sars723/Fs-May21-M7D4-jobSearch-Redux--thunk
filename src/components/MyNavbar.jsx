import React from "react";
import { useState } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";

const MyNavbar = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchCategory, setSearchCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setSearchCategory(searchCategory);
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Job Search Engine</Navbar.Brand>
      <Nav className="mr-auto">
        <Link className="nav-link" to="/">
          Home
        </Link>
        {/* <p onClick={() => props.history.push("/favourites", props.job)}>
          {props.job.company_name}
        </p> */}
        <Link className="nav-link" to="/favourites">
          Favourite
        </Link>
      </Nav>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button
          variant="outline-info"
          onClick={props.setSearchQuery(searchQuery)}
        >
          Search with title
        </Button>
      </Form>
      <Form inline className="ml-5" /* onSubmit={handleSubmit} */>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value={searchCategory}
          onChange={(e) => setSearchCategory(e.target.value)}
        />
        <Button
          variant="outline-info"
          onClick={props.setSearchCategory(searchCategory)}
        >
          Search with Category
        </Button>
      </Form>
    </Navbar>
  );
};
export default withRouter(MyNavbar);
