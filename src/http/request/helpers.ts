export const objectToFormData = (data): FormData => {
    return Object.keys(data).reduce((formData, key) => {
        const value = data[key]
        if (Array.isArray(value)) {
            value.forEach((item) => {
                formData.append(`${key}[]`, item)
            })
        } else if (value === null) {
            formData.append(key, '')
        } else if (typeof value === 'object' && !(value instanceof File)) {
            formData.append(key, JSON.stringify(value))
        } else if (typeof value === 'boolean') {
            formData.append(key, Number(value).toString())
        } else {
            formData.append(key, value)
        }
        return formData
    }, new FormData())
}