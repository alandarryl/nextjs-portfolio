import React from 'react';
import { messageFields } from '@/utils/formFields';
import { messageApi } from '@/utils/apiUrl';

import DynamicForm from '@/components/dynamicForm';

function page() {
    return (
        <div>
            <h2>Formulaire de contact</h2>
            <DynamicForm fields={messageFields} endpoint={messageApi} />
        </div>
    )
}

export default page