export const convertStringToArray = (inputString: string): string[] => {
    const result:string[] = []
    for (let i:number = 0; i < inputString.length; i++) result.push(inputString[i])

    return result
}