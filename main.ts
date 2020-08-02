input.onButtonPressed(Button.A, function () {
    점수 = 0
})
let 점수 = 0
점수 = 0
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        basic.clearScreen()
    } else {
        점수 += 1
        basic.showNumber(점수)
        basic.pause(2000)
    }
})
