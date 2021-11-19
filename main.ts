input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    game.resume()
})
input.onButtonPressed(Button.A, function () {
    pausa = 300
})
input.onButtonPressed(Button.AB, function () {
    game.pause()
})
input.onButtonPressed(Button.B, function () {
    pausa = 80
})
let pausa = 0
let pilota = game.createSprite(4, 2)
pausa = 500
basic.forever(function () {
    pilota.move(1)
    basic.pause(pausa)
    pilota.ifOnEdgeBounce()
})
