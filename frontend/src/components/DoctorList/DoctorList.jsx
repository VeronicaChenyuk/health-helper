import React from 'react'
import { Button } from 'reactstrap';

const doctorBaze = [
  {
    id: 1,
    fistName: 'Любовь',
    secondName: 'Васильевна',
    lastName: 'Петрова',
    specialist: 'Офтальмолог',
  },
  {
    id: 1,
    fistName: 'Сергей',
    secondName: 'Иванович',
    lastName: 'Мишустин',
    specialist: 'Отоларинголог',
  },
]
console.log(doctorBaze);

function DoctorList() {
  // const [fistName, secondName, lastName, specialist] = useState('')

  return (
    <>
      <div>
        {
          doctorBaze.map((el) => <p><strong>{el.id}.</strong> {el.fistName} {el.secondName} {el.lastName}<p></p> Cпециальность: {el.specialist} <p><Button outline color="success">Связаться</Button> <Button outline color="danger">Удалить</Button></p></p>)
        }
      </div>
    </>
  )
}

export default DoctorList;
