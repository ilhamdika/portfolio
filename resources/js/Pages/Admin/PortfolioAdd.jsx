import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import NavigationBarAdmin from "@/Layouts/Authenticated/Admin/NavigationBarAdmin";
import { Link } from "@inertiajs/react";

export default function PortfolioAdd (){
    return (
        <>
        <NavigationBarAdmin />
        {/* <Link href={route('portfolio-admin')}>
            <img src="https://cdn-icons-png.flaticon.com/512/0/340.png" />
        </Link> */}
        <div class="container">
            <h3>Add Portfolio</h3>
                <form>
                <InputLabel forInput="title" value="Title" />
                    <TextInput />
                <InputLabel forInput="url_demo" value="Url_demo" />
                    <TextInput />
                <InputLabel forInput="use" value="Use" />
                    <TextInput />
                <InputLabel forInput="description" value="Description" />
                    <TextInput />
                <InputLabel forInput="thumbnail" value="Thumbnail" />
                    <TextInput 
                        type="file"
                    />

                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
        </div>
        </>
    )
}