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

        const transformedData = { ...formData };

        // Transform comma-separated fields into arrays
        fields.forEach(field => {
            if (field.multiple && transformedData[field.name]) {
            transformedData[field.name] =
                transformedData[field.name]
                .split(",")
                .map(item => item.trim());
            }
        });

        await axios.post(endpoint, transformedData);

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
