<a class = 'btn'> </a>;
router.get('./addCOntact', req, res, next)=>{
res.render('layout',{
    title: 'Contacts',
    contants,
    noContacts: con
})
})