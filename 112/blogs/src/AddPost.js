import UseForm from './UseForm';
import { useNavigate } from 'react-router-dom';

export default function AddPost() {

    const [formData, setFormData] = UseForm({ title: '', body: '' });
    const navigate = useNavigate();

    const onSubmit = async e => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }
            navigate('/')
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div>
            <h1>add posts</h1>
            <label>Title:
                <input name="title" value={formData.title} onChange={setFormData}></input>
            </label>
            <label>Blog
                <textarea name="body" value={formData.body} onChange={setFormData}></textarea>
            </label>
            <button onClick={onSubmit}> Add</button>
        </div>
    )
}