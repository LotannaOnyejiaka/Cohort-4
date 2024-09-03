  function calculate(num1, num2, operation) {
    if (num1 === null || num1 === undefined || num2 === null || num2 === undefined) {
      return "Invalid input numbers";
    }

    if (typeof num1 !== "number" || typeof num2 !== "number") {
      return "Input numbers must be numbers";
    }

    if (operation !== "add" && operation !== "subtract" && operation !== "multiply" && operation !== "divide") {
      return "Invalid operation";
    }

    switch (operation) {
      case "add":
        return num1 + num2;
      case "subtract":
        return num1 - num2;
      case "multiply":
        return num1 * num2;
      case "divide":
        if (num2 === 0) {
          return "Division by zero is not allowed";
        }
        return num1 / num2;
      default:
        return "Invalid operation";
    }
  }

  console.log(calculate(5, 3, "add")); 
  console.log(calculate(10, 2, "divide")); 
  console.log(calculate(7, 4, "subtract")); 
  console.log(calculate(6, 2, "multiply")); 
  console.log(calculate(10, 0, "divide")); 
  console.log(calculate(null, 5, "add")); 
  console.log(calculate(5, "hello", "multiply")); 
  console.log(calculate(5, 3, "power")); 