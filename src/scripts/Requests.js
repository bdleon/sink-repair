import { getRequests } from "./dataAccess.js"



const convertRequestToListElement = (request) => {
    return `<li>${request.description}</li>`

}


export const Requests = () => {
    const requests = getRequests()

    let html =  "<ul>"
    
        
    let listItem =requests.map(convertRequestToListElement)
            
        
    html += listItem.join("")
    html += "</ul>"

    return html
}