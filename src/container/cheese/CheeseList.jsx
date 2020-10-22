import React, { useState, useEffect } from 'react'
import { Cheese } from '../../templates'
import { useSelector, useDispatch } from 'react-redux'
import { debounce } from 'throttle-debounce'
import axios from 'axios'

export const getItems = data => ({ type: "FETCH_CHEESE", payload: data})

export const itemReducer = (state = [], action) => {
    switch (action.type) {
        case "FETCH_CHEESE": return action.payload
        default: return state
    }
}

export const itemSearch = () => dispatch => {
    axios.get(`https://localhost:8080/api/test`)
        .then(response => {
            alert('good!')
            dispatch(getItems(response.data))
        })
        .catch(error => {throw (error)})
}

const CheeseList = () => {

    const [ loading, setLoading ] = useState(false)
    const [ resultAvailable, setResult ] = useState(false)
    const [ selected, setSelected ] = useState(false)
    const [ cheese, setCheese ] = useState({})
    const [ cheeses, setCheeses ] = useState([])
    const handleInput = e => { searchCheeses(e.target.value.trim().toLowerCase())}
    const selectCheese = payload => {
        setSelected(true)
        setResult(false)
        setCheese({ cheese: payload.cheese, country: payload.country, kind: payload.kind })
    }
    const results = useSelector(state => itemReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        if(!results.data) fetch()
        else
        if(results.data.length > 0) changeTitle()
        if(cheese.country !== undefined) changeTitle()
    })
    let fetch = () => dispatch(itemSearch())
    let fetched = () => setLoading(false)
    let changeTitle = () => document.title = `치즈 검색 결과: ${ cheese.cheese }`

    let searchCheeses = debounce(500, input => {
        let data = results.data
        if (input.length < 0) alert(` Error `)
        switch (input.length) {
            case 0:
                setCheeses([])
                setResult(false)
                setSelected(false)
                break
            case 1:
                setCheeses(data.filter(
                    e => e.cheese.charAt(0).toLowerCase() === input.toLowerCase() 
                        || e.country.toLowerCase().includes(input.toLowerCase())
                        || e.kind.toLowerCase().includes(input.toLowerCase())
                ))
                setResult(true)
                break
            default:
                setCheeses(data.filter(
                    e => e.cheese.toLowerCase().includes(input.toLowerCase())
                        || e.country.toLowerCase().includes(input.toLowerCase())
                        || e.kind.toLowerCase().includes(input.toLowerCase())
                ))
                setResult(true)
                break
        }
    })

    return (<Cheese>
        <div style = {{ outline: 'none', border: 0}}>
            { loading === false &&
                <div style = {{ outline: 'none', border: 0}}>
                    <div style = {{ width: '100%', display: 'block'}}>
                        <input
                            type="text"
                            placeholder="Enter Cheese Name, Country or Kind"
                            className="Search"
                            // value={ keyword }
                            onChange = { e => handleInput(e) } />
                    </div>
                    <div className="Gap"></div>

                    <h5 style={{ marginTop: 10, marginBottom: 10, fontSize: 15, color: '#85DE54', textAlign: 'center'}}>
                        { resultAvailable === true && "Search Results" }
                        { selected === true && "Selected Cheese"}
                    </h5>
                    { selected === true &&
                        <div className="Results">
                            <div style={{ marginTop: 0, padding: 10}} onClick={() => setSelected(true)}>
                                <div style={{ width: '100%', display: 'block' }}>
                                    <span style={{ fontWeight: 'bold' }}>{ cheese.country }</span>
                                    <span style={{ float: 'right' }}>{ cheese.kind }</span>
                                </div>
                                <p style={{ marginTop: 5, marginBottom: 0, paddingBottom: 5, color: '#FA6B3C', borderBottom: '0.5px solid #9997'}}>{ cheese.cheese }</p>
                            </div>
                        </div>
                    }
                    { selected === false && resultAvailable === true && cheeses.map((item, i) => (
                        <div className="Results" key={ i }>
                            <div style={{ marginTop: 0, padding: 10 }} id="Select" onClick={ () => selectCheese(item)}>
                                <div style={{ width: '100%', display: 'block' }}>
                                    <span style={{ fontWeight: 'bold' }}>{ item.country }</span>
                                    <span style={{ float: 'right'}}>{ item.kind }</span>
                                </div>
                                <p style={{ marginTop: 5, marginBottom: 0, paddingBottom: 5, color: '#3CC4FA', borderBottom: '0.5px solid #9997'}}>{ item.cheese }</p>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </div>
        <h1>Cheese List</h1>
    </Cheese>)
}

export default CheeseList