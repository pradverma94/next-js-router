import { useRouter } from "next/router"

function ClientProjectPerId() {
	const router = useRouter()
	console.log('object', router)
	return (
		<div>
			this is client project per id
		</div>
	)
}

export default ClientProjectPerId
