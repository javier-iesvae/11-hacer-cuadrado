for (let index = 0; index <= 4; index++) {
    led.plot(index, 0)
    basic.pause(500)
}
for (let index = 0; index <= 4; index++) {
    led.plot(4, index)
    basic.pause(500)
}
for (let index = 0; index <= 4; index++) {
    led.plot(4 - index, 4)
    basic.pause(500)
}
for (let index = 0; index <= 4; index++) {
    led.plot(0, 4 - index)
    basic.pause(500)
}
basic.clearScreen()
