class SwitchButton {
    status;
    lamp;

    constructor(status) {
        this.status = status;
        this.lamp = lamp;
    }

    connectToLamp(lamp) {
        if (this.status) {
            lamp.setStatus(true)
        } else {
            lamp.setStatus(false)
        }
    }

    switchOn(lamp) {
        this.status = true
        this.lamp.turnOn()
    }

    switchOff() {
        this.status = false
        this.lamp.turnOff()
    }
}
