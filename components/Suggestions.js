import { useEffect, useState } from "react"
import faker from 'faker'

const Suggestions = () => {
   const [suggestions, setSuggestions] = useState([])

   useEffect(()=>{
      const suggestions = [...Array(5)].map((_, i)=>({
         ...faker.helpers.contextualCard
      }))
   }, [])

   return (
      <div>
         
      </div>
   )
}

export default Suggestions
