new Schema({
    name: { type: String, required: true },
    contacts: [{ type: Schema.Types.ObjectId, ref: contacts }],
})
contactListSchema.methods.print= function (){
    this.contacts.forEach(contact => {
        console.log(contact)
    });
}
module.exports = mongoose.model('cpntactLists, cpntactListSchema')//here you shaoe the data