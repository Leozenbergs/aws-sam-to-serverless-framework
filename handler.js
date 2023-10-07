'use strict';

module.exports.main = () => {

    return {
        statusCode: 200,
        body: JSON.stringify({
            'message': 'hello world',
        }),
    }
}