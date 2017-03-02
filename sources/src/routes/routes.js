import React from 'react'
import App from '../components/App'
import Hacking from '../components/Hacking'

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
}

function generateRoutes() {
  for (var key in paths) {
    root.childRoutes.push(paths[key])
  }
  return root
}

const routes = generateRoutes()

export default routes
