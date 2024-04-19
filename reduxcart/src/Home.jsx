import React from 'react'
import Card from './Card'

const Home = (props) => {
    const items = props.items
  return (
    <div style={{margin:"20px"}}>
        {
            items.map((item)=>{
                return(
                    <Card key={item.id} title={item.title} description={item.description} price={item.price} id={item.id} />
                )
            })
        }
    </div>
  )
}

export default Home