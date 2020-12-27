import React from 'react'
import { Link } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

const EditUser = () => {
  return (
    <Form>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" placeholder="Enter name"></Input>
      </FormGroup>
      <Button type="submit">Edit name</Button>&nbsp;
      <Link to="/" className="btn btn-danger m1-2">Cancel</Link>
    </Form>
  )
}

export default EditUser
