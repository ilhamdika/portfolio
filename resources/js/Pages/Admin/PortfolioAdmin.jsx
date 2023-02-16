import FlashMessage from "@/Components/FlashMessage";
import NavigationBarAdmin from "@/Layouts/Authenticated/Admin/NavigationBarAdmin";
import { Link, Head } from "@inertiajs/react";

export default function PortfolioAdmin ({auth, flashMessage}){
    return (
        <>
        <Head title="Portfolio Admin" />
        <NavigationBarAdmin />
        <div class="container">
            <h3>Portfolio</h3>
            <Link 
            href={route('admin.portfolio-admin.create')}
            >
                <button type="button" class="btn btn-primary btn-lg">
                    Add
                </button>
            </Link>
            {flashMessage?.message && <FlashMessage message={flashMessage.message}/>}
            

                    <table class="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">No</th>
                        <th scope="col">Thumbnail</th>
                        <th scope="col">Title</th>
                        <th scope="col">Url-demo</th>
                        <th scope="col">Use</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>
                            
                            <button type="button" class="btn btn-warning">Edit</button>
                            <button type="button" class="btn btn-danger">Delete</button>
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                    </table>
        </div>
        </>
    )
}