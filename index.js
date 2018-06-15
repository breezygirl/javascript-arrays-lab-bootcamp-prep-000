const app = "I don't do much."
kittens=["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(){
   var destructivelyAppendKitten = kittens.push("Ralph");
   return destructivelyAppendKitten
}
function destructivelyPrependKitten(){
 var  destructivelyPrependKitten = kittens.unshift("Bob")
  return kittens
}
function destructivelyRemoveLastKitten(){
  
  var destructivelyRemoveLastKitten=  
  kittens.pop()
  return ["Milo", "Otis"]
}
function destructivelyRemoveFirstKitten(){
  var destructivelyRemoveFirstKitten = kittens.shift()
  return ["Otis", "Garfield"]
  }
  
  function appendKitten(){
   var appendKitten = kittens.concat("Broom")
   
    return appendKitten
  }
  
  function prependKitten(){
  
   var prependKitten = ["Arnold", ...kittens]
   return prependKitten
    }
    
    function removeLastKitten(){
      
     var removeFirstKitten= kittens.slice(1,3)
      console.log(removeFirstKitten)
      
    }
    