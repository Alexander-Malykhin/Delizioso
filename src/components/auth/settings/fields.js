export const getFormFields = (isLogin) => {
    const fields = [
        {
            name: 'email',
            label: 'Email',
            type: 'email',
            placeholder: 'example@gmail.com',
            required: true
        },
        {
            name: 'password',
            label: 'Password',
            type: 'password',
            placeholder: '*********',
            required: true
        }
    ]

    if (!isLogin) {
        fields.unshift({
            name: 'fullName',
            label: 'Full name',
            type: 'text',
            placeholder: 'Robert Martine',
            required: true
        })
    }

    return fields
}