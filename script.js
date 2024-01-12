// Gibt an wie gross eine Kachel auf dem Spielbrett ist
const tileSize = 32

// Holt das canvas aus dem HTML und setzt die Grösse fest
const canvas = document.querySelector("#canvas")
canvas.width = tileSize * 10
canvas.height = tileSize * 10

// Holt den 2D-Kontext auf dem wir zeichnen
const ctx = canvas.getContext("2d")
// Macht das die Zeichnung verpixelt dargestellt wird
ctx.imageSmoothingEnabled = false

// Hole das Bild aus dem HTML. Das Bild hat die ID character, und könnte über das HTML einfach ausgetauscht werden.
const img = document.querySelector("#character")

// Verschiedene Variablen um die Animation zu steuern.
let pos = 0 // An welcher Position befindet sich die Animation gerade. Durchlauf von links nach rechts.
let type = 0 // Welche Art der Animation soll gerade gezeigt werden. In welcher Zeile befindet sich die Animation.
let frameCounter = 0 // Zählt wie viele Frames vergangen sind. Kann verwendet werden um die Animationsgeschwindigkeit zu steuern.
let x = 0  // Die x-Koordinate im Spielbrett, wo die obere linke Ecke der Animation hinkommt.
let y = 0  // Die y-Koordinate im Spielbrett, wo die obere linke Ecke der Animation hinkommt.

function animationLoop () {
    // Lösche den Inhalt aus dem letzten Frame, damit neu gezeichnet werden kann.
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Zeichne die Animation an der richtigen Stelle im Spielbrett.
    ctx.drawImage(img, // Von welchem Bild soll gezeichnet werden.
        pos * tileSize, // X-Koordinate in dem Bild, wo ausgeschnitten wird.
        type * tileSize,// Y-Koordinate in dem Bild, wo ausgeschnitten wird.
        tileSize,       // Breite für den Bildausschnitt
        tileSize,       // Höhe für den Bildausschnitt
        x * tileSize,   // X-Koordinate im Spielbrett, wo das Bild gezeichnet wird.
        y * tileSize,   // Y-Koordinate im Spielbrett, wo das Bild gezeichnet wird.
        tileSize,       // Wie breit das Bild gezeichnet wird. Das Bild kann hier skaliert werden.
        tileSize        // Wie hoch das Bild gezeichnet wird. Das Bild kann hier skaliert werden.
    )

    updateAnimation()

    window.requestAnimationFrame(animationLoop)
}

function updateAnimation() {
    frameCounter = frameCounter + 1
    if(frameCounter > 5){
     frameCounter = 0
    pos = pos + 1
    if(pos >2) pos = 0// TODO: passe hier die Variablen anm die die Animation steuern.
    // Zum Beispiel:
    // Erhöhen Sie `type` um 1. Wenn `type` grösser als 3 ist, setzen Sie es auf 0.
}
}

// Start ins Programm. Startet die Animations-Schleife
function main() {
    window.requestAnimationFrame(animationLoop)
}


// Hört auf Tastendrucke.
// Die verschiedenen Tasten können über `code` geprüft werden.
// Wenn Sie nicht wissen was der Code für eine bestimmte Taste ist,
// können Sie das mit `console.log(code)` herausfinden.
window.onkeydown = function({code}) {

    if (code === "ArrowRight") {
        type = 2
        x = x + 5
        // Was soll passieren wenn die rechte Pfeiltaste gedrückt wird?  
    }
    if(code === "ArrowRight"){
        type = 1
        x = x - 5
    }
}

main()