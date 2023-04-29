import JobSchema from "./JobSchema.js"

//create new user
export const postJob = (obj) => {
    return JobSchema(obj).save()
}


export const getAllJObs = () => {
    return JobSchema.find()
}

//find by filter and update
export const findJobAndUpdate = ( filter, obj) => {
    return JobSchema.findOneAndUpdate(filter, obj, {new: true})
}

//delete

export const deleteJob = (_id) => {
    return JobSchema.findByIdAndDelete(_id)
}