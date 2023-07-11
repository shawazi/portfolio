import React, { useEffect, useState } from 'react'

const Projects = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/api/items")
      .then(res => res.json())
      .then(data => setItems(data))
  }, []);
  
  
  return (
    <div>
      <p>Example</p>
      <p>{items}</p>
    </div>
  )
}

export default Projects