let lightlevel = 0
let ledamount = 0
let x = 0
let y = 0
basic.forever(function () {
    lightlevel = pins.analogReadPin(AnalogPin.P0)
    ledamount = Math.map(lightlevel, 0, 1023, 0, 25)
    ledamount = Math.round(ledamount)
    basic.clearScreen()
    for (let i = 0; i <= ledamount - 1; i++) {
        x = i % 5
        y = 4 - Math.floor(i / 5)
        led.plot(x, y)
    }
    basic.pause(500)
})
