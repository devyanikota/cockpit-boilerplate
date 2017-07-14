import React from 'react'
import App from '../containers/App'
import Hacking from '../containers/Hacking'
import Files from '../containers/Files'
import Gplugin from '../containers/Gplugin'

let root = {
  path: '/',
  component: App,
  indexRoute: {
    component: Hacking
  },
  childRoutes: [],
}

export let paths = {
  "Hacking": {
    path: "/hacking",
    icon: "fa-dashboard",
    component: Hacking,
    indexRoute: true
  },
  "Files": {
    path: "/files",
    icon: "pficon-repository",
    component: Files,
    indexRoute: false
  },
  "Gplugin":{
    path: "/gplugin",
    icon: "fa-archive",
    component: Gplugin,
    indexRoute: true
  }
}

function generateRoutes() {
  for (var key in paths) {
    root.childRoutes.push(paths[key])
  }
  return root
}

const routes = generateRoutes()

export default routes
