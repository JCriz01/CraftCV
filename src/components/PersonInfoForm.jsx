

const PersonInfoForm = ({setPersonInfo})=>{

  return(
    <form action="" className=" mb-5 ">
      <ul>
        <li>
          <label htmlFor="full-name" className=" font-semibold ">Full Name</label>
          <div>
            <input type="text" className=" bg-neutral-200 rounded-lg p-1 " placeholder="Enter your full name"
            />
          </div>
        </li>
        <li>
        <label htmlFor="email" className="font-semibold">Email</label>
          <div>
            <input type="email" className=" bg-neutral-200 rounded-lg p-1 " placeholder="Enter email"/>
          </div>
        </li>
        <li>
        <label htmlFor="phone-number"className=" font-semibold ">Phone Number</label>
          <div>
            <input type="text" className=" bg-neutral-200 rounded-lg p-1 " placeholder="Enter phone number"/>
          </div>
        </li>
        <li>
        <label htmlFor="address" className=" font-semibold ">Address</label>
          <div>
            <input type="text" className=" bg-neutral-200 rounded-lg p-1 " placeholder="Enter address"/>
          </div>
        </li>
      </ul>
    </form>
  )
}

export default PersonInfoForm;