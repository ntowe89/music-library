import { useState } from "react"

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('')
    
    return (
        <div>
            <form>
                <input placeholder='Enter your search term here' />
                <input type='submit' />
            </form>
        </div>
    )
}

export default SearchBar