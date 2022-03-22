import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cart:localStorage.getItem('cartitem')?JSON.parse(localStorage.getItem('cartitem')) :[],
    carttotalprice:0,
    carttotalquantity:0
}

export const cartslice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addtocart:(state,action)=>{

            let index=state.cart.findIndex(item=>item.id===action.payload.id && item.name===action.payload.name)
            if(index>=0){
                state.cart[index].itemquantity +=1
            }else{
                let newcart={...action.payload,itemquantity:1}
            state.cart.push(newcart)
            }
            localStorage.setItem('cartitem',JSON.stringify(state.cart))
        },
        removefromcart:(state,action)=>{
            let newcart=state.cart.filter(item=>item.id !== action.payload.id && item.name)
            state.cart=newcart
            localStorage.setItem('cartitem',JSON.stringify(state.cart))
        },
        decrease:(state,action)=>{
            let index=state.cart.findIndex(item=>item.id===action.payload.id && item.name===action.payload.name)
            if(state.cart[index].itemquantity==1){
                let newcart=state.cart.filter(item=>item.id !== action.payload.id && item.name)
            state.cart=newcart
            }else {
                state.cart[index].itemquantity-=1
            }
            localStorage.setItem('cartitem',JSON.stringify(state.cart))
        },
        increase:(state,action)=>{
            let index=state.cart.findIndex(item=>item.id===action.payload.id && item.name===action.payload.name)
            if(index>=0){
                state.cart[index].itemquantity +=1
            }else{
                let newcart={...action.payload,itemquantity:1}
            state.cart.push(newcart)
            }
            localStorage.setItem('cartitem',JSON.stringify(state.cart))

        },
        gettotal:(state,action)=>{
            const {total,Quantity}=state.cart.reduce((totalcart,itemcart)=>{
                const {price,itemquantity}=itemcart
                const totalitem=price*itemquantity
                
                totalcart.total+=totalitem
                totalcart.Quantity+=itemquantity
                return totalcart
            },{
                total:0,
                Quantity:0
                
            })
            state.carttotalprice=total
            state.carttotalquantity=Quantity
        }

    }
})
export const {addtocart , removefromcart,decrease,increase,gettotal}=cartslice.actions
export default cartslice.reducer
