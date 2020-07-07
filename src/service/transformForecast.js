import moment from 'moment';
import 'moment/locale/es';
import transformWeather from './transformWeather';

const transformForecast = (data) => (
    data.list.filter(item => (
        moment.unix(item.dt).hour() === 1 ||
        moment.unix(item.dt).hour() === 7 ||
        moment.unix(item.dt).hour() === 13
    )).map(item => (
        {
            weekDay: moment.unix(item.dt).format('ddd'),
            hour: moment.unix(item.dt).hour(),
            data: transformWeather(item),
            hour_txt: item.dt_txt,
        }
    ))
);

export default transformForecast;
