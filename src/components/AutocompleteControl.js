import React from 'react';
import {observer} from 'mobx-react';
import '../styles.css';

const AutocompleteControl = observer(({viewModel}) => {
    return (
        <div className="autocomplete-container">
            <input
                type="text"
                value={viewModel.text}
                onChange={(e) => viewModel.onInputChange(e.target.value)}
            />
            {viewModel.suggestions.length > 0 && (
                <ul className="suggestions">
                    {viewModel.suggestions.map((suggestion, index) => (
                        <li className="suggestion"
                            key={index}
                            onClick={() => viewModel.onSuggestionClick(suggestion)}>
                            {suggestion.flag ? <img src={suggestion.flag}/> : <></>}
                            {suggestion.name} - {suggestion.fullName}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
});

export default AutocompleteControl;
