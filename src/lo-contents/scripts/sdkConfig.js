module.exports = `var consumerConfig = {
    "renderers": {
      "modules": {
        "itembank-player": {
          "baseURL": "https://sm.sdk.leonardodls.com/modules/multi-item-activity-player/releases/",
          "version": "0.0.30",
          "js": "0.0.30/multiItemActivityPlayer",
          "css": "0.0.30/multiItemActivityPlayer"
        },
        "imagelabel-dnd": {
          "baseURL": "https://sm.sdk.leonardodls.com/modules/image-label-dnd-player/releases/",
          "version": "0.0.31",
          "js": "0.0.31/libs-imagelabel-dnd-item-player",
          "dependencies": [
            "react",
            "react-dom",
            "libs-player-ui-components",
            "react-dnd",
            "react-dnd-html5-backend"
          ]
        },
        "mcsr-radio": {
          "baseURL": "https://sm.sdk.leonardodls.com/modules/mcq-radio-player/releases/",
          "version": "0.0.32",
          "js": "0.0.32/libs-mcsr-radio-item-player",
          "dependencies": [
            "react",
            "react-dom",
            "libs-player-ui-components"
          ]
        },
        "fib-dnd": {
          "baseURL": "https://sm.sdk.leonardodls.com/modules/fib-dnd-player/releases/",
          "version": "0.0.20",
          "js": "0.0.20/libs-fib-dnd-item-player",
          "dependencies": [
            "react",
            "react-dom",
            "libs-player-ui-components",
            "react-dnd",
            "react-dnd-html5-backend"
          ]
        },
        "order-list": {
          "baseURL": "https://sm.sdk.leonardodls.com/modules/order-list-player/releases/",
          "version": "0.0.9",
          "js": "0.0.9/libs-order-list-item-player",
          "dependencies": [
            "react",
            "react-dom",
            "libs-player-ui-components"
          ]
        },
        "react": {
          "baseURL": "https://sm.sdk.leonardodls.com/modules/react/releases/",
          "version": "16.12.0",
          "js": "16.12.0/react.development"
        },
        "react-dom": {
          "baseURL": "https://sm.sdk.leonardodls.com/modules/react-dom/releases/",
          "version": "16.12.0",
          "js": "16.12.0/react-dom.development"
        },
        "react-dnd": {
          "baseURL": "https://cdn.jsdelivr.net/npm/react-dnd@10.0.2/dist/umd/",
          "js": "ReactDnD.min"
        },
        "react-dnd-html5-backend": {
          "baseURL": "https://cdn.jsdelivr.net/npm/react-dnd-html5-backend@10.0.2/dist/umd/",
          "js": "ReactDnDHTML5Backend.min"
        },
        "libs-player-ui-components": {
          "baseURL": "https://sm.sdk.leonardodls.com/modules/libs-player-ui-components/releases/",
          "version": "0.0.20",
          "js": "0.0.20/libs-player-ui-components"
        }
      }
    }
  }`