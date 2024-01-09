/*class APIfilters{
    constructor(query,querystr){
        this.query=query;
        this.querystr=querystr;
    }
    search(){
        let word=this.querystr.keyword
        console.log(word)
        const keyword = word?
        {
            name:{
                $regex: word,
                $options: "i",
            },
        }
        :{};

        this.query=this.query.find({...keyword})
        return this;
    }/*
    filter(){

    }
    pagination(resPerPage) {
        const currentPage = Number(this.queryStr.page) || 1;
        const skip = resPerPage * (currentPage - 1);
    
        this.query = this.query.limit(resPerPage).skip(skip);
        return this;
    }
}

export default APIfilters*/