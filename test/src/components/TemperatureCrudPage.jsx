import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import { useState } from 'react'
import Modal from 'react-modal'
import TemperatureAppHeader from './TemperatureAppHeader'
import AppConstants from '../constants/AppConstants'

// 体温記録を行うカレンダー画面
const TemperatureCrudPage = () => {

    // 変数
    const [events, setEvents] = useState([])
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
    const [isUpdateConfirmModalOpen, setIsUpdateConfirmModalOpen] = useState(false)
    const [selectStartDate, setSelectStartDate] = useState('')
    const [selectEndDate, setSelectEndDate] = useState('')
    const fullCalendar = React.createRef()

    // メッセージ
    const temperatureHojoMessage = "の体温"

    // カレンダーのcss
    const calendarStyle = {
        overlay: {
            zIndex: 100,
        },
        content: {
            margin: 'auto',
            backgroundColor: "white",
            width: 200,
            height: 100
        }
    }

    // クリックされた日付へ体温を登録、更新、削除の行うための処理
    function dateClickHandle(arg) {

        // 日付を設定
        setSelectStartDate(arg.dateStr)
        setSelectEndDate(arg.dateStr - 1)

        // すでに対応が登録済みかどうか
        const hasEvent = inquiryEvent(arg.dateStr, arg.dateStr - 1)

        // 体温が登録済みの場合は更新、削除のモーダルウインドウを表示
        if (hasEvent) {
            setIsCreateModalOpen(false);
            setIsUpdateModalOpen(true)
            return
        }
        // 体温が登録されていない場合は登録用のモーダルウインドウを表示
        setIsUpdateModalOpen(false);
        setIsCreateModalOpen(true)
    }

    // 体温登録時の処理
    function createClickHandle() {

        // 別端末などで対象日付にすでに登録済みの場合があるため体温登録済みかチェック
        const hasEvent = inquiryEvent(selectStartDate, selectEndDate)
        if (hasEvent) {
            console.log("すでに登録済です。")
            // TODO: すでに登録済みです更新を行いますか？の表示が必要
            setIsCreateModalOpen(false)
            setIsUpdateConfirmModalOpen(true)
            return
        }
        // 登録されていなければ登録を行いモーダルウインドウを閉じる
        setIsCreateModalOpen(false)
    }

    function showModal() {
        if (isCreateModalOpen) {
            return (
                <Modal
                    isOpen={isCreateModalOpen}
                    onRequestClose={closeModal}
                    contentLabel={AppConstants.TEMPERATURE_CRUD_PAGE_NAME}
                    style={calendarStyle}
                >
                    <label>{selectStartDate + temperatureHojoMessage}</label>
                    <input type="text" />
                    <button onClick={createClickHandle}>作成</button>
                </Modal>
            )
        }
        if (isUpdateModalOpen) {
            return (<div>UPdate</div>)
        }
        return (<div></div>)
    }

    function inquiryEvent(start, end) {
        return false
    }

    function closeModal() {
        setIsCreateModalOpen(false)
    }

    function openModal() {
        setIsCreateModalOpen(true)
    }

    Modal.setAppElement('#root')


    // TODO: Modalはカスタムモーダル作って共通のインターフェースとして使用して、下には1個だけしか設置したくない
    // 処理ごとに更新か作成か更新確認かの特有の識別可能な値が必要そう
    // →というよりは処理ごとに、共通インターフェースのオブジェクトとしてnewしてそれをDOMのModalに設置してできないかな？
    // ①継承　②インターフェース実装　③無名クラス　④無名関数
    // 画面の共通部の継承とかは勉強になりそうだからやりたい
    // TODO: 設定値をまとめたい
    return (
        <div>
            <TemperatureAppHeader />
            < FullCalendar
                ref={fullCalendar}
                plugins={[dayGridPlugin, interactionPlugin]}
                events={events}
                dateClick={dateClickHandle}
            />
            {
                showModal()
            }
        </div >
    )
}

export default TemperatureCrudPage;