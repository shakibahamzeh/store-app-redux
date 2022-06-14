import React,{useState} from 'react'
import { Link } from 'react-router-dom';

const Blog = () => {
  const [page , setPage] = useState('page1');

  return (
    <div>
      <Link to='/page1'>
      <div>
        blog1
       </div>
      </Link>
     <Link to='/page2'>
      <div>
       blog2
      </div>
     </Link>
      
      <div>
        <button onClick={()=>setPage('page1')}>page1</button>
        <button onClick={()=>setPage('page2')}>page2</button>
      </div>
    </div>
  )
}

export default Blog