import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import InputGroup from "react-bootstrap/InputGroup";
import { data } from "./data";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";

function App() {
  const [search, setSearch] = useState("");
  const pass = () => {};

  return (
    <div className="App">
      <NavBar />
      <Container className=" pt-5">
        <Form>
          <br />
          <h3 className="text-center">Rektio</h3>
          <lable>Rektio</lable>
          <InputGroup className="my-3">
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Etsi sana..."
            />
          </InputGroup>
        </Form>
        <div className="my-table">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Sana</th>
                <th>Rektio</th>
                <th>Esimerki</th>
              </tr>
            </thead>
            <tbody>
              {search.length > 1
                ? data
                    .filter((item) => {
                      return search.toLocaleLowerCase() === ""
                        ? item
                        : item.word.toLocaleLowerCase().includes(search);
                    })
                    .map((item, index) => (
                      <tr key={index}>
                        <td>{item.word}</td>
                        <td>
                          {item.rule.map((value) => (
                            <p>{value}</p>
                          ))}
                        </td>
                        <td>
                          {item.rest.map((value) => (
                            <p>{value}</p>
                          ))}
                        </td>
                      </tr>
                    ))
                : pass()}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
}

export default App;
