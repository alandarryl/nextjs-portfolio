"use client";

import { useState } from "react";
import axios from "axios";

function DynamicForm({ fields, endpoint }) {

    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;

        if (type === "file") {
        setFormData(prev => ({
            ...prev,
            [name]: files[0]
        }));
        } else {
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const form = new FormData();

            Object.keys(formData).forEach((key) => {

            let value = formData[key];

            // Si champ multiple → transformer en string avec virgule
            const field = fields.find(f => f.name === key);
            if (field?.multiple && value) {
                value = value.split(",").map(item => item.trim()).join(",");
            }

            form.append(key, value);
            });

            await axios.post(endpoint, form);

            setFormData({});
            alert("Created successfully 🚀");

        } catch (err) {
            setError("Something went wrong");
        } finally {
            setLoading(false);
        }
        };


    return (
        <form onSubmit={handleSubmit}>

        {fields.map((field, index) => (
            <div key={index}>

            <label>{field.label}</label>

            {field.type === "textarea" ? (
                <textarea
                name={field.name}
                required={field.required}
                onChange={handleChange}
                placeholder={field.placeholder}
                />
            ) : field.type === "select" ? (
                <select
                name={field.name}
                required={field.required}
                onChange={handleChange}
                >
                {field.options.map((option, i) => (
                    <option key={i} value={option}>
                    {option}
                    </option>
                ))}
                </select>
            ) : (
                <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                required={field.required}
                onChange={handleChange}
                />
            )}

            </div>
        ))}

        <button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Submit"}
        </button>

        {error && <p>{error}</p>}

        </form>
    );
}

export default DynamicForm;
