controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    sprites.destroy(Pinto_Aleatorio)
})
let Pinto_Aleatorio: Sprite = null
Pinto_Aleatorio = sprites.create(assets.image`pinto aleatorio`, SpriteKind.Player)
controller.moveSprite(Pinto_Aleatorio)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(Pinto_Aleatorio)
game.showLongText("Press B To Reset, A to Ignore", DialogLayout.Full)
tiles.placeOnRandomTile(Pinto_Aleatorio, sprites.dungeon.collectibleInsignia)
