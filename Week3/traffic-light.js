
function getCurrentState(trafficLight) {
    return  trafficLight.possibleStates[trafficLight.stateIndex];

}
function getNextStateIndex(trafficLight) {
 
  if (trafficLight.stateIndex==2){
      trafficLight.stateIndex=0;
  } 
  else {
    trafficLight.stateIndex++;
  }
return trafficLight.stateIndex;
}
function waitSync(secs) {
  const start = Date.now();
  while (Date.now - start < secs * 1000) {
    // nothing do to here
  }
}

function main() {
  const trafficLight = {
    possibleStates: ["green", "orange", "red"],
    stateIndex: 0,
  };

  for (let cycle = 0; cycle < 6; cycle++) {
    const currentState = getCurrentState(trafficLight);
    console.log(cycle, "The traffic light is now", currentState);

    waitSync(1); // Wait a second before going to the next state
    trafficLight.stateIndex = getNextStateIndex(trafficLight);
  }
}

main();

//* here is the output
0The traffic light is nowgreen
1The traffic light is noworange
2The traffic light is nowred
3The traffic light is nowgreen
4The traffic light is noworange
5The traffic light is nowred
