import React, { useState,useEffect } from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import PageLoader from './components/pageLoader/PageLoader'
import Skills from './components/skills/Skills'
import Work from './components/work/Work'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
const App = ()=>{
  
  const [loading,setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },3000)
  },[])

  return(
    <Router>
      {
        loading?
        <PageLoader loading={loading}/>
        :
        ""
      }

      <Navbar />
      <Switch>
        <Route path="/" exact component={()=><Home loading={loading}  />} />
        <Route path="/skills" component={()=><Skills loading={loading}/>} />
        <Route path="/mywork" component={()=><Work loading={loading} />}/>
      </Switch>
     
    </Router>
  )
}

export default App