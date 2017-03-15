export class Channel {
  constructor() {
    this._outputCallback = null
    this._exitCallback = null
    this.buffer = ""
    this._chomp_input = true
  }
  start(outputCallback, exitCallback) {
    this._outputCallback = outputCallback
    this._exitCallback = exitCallback

    var cmd = ['python']

    this.channel = cockpit.channel({
      payload: "stream",
      "environ": [
        "TERM=xterm-256color",
        "PATH=/sbin:/bin:/usr/sbin:/usr/bin"
      ],
      "spawn": cmd,
      "pty": true,
      "err": "out",
    })

    var self = this
    $(this.channel).on("close", function(ev, options) {
      self._exitCallback(options)
    })

    $(this.channel).on("message", $.proxy(this.handleOutput, this))
  }
  handleOutput(ev, payload) {
    if (!payload.match(/>>>/)) {
      this.buffer = this.buffer.concat(payload)
      return
    }
    payload = this.buffer.concat(payload)
    this.buffer = ""

    payload = payload.split('\n')
    if (this._chomp_input) {
      payload.shift()
      this._chomp_input = false
    }
    this._outputCallback(payload)
  }
  close() {
    if (this.channel.valid) {
      this.channel.close()
    }
  }
  handleInput(input) {
    input = input == null ? "" : input
    if (this.channel && this.channel.valid) {
      this.channel.send(input + "\n")
    }
    this._chomp_input = true
  }
}
