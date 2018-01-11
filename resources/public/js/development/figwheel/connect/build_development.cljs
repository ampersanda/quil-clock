(ns figwheel.connect.build-development (:require [clock.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "development", :websocket-url "ws://localhost:3449/figwheel-ws"})

