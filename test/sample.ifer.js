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
          "with": [
            "createChar"
          ]
        }
      },
      "ui": []
    },
    "createChar": {
      "type": "info",
      "name": "Create Character",
      "display": "Please fill out the details",
      "events": {
        "_advance": {
          "run": "load",
          "with": [
            "displayInfo"
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
    }
  }
}
