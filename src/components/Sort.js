import React,{useState,useEffect} from 'react'

const Sort = () => {
     const blogData = [
    {id:0,image:"",title:"title1",describtion:"Lorem ipsom",visitCount:10},
    {id:1,image:"",title:"title2",describtion:"Lorem ipsom",visitCount:11},
    {id:2,image:"",title:"title3",describtion:"Lorem ipsom",visitCount:2},
    {id:3,image:"",title:"title4",describtion:"Lorem ipsom",visitCount:10},
    {id:4,image:"",title:"title5",describtion:"Lorem ipsom",visitCount:20},
    {id:5,image:"",title:"title6",describtion:"Lorem ipsom",visitCount:10},
    {id:6,image:"",title:"title7",describtion:"Lorem ipsom",visitCount:30},
    {id:7,image:"",title:"title8",describtion:"Lorem ipsom",visitCount:100},
    {id:8,image:"",title:"title9",describtion:"Lorem ipsom",visitCount:5}
  ];

   const [blogs, setBlogs] = useState([])
  

    useEffect(() => {
        let blogs = blogData.map(blog => blog.visitCount);
        setBlogs(blogs)
    }, []); 

    const sortAscending = () => {
      const sortAscBlogs = [...blogs]
      sortAscBlogs.sort((a, b) => a - b)    
      setBlogs( sortAscBlogs )
    }
    
    const sortDescending = () => {
        const sortDescBlogs = [...blogs]
        sortDescBlogs.sort((a, b) => a - b).reverse()
        setBlogs( sortDescBlogs)
    }

  return (
    <div>
         <div>
        <ul>
          {
            blogs.map((blog, i) => {
              return <li>{i} - Rs.{blog}</li>;
            })
          }
        </ul>
        <button onClick={sortAscending}>asc</button>
        <button onClick={sortDescending}>desc</button>
      </div>
      
      </div>
  )
}

export default Sort