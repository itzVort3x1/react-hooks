import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Search = () => {

    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);

    console.log(results);

    // the second argument for useEffect can either be a plain array or nothing or array with elements
    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                }
            });
            setResults(data.query.search);
        };
        search();
    }, [term]);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    {result.snippet}
                </div>
            </div>
        )
    });

    return (
        <div className="container">
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input className="input" value={term} onChange={e => setTerm(e.target.value)}></input>
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
};

export default Search;