import React, {useState, useEffect} from 'react';
import './Stats.css';
import axios from "axios";
import StatsRow from './StatsRow';

const TOKEN ="bvhaduv48v6uiecr1gpg";
const BASE_URL ="https://finnhub.io/api/v1/quote";

function Stats() {

    const [stockData, setstockData] = useState([])

    const getStocksData= (stock) => {
        return axios 
            .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
            .catch((error) => {
                console.error("ERROR", error.message);
            });
    };

    useEffect(()=>{
        let tempStocksData =[]
        const stocksList =["AAPL","MSFT","TSLA","BABA", "UBER", "TSLA", "DIS", "SBUX"];
       
        let promises = []; 
        stocksList.map((stock) => {
            promises.push ( 
                getStocksData(stock)
                .then((res) => {
                    tempStocksData.push({
                        name: stock,
                        ...res.data
                    });
                })
            )
        });
        
        Promise.all(promises).then( () => {
            
            setstockData(tempStocksData);
            console.log(tempStocksData)
            
            
        })
    },[]);

    return (
        <div className="stats">
            <div className="stats__container">
                <div className="stats__header">
                    <p>Stocks</p>
                </div>
                <div className="stats__content">
                    <div className="stats__row">
                        
                    </div>
                </div>
                <div className="stats__header">
                    <p>Lists</p>
                </div>
                <div className="stats__content">
                    <div className="stats__row">
                        {stockData.map((stock) =>(
                            <StatsRow
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Stats;
