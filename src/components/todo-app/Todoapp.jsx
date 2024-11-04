import React, { useState } from 'react';
import Todolist from './Todolist';
import Todoform from './Todoform';
import { Container, Row, Col } from 'react-bootstrap';

export default function Todoapp() {
  const [todoList, setTodoList] = useState([
    { id: 0, title: 'Task 1' },
    { id: 1, title: 'Task 2' },
    { id: 2, title: 'Task 3' }
  ]);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1 className="my-2">Todo List</h1>
          <Todoform
            addTask={(task) => {
              setTodoList([
                ...todoList,
                { id: todoList.length, title: task }
              ]);
            }}
          />
          <Todolist todoList={todoList} setTodoList={setTodoList} />
        </Col>
      </Row>
    </Container>
  );
}
