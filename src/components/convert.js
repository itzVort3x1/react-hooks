import axios from 'axios';
import React, { useState, useEffect} from 'react';

const Convert = ({ language, text }) => {
    const [translated, setTranslated] = useState('');

    useEffect(() => {
        const doTranslation = async () => {
           const response = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
            params: {
                q: text,
                target: language.value,
                key: '${process.env.google_api_key}',
            }
        })

        setTranslated(response.data.data.translations[0].translatedText);
        };
        doTranslation();
    }, [language, text]);

    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    );
};

export default Convert;