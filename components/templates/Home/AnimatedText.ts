// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
    private queue: any[];
    private el: any;
    private readonly chars: string;
    private resolve: ((value: unknown) => void) | undefined;
    private frameRequest?: number
    private frame?: number

    constructor(el) {
        this.el = el
        this.queue = []
        this.chars = '!<>-_\\/[]{}—=+*^?#________'
        this.update = this.update.bind(this)
    }

    setText(newText) {
        const oldText = this.el.innerText
        const length = Math.max(oldText.length, newText.length)
        const promise = new Promise((resolve) => this.resolve = resolve)
        this.queue = []
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || ''
            const to = newText[i] || ''
            const start = Math.floor(Math.random() * 40)
            const end = start + Math.floor(Math.random() * 40)
            this.queue.push({from, to, start, end})
        }
        // @ts-ignore
        cancelAnimationFrame(this.frameRequest)
        this.frame = 0
        this.update()
        return promise
    }

    update() {
        let output = ''
        let complete = 0
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let {from, to, start, end, char} = this.queue[i]
            // @ts-ignore
            if (this.frame >= end) {
                complete++
                output += to
            } else { // @ts-ignore
                if (this.frame >= start) {
                    if (!char || Math.random() < 0.28) {
                        char = this.randomChar()
                        this.queue[i].char = char
                    }
                    output += `<span class="dud">${char}</span>`
                } else {
                    output += from
                }
            }
        }
        this.el.innerHTML = output
        if (complete === this.queue.length) {
            // @ts-ignore
            this.resolve()
        } else {
            this.frameRequest = requestAnimationFrame(this.update)
            // @ts-ignore
            this.frame++;
        }
    }

    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
}

// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————


export const init = (phrases: string[] = ['']): void => {
    const el = document.querySelector('.text')
    const fx = new TextScramble(el)
    let counter = 0
    const next = () => {
        fx.setText(phrases[counter]).then(() => {
            setTimeout(next, 800)
        })
        counter = (counter + 1) % phrases.length
    }
    next()
}


