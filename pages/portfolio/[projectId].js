import { useRouter } from "next/router"

function ProjectId() {
	const router = useRouter();
	console.log(router.query.projectId)

	return (
		<div>
			this is list id {router.query.projectId}
		</div>
	)
}

export default ProjectId
