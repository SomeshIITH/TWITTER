class CrudRepository{

    constructor(model){
        this.model = model;
    }
    async create(data){
        try{
            const record = await this.model.create(data);
            return record;
        }catch(error){
            console.log(`error in creating record ${error}`);
            throw error;
        }
    }

    async bulkCreate(data){
        try{
            const records = await this.model.insertMany(data);
            return records;
        }catch(error){
            console.log(`error in bulk creating records ${error}`);
            throw error;
        }
    }
    
    async get(id){
        try{
            const record = await this.model.findById(id);
            return record;
        }catch(error){
            console.log(`error in getting record ${error}`);
            throw error;
        }
    }

    async getAll(offset=0,limit=0){
        try{
            const records = await this.model.find().skip(offset).limit(limit);
            return records;
        }catch(error){
            console.log(`error in getting all records ${error}`);
            throw error;
        }
    }

    async update(id,data){
        try{
            const record = await this.model.findByIdAndUpdate(id,data,{new : true});//new : true will return updated record ,else it will return old record
            return record;
        }catch(error){
            console.log(`error in updating record ${error}`);
            throw error;
        }
    }

    async destroy(id){
        try{
            const record = await this.model.findByIdAndDelete(id);
            return record;
        }catch(error){
            console.log(`error in deleting record ${error}`);
            throw error;
        }
    }
}

export default CrudRepository;