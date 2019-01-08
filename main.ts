enum BrightnessEvent {
    //% block="すごく暗い"
    IsDark = 1,
    //% block="暗い"
    IsDark2 = 2,
    //% block="少し暗い"
    IsDark3 = 3,
    //% block="少し明るい"
    IsBright = 4,
    //% block="明るい"
    IsBright2 = 5,
    //% block="すごく明るい"
    IsBright3 = 6,
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
    //% blockId=is_dark block="すごく暗い"
    export function isDark(): boolean {
        if (input.lightLevel() < 20) {
            return true;
        } else {
            return false;
        }
    }
    //% blockId=is_dark2 block="暗い"
    export function isDark2(): boolean {
        if (input.lightLevel() < 40) {
            return true;
        } else {
            return false;
        }
    }
    //% blockId=is_dark3 block="少し暗い"
    export function isDark3(): boolean {
        if (input.lightLevel() < 60) {
            return true;
        } else {
            return false;
        }
    }
    //% blockId=is_bright block="少し明るい"
    export function isBright(): boolean {
        if (input.lightLevel() < 80) {
            return true;
        } else {
            return false;
        }
    }
    //% blockId=is_bright2 block="明るい"
    export function isBright2(): boolean {
        if (input.lightLevel() < 100) {
            return true;
        } else {
            return false;
        }
    }
    //% blockId=is_bright3 block="すごく明るい"
    export function isBright3(): boolean {
        if (input.lightLevel() > 100) {
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
