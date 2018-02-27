import { warn } from 'utils/debug'
class AsyncBtn {
    constructor(btn) {
        this.btn = typeof btn === 'string' ? document.querySelector(btn) : btn
        if (!this.btn) {
            warn('Can not resolve the dom')
        }
        this.childNodes = btn.innerHTML
        this.btnCopy = btn.cloneNode(true)
    }
    loading(opt) {

        // let {icon = true, disable = true, opacity = 0.7, text} = opt
        this.btn.disabled = 'disabled'
    }
    end() {
        this.btn.disabled = false
        this.btn.innerHTML = this.childNodes
    }
}

module.exports = function(btn) {
    return new AsyncBtn(btn)
}