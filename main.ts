input.onButtonPressed(Button.A, function () {
    if (_actief == 0) {
        basic.clearScreen()
        A += 1
        basic.showNumber(A)
    }
    if (_actief == 1) {
        if (_ == 5) {
            _ = 1
        } else {
            _ += 1
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (antwoord == 1) {
        basic.clearScreen()
        _ = 1
        _actief = 1
        A = 0
        B = 0
        antwoord = 0
    }
    if (_actief == 0) {
        if (_ == 1) {
            basic.clearScreen()
            basic.pause(100)
            basic.showNumber(A + B)
        } else if (_ == 2) {
            basic.clearScreen()
            basic.pause(100)
            basic.showNumber(A - B)
        } else if (_ == 3) {
            basic.clearScreen()
            basic.pause(100)
            basic.showNumber(A * B)
        } else if (_ == 4) {
            basic.clearScreen()
            basic.pause(100)
            basic.showNumber(A / B)
        } else if (_ == 5) {
            basic.clearScreen()
            basic.pause(100)
            macht = B - 2
            antwoordmacht = A * A
            while (macht != 0) {
                antwoordmacht = antwoordmacht * A
                macht += -1
            }
            basic.showNumber(antwoordmacht)
        }
        antwoord = 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (_actief == 0) {
        basic.clearScreen()
        B += 1
        basic.showNumber(B)
    }
    if (_actief == 1) {
        _actief = 0
        basic.clearScreen()
    }
})
let antwoordmacht = 0
let macht = 0
let antwoord = 0
let B = 0
let A = 0
let _actief = 0
let _ = 0
_ = 1
_actief = 1
A = 0
B = 0
antwoord = 0
basic.forever(function () {
    if (_actief == 1) {
        if (_ == 1) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . # # # .
                . . # . .
                . . . . .
                `)
        } else if (_ == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . # # # .
                . . . . .
                . . . . .
                `)
        } else if (_ == 3) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . # . .
                . # . # .
                . . . . .
                `)
        } else if (_ == 4) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . . . . .
                . . # . .
                . . . . .
                `)
        } else if (_ == 5) {
            basic.showLeds(`
                . . . . #
                . # . # .
                . . # . .
                . # . # .
                . . . . .
                `)
        }
    }
})
