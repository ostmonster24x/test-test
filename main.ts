input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . . #
        # # . # #
        # . # . #
        # . . . #
        # . . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
basic.showString("hallo du huhrensohn ")
basic.forever(function () {
    radio.setGroup(8)
    radio.setFrequencyBand(64)
})
