import React from 'react'
import RowsComponent from './RowComponent';
import * as selectors from '../selectors'

class RowsContainer extends React.Component{
    render({fields}){
        return (<div>
            {fields.map(f => <RowsComponent {...f}/>)}
        </div>)
    }
}


const mapStateToProps = state => {
    return {
      sum: selectors.sumAmounts(state),
      // t1: selectors.totalAmount1(state)
    };
  };
  
  const mapDispatchToProps = {
    change
  };
  
  export default reduxForm({
    form: "fieldArraysForm"
  })(RowsContainer)