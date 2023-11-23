import { useState } from "react"

function SearchBar({ handleSearch }) {
    const [searchTerm, setSearchTerm] = useState('')
    
    return (
        <div>
            <form onSubmit={(e) => handleSearch(e, searchTerm)}>
                <input onChange={(e) => setSearchTerm(e.target.value)} placeholder='Enter your search term here' />
                <input type='submit' />
            </form>
        </div>
    )
}

export default SearchBar