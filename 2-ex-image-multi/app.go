package main

import (
    "fmt"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Olá, mundo!")
}

func main() {
    http.HandleFunc("/", handler)
    http.ListenAndServe(":5001", nil)
}
