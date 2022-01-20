const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    url:{
        type:String,
        require:true
    },
    imageUrl:{
        type:String
    },
    newsSite:{
        type:String
    },
    summary:{
        type:String
    },
    publishedAt :{
        type:String
    },
    launches:[{
        id:{
            type:String
        },
        provider:{
            type:String
        }
    }],
    events:[{
        id:{
            type:String
        },
        provider:{
            type:String
        }
    }],
    createdAt:{
        type:Date,
        default:Date.now
    }
    
        
});

const Article =mongoose.model('Article',ArticleSchema);

module.exports = Article;

