const objStudent = [ 
    { 
        name: "Jonh", 
        age: 19, 
        email: "jonh123@gmail.com", 
    }, 
    { 
        name: "Nicole", 
        age: 19, 
        email: "nicole123@gmail.com", 
    } 
   ]; 
   for (let i = 0; i < objStudent.length; i++) { 
        const { name, age, email } = objStudent[i]; 
        console.log(name, age, email); 
   }