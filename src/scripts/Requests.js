import { getRequests } from "./dataAccess.js"
import { deleteRequest } from "./dataAccess.js"


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

const convertRequestToListElement = (request) => {
    return `
    <li class="list">
        ${request.description}
        <button class="request__delete"
                id="request--${request.id}">
            Delete
        </button>
    </li>
`

}


export const Requests = () => {
    const requests = getRequests()

    let html =  "<ul class='request__list'>"
    
        
    let listItem =requests.map(convertRequestToListElement)
            
        
    html += listItem.join("")
    html += "</ul>"

    return html
}