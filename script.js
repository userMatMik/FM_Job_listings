const counterElement = document.querySelector('[data-counter]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

// console.log(today.toString().toLowerCase().slice(0, 3));
const daysToFri = {
    sun: 5,
    mon: 4,
    tue: 3,
    wed: 2, 
    thu: 1,
    fri: 0,
    sat: 6
};



const initNextFri = () => {
    const today = new Date();
    const todaysDayName = today.toString().toLocaleLowerCase().slice(0, 3);
    const nextFri = new Date(today);
    nextFri.setDate(nextFri.getDate() + daysToFri[todaysDayName]);
    nextFri.setHours(17, 0, 0, 0)
    return nextFri;
}

const countTimeToWeekend = () => {
    const now = new Date();
    // console.log(now);
    const weekendStart = initNextFri();
    // console.log(`friday: ${weekendStart}`);
    const timeToWeekend = (weekendStart - now) / 1000;

    const daysToWeekend = Math.floor(timeToWeekend / (3600 * 24));
    const hours = Math.floor(timeToWeekend / 3600 ) % 24;
    const minutes = Math.floor(timeToWeekend / 60) % 60;
    const seconds = Math.floor(timeToWeekend % 60)

    daysEl.innerText = formatTime(daysToWeekend);
    hoursEl.innerText = formatTime(hours);
    minutesEl.innerText = formatTime(minutes);
    secondsEl.innerText = formatTime(seconds);

    console.log(typeof hours)
    
    // return daysToWeekend, hours   
}


const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
}

// const renderCounter = (daysToWeekend, hours) => {
//     daysEl.innerText = daysToWeekend;
//     hoursEl.innerText = hours;
// }

// open/close modal

const openModalBtn = document.querySelector('[data-open-modal]');
const modalCont = document.querySelector('[data-modal-container]')
const closeModalBtn = document.querySelector('[data-close-modal]')

openModalBtn.addEventListener('click', () =>{
    modalCont.classList.add('active');
})

closeModalBtn.addEventListener('click', () => {
    modalCont.classList.remove('active');
})

const settingsHandler = () => {
    const startDay = document.querySelector('select[name="starting-day"]');
    const finishDay = document.querySelector('select[name="finish-day"]');
    const startHour = document.querySelector('input[name="starting-hour"]');
    const finishHour = document.querySelector('input[name="finish-hour"]');
    const saveSettingsBtn = document.querySelector('[data-save-options]');
    
    let settingsValues = {
        startWorkDay: 'mon',
        startWorkHour: '09:00',
        finishWorkDay: 'fri',
        finishWorkHour: '17:00'
    }

    console.log(saveSettingsBtn);

    saveSettingsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        settingsValues = {
            startWorkDay: startDay.value,
            startWorkHour: startHour.value,
            finishWorkDay: finishDay.value,
            finishWorkHour: finishHour.value
        }
        console.log(settingsValues)

        countTime(settingsValues);
    })

}





// const today = new Date()
// const tomorrow = new Date(today)
// tomorrow.setDate(tomorrow.getDate() + 1) / 1000

// console.log(tomorrow)


countTimeToWeekend();
// setInterval(countTimeToWeekend, 1000);
// renderCounter();

settingsHandler();