export default class Hostname {
  constructor() {s
    var client = cockpit.dbus('org.freedesktop.hostname1')
    this.proxy = client.proxy('org.freedesktop.hostname1',
                              '/org/freedesktop/hostname1');
  }
  getHostname(callback) {
    var proxy = this.proxy
    wait_valid(proxy, function() {
      callback(proxy.PrettyHostname)
    })
  }
  setHostname(hostname, callback) {
      var proxy = this.proxy
      wait_valid(proxy, function() {
        proxy.SetHostname(hostname, true)
        .done(function(result) {
          callback(true)
        })
        .fail(function(err) {
          console.log("Failed to set hostname!")
          console.log(err)
        })
      })
  }
}

const wait_valid = (proxy, callback) => {
  proxy.wait(function() {
    if (proxy.valid) {
      callback();
    }
  });
}
