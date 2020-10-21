import React from 'react'
import axios from 'axios'

const Header = () => {

    const test = () => {

        axios.get(`http://localhost:8080/api`)
            .then(res => {
                alert(`Connection Success!!`)
            }

            ).catch(
                e => alert(`Failure`)
            )
    }

    return(<>
        <button onClick={ test }>테스트이다.</button>
    </>)
}

export default Header