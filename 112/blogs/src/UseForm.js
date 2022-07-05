import { useState } from "react";

const UseForm = (initialFormValues) => {
    const [formData, setFormData] = useState(initialFormValues);
    return [
        formData,
        e => setFormData({ ...formData, [e.target.name]: e.target.value })
    ]
}
export default UseForm;