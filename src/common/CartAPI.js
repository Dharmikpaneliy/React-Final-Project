import { deleterequest, getrequest, postrequest, putrequest } from "../request"

export const getcartdata = () => {
    return getrequest('cat  ')
}

export const postcartdata = (data) => {
    return postrequest('cat',data)
}

export const deletecartdata = (id) => {
    return deleterequest ('cat/', id)
}

export const updatecartdata = (data) => {
   return putrequest ('cat/', data)
}