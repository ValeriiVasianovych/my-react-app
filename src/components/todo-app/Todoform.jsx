import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

export default function Todoform({ addTask }) {
    const [task, setTask] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (task.trim()) {
            addTask(task)
            setTask('')
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTask">
                <div className='d-flex gap-3 align-items-center'>
                <Form.Control
                    className='px-3 py-2'
                    type="text"
                    value={task}
                    onChange={(e) => {
                        if (e.target.value.length >= 10) {
                            alert('Task cannot be longer than 10 characters')
                        } else {
                            setTask(e.target.value)
                        }
                    }}
                    placeholder="Enter a new task"
                />
            <Button variant="primary" type="submit" className="px-3 py-2">
                Add
            </Button>
            </div>
            </Form.Group>
        </Form>
    )
}