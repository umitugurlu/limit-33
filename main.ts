/**
 * Oyunun kuralları
 * 
 * Bir oyuncu toplam sıfır ile başlar.
 * 
 * Her turda 1 ile 10 arasında rastgele bir sayı üretilir ve oyuncunun toplamına eklenir.
 * 
 * Oyuncunun toplamı 33'ü aşarsa, oyuncu kaybeder ve oyun sona erer: Game Over.
 * 
 * Her turun sonunda oyuncuya başka bir tur tamamlamak veya çıkmak isteyip istemedikleri sorulur.
 * 
 * Çıkarlarsa, oyuncuya aşağıdaki gibi bir puan verilir:
 * 
 * Toplamları 24'ün altında veya 33'ün üzerindeyse Game OVer
 * 
 * Toplamları 24 ila 33 arasındaysa 10 x (toplam - 23) puan.
 * 
 * Örneğin, toplam 29 ise oyuncu, 10 x (29-23) = 60 puan alır. Toplam 33'e ulaştıklarında ulaşabilecekleri maksimum puan 10 x (33-23) = 100'dür!
 */
let state = true
let score = 0
while (score < 34 && state) {
    basic.showString("?")
    basic.pause(200)
    state = false
    if (input.buttonIsPressed(Button.A)) {
        score = score + randint(0, 10)
        state = true
    } else if (input.buttonIsPressed(Button.B)) {
        if (score < 24 || score > 33) {
            score = 0
            game.gameOver()
        } else {
            score = 10 * (score - 23)
            game.setScore(score)
        }
    }
    basic.showNumber(score)
}
score = 0
game.gameOver()
