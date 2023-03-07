import daygrid from "@fullcalendar/daygrid"
import FullCalendar from "@fullcalendar/react"

function TemperatureCrudPage() {
    return (
        <div>
            <FullCalendar
                plugins={[daygrid]}
                initialView="dayGridMonth"
            />
        </div>
    )
}

export default TemperatureCrudPage