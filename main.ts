input.onButtonPressed(Button.A, function () {
    servos.P0.run(50)
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Sad)
})
