import { useState, useEffect } from 'react';

export default function MyComponent() {
    const [data, setData] = useState([]);

  
    useEffect(() => {
      fetch('/api/data')
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  
    return (
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    );
  }