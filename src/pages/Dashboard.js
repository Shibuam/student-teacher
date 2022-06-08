import React from 'react'
import { Container ,Row,Col,Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import StudentComponent from '../components/StudentComponent'
import TeacherComponent from '../components/TeacherComponent'
import { useDispatch } from 'react-redux'




export const Dashboard = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const logoutHandler=()=>{
        dispatch({
            type:"logout"
        
        })
navigate('/')
    }

  return (
      <Container className='mt-5'>
          <Button onClick={logoutHandler}>Logout</Button>
<Row>
    <Col sm={6} >
        <h6>Students</h6>
        <StudentComponent/>
    </Col>
    <Col sm={6}>
    <h6>Teachers</h6>
        <TeacherComponent/>
    </Col>
</Row>
      </Container>

  )
}
