import React from 'react'
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';

const JobPage = () => {
    const { id } = useParams();
    // const [loading, setLoading] = useState(true);


    return (
        loading ? <Spinner /> :
            <>
                <h1>Job data {id}</h1>
            </>
    )
}

const jobLoader = async ({ params }) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;
}

export { JobPage as default, jobLoader };