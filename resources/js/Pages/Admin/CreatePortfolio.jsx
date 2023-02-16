import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import NavigationBarAdmin from "@/Layouts/Authenticated/Admin/NavigationBarAdmin";
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/react';

export default function CreatePortfolio ({auth}){
    const { setData, post, processing, errors } = useForm({
       title:'',
       thumbnail: '',
       url_demo: '',
       use: '',
       description: '',

    });


    const onHandleChange = (event) => {
        setData(
            event.target.name, 
            event.target.type === 'file' 
            ? event.target.files[0] 
            : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('admin.portfolio-admin.store'));
    };

    return (
        <>
        <Head title="Add Portfolio" />
        <NavigationBarAdmin />
        {/* <Link href={route('portfolio-admin')}>
            <img src="https://cdn-icons-png.flaticon.com/512/0/340.png" />
        </Link> */}
        <div class="container">
            <h3>Add Portfolio</h3>
                <form onSubmit={submit}>
                <InputLabel forInput="title" value="Title" />
                    <TextInput 
                        type="text"
                        name="title"
                        variant="primary-outline"
                        handleChange={onHandleChange}
                        placeholder="Enter Title"
                    />
                <InputError message={errors.title} className="mt-2" />

                <InputLabel forInput="url_demo" value="Url_demo" />
                    <TextInput
                        type="url"
                        name="url_demo"
                        variant="primary-outline"
                        handleChange={onHandleChange}
                        placeholder="Enter Url Demo"
                    />
                <InputError message={errors.url_demo} className="mt-2" />

                <InputLabel forInput="use" value="Use" />
                    <TextInput 
                        type="text"
                        name="use"
                        variant="primary-outline"
                        handleChange={onHandleChange}
                        placeholder="Enter Use App Make"
                    />
                <InputError message={errors.use} className="mt-2" />

                <InputLabel forInput="description" value="Description" />
                    <TextInput 
                         type="text"
                         name="description"
                         variant="primary-outline"
                         handleChange={onHandleChange}
                         placeholder="Enter Descriptiom"
                    />
                <InputError message={errors.description} className="mt-2" />
                
                <InputLabel forInput="thumbnail" value="Thumbnail" />
                    <TextInput 
                        type="file"
                        name="thumbnail"
                        variant="primary-outline"
                        handleChange={onHandleChange}
                        placeholder="insert Thumbnail of Portfolio"
                    />
                    <InputError message={errors.thumbnail} className="mt-2" />
                <button 
                    type="submit" 
                    class="btn btn-primary"
                >
                    Submit
                </button>
                </form>
        </div>
        </>
    )
}