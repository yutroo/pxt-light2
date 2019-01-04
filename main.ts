enum BrightnessEvent {
    //% block="暗い"
    IsDark = 1,
    //% block="明るい"
    IsBrighter = 2,
    //% block="少し暗い"
    isDarker = 3,
}

//% weight=70 icon="\uf0e7" color=#d2691e block="電気の利用"
namespace gp {
    //% blockId=turn_on block="スイッチON"
    export function turnON(): void {
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
    //% blockId=turn_off block="スイッチOFF"
    export function turnOFF(): void {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    //% blockId=is_dark block="暗い"
    export function isDark(): boolean {
        if (input.lightLevel() < 30) {
            return true;
        } else {
            return false;
        }
    }
    //% blockId=is_dark block="少し暗い"
    export function isDarker(): boolean {
        if (input.lightLevel() < 60) {
            return true;
        } else {
            return false;
        }
    }
    //% blockId=brightness_determination block="%v より %flag"
    //% v.min=0 v.max=255
    export function brightnessDetermination(v: number, flag: BrightnessEvent): boolean {
        let res: boolean = true;
        if (flag == 2) {
            res = !res;
        }
        if (input.lightLevel() < v) {
            return res;
        } else {
            return !res;
        }
    }
}
 