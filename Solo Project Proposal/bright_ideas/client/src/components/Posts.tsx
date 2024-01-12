import { useState } from "react"

const Posts = () => {

  const [data, setData] = useState()
  return (
    <div className="w-[80%] mx-auto bg-white shadow-lg p-6">
      <h4 className="text-blue-400 tracking-wide">Oliver </h4>
      <p className="font-medium my-3 tracking-wide text-[16px] line leading-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        A, perspiciatis, laudantium fugiat eius eaque ut consequuntur repudiandae fuga maiores
        commodi similique aliquid rerum, possimus atque ducimus inventore reprehenderit eum ex.</p>

      <p>1314 hours ago</p>
    </div>
  )
}

export default Posts