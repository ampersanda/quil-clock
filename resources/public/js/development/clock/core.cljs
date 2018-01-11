(ns clock.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn setup []
  (q/frame-rate 30)
  (q/color-mode :rgb)
  )

(defn draw-state [state]
  ; Clear the sketch by filling it with light-grey color.
  (q/background 150)

  (let [max-scale-h (- 1 (/ 1 12))
        max-scale-m (- 1 (/ 1 60))
        max-scale-s (- 1 (/ 1 60))]
    (let
      [
        h (q/map-range
           (if (> (q/hour) 12) (- (q/hour) 12) (q/hour)) 0 11 0 max-scale-h)
        m (q/map-range (q/minute) 0 59 0 max-scale-m)
        s (q/map-range (q/seconds) 0 59 0 max-scale-s)

        half-width (/ (q/width) 2)
        half-height (/ (q/height) 2)
        ]

      ;; let body
      (q/translate half-width half-height)
      (q/rotate (* -1 q/HALF-PI))

      (q/stroke-weight 8)
      (q/no-fill)

      (let [angle (* q/TWO-PI h)]
        (q/stroke 255 100 150)
        (q/arc 0 0 300 300 0 angle)

        (q/push-style)
        (q/rotate angle)
        (q/line 0 0 60 0)
        (q/pop-style))

      (let [angle (* q/TWO-PI m)]
        (q/stroke 150 100 255)
        (q/arc 0 0 280 280 0 angle)

        (q/push-style)
        (q/rotate angle)
        (q/line 0 0 70 0)
        (q/pop-style))

      (let [angle (* q/TWO-PI s)]
        (q/stroke 150 255 100)
        (q/arc 0 0 260 260 0 angle)

        (q/push-style)
        (q/rotate angle)
        (q/line 0 0 128 0)
        (q/pop-style)
        ))))

; this function is called in index.html
(defn ^:export run-sketch []
  (q/defsketch clock
    :host "clock"
    :size [500 500]
    ; setup function called only once, during sketch initialization.
    :setup setup
    ; update-state is called on each iteration before draw-state.
    :draw draw-state
    ; This sketch uses functional-mode middleware.
    ; Check quil wiki for more info about middlewares and particularly
    ; fun-mode.
    :middleware [m/fun-mode]))

; uncomment this line to reset the sketch:
; (run-sketch)
