export class Ls {
  constructor() {
  }
  static call(callback, args) {
    let cmd = ["ls"]
    cmd = cmd.concat(args)
    var self = this
    let proc = cockpit.spawn(
       cmd,
       {err: "message",
       }
    )
    .done(function(resp) {
        //console.log(resp)
        callback(resp)
    })
    .fail(function(err, resp) {
      console.log("Couldn't list files")
      //console.log(err.message)
      callback(resp)
    })
  }
  static brief(callback, path) {
    Ls.call(callback, [path])
  }
  static full(callback, path) {
    Ls.call(callback, [path, "-l"])
  }
}
