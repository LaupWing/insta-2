const Story = ({username, img}) => {
   return (
      <div>
         <img src={img} alt="" />
         <p>{username}</p>
      </div>
   )
}

export default Story
