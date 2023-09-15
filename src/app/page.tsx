'use client';

import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
require('moment/locale/ko.js');
import moment from 'moment';
import { useState } from 'react';

import Modal from '@components/modal/Modal';
import SimpleButton from '@components/common/SimpleButton';

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [events, setEvents] = useState([
    {
      start: new Date('2023-09-05 12:00:00'),
      end: new Date('2023-09-05 13:00:00'),
      title: '치료 활동 1 (13:00 ~ 15:00)',
      no: 1,
    },
    {
      start: new Date('2023-09-05 13:00:00'),
      end: new Date('2023-09-05 14:00:00'),
      title: '치료 활동 2',
      no: 2,
    },
    {
      start: new Date('2023-09-05 14:00:00'),
      end: new Date('2023-09-05 15:00:00'),
      title: '치료 활동 3',
      no: 3,
    },
    {
      start: new Date('2023-09-05 15:00:00'),
      end: new Date('2023-09-05 16:00:00'),
      title: '치료 활동 4',
      no: 4,
    },
    {
      start: new Date('2023-09-05 16:00:00'),
      end: new Date('2023-09-05 17:00:00'),
      title: '치료 활동 5',
      no: 5,
    },
    {
      start: new Date('2023-09-05 17:00:00'),
      end: new Date('2023-09-05 18:00:00'),
      title: '치료 활동 6',
      no: 6,
    },
    {
      start: new Date('2023-09-05 18:00:00'),
      end: new Date('2023-09-05 19:00:00'),
      title: '치료 활동 7',
      no: 7,
    },
  ]);

  const CustomToolbar = (toolbar) => {
    const goToBack = () => {
      toolbar.date.setMonth(toolbar.date.getMonth() - 1);
      toolbar.onNavigate('prev');
    };

    const goToNext = () => {
      toolbar.date.setMonth(toolbar.date.getMonth() + 1);
      toolbar.onNavigate('next');
    };

    const goToCurrent = () => {
      const now = new Date();
      toolbar.date.setMonth(now.getMonth());
      toolbar.date.setYear(now.getFullYear());
      toolbar.onNavigate('current');
    };

    const label = () => {
      const date = moment(toolbar.date);
      return (
        <span>
          <span>
            {date.format('YYYY')}년 {date.format('MMMM')}
          </span>
        </span>
      );
    };

    return (
      <div className="flex flex-row justify-between p-5 align-middle">
        <div className="flex gap-2">
          <SimpleButton text="이전" onClick={goToBack} />
          <SimpleButton text="오늘" onClick={goToCurrent} />
          <SimpleButton text="다음" onClick={goToNext} />
        </div>
        <div>
          <p>{label()}</p>
        </div>
        <div>
          <button
            type="button"
            className="bg-white border border-gray-300 hover:bg-black hover:text-white hover:border-black px-4 py-1 rounded-md transition-colors duration-300 ease-in-out"
            onClick={() => setShowModal(true)}
          >
            스케줄 생성
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: '100vh' }}
        onSelectEvent={(slotInfo) => {
          console.log(slotInfo);
        }}
        components={{
          month: {
            dateHeader: (props) => {
              return <p>{props?.label}</p>;
            },
          },
          toolbar: CustomToolbar,
        }}
        popup
        messages={{
          next: '다음',
          previous: '이전',
          today: '오늘',
          month: '월',
          week: '주',
          day: '하루',
          agenda: '일정',
          date: '날짜',
          time: '시간',
        }}
      />
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <p>모달 내용이라는?</p>
        </Modal>
      )}
    </div>
  );
};

export default CalendarPage;
