import React from 'react'




const Pagination = () => {
    const [ active, setActive ] = React.useState(1)
  
    const size = 10
    const step = 2
    const showingNumbers = step * 2 + 1
    let startNumber = 2
    let needStartDots = false
    let needEndDots = false
    let startArrayNumber = 2
    let contentNumber = null
  
    const Pages = () => {
      const API_key = '&api_key=84743ee32095533fcd630a3079c2d3f0',
    base_url = 'https://api.themoviedb.org/3'
    let pageNum = `${base_url}/discover/movie?page=${active}${API_key}`
    
    return(
      {pageNum}
    )
    
    }

    if (active > step) {
      startArrayNumber = active - step
      
      needStartDots = active > step + startNumber ? true : false
      
    }
  
    if (size > showingNumbers) {
      needEndDots = size > active + step + 1 ? true : false
      if (size < active + step + 1) {
        startArrayNumber = size - showingNumbers
      }
    }
  
    return (
      <div className='wrapper'>
        <nav className='pagination'>
          {
            active > 1
              ? <div 
                  className='pagination__arrow pagination__prev'
                  onClick={e => setActive(active - 1)}
                >
                  Prev
                </div>
              : <div className='pagination__arrow pagination__prev disabled'>Prev</div>
  
          }
          <ul className='pagination__list pagination-list'>
            {size > showingNumbers + startNumber ? (
              <React.Fragment>
                <li 
                  className='pagination-list__item'
                  onClick={e => setActive(parseInt(e.currentTarget.textContent))}
                >
                  <span className={`pagination-list__link ${active === 1 ? 'active' : ''}`}>1</span>
                </li>
                { needStartDots && <li className='pagination-list__item'>
                  <span className='pagination-list__extend'>...</span>
                </li> }
                {
                  new Array(showingNumbers).fill('').map((_, i) => {
                    return (
                      <li
                        key={i++}
                        {...(contentNumber = needStartDots
                        ? startArrayNumber
                        : startNumber)}
                        {...startNumber++}
                        {...startArrayNumber++}
                        className='pagination-list__item'
                        onClick={e => setActive(parseInt(e.currentTarget.textContent))}
                      >
                        <span className={`pagination-list__link ${active === contentNumber && 'active'}`}>
                          {contentNumber}
                        </span>
                      </li>
                    )
                  })
                }
                { needEndDots && <li className='pagination-list__item'>
                  <span className='pagination-list__extend'>...</span>
                </li> }
                <li 
                  className='pagination-list__item'
                  onClick={e => setActive(parseInt(e.currentTarget.textContent))}
                >
                  <span className={`pagination-list__link ${active === size ? 'active' : ''}`}>{size}</span>
                </li>
              </React.Fragment>
            ) : (
              new Array(size).fill('').map((_, i) => {
                return (
                  <li
                    key={i++}
                    className='pagination-list__item'
                    onClick={e => setActive(parseInt(e.currentTarget.textContent))}
                  >
                    <span className={`pagination-list__link ${active === startArrayNumber && 'active'}`}>
                      {startArrayNumber++}
                    </span>
                  </li>
                )
              })
            )}
          </ul>
          {
            active < size
              ? <div 
                  className='pagination__arrow pagination__next'
                  onClick={() => setActive(active + 1)}
                >
                  Next
                </div>
              : <div className='pagination__arrow pagination__next disabled'>Next</div>
          }
          
        </nav>
      </div>
      
    )
  }

  export default Pagination