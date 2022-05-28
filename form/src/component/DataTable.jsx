import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import React from 'react'
import style from './Form.module.css'
const DataTable = ({form}) => {
  return (
    <div><TableContainer>
    <Table variant='simple'>
      <TableCaption></TableCaption>
      <Thead>
        <Tr>
          <Th>Pic</Th>
          <Th>Name</Th>
          <Th isNumeric>Age</Th>
          <Th>Address</Th>
          <Th>Salary</Th>
          <Th>Department</Th>
        </Tr>
      </Thead>
      <Tbody>

        {form.map((item,index)=>{
         return( <Tr key={index}>
          <Td><img className={style.insideimg} src={form[index].pic?URL.createObjectURL(form[index].pic[0]):''} alt="no img" /></Td>
          <Td>{form[index].name}</Td>
          <Td isNumeric>{form[index].age}</Td>
          <Td >{form[index].Address}</Td>
          <Td isNumeric>{form[index].salary}</Td>
          <Td isNumeric>{form[index].department}</Td>
        </Tr>)
       })}         

      </Tbody>
   
    </Table>
  </TableContainer></div>
  )
}

export default DataTable