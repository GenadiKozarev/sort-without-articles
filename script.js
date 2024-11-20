const bands = [
    'The Plot in You',
    'The Devil Wears Prada',
    'Pierce the Veil',
    'Norma Jean',
    'The Bled',
    'Say Anything',
    'The Midway State',
    'We Came as Romans',
    'Counterparts',
    'Oh, Sleeper',
    'A Skylit Drive',
    'Anywhere But Here',
    'An Old Dog',
];

console.log('Band list before:');
console.table(bands);

// Sort the bands alphabetically without taking 'a', 'the' or 'an' into consideration
const strip = bandName => {
    return bandName.replace(/^(a |the |an )/i, '').trim();
};
const sortedBands = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));
document.getElementById('bands').innerHTML = sortedBands
    .map(band => `<li>${band}</li>`)
    .join('');

console.log('Band list after:');
console.table(sortedBands);
