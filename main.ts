input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    Torpedo = game.createSprite(Player.get(LedSpriteProperty.X), Player.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        Torpedo.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    Torpedo.delete()
})
input.onButtonPressed(Button.B, function () {
    Player.change(LedSpriteProperty.X, 1)
})
let Torpedo: game.LedSprite = null
let Player: game.LedSprite = null
game.setLife(5)
Player = game.createSprite(2, 4)
basic.forever(function () {
	
})
