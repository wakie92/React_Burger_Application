import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl'
const controls = [
  { label : 'Salad ', type : 'salad'},
  { label : 'Bacon ', type : 'bacon'},
  { label : 'Cheese ', type : 'cheese'},
  { label : 'Meat', type : 'meat'},
]
const buildControls = (props) => (
  <div className = {classes.BuildControls}>
    <div>Currnet Price  : <strong>{props.price.toFixed(2)}</strong> </div>
    {controls.map(ctrl => (
      <BuildControl 
        key = {ctrl.label} 
        label = {ctrl.label}
        type = {ctrl.type}
        added = {() => props.ingredientAdded(ctrl.type)}
        removed = {() => props.ingredientRemoved(ctrl.type)}
        disabled = {props.disabledInfo[ctrl.type]}
        />
    ))}
    <button 
        className = {classes.OrderButton}
        disabled = {!props.purchasable}
        onClick = {props.ordered}
        > 
    ORDER NOW
    </button>
  </div>
)

export default buildControls;