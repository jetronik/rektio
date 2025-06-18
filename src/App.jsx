import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { data } from "./data";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [search, setSearch] = useState("");
  //console.log("hello\nworld");

  return (
    <div className="App">
      <Container>
        <h1 className="text-center mt-8">Rektio</h1>
        <Form>
          <InputGroup className="my-3">
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search contacts"
            />
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Sana</th>
              <th>Rektio</th>
              <th>Esimerki</th>
            </tr>
          </thead>
          <tbody>
            {data
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
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
