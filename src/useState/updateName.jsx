import {useState} from 'react'

export default function UpdateName(){
	const [name, setName] = useState("Sam")

function changeName (){
	setName("Kaleb")
}

return (
	<div>
		<button onClick={changeName}>
        Change Name
        </button>
        <br></br>
        {name}
	</div>
)}