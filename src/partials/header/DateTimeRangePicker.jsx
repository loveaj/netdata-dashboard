import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { DatePicker, Space } from 'antd';

// Date-time picker support
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;

const range = (start, end) => {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
};

// eslint-disable-next-line arrow-body-style
const disabledDate = (current) => {
  // Can not select days before today and today
  return current && current < dayjs().endOf('day');
};

const disabledDateTime = () => ({
  disabledHours: () => range(0, 24).splice(4, 20),
  disabledMinutes: () => range(30, 60),
  disabledSeconds: () => [55, 56],
});

const disabledRangeTime = (_, type) => {
  if (type === 'start') {
    return {
      disabledHours: () => range(0, 60).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }
  return {
    disabledHours: () => range(0, 60).splice(20, 4),
    disabledMinutes: () => range(0, 31),
    disabledSeconds: () => [55, 56],
  };
};

const rangePresets = [
    {
      label: 'Last 7 Days',
      value: [dayjs().add(-7, 'd'), dayjs()],
    },
    {
      label: 'Last 14 Days',
      value: [dayjs().add(-14, 'd'), dayjs()],
    },
    {
      label: 'Last 30 Days',
      value: [dayjs().add(-30, 'd'), dayjs()],
    },
    {
      label: 'Last 90 Days',
      value: [dayjs().add(-90, 'd'), dayjs()],
    },
  ];

function DateTimeRangePicker() {
  
    return (
        <div class="p-4 bg-red-900">
            <Space direction="vertical" size={12}>
                <RangePicker
                    disabledDate={disabledDate}
                    disabledTime={disabledRangeTime}
                    showTime={{
                        hideDisabledOptions: true,
                        defaultValue: [dayjs('00:00:00', 'HH:mm:ss'), dayjs('11:59:59', 'HH:mm:ss')],
                    }}
                    format="YYYY-MM-DD HH:mm:ss"
                    presets={rangePresets} 
                />
            </Space>
        </div>
    );
  }
  
  export default DateTimeRangePicker;