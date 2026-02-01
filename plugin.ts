/// <reference path="./lib/fresh.d.ts" />
const editor = getEditor();

globalThis.call_api = function() {
  console.log("calling api");
  editor.showStatusMessage("Hello from your plugin bitch!");

}

// React to editor events
editor.on("cursor_moved", (event) => {
  editor.showStatusMessage("jsjsjsjsjsjsjsjsjsjsj (risa dev)")
});

// Register a command that users can invoke
editor.registerCommand("call_api", "Call API","call_api", null);

