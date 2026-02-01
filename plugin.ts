/// <reference path="./lib/fresh.d.ts" />
// Fresh Plugin
// Documentation: https://github.com/user/fresh/blob/main/docs/plugins.md
const editor = getEditor();


// Register a command that users can invoke
editor.registerCommand("bitch", "Say bitch", async () => {
  editor.showStatusMessage("Hello from your plugin bitch!");
});

// React to editor events
editor.on("buffer_opened", (event) => {
  const info = editor.getBufferInfo();
  console.log("opened")
  editor.debug("okokokokokoko")
  if (info) {
    console.log(`Opened: ${info.path}`);
  }
});

// Example: Add a keybinding in your Fresh config:
// {
//   "keyBindings": {
//     "ctrl+alt+h": "command:hello"
//   }
// }
