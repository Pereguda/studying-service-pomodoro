import { state } from "./state.js"

export const startTimer = () => {
state.timeLeft = state.timeLeft - 1;

//отобразить на странице

if(state.timeLeft > 0) {
    setTimeout(startTimer, 1000);
}

if(state.timeLeft <= 0) {
//сигнализировать что время вышло
}

}