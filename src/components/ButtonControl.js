import React from 'react';
import { observer } from 'mobx-react';
import '../styles.css';

const ButtonControl = observer(({ viewModel }) => {
    return (
        <div className="control-container">
            {viewModel.leftButtons.map((button, index) => (
                <button key={index} onClick={button.onClick}>{button.text}</button>
            ))}
            <input
                type="text"
                value={viewModel.text}
                onChange={(e) => viewModel.setText(e.target.value)}
            />
            {viewModel.rightButtons.map((button, index) => (
                <button key={index} onClick={button.onClick}>{button.text}</button>
            ))}
        </div>
    );
});

export default ButtonControl;
