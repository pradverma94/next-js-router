import { useRouter } from "next/router"

function BlogPostPage() {
	const router = useRouter()
	console.log('router ... ', router.query)
	return (
		<div>
			this is blog post page...
		</div>
	)
}

export default BlogPostPage
