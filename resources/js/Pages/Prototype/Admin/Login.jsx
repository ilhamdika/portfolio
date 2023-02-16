import InputLabel from "@/Components/InputLabel"
import TextInput from "@/Components/TextInput"
import PrimaryButton from "@/Components/PrimaryButton"
import { Link } from "@inertiajs/react"
import { Button } from "react-bootstrap"
export default function Login(){
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

return (
<div class="login">
	<h2>Login</h2>
    <form onSubmit={submit}>
    <InputLabel forInput="email" value="Email" />

    	<TextInput 
            id="email"
            type="email"
            name="email"
            value={data.email}
            className="mt-1 block w-full"
            autoComplete="username"
            isFocused={true}
            handleChange={onHandleChange}
        />
        <InputError message={errors.email} className="mt-2" />

        <InputLabel forInput="password" value="Password" />
        <TextInput
            id="password"
            type="password"
            name="password"
            value={data.password}
            className="mt-1 block w-full"
            autoComplete="current-password"
            handleChange={onHandleChange}
        />
        <InputError message={errors.password} className="mt-2" />
         <PrimaryButton className="ml-4" processing={processing}>
                        Log in
                    </PrimaryButton>
    </form>
</div>
    )
}