import React from 'react';
import { messageFields } from '@/utils/formFields';
import { messageApi } from '@/utils/apiUrl';

import DynamicForm from '@/components/dynamicForm';

function page() {
    return (
        <div className='contact-form' >
            <h2>Formulaire de contact</h2>
            <DynamicForm fields={messageFields} endpoint={messageApi.api} />
        </div>
    )
}

export default page