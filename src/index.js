function displayWorkout(response) {
  //   console.log(response);
  new Typewriter("#container-code", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

function generate(event) {
  event.preventDefault();

  let promptElement = document.querySelector("#input-prompt");

  let apiKey = "fe5e09ad6aaeb38c2a11t3o0f7b7a744";
  let prompt = promptElement.value;
  let context =
    "You're an AI training tips assistant. Provide short, precise, and straightforward workout plans and tips based on the user's input. Format each response on a new line using paragraph tags. For example: <p>Warm up for 5 minutes.</p> <p>Do 3 sets of 15 push-ups.</p> <p>Cool down for 5 minutes.</p>Provide examples of workouts like full-body routines, split workouts, warm-up and cool-down tips, and motivational advice.Sign the exercises with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayWorkout);
}

let aiGeneratorFormElement = document.querySelector("#ai-generator-form");
aiGeneratorFormElement.addEventListener("submit", generate);
