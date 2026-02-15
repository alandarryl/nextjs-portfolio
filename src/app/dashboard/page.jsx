import React from 'react';
import Messages from './Messages';
import { messageApi, skillsApi, projectApi } from '@/utils/apiUrl';
import DynamicForm from '@/components/dynamicForm';
import { projectsFields, skillFields, messageFields } from '@/utils/formFields';
import Projects from './Projects';
import Skills from './Skills';

function page() {

  

  return (
    <div>


<div className='fields' >
      <div className='project-form' >
      <h2>skills form</h2>
      <DynamicForm endpoint={projectApi.api} fields={projectsFields} />
    </div>

    <div className='skill-form' >
      <h2>skills form</h2>
      <DynamicForm endpoint={skillsApi.api} fields={skillFields} />
    </div>

    <div className='message-form' >
      <h2>skills form</h2>
      <DynamicForm endpoint={messageApi.api} fields={messageFields} />
    </div>
</div>


      <div>
        <Projects/>
      </div>

      <div>
        <Skills />
      </div>

      <div>
        <Messages/>
      </div>
    </div>
  )
}

export default page