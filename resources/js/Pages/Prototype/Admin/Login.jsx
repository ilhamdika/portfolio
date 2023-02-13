import { Link } from "@inertiajs/react"
import { Button } from "react-bootstrap"
export default function Login(){
    return (
<div class="login">
	<h1>Login</h1>
    <form method="post">
    	<input type="text" name="u" placeholder="Username" required="required" />
        <input type="password" name="p" placeholder="Password" required="required" />
        <Link href={route('admin.dashboard')}>
            <Button type="submit" class="btn btn-primary btn-block btn-large">
                Login
            </Button>
        </Link>
    </form>
</div>
    )
}