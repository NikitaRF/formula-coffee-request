

export const CapitalizeFirstLetter = (string) => {
    const result = string[0].toUpperCase() + string.slice(1)
    return result
}