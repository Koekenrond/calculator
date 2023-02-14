function Tekens_Tonen () {
    if (Info_ingeven__actief == 1) {
        if (teken == 1) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . # # # .
                . . # . .
                . . . . .
                `)
        } else if (teken == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . # # # .
                . . . . .
                . . . . .
                `)
        } else if (teken == 3) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . # . .
                . # . # .
                . . . . .
                `)
        } else if (teken == 4) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . . . . .
                . . # . .
                . . . . .
                `)
        } else if (teken == 5) {
            basic.showLeds(`
                . . . . #
                . # . # .
                . . # . .
                . # . # .
                . . . . .
                `)
        } else if (teken == 6) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . # #
                # . # . .
                . # . . .
                `)
        }
    }
}
input.onButtonPressed(Button.A, function () {
    Knop_A()
})
function uitkomst_bereken () {
    if (antwoord == 1) {
        basic.clearScreen()
        teken = 1
        Info_ingeven__actief = 1
        A = 0
        B = 0
        antwoord = 0
    }
    if (Info_ingeven__actief == 0) {
        if (teken == 1) {
            basic.clearScreen()
            basic.pause(100)
            basic.showNumber(A + B)
        } else if (teken == 2) {
            basic.clearScreen()
            basic.pause(100)
            basic.showNumber(A - B)
        } else if (teken == 3) {
            basic.clearScreen()
            basic.pause(100)
            basic.showNumber(A * B)
        } else if (teken == 4) {
            basic.clearScreen()
            basic.pause(100)
            basic.showNumber(A / B)
        } else if (teken == 5) {
            basic.clearScreen()
            basic.pause(100)
            machten_berekenen()
        } else if (teken == 6) {
            if (A > -1) {
                basic.showNumber(Math.sqrt(A))
            } else {
                basic.showIcon(IconNames.No)
            }
        }
        antwoord = 1
    }
}
input.onButtonPressed(Button.AB, function () {
    uitkomst_bereken()
})
function Knop_A () {
    if (Info_ingeven__actief == 0) {
        basic.clearScreen()
        if (min == 0) {
            A += 1
        } else {
            A += -1
        }
        basic.showNumber(A)
    }
    if (Info_ingeven__actief == 1) {
        if (teken == 6) {
            teken = 1
        } else {
            teken += 1
        }
    }
}
input.onButtonPressed(Button.B, function () {
    Knop_B()
})
function machten_berekenen () {
    if (1 < B) {
        macht = B - 2
        antwoordmacht = A * A
        while (macht != 0) {
            antwoordmacht = antwoordmacht * A
            macht += -1
        }
    } else if (B == 1) {
        antwoordmacht = A
    } else if (B == 0) {
        antwoordmacht = 1
    } else if (B < -1) {
        macht = Math.abs(B) - 2
        antwoordmacht = A * A
        while (macht != 0) {
            antwoordmacht = antwoordmacht * A
            macht += -1
        }
        antwoordmacht = 1 / antwoordmacht
    } else if (B == -1) {
        antwoordmacht = 1 / A
    }
    basic.showNumber(antwoordmacht)
}
function Knop_B () {
    if (Info_ingeven__actief == 0) {
        basic.clearScreen()
        if (teken == 6) {
        	
        } else {
            if (min == 0) {
                B += 1
            } else {
                B += -1
            }
        }
        basic.showNumber(B)
    }
    if (Info_ingeven__actief == 1) {
        Info_ingeven__actief = 0
        basic.clearScreen()
    }
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (min == 0) {
        min = 1
    } else {
        min = 0
    }
})
let antwoordmacht = 0
let macht = 0
let min = 0
let antwoord = 0
let B = 0
let A = 0
let Info_ingeven__actief = 0
let teken = 0
teken = 1
Info_ingeven__actief = 1
A = 0
B = 0
antwoord = 0
basic.forever(function () {
    Tekens_Tonen()
})
