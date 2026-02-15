import React from 'react';
import { messageFields } from '@/utils/formFields';
import { messageApi } from '@/utils/apiUrl';

import DynamicForm from '@/components/dynamicForm';

function page() {
    return (
        <div>
            <div className='contact-form' >
                <h2>Formulaire de contact</h2>
                <DynamicForm fields={messageFields} endpoint={messageApi.api} />
            </div>
            <div className='contact-info' >
                <ul>
                    <li>Email : okana*****@gmail.com</li>
                    <li>Telephone: +33 08****</li>
                </ul>
            </div>
        </div>
    )
}

export default page