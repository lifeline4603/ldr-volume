let lightlevel2 = 0
let maxlevels = 0
let brightness = 0
let lightlevel = 0
input.onButtonPressed(Button.A, function () {
    lightlevel2 = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(lightlevel2)
    basic.pause(1000)
    basic.clearScreen()
    drawBarGraph(lightlevel2)
})
function drawBarGraph (value: number) {
    // number doesnt actually error not sure why it shows up as one
    maxlevels = 5
    brightness = Math.map(value, 0, 1023, 0, 25)
    for (let y = 0; y <= maxlevels - 1; y++) {
        for (let x = 0; x <= 4; x++) {
            if (y * 5 + x < Math.floor(brightness)) {
                led.plot(x, 4 - y)
            } else {
                led.unplot(x, 4 - y)
            }
        }
    }
}
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        basic.pause(4000)
    } else {
        lightlevel = pins.analogReadPin(AnalogPin.P0)
        drawBarGraph(lightlevel)
    }
})
