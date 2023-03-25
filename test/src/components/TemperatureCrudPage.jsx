import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import { useState } from 'react'
import Modal from 'react-modal'

// TODO: 定数化

const TemperatureCrudPage = () => {
    const [events, setEvents] = useState([{ start: '2023-03-01', end: '2023-03-02' }])
    const [createModalIsOpen, setCreateModalIsOpen] = useState(false)
    const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false)
    const [updateComfirmModalIsOpen, setUpdateComfirmModalIsOpen] = useState(false)
    const [selectStartDate, setSelectStartDate] = useState('')
    const [selectEndDate, setSelectEndDate] = useState('')
    const fullCalendar = React.createRef()

    const dateClickHandle = (arg) => {
        setSelectStartDate(arg.dateStr)
        setSelectEndDate(arg.dateStr - 1)
        const hasEvent = inquiryEvent(arg.dateStr, arg.dateStr - 1)
        if (hasEvent) {
            setCreateModalIsOpen(false);
            setUpdateModalIsOpen(true)
            return
        }
        setUpdateModalIsOpen(false);
        setCreateModalIsOpen(true)
    }

    const createClickHandle = () => {
        const hasEvent = inquiryEvent(selectStartDate, selectEndDate)
        if (hasEvent) {
            console.log("すでに登録済です。")
            // すでに登録済みです更新を行いますか？の表示が必要
            setCreateModalIsOpen(false)
            setUpdateComfirmModalIsOpen(true)
            return
        }

        setCreateModalIsOpen(false)
    }

    function inquiryEvent(start, end) {
        return false
    }

    function closeModal() {
        setCreateModalIsOpen(false)
    }

    function openModal() {
        setCreateModalIsOpen(true)
    }

    Modal.setAppElement('#root')


    // TODO: Modalはカスタムモーダル作って共通のインターフェースとして使用して、下には1個だけしか設置したくない
    // 処理ごとに更新か作成か更新確認かの特有の識別可能な値が必要そう
    // →というよりは処理ごとに、共通インターフェースのオブジェクトとしてnewしてそれをDOMのModalに設置してできないかな？
    // TODO: 設定値をまとめたい
    return (
        <div>
            < FullCalendar
                ref={fullCalendar}
                plugins={[dayGridPlugin, interactionPlugin]}
                events={events}
                dateClick={dateClickHandle}
            />
            <Modal
                isOpen={createModalIsOpen}
                onRequestClose={closeModal}
                contentLabel="体温登録"
                style={{
                    overlay: {
                        zIndex: 100,
                    },
                    content: {
                        margin: 'auto',
                        backgroundColor: "white",
                        width: 200,
                        height: 100
                    }
                }}
            >
                <label>{selectStartDate}の体温</label>
                <input type="text" />
                <button onClick={createClickHandle}>作成</button>
            </Modal>
        </div >
    )
}

export default TemperatureCrudPage;