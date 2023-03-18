import Contact from "../models/Contacts"

export const renderIndexContact = (req,res) => {
    res.render("renderIndexContact")
}

export const addContacts = async(req,res)=> {
    try{
        const contact = Contact(req.body)
        const savedContact = await contact.save()
        res.redirect("/contacts/views")
    }catch(e){
        console.log(e)
    }
}

export const renderContactsList = async(req,res)=>{
    try{
        const contact  = await Contact.find().lean();

        console.log(contact)
        res.render("contactsList", {contact: contact})
    }catch(e){
        console.log(e)
    }
}

export const renderEditContact = async(req,res) => {
    try{
        const contact = await Contact.findById(req.params.id).lean()

        res.render("editContact", {contact})
    }catch(e){
        console.log(e)
    }
}

export const editContact = async(req,res) => {
    try{
        const {id} = req.params

        await Contact.findByIdAndUpdate(id, req.body)
    
        res.redirect("/contacts/views")
    }catch(e){
        console.log(e)
    }
}

export const deleteContact = async(req,res) => {
    try{
        const {id} = req.params
        
        await Contact.findByIdAndDelete(id, req.body)

        res.redirect("/contacts/views")
    }catch(e){
        console.log(e)
    }
}