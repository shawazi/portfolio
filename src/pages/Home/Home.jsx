import { useEffect, useState, React } from 'react';

const Home = () => {

  const [items, setItems] = useState([]);

  // useEffect(() => {
  //   fetch("/api/items")
  //     .then((res) => res.json())
  //     .then((data) => setItems(data))
  // }, []);

  return (
    <main>
      <h1>Test Data</h1><br/>
      <p>TESTING</p>
    </main>
  )
}

export default Home