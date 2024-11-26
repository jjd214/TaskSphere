import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link } from '@inertiajs/react';
import Pagination from '@/Components/Pagination';
import { PROJECT_STATUS_TEXT_MAP, PROJECT_STATUS_CLASS_MAP } from '@/constants'

export default function Index({ projects }) {
    const user = usePage().props.auth.user;

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Project
                </h2>
            }
        >
            <Head title="Project" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            Welcome, {user.name}!
                        </div>
                        <div className='px-6 pb-6'>
                            <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500'>
                                    <tr className='text-nowrap'>
                                        <th className='px-3 py-3'>#</th>
                                        <th className='px-3 py-3'>Image</th>
                                        <th className='px-3 py-3'>Name</th>
                                        <th className='px-3 py-3'>Status</th>
                                        <th className='px-3 py-3'>Created Date</th>
                                        <th className='px-3 py-3'>Due Date</th>
                                        <th className='px-3 py-3'>Created By</th>
                                        <th className='px-3 py-3 text-center'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {projects.data.map((project, index, _) => (
                                    <tr className='bg-white border-b dark:bg-gray-800d dark:border-gray-700' key={project.id}>
                                        <td className='px-3 py-2'>{index + 1}</td>
                                        <td className='px-3 py-2'>
                                            <img src={project.image_path} alt="image" style={{width:60}} />
                                        </td>
                                        <td className='px-3 py-2'>{project.name}</td>
                                        <td className='px-3 py-2'>
                                            <span className={'px-2 py-1 rounded text-white ' + PROJECT_STATUS_CLASS_MAP[project.status]}>{PROJECT_STATUS_TEXT_MAP[project.status]}</span>
                                        </td>
                                        <td className='px-3 py-2'>{project.created_at}</td>
                                        <td className='px-3 py-2'>{project.due_date}</td>
                                        <td className='px-3 py-2'>{project.createdBy['name']}</td>
                                        <td className='px-3 py-2 text-center'>
                                            <Link
                                                className='font-medium text-blue-500 dark:text-blue-400 hover:underline mx-1'
                                                href={route('project.edit', project.id)}>
                                                Edit
                                            </Link>
                                            <Link
                                                className='font-medium text-red-500 dark:text-red-400 hover:underline mx-1'
                                                href={route('project.destroy', project.id)}>
                                                Delete
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            <Pagination links={projects.meta.links} />
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
