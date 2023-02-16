import NavigationBarAdmin from "@/Layouts/Authenticated/Admin/NavigationBarAdmin";
import { Link } from "@inertiajs/react";

export default function PortfolioAdmin (){
    return (
        <>
        <NavigationBarAdmin />
        <div class="container">
            <h3>Portfolio</h3>
            <Link href={route('add-portfolio-admin')}>
                <button type="button" class="btn btn-primary btn-lg">
                    Add
                </button>
            </Link>

                    <table class="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">No</th>
                        <th scope="col">Thumbnail</th>
                        <th scope="col">Title</th>
                        <th scope="col">Url-demo</th>
                        <th scope="col">Use</th>
                        <th scope="col">Description</th>
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