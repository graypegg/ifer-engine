let sample = {
  "config": {
    "firstScene": "start"
  },
  "things": {
    "apple": {
      "name": "Apple",
      "actions": {
        "eat": {
          "run": "loadIf",
          "with": [
            {
              "rule": [ "character.hunger", ">", 4 ],
              "scene": "eatApple"
            },
            {
              "rule": "otherwise",
              "scene": "eatAppleNotHungry"
            }
          ]
        }
      },
      "scenes": {
        "eatApple": {
          "type": "info",
          "name": "You ate the apple",
          "display": "Tasted like an apple.",
          "events": {
            "_advance": {
              "run": "return"
            }
          }
        },
        "eatAppleNotHungry": {
          "type": "info",
          "name": "You didn't ate the apple",
          "display": "You're not hungry enough, your hunger is {{ character.hunger }}",
          "events": {
            "_advance": {
              "run": "return"
            }
          }
        }
      }
    }
  },
  "state": {
    "character": {
      "name": "Bob Jones",
      "hunger": 4
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
              "scene": "displayInfo"
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
          "name": "Hunger",
          "bind": "character.hunger"
        }
      ]
    },
    "displayInfo": {
      "type": "info",
      "name": "Display",
      "display": "Hello {{character.name}}!",
      "events": {
        "_advance": {
          "run": "load",
          "with": { "scene": "appleScene" }
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
    },
    "appleScene": {
      "type": "in world",
      "name": "Testing Objects",
      "display": "Oh look, an Apple",
      "things": {
        "THE apple": {
          "is": "apple"
        }
      }
    }
  }
}
