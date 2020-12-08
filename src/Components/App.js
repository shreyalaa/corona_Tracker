import React from "react";
import Cards from "./Cards/Cards";
import Header from "./Header";
import {fetchData} from "../api";
import "./Cards/cards.css"
import Charts from "./Charts/Charts.jsx"
import CountryPicker from "./CountryPicker/CountryPicker";
class App extends React.Component
{   
    state= {
        data: {},
        country: "",
    }
    async componentDidMount(){
        const fetchedData = await fetchData()
       
        this.setState({data: fetchedData})
        
    }

    handleCountryChange = async (country) =>
    {  console.log(country)
       const fetchedData = await fetchData(country);  
       
       this.setState({data: fetchedData , country: country})
    }
   
    render(){
        const {data} = this.state
        return(
        <div>
         <Header/>
         
         <Cards data = {data}  />
       
         <br/>
         <br/>
         <br/>
         <CountryPicker handleCountryChange = {this.handleCountryChange}/>
         <br/>
         <Charts/>
        </div>
    )
    }
}

export default App;