let convertTemperature = function(celsius) {
    let ans = []

    let kelvin = celsius + 273.15;
    let farenheit = celsius * 1.8 + 32
    ans.push(kelvin,farenheit)
    
    return ans
};

let celsiu = 36.50;

convertTemperature(celsiu)