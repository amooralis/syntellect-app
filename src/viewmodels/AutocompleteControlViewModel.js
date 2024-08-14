import {makeAutoObservable, runInAction} from 'mobx';
import {getCountryByName} from '../services/apiService';

class AutocompleteControlViewModel {
    text = '';
    suggestions = [];
    maxSuggestions = 10;

    constructor(maxSuggestions) {
        makeAutoObservable(this);
        this.maxSuggestions = maxSuggestions;
    }

    async onInputChange(value) {
        this.text = value;
        if (value) {
            const suggestions = await getCountryByName(value);
            runInAction(() => {
                this.suggestions = suggestions.slice(0, this.maxSuggestions);
            });
        } else {
            runInAction(() => {
                this.suggestions = [];
            });
        }
    }

    onSuggestionClick(suggestion) {
        this.text = suggestion.name;
        this.suggestions = [];
    }
}

export default AutocompleteControlViewModel;
