import React from 'react'

export const Appointment = ({ customer }) => <div>{customer.firstName}</div>;


const appointmentsTimeOfDay = startsAt => {
  const [h, m] = new Date(startsAt).toTimeString().split(':');
  console.log(startsAt)
  return `${h}:${m}`
}

export const AppointmentsDayView = ({ appointments }) => (
  <div id="appointmentsDayView">
    <ol>
      {appointments.map(appointment => (
        <li key={appointment.startsAt}>
          {appointmentsTimeOfDay(appointment.startsAt)}
        </li>
      ))}
    </ol>
  </div>
);


