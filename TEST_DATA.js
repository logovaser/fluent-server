const uuid = require('uuid');

const languages = [
    {
        id: uuid.v1(),
        name: 'English',
        src: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.1.0/flags/1x1/gb.svg',
        speakerCount: 4234,
    },
    {
        id: uuid.v1(),
        name: 'Ukrainian',
        src: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.1.0/flags/1x1/ua.svg',
        speakerCount: 1004,
    },
];

module.exports = {
    languages,
}
