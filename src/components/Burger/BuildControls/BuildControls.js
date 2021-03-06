import classes from './BuildControls.module.css';
import React from 'react';

import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Meat', type: 'meat' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Paneer', type: 'paneer' }
];

const buildcontrols = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price : <strong><span>&#8377;</span>{props.price}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}
        <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>{props.isAuth ? 'ORDER NOW' : 'SIGNUP TO ORDER'}</button>
    </div>
);

export default buildcontrols;