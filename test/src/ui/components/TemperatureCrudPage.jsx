import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

export default class TemperatureCrudPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            events: {
                title: 'fource',
                start: '2023-03-01',
                end: '2023-03-02',
            }
        }
    }

    render() {
        return (
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                dateClick={this.handleDateClick}
                events={this.state.events}
            />
        )
    }

    handleDateClick = (arg) => {
        console.log(this.state.events)
        this.state.events.end = '2023-03-20'
        alert(arg.dateStr)
    }
}
