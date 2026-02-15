
//form fields for the projects
export const projectsFields = [
    {
        label: "name",
        type: "text",
        name: "name",
        id: "name",
        placeholder: "enter the name of the entreprise",
        icon: "",
        required: true
    },
    {
        label: "image",
        type: "file",
        name: "image",
        id: "image",
        placeholder: "entrer l'image",
        icon: ""
    },
    {
        label: "technologies",
        type: "text",
        name: "technologies",
        id: "technologies",
        placeholder: "enter the technologie use (separate the with a girgule , )",
        icon: "",
        required: true
    },
    {
        label: "skillUse",
        type: "text",
        name: "skillUse",
        id: "skillUse",
        placeholder: "enter the skill use",
        icon: ""
    },
    {
        label: "completedDate",
        type: "date",
        name: "completedDate",
        id: "completedDate",
        placeholder: "enter the completion date",
        icon: ""
    },
    {
        label: "description",
        type: "text",
        name: "description",
        id: "description",
        placeholder: "enter the description",
        icon: ""
    },
    {
        label: "comment",
        type: "text",
        name: "comment",
        id: "comment",
        placeholder: "enter a comment",
        icon: ""
    },
    {
        label: "link",
        type: "text",
        name: "link",
        id: "link",
        placeholder: "enter the link",
        icon: ""
    },
    {
        label: "repositoryLink",
        type: "url",
        name: "repositoryLink",
        id: "repositoryLink",
        placeholder: "enter the repository link",
        icon: "",
        required: true
    }
];

//form field for messages

export const messageFields = [
    {
        label: "nom",
        type: "text",
        name: "name",
        id: "name",
        placeholder: "entrer votre nom",
        icon: ""
    },
    {
        label: "email",
        type: "email",
        name: "email",
        id: "email",
        placeholder: "entrer votre adresse email",
        icon: ""
    },
    {
        label: "message",
        type: "textarea",
        name: "message",
        id: "message",
        placeholder: "entrer le message que vous souhaiter envoyer",
        icon: ""
    }
];

//form field for experience

export const experienceFields = [
    {
        label: "enterprise",
        type: "text",
        name: "enterprise",
        id: "enterprise",
        placeholder: "enter the your enterprise",
        icon: ""
    },
    {
        label: "description",
        type: "text",
        name: "description",
        id: "description",
        placeholder: "enter the description",
        icon: ""
    },
    {
        label: "role",
        type: "text",
        name: "role",
        id: "role",
        placeholder: "enter your role",
        icon: ""
    },
    {
        label: "debutDate",
        type: "date",
        name: "debutDate",
        id: "debutDate",
        placeholder: "enter the debut Date",
        icon: ""
    },
    {
        label: "endDate",
        type: "date",
        name: "endDate",
        id: "endDate",
        placeholder: "enter the end Date",
        icon: ""
    },
    {
        label: "skillUse",
        type: "text",
        name: "skillUse",
        id: "skillUse",
        placeholder: "enter the skill Use",
        icon: ""
    }
];

//form fields for skills
export const skillFields = [
    {
        label: "skillName",
        type: "text",
        name: "skillName",
        id: "skillName",
        placeholder: "enter the skill that you use",
        icon: ""
    },
    {
        label: "image",
        type: "file",
        name: "image",
        id: "image",
        placeholder: "enter the image of the skill",
        icon: ""
    },
    {
        label: "descriptif",
        type: "text",
        name: "descriptif",
        id: "descriptif",
        placeholder: "enter the skill descriptif",
        icon: ""
    },
    {
        label: "scale",
        type: "text",
        name: "scale",
        id: "scale",
        placeholder: "enter the skill scale",
        icon: ""
    },
    {
        label: "skillLevel",
        type: "select",
        options: ["Beginner", "Intermediate", "Advanced", "Expert"] ,
        name: "skillLevel",
        id: "skillLevel",
        placeholder: "enter the skill level",
        icon: ""
    }
]

//form fields for the education 
export const educationFields = [
    {
        label: "centre de formation",
        type: "text",
        name: "formationCenter",
        id: "formationCenter",
        placeholder: "Entre le centre de formation",
        icon: ""
    },
    {
        label: "nom de la formation",
        type: "text",
        name: "formationName",
        id: "formationName",
        placeholder: "Entre le nom de la formation",
        icon: ""
    },
    {
        label: "debut de la formation",
        type: "date",
        name: "debutDate",
        id: "debutDate",
        placeholder: "Entre la date de debut de la formation",
        icon: ""
    },
    {
        label: "fin de la formation",
        type: "date",
        name: "endDate",
        id: "endDate",
        placeholder: "Entre la date de fin de la formation",
        icon: ""
    },
    {
        label: "description",
        type: "text",
        name:"description",
        id: "description",
        placeholder: "Entre la description de la formation",
        icon: ""
    },
    {
        label: "competence apprise",
        type: "text",
        name: "skillLearn",
        id: "skillLearn",
        placeholder: "Entre les competence apprise lors de la formation",
        icon: ""
    },
];

