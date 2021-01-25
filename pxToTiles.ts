namespace sprites {
    /**
     * Sets get the sprite's tile X position. Assuming 16x16 tile
     */
    export function getTileX(sprite: Sprite) : number {
        if (!sprite) return 0;
        return sprite.x / 16;
    }

    /**
     * Sets get the sprite's tile Y position. Assuming 16x16 tile
     */
    export function getTileY(sprite: Sprite) : number {
        if (!sprite) return 0;
        return sprite.y / 16;
    }
}

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {

    let speed = 50
    let arrow = img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . e e . . . .
        . . . . . . . . . . 1 1 e . . .
        . . . . . . . . . . 1 1 1 e . .
        1 1 1 . . . . . . . 1 1 1 1 e .
        . . . e . . . . . . 1 1 1 1 1 e
        1 1 1 1 e e e e e e 1 1 1 1 1 e
        . . . e . . . . . . 1 1 1 1 1 e
        1 1 1 . . . . . . . 1 1 1 1 1 e
        . . . . . . . . . . 1 1 1 1 e .
        . . . . . . . . . . 1 1 1 e . .
        . . . . . . . . . . 1 1 e . . .
        . . . . . . . . . . e e . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `

    let arrowClone = arrow.clone()
    arrowClone.flipX()

    let projImg = arrow
    if(oldLady.image == oldLadyImgClone){
       speed = -50
       projImg= arrowClone
    } else {
       speed = 50
    }

    let projectile = sprites.createProjectileFromSprite(projImg, oldLady, speed, 0)
    let axeImg1 = img`
        f f f f f f f f f f f f f f f f
        f 9 9 9 f 9 f 9 9 f 9 f 9 9 9 f
        f 9 9 9 f f f 9 9 9 9 f 9 9 9 f
        f 9 9 9 f 9 f 9 9 f 9 9 9 9 9 f
        f 9 9 9 f 9 f 9 9 f 9 f 9 9 9 f
        f f f f f f f f f f f f f f f f
        . . . . . . . f f . . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . . f f . . . . . . .
    `
    let axeImg2 = img`
        . . . . . . . . . . f f f f f f
        . . . . . . . . . . f 9 9 9 9 f
        . . . . . . . . . . f 9 9 9 9 f
        . . . . . . . . . . f 9 9 9 9 f
        . . . . . . . . . . f f f f f f
        . . . . . . . . . . f 9 9 f 9 f
        . . . . . . . . . . f f f f f f
        f f f f f f f f f f f 9 9 9 9 f
        f f f f f f f f f f f 9 9 9 9 f
        . . . . . . . . . . f f f 9 f f
        . . . . . . . . . . f 9 9 9 9 f
        . . . . . . . . . . f f 9 f f f
        . . . . . . . . . . f 9 9 9 9 f
        . . . . . . . . . . f 9 9 9 9 f
        . . . . . . . . . . f 9 9 9 9 f
        . . . . . . . . . . f f f f f f
    `
    let axeImg3 = img`
        . . . . . . . f f . . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . . f f . . . . . . .
        f f f f f f f f f f f f f f f f
        f 9 9 9 f 9 f 9 9 f 9 f 9 9 9 f
        f 9 9 9 9 9 f 9 9 f 9 f 9 9 9 f
        f 9 9 9 f 9 9 9 9 f f f 9 9 9 f
        f 9 9 9 f 9 f 9 9 f 9 f 9 9 9 f
        f f f f f f f f f f f f f f f f
    `
    let axeImg4 = img`
        f f f f f f . . . . . . . . . .
        f 9 9 9 9 f . . . . . . . . . .
        f 9 9 9 9 f . . . . . . . . . .
        f 9 9 9 9 f . . . . . . . . . .
        f f f 9 f f . . . . . . . . . .
        f 9 9 9 9 f . . . . . . . . . .
        f f 9 f f f . . . . . . . . . .
        f 9 9 9 9 f f f f f f f f f f f
        f 9 9 9 9 f f f f f f f f f f f
        f f f f f f . . . . . . . . . .
        f 9 f 9 9 f . . . . . . . . . .
        f f f f f f . . . . . . . . . .
        f 9 9 9 9 f . . . . . . . . . .
        f 9 9 9 9 f . . . . . . . . . .
        f 9 9 9 9 f . . . . . . . . . .
        f f f f f f . . . . . . . . . .
    `
    animation.runImageAnimation(
projectile,
[axeImg1, axeImg2, axeImg3, axeImg4 ],
100,
true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let oldLadyTileX = sprites.getTileX(oldLady);
    if(oldLady.image == oldLadyImgClone){
        oldLadyTileX--
    } else {
        oldLadyTileX++
    }

    let l = tiles.getTileLocation(oldLadyTileX, sprites.getTileY(oldLady))
    tiles.setTileAt(l, myTiles.tile2)
    tiles.setWallAt(l, true)
})

controller.left.onEvent(ControllerButtonEvent.Pressed, function() {
    oldLady.setImage(oldLadyImgClone)
})

controller.right.onEvent(ControllerButtonEvent.Pressed, function() {
    oldLady.setImage(oldLadyImg)
})

let oldLadyImg = img`
    .....cccccccccccccccc.........
    ...cc11111111c1111111c........
    ...cc1111111111111111c........
    ..c111111111111111111c........
    .cc1111111111d1111111c........
    c1111111ddddddddddd11c........
    c111111ddddddddddddde.........
    c111111dddd1dddddd5de.........
    c111111dddd1dddddd5de.........
    c11111dddddd11dd55dde.........
    c11111dddddd11dd55dde.........
    ccc1111ddddddddbddddefffffffff
    ..c1111dddddddddddddef9f9f9f9f
    ..c1111dddddddddddddef9fff999f
    ...cc1dddddddd2dddddef9f9f9f9f
    .....bddddddddddddde.fffffffff
    ...2244444444ddd4442....ff....
    ..22244ee44444444444eee.ff....
    ..2224bbdee444244444bddeff....
    ..2224bbdee444444444bddeff....
    ..2224bbdee444444444bddeff....
    ..22244ee44444244444eee.ff....
    ..2224444444444444442...ff....
    ..2224444444444444442.........
    ..4444444444444444444.........
    ..4444444444444444444.........
    ...444bbb44444bbbb44..........
    .....ebbdee..ebbdde...........
    .....222b22..222bb2...........
    .....2.2222..2.2222...........
`
let oldLadyImgClone = oldLadyImg.clone()
oldLadyImgClone.flipX()
let oldLady = sprites.create(oldLadyImg, SpriteKind.Player)
controller.moveSprite(oldLady)
scene.cameraFollowSprite(oldLady)

