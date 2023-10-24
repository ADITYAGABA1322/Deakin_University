import { GetPlan } from '../components/firebase';
import DataContext from './dataContext';
import React, { useEffect, useState } from 'react';
function DataState(props) {
    const [Subscription,SetSubscription]=useState("Free");
    const updatePlan=async()=>{
      const res=await GetPlan(props.user.email)
      console.log("Get",res)
      if(res==='Pro')SetSubscription("Pro")
      else if(res==='Basic')SetSubscription("Basic")
      console.log("Sub",Subscription);
    }
    if(props.user)updatePlan()
    const data={
        'Plan':Subscription
    }
  return (
    <DataContext.Provider value={data}>
    {props.children}
</DataContext.Provider>
  )
}

export default DataState
