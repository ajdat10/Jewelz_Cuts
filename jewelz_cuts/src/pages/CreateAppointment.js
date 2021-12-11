import React, { useState } from "react";
import TextInput from "../components/TextInput";
import { __CreateAppointment } from "../services/AppointmentServices";
import Calendar from 'react-calendar'
import DatePicker from 'react-datepicker'

const CreateAppointment = (props) => {
    const [name, setName] = useState('')
    const [appointment, setAppointment] = useState(new Date())

    const handleName = ({ target }) => {
        setName(target.name)
    }
    const onChange = (date) => {
        setAppointment(date)
    }

    // const onSubmit = () => {
        
    //     try {
    //         const appointment = await __CreateAppointment(props.currentUser.id{
    //             name: name,
    //             date: date,
    //         })
    //         props.history.push('/profile')
    //     } catch (error) {
    //         throw error
    //     }
        
    // }

    return (
      <div className="form-group">
        <div>
          <body class="container">
            <div class="row">
              <form class="col s12">
                <div class="row">
                  {" "}
                  <label style={{fontSize: '50px'}}>Select Appointment Date</label>
                  <input type="date" class="datepicker" />
                </div>
              </form>
            </div>
          </body>
        </div>
      </div>
    );
}


export default CreateAppointment