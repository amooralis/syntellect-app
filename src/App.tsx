import React from 'react';
import ButtonControl from './components/ButtonControl';
import AutocompleteControl from './components/AutocompleteControl';
import ButtonControlViewModel from './viewmodels/ButtonControlViewModel';
import AutocompleteControlViewModel from './viewmodels/AutocompleteControlViewModel';
import './styles.css';

function App() {
    const buttonControlViewModel1 = new ButtonControlViewModel();
    buttonControlViewModel1.addButton('right', {text: 'Clear', onClick: () => buttonControlViewModel1.setText('')});
    buttonControlViewModel1.addButton('right', {
        text: 'Set "Hello World!"',
        onClick: () => buttonControlViewModel1.setText('Hello World!')
    });

    const buttonControlViewModel2 = new ButtonControlViewModel();
    buttonControlViewModel2.addButton('left', {
        text: 'Check Number', onClick: () => {
            const value = parseFloat(buttonControlViewModel2.text);
            if (!isNaN(value)) {
                alert(`Number: ${value}`);
            } else {
                alert('Not a number');
            }
        }
    });
    buttonControlViewModel2.addButton('right', {
        text: 'Alert Text',
        onClick: () => alert(buttonControlViewModel2.text)
    });

    const autocompleteViewModel1 = new AutocompleteControlViewModel(3);
    const autocompleteViewModel2 = new AutocompleteControlViewModel(10);

    return (
        <div className="page">

            <div className="first_control">
                <div className="control">
                    <h2>Button Control 1</h2>
                    <ButtonControl viewModel={buttonControlViewModel1}/>
                </div>
                <div className="control">
                    <h2>Button Control 2</h2>
                    <ButtonControl viewModel={buttonControlViewModel2}/>
                </div>
            </div>
            <div className="second_control">
                <div className="control">
                    <h2>Autocomplete Control 1 (Max 3 suggestions)</h2>
                    <AutocompleteControl viewModel={autocompleteViewModel1}/>
                </div>
                <div className="control">
                    <h2>Autocomplete Control 2 (Max 10 suggestions)</h2>
                    <AutocompleteControl viewModel={autocompleteViewModel2}/>
                </div>
            </div>
        </div>
    );
}

export default App;
