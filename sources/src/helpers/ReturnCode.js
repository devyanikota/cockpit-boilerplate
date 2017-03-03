export default function CheckReturnCode(command, callback) {
  let cmd = command != null ? command : ["/bin/true"]
  let proc = cockpit.spawn(
     cmd,
     {err: "message"}
  )
  .done(function() {
      callback(true)
  })
  .fail(function(err, resp) {
    console.log("Some return code is bad!")
    console.log(err)
    callback(false)
  })
}
