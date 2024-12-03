import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import { TASK_PRIORITY_CLASS_MAP, TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "@/constants";

export default function Index({tasks}) {
    const user = usePage().props.auth.user;

    return(
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Task
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            Welcome, {user.name}!
                        </div>
                        <div className="p-6 text-gray-900">
                            <pre className="whitespace-pre-wrap">
                                {JSON.stringify(tasks, null, 2)}
                            </pre>
                            <div className='px-6 pb-6'>
                            {/* <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
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
                                {tasks.data.map((task, index, _) => (
                                    <tr className='bg-white border-b dark:bg-gray-800d dark:border-gray-700' key={task.id}>
                                        <td className='px-3 py-2'>{index + 1}</td>
                                        <td className='px-3 py-2'>
                                            <img src={task.image_path} alt="image" style={{width:60}} />
                                        </td>
                                        <td className='px-3 py-2'>{task.name}</td>
                                        <td className='px-3 py-2'>
                                            <span className={'px-2 py-1 rounded text-white ' + TASK_STATUS_CLASS_MAP[task.status]}>{TASK_STATUS_TEXT_MAP[task.status]}</span>
                                        </td>
                                        <td className='px-3 py-2'>{task.created_at}</td>
                                        <td className='px-3 py-2'>{task.due_date}</td>
                                        <td className='px-3 py-2'>{task.createdBy['name']}</td>
                                        <td className='px-3 py-2 text-center'>
                                            <Link
                                                className='font-medium text-blue-500 dark:text-blue-400 hover:underline mx-1'
                                                href={route('task.edit', task.id)}>
                                                Edit
                                            </Link>
                                            <Link
                                                className='font-medium text-red-500 dark:text-red-400 hover:underline mx-1'
                                                href={route('task.destroy', task.id)}>
                                                Delete
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            <Pagination links={task.meta.links} /> */}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
