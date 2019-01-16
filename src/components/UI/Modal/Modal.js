import React ,{Component} from 'react';

import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxiliary/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal  extends Component {

  //It could control re-rendering of OrderSummary class.
  //Because OrderSummary is in the Modal curly brace at BurgerBuilder.
  //And then I could control unneccessory rerendering in there.
  shouldComponentUpdate(nextProps, nextState) {
      return nextProps.show !== this.props.show;
  }
  componentWillUpdate() {
    console.log('[Modal] willUpdate')
  }
  render(){
    return(
    <Aux>
      <Backdrop show = {this.props.show} clicked = {this.props.modalClosed}/>
      <div 
        className = {classes.Modal}
        style = {{
          transform : this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity : this.props.show ? '1' : '0'
        }}  
      >
        {this.props.children}
      </div>
    </Aux>
    )
  }
}
export default Modal;