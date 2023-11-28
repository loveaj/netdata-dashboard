import React from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { DatePicker, Space } from 'antd';

// Date-time picker support
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;

// eslint-disable-next-line arrow-body-style
const disabledDate = (current) => {
  // Can not select days before today and today
  return current > dayjs().endOf('day');
};

function DateTimeRangePicker( {handleDateTimes} ) {

  
  const handleDateTimeRangeChange = (value) => {
    console.log('DateTimeRangePicker -> selectedDateTimes: ', value)
    handleDateTimes(value)
  };

  return (
    <div className="p-5 bg-red-900">
      <Space direction="vertical" size={12}>
        <RangePicker
          disabledDate={disabledDate}
          showTime={{
            hideDisabledOptions: true,
            //defaultValue: [dayjs('00:00:00', 'HH:mm:ss'), dayjs('11:59:59', 'HH:mm:ss')],
          }}
          format="YYYY-MM-DD HH:mm:ss"
          presets={
            [
              {
                label: '5 minutes',
                value: [dayjs().add(-5, 'm'), dayjs()],
              },  
              {
                label: 'Last 15 minutes',
                value: [dayjs().add(-15, 'm'), dayjs()],
              },
              {
                label: 'Last 30 minutes',
                value: [dayjs().add(-30, 'm'), dayjs()],
              },  
              {
                label: 'Last 1 hour',
                value: [dayjs().add(-1, 'h'), dayjs()],
              },
              {
                label: 'Today',
                value: [dayjs().startOf('day'), dayjs()],
              },
              {
                label: 'Last 1 Days',
                value: [dayjs().add(-1, 'd'), dayjs()],
              },
              {
                label: 'Last 7 Days',
                value: [dayjs().add(-7, 'd'), dayjs()],
              },
            ]
          }
          onChange={handleDateTimeRangeChange}
          size='small'
        />
      </Space>
    </div>
  );
}
  
  export default DateTimeRangePicker;