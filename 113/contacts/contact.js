(async () => {
    const mongoose = require('mongoose');
    await mongoose.connect('mondodv://loacalhost:27017/contacts');
    const Contact = require('./contact');
    const joe = new Contact({
        name: 'Joe',
        phone: '216-867-4782',
        email: 'spitz@gmail.com'
    });
    joe.save();

    const ContactList = require('./contactList');
    const listA = new ContactList({
        name: 'new Listing!'
    });
    const listB = new ContactList({
        name: 'new Listing!'
    })
    listA.push(joe.id);//mongoose is flexible
    listB.push(joe.id);

    await listA.save();
    await listB.save();
    listA.print();
    listB.print();

    const loadedList = await ContactList.findOne();
    loadedList.print();

    await ContactList.find().populate('contacts').exec();//can for each thru to print it
})();