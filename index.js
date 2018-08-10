function takeANumber(currentLine, newCustomerName){
 currentLine.push(newCustomerName);
 return `Welcome, ${newCustomerName}. You are number ${currentLine.length} in line.`
}

function nowServing(currentLine){
  if (currentLine.length === 0){
    return "There is nobody waiting to be served!";
  }else{
    return `Currently serving ${currentLine.shift()}.`;
  }
}

function currentLine(line){
  if (currentLine.length === 0){
    return "The line is currently empty."
  }else {
    
  }
}