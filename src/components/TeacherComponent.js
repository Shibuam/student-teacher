import React,{useState,useEffect} from 'react';
import { Button, Container, Modal, Row, Table,Form } from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux';
import {addTeacher,deleteTeacher} from '../redux/Reducers/TeacherData'
import { useForm } from "react-hook-form";

const TeacherComponent = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const dispatch=useDispatch()

  const [show, setShow] = useState(false);
 const [name,setName]=useState('')
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [search,setSearch]=useState('')
  const [teachers,setTeacherData]=useState('')
  const addTeacherHandler=(e)=>{
    dispatch(addTeacher({name:name}))
    handleClose()
    
  }
  const handlerDelete=(index)=>{
  
    dispatch(deleteTeacher(index))
  }

  const searchHandler=()=>{
    alert(search)
    if(search.length>0){
   setTeacherData(teachers.filter((ele,index)=>{
     return ele.name===search  }))
   }
  }
const teacherData=useSelector((state)=>state.teacherReducer.data)
console.log(teacherData)
useEffect(()=>{
  setTeacherData(teacherData)
},[teacherData])

  return (
    <Container>
      <Row>
      <input type='text'  onChange={(e)=>setSearch(e.target.value)}/>
      <Button onClick={searchHandler}>Search</Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th> Name</th>
              <th>delete</th>
              <th><Button onClick={handleShow}>Add</Button></th>

            </tr>
          </thead>
          <tbody>
            {teachers.length>0 && teachers.map((ele,index)=>
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
          <Modal.Title>Add teacher</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit(addTeacherHandler)}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)} />
    <Form.Text className="text-muted" >

    </Form.Text>
  </Form.Group>

 
  <Button variant="primary" type="submit" >
    Submit
  </Button>
</Form>
        </Modal.Body>
      
      </Modal>
    </Container>
  )
}

export default TeacherComponent