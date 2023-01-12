import React from 'react';
import './Time.css';

export class Time extends React.Component {
    constructor() {
        super();
        this.state = {
            display: true,
            year: '',
            month: '',
            date: '',
            day: '',
            hour: '',
            minuts: '',
            seconds: ''
        }
    }

    setTime = () => {
        const nowTime = new Date();
        this.setState({
            year: nowTime.getFullYear(),
            month: nowTime.getMonth(),
            date: nowTime.getDate(),
            day: nowTime.getDay(),
            hour: nowTime.getHours(),
            minuts: nowTime.getMinutes(),
            seconds: nowTime.getSeconds(),
        })
    }

    componentDidMount() {
        this.interval = setInterval(this.setTime, 1000);

    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const monthNameList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const dateList = [];
        for (let i = 1; i <= 30; i++) { dateList.push(i) };
        const hourList = [];
        for (let i = 1; i <= 24; i++) { hourList.push(i) };
        const minSecList = [];
        for (let i = 1; i <= 60; i++) { minSecList.push(i) };
        return (
            <div className='container'>
                <div className='headers'>
                    <div className='year'>{this.state.year}</div>
                    <div className='monthName'>{monthNameList[this.state.month]}</div>
                </div>
                <div className='box'>
                    {monthNameList.map(((i, index) =>
                        <div
                            className={(index - this.state.month) * 30 === 0 ? 'item month active' : 'item month'}
                            style={{ transform: `rotate(${(index - this.state.month) * 30}deg)` }}
                            key={index}
                        >
                            Month {index + 1}</div>
                    ))}
                    {dateList.map((i, index) =>
                        <div
                            className={(i - this.state.date) * 12 === 0 ? 'item date active' : 'item date'}
                            style={{ transform: `rotate(${(i - this.state.date) * 12}deg)` }}
                            key={index}
                        >
                            Day {i}</div>
                    )}

                    {dayList.map(((i, index) =>
                        <div
                            className={(index - this.state.day) * 30 === 0 ? 'item day active' : 'item day'}
                            style={{ transform: `rotate(${(index - this.state.day) * 30}deg)` }}
                            key={index}
                        >
                            {i}</div>
                    ))}

                    {hourList.map((i, index) =>
                        <div className={(index - this.state.hour) === 0 ? 'item hour active' : 'item hour'}
                            style={{ transform: `rotate(${(index - this.state.hour) * 15}deg)` }}
                            key={index}
                        >
                            {index} Hr
                        </div>
                    )}

                    {minSecList.map((i, index) =>
                        <div
                            className={(index - this.state.minuts) * 6 === 0 ? 'item minuts active' : 'item minuts'}
                            style={{ transform: `rotate(${(index - this.state.minuts) * 6}deg)` }}
                            key={index}
                        >
                            {index} Min
                        </div>
                    )}

                    {minSecList.map((i, index) => {
                        return <div
                            className={(index - this.state.seconds) * 6 === 0 ? 'item seconds active' : 'item seconds'}
                            style={{ transform: `rotate(${(index - this.state.seconds) * 6}deg)` }}
                            key={index}
                        >
                            {index} Sec
                        </div>
                    }

                    )}
                </div>
            </div>
        )
    }



    // render() {
    //     const {year,month,date,day,hour,minuts,seconds} = this.state;
    //     if(this.state.display){
    //         return (<>
    //         <p>{year}:{month}:{date}:{day}:{hour}:{minuts}:{seconds}</p>
    //         <button onClick={()=>this.setState({display:false})}>Stop</button>
    //         </>)
    //     }
    //     return <button onClick={()=>this.setState({display:true})}>Show Time</button>


    // }
}