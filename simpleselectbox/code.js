const state = {
    a: 'apple',
    b: 'banana',
    c: 'city',
    d: 'dom',
    e: 'end',
    f: 'forEach',
    g: 'gesdrwesf',
};

const dropDown1 = document.querySelector('#drop__down1');
const dropDown2 = document.querySelector('#drop__down2');
const body = document.querySelector('body');
body.append(dropDown1,dropDown2);

console.log(Object.keys(state));
console.log(Object.values(state));
console.log(Object.entries(state));

for (const [key, value] of Object.entries(state)){
    console.log(`${key} + ${value}`)
    
    let option1 = document.createElement('option');
    option1.innerHTML = `${key}`;
    dropDown1.append(option1);
    
    let option2 = document.createElement('option');
    option2.innerHTML = `${value}`;
    dropDown2.append(option2);
}

dropDownItem = (e) => {
    dropDown1.selectedIndex = e.target.selectedIndex;
    dropDown2.selectedIndex = e.target.selectedIndex;
}

dropDown1.addEventListener('change', dropDownItem);
dropDown2.addEventListener('change', dropDownItem);