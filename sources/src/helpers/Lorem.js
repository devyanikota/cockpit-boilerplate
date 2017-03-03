export function Lorem(name, callback) {
  let path = `/live_data/lorem/${name}`
  console.log(`Reading ${path}`)
  let lorem = cockpit.file(path, {superuser: 'try'})
  lorem.read()
    .done(function(resp) {
      console.log(resp)
      resp = resp.split('\n').join('<br />')
      callback(resp)
    })
    .fail(function(error) {
      console.log(`Error opening ${path}`)
      console.log(error)
    })
    .always(function() {
      lorem.close()
    })
}
