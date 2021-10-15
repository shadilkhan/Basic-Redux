import React from 'react'
import { useDispatch } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { actionCreators } from './state/index'


const Shop = () => {
  const dispatch = useDispatch()
//   let action = bindActionCreators(actionCreators,dispatch);
    return (
        <div>
            <div className="container">
            <h2>Deposit/Withdraw Money</h2>
            {/* <button type="button" class="btn btn-primary my-3 mx-2"onClick={()=>action.withdrawMoney(100)}>-</button>
            Update Balance
            <button type="button" class="btn btn-primary my-3 mx-2" onClick={()=>action.depositMoney(100)}>+</button> */}
            <button type="button" class="btn btn-primary my-3 mx-2"onClick={()=>dispatch(actionCreators.withdrawMoney(100))}>-</button>
            Update Balance
            <button type="button" class="btn btn-primary my-3 mx-2" onClick={()=>dispatch(actionCreators.depositMoney(100))}>+</button>
            </div>
        </div>
    )
}

export default Shop
