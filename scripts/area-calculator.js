// reuseable get input value field in number
function inputFieldValue(elementId){
    const inputField = document.getElementById(elementId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

// reuseable set span, p, div, etc text
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area.toFixed(2);
}

function calculateTriangleArea(){
    // get triangle base value
    const base = inputFieldValue('triangle-base');
    
    // get triangle height value
    const height = inputFieldValue('triangle-height');
    
    // calculate area
    const area = 0.5 * base * height;

    // show triangle area
    setElementInnerText('triangle-area', area);
}

function calculateParallelogramArea(){
    // get Parallelogram base value
    const base = inputFieldValue('parallelogram-base');
    
    // get Parallelogram height value
    const height = inputFieldValue('parallelogram-height');
    
    // calculate area
    const area = base * height;

    // show Parallelogram area
    setElementInnerText('parallelogram-area', area);
}

function calculateRectangleArea(){
        // get rectangle width value
        const width = inputFieldValue('rectangle-width');
    
        // get triangle height value
        const length = inputFieldValue('rectangle-length');
        
        // calculate area
        const area = width * length;

        // show triangle area
        setElementInnerText('rectangle-area', area);
}

function calculateEllipseArea(){
        // get ellipse first radius
        const a = inputFieldValue('ellipse-first-radius');
    
        // get ellipse second radius
        const b = inputFieldValue('ellipse-second-radius');
        
        // calculate area
        const area = a * b * Math.PI;

        // show triangle area
        setElementInnerText('ellipse-area', area);
}