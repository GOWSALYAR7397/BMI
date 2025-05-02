function calculateBMI()
 {
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;

    if (height > 0 && weight > 0) 
        {
        var heightInMeters = height / 100;
        var bmi = weight / (heightInMeters * heightInMeters);
        bmi = bmi.toFixed(2);

        var category = "";
        if (bmi < 18.5)
             {
            category = "Underweight";
        }
         else if (bmi >= 18.5 && bmi < 24.9) 
            {
            category = "Normal weight";
        } 
        else if (bmi >= 25 && bmi < 29.9) 
            {
            category = "Overweight";
        } 
        else if(bmi>=30 && bmi <=34.9)
        {
            category = "Obesity";
        }
        else{
            category="severe obesity";
        }
        

        document.getElementById('result').innerHTML = "Your BMI is " + bmi + " (" + category + ")";
    } 
    else 
    {
        document.getElementById('result').innerHTML = "Please enter valid height and weight!";
    }
}

function Clear() {
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
    document.getElementById('result').innerHTML = '';
}