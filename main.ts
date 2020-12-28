input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.X, -1)
})
function DispBlank (num: number) {
    for (let index = 0; index <= 4; index++) {
        led.unplot(index, num)
    }
}
input.onButtonPressed(Button.AB, function () {
    Torpedo = game.createSprite(Player.get(LedSpriteProperty.X), Player.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        Torpedo.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    Torpedo.delete()
    Enemy[0] = Player.get(LedSpriteProperty.X)
})
input.onButtonPressed(Button.B, function () {
    Player.change(LedSpriteProperty.X, 1)
})
function DispEnemy (num: number) {
    for (let index = 0; index <= 4; index++) {
        if (Enemy[0] == 1) {
            led.plot(index, num)
        }
    }
}
let Torpedo: game.LedSprite = null
let Player: game.LedSprite = null
let Enemy: number[] = []
game.setLife(5)
Enemy = [1, 1, 1, 1, 1]
let Blank = [0, 0, 0, 0, 0]
Player = game.createSprite(2, 4)
basic.forever(function () {
    basic.pause(2000)
    while (true) {
        for (let index = 0; index <= 4; index++) {
            DispEnemy(index)
            basic.pause(4000)
            DispBlank(index)
        }
        Enemy = [1, 1, 1, 1, 1]
    }
})
