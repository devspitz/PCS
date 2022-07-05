function createDocs(collections, howMany){
    const c = db[collections];
    for (let i = 0; i < howMany; i++) {
      c.insertOne({
          name: 'document'+i,
          value: i
      });
    }
}