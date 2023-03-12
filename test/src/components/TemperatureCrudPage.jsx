import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import { useState } from 'react'
// import ModalWindow from './ModalWindow'
import Modal from 'react-modal'

// TODO:
// モーダルウインドウ作成
// clickしたときにモーダル表示
// ボタン押したら配列に対応追加
// crud
// リファクタリング
function TemperatureCrudPage() {
    const [events, setEvents] = useState([{ start: '2023-03-01', end: '2023-03-02' }])
    const [modalIsOpen, setIsOpen] = useState(false)
    const [selectDate, setSelectDate] = useState('')

    const dateClickHandle = (arg) => {
        console.log('dateClickHandle')
        setEvents([...events, { start: '2023-03-06', end: '2023-03-07' }, { start: '2023-03-10', end: '2023-03-11' }])
        setIsOpen(true)
        setSelectDate(arg.dateStr)
    }

    function closeModal() {
        setIsOpen(false)
    }

    Modal.setAppElement('#root')

    return (
        <div>
            < FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                events={events}
                dateClick={dateClickHandle}
            />
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                style={{
                    content: {
                        backgroundColor: "white"
                    }
                }}
            >
                <form>
                    <label>{selectDate}の体温</label>
                    <input type="text" />
                </form>
            </Modal>
            {/* <ModalWindow /> */}
        </div >
    )
}

export default TemperatureCrudPage;