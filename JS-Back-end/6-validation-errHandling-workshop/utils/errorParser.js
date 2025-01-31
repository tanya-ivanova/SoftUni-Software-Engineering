function parseError(error) {
    const result = {
        messages: [],
        fields: {}
    };

    if(error.name == 'ValidationError') {
        //mongoose validation
        for (let [field, e] of Object.entries(error.errors)) {
            result.messages.push(e.message);
            result.fields[field] = field;
        }
        
    } else if(Array.isArray(error)) {
        //exress-validator
        result.messages = error.map(e => e.msg);
        result.fields = Object.fromEntries(error.map(e => [e.param, e.param]));

    } else {
        result.messages = error.message.split('\n');
    }

    return result;
}

module.exports = {
    parseError
};