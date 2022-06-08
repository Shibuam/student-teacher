import React,{useEffect, useState} from 'react'
import { useForm } from "react-hook-form";
import { useDispatch,useSelector } from 'react-redux';
import {addStudent,deleteStudent} from '../redux/Reducers/StudentData'
import {Button, Container, Row,Table,Modal,Form} from 'react-bootstrap'
const StudentComponent = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [show, setShow] = useState(false);
const dispatch=useDispatch()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name,setName]=useState('')
  const [search,setSearch]=useState('')
  const [students,setStudentData]=useState('')
  const addStudentHandler=(e)=>{
  dispatch(addStudent({name:name}))
  handleClose()
  
}
const handlerDelete=(index)=>{

  dispatch(deleteStudent(index))
}
const studentData=useSelector((state)=>state.studentReducer.data)
useEffect(()=>{
  setStudentData(studentData)
},[studentData])

console.log()

 const searchHandler=()=>{
   alert(search)
   if(search.length>0){
  setStudentData(students.filter((ele,index)=>{
    return ele.name===search  }))
  }
 }
  return (
    <Container>
    <Row>
      <input type='text'  onChange={(e)=>setSearch(e.target.value)}/>
      <Button onClick={searchHandler}>Search</Button>
    <Table striped bordered hover>
<thead>
  <tr>
    <th>#</th>
    <th>Teacher Name</th>
    <th>Delete</th>
    <th><Button onClick={handleShow}>Add</Button></th>

  </tr>
</thead>
<tbody>
{students.length>0 && students.map((ele,index)=>
            <tr>
              <td>{index+1}</td>
              <td>{ele.name}</td>
              <td><Button variant='danger' onClick={()=>handlerDelete(index)}>Delete</Button></td>

            </tr>
            )}

</tbody>
</Table>
    </Row>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit(addStudentHandler)}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)} />
    <Form.Text className="text-muted">

    </Form.Text>
  </Form.Group>

 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </Modal.Body>
      
      </Modal>
  </Container>
  )
}

export default StudentComponent