import { useLoaderData } from "react-router-dom";



const Phone = () => {
    const phone = useLoaderData();
    console.log(phone)
    return (
        <div>

           <h2>Name: {phone.name}</h2>
           <img src={phone.image} alt="" />
           <p>Description: {phone.description}</p>
           
        </div>
    );
};

export default Phone;