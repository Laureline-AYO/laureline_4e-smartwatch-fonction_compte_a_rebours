function Rebours () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showString("Remise à Zero")
        basic.pause(500)
        nbre_depart = 0
        basic.showNumber(nbre_depart)
    }
    if (input.buttonIsPressed(Button.B)) {
        nbre_depart += 1
        basic.showNumber(nbre_depart)
    }
    if (input.buttonIsPressed(Button.A)) {
        while (nbre_depart > 0) {
            basic.showNumber(nbre_depart)
            basic.pause(1000)
            nbre_depart += -1
        }
    }
}
let nbre_depart = 0
nbre_depart = 0
basic.forever(function () {
    Rebours()
})
