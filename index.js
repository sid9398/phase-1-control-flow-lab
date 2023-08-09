function scuberGreetingForFeet(distance){
  if (distance <= 400){
    return 'This one is on me!'
} else if (distance > 2500){
  return 'No can do.'
} else if (distance > 400 && distance < 2000){
    return 'That will be twenty bucks.' 
} else if (distance > 2000){
    return 'I will gladly take your thirty bucks.'
}
}
function ternaryCheckCity(crib){
  let NYC = "NYC"
  return crib == NYC ?'Ok, sounds good.':'No go.'
}
function switchOnCharmFromTip(charm){
  switch(charm){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}