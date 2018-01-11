var request = require('request');

var data = {
    fullName: 'Mark D Crouch (https://github.com/MarkDCrouch/hps#readme)',
    email: 'MarkDCrouch@outlook.com',
    phoneNumber: '(214)212-7553',
    source: 'https://github.com/MarkDCrouch/hps#readme',
    resume: 'https://github.com/MarkDCrouch/hps#resume'
};

var postOptions = {
    method: 'POST',
    url: 'https://hps-dev-prescreen.azurewebsites.net/api/v1/applicant',
    headers: {
        'X-HPS': 'apply'
    },
    json: data
};

var getOptions = {
    url: `https://hps-dev-prescreen.azurewebsites.net/api/v1/applicant/${data.email}`,
    headers: {
        'X-HPS': 'apply'
    }
}

function callback(error, response, body) {
    console.log('statusCode:', response && response.statusCode);
    if (!error && response.statusCode == 200) {
        console.log(JSON.stringify(body, null, 2));
    }
    else {
        console.log('ERROR:', error);
    }
}

request(postOptions, callback);
request(getOptions, callback);