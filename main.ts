function Sus () {
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(622, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
}
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        # . . # #
        # # # # #
        # # # # .
        # . . # .
        `)
    music.setVolume(99)
    Sus()
    Clasic()
    Sus()
    music.playTone(622, music.beat(BeatFraction.Double))
    dododo()
    dododo()
    music.rest(music.beat(BeatFraction.Whole))
    Sus()
    Clasic()
    Sus()
    music.playTone(622, music.beat(BeatFraction.Double))
    dododo()
    dododo()
})
function dododo () {
    music.playTone(622, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
}
function Clasic () {
    music.playTone(440, music.beat(BeatFraction.Double))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Double))
}
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
	
})
