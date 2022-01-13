// Exercise #1
// We'll build the industry plant calendar from the opening exercise.

// Part 1
// First, build a function called "businessHours". Similar to the day of the week class exercise, this function should accept two parameters: dayNumber and hourNumber.

// By reading the dayNumber and the hourNumber, your program should print whether it is business hours or not. It should return true if it is business hours, and false if not.

// function businessHours(dayNumber, hourNumber)

// Obs: consider business hours 9am - 6pm. Use the 24-hour clock system (6pm = 18).

function businessHours(dayNumber, hourNumber){
    if(dayNumber <= 6 && dayNumber>=1 ){
        if(hourNumber >=9 && hourNumber <=18 ){
            alert("Es dia hora laboral");
        }else if(hourNumber >= 24){
            alert("Esa hora ni siquiera existe en el planeta tierra, recuerda que debes usar el formato de 24-horas (6pm = 18)");
        } else{
            alert("Ya no es hora laboral, ingresaste que son las: " +hourNumber+" horas");
        }
    }else if(dayNumber == 7){
        alert("Los domingos se descansa carnal");
    }else{
        alert("Dia incorrecto");
    }
}

businessHours(5, 29);



// Part 2
// Now, create the function getDayNumber.

// It should accept two parameters: janFirstDayNumber and yearDayNumber.

// The yearDayNumber will be an int ranging from 0 to 365.

// janFirstDayNumber will be an int ranging from 0 to 6, representing the day of the week of January 1st.

// Your function should then calculate and return the day of the week corresponding to the yearDayNumber passed.

// Hint: use the remainder operator (%), dividing your yearDayNumber by 7.

function getDayNumber(yearDayNumber, janFirstDayNumber){
    if(yearDayNumber >= 0 && yearDayNumber <= 365 ){
        janFirstDayNumber = yearDayNumber % 7;
        //console.log(janFirstDayNumber);

        switch(janFirstDayNumber){
            case 0: alert("Lunes");
            break;
            case 1: alert("Martes");
            break;
            case 2: alert("Miercoles");
            break;
            case 3: alert("Jueves");
            break;
            case 4: alert("Viernes");
            break;
            case 5: alert("Sabado");
            break;
            case 6: alert("Domingo");
            break;
            default: alert("Se supone que nunca pasara esto");
            break;
    }
    }else{
        alert("Incorrecto");   
}

}

//getDayNumber(98);

// Part 3
// Finally, build a function that, from a yearDayNumber (int, 0-365) and an hourNumber (int, 0-23), returns true if it is business hours.

function getboth(){
    var yearDayNumber = parseInt(prompt("Ingresa el dia del año:"));
    if(yearDayNumber >= 0 && yearDayNumber <= 365 ){
        //janFirstDayNumber = yearDayNumber % 7;
        //console.log(janFirstDayNumber);
        var hourNumber = parseInt(prompt("Ingresa la hora:"));
        if(hourNumber >=9 && hourNumber <=18 ){
            alert("Es dia hora laboral");
        }else if(hourNumber >= 24){
            alert("Esa hora ni siquiera existe en el planeta tierra, recuerda que debes usar el formato de 24-horas (6pm = 18)");
        } else{
            alert("Ya no es hora laboral, ingresaste que son las: " +hourNumber+" horas");
        }
        
    }else{
        alert("Incorrecto");   
}

}

//getboth();


// Challenge
// Replace the yearDayNumber and hourNumber parameters with a Date() variable.


function getboth2(){
    var yearDayNumber= new Date().getDate();
        // alert(yearDayNumber);
    var hourNumber= new Date().getHours();
        // alert(hourNumber);
    if(yearDayNumber >= 0 && yearDayNumber <= 365 ){
        if(hourNumber >=9 && hourNumber <=18 ){
            alert("Es dia hora laboral");
        }else if(hourNumber >= 24){
            alert("Esa hora ni siquiera existe en el planeta tierra, recuerda que debes usar el formato de 24-horas (6pm = 18)");
        } else{
            alert("Ya no es hora laboral, ingresaste que son las: " +hourNumber+" horas");
        }
        
    }else{
        alert("Incorrecto");   
}

}


//getboth2();

