"use babel"

import { CompositeDisposable } from "atom"

export default {

  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable()
  },

  deactivate() {
    this.subscriptions.dispose()
  },

  serialize() {
    return {}
  },

  getChildren(parentTag) {
    console.log("giving children -->", parentTag)
    switch (parentTag) {
      case "html": return ["head","body"]
      case "head": return ["meta","title","script","style","link"]
      case "body": return ["div","section","h1","menu","p","span","table"]
      case "span": return ["b","i","em","strong","ins"]
      case "table": return ["theader","tfooter","td","tr","tbody"]
      case "tag": return [""]
      default: return []
    }
  },

  getSelf() {
    return {name: "html", functionality: {getChildren:this.getChildren.bind(this)}}
  }

}
