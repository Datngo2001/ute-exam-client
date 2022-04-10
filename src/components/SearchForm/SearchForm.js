import React from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(faSearch)
const SearchForm = () => {
  return (
        <div className="search__form">
            <form action="#">
                <div className="icon__search">

                    
                </div> 
            </form>
        </div>
  )
}

export default SearchForm