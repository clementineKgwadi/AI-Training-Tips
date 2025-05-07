function generate(event) {
  event.preventDefault();

  new Typewriter("#container-code", {
    strings: "Hey how can i help you today?",
    autoStart: true,
    delay: 30,
    cursor: ""
  });
}

let aiGeneratorFormElement = document.querySelector("#ai-generator-form");
aiGeneratorFormElement.addEventListener("submit", generate);
