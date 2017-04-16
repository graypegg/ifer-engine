let sample = {
  "config": {
    "firstScene": "start"
  },
  "state": {
    "character": {
      "name": "Bob Jones",
      "height": 4
    }
  },
  "scenes": {
    "start": {
      "type": "info",
      "name": "Start",
      "display": "This is the start!",
      "events": {
        "_advance": {
          "run": "load",
          "with": { "scene": "createChar" }
        }
      },
      "ui": []
    },
    "createChar": {
      "type": "info",
      "name": "UI Test",
      "display": "Please fill out the details",
      "events": {
        "_advance": {
          "run": "loadIf",
          "with": [
            {
              "rule": [ "character.name", "=", "Bob Jones" ],
              "scene": "huh"
            },
            {
              "rule": "otherwise",
              "scene": "display"
            }
          ]
        }
      },
      "ui": [
        {
          "type": "textbox",
          "name": "Name",
          "bind": "character.name"
        },
        {
          "type": "slider",
          "name": "Height",
          "bind": "character.height"
        }
      ]
    },
    "displayInfo": {
      "type": "info",
      "name": "Display",
      "display": "Hello {{character.name}}!",
      "events": {
        "_advance": {
          "run": "quit"
        }
      },
      "ui": []
    },
    "huh": {
      "type": "info",
      "name": "Branch",
      "display": "Branched!",
      "events": {
        "_advance": {
          "run": "quit"
        },
        "goBack": {
          "run": "load",
          "with": { "scene": "createChar" }
        }
      },
      "ui": [
        {
          "type": "button",
          "name": "Back",
          "click": "goBack"
        }
      ]
    }
  }
}
