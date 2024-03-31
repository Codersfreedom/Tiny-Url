import { nanoid } from "nanoid";
import Url from "../model/URL.js";

export const createUrl = async (req,res) =>{
    try {
        let {url,slug} = req.body;
        if(!slug){
            slug = nanoid(5)
        }
        slug = slug.toLowerCase();
        const checkSlug = await Url.findOne({slug});
        if(checkSlug) {
            return res.status(400).json({message:"slug in use"})
        }
        const newUrl = new Url({
            slug,
            url
        })
        const response = await newUrl.save();
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
        console.log("Internal server error in createUrl controller",error.message)
    }
}

export const getUrl = async (req,res)=>{
    try {
        const {slug} = req.params;
        console.log(slug)
        const urlRes = await Url.findOne({slug});
        
        if(!urlRes) return res.status(400).json({message:"Slug not found"})
        
        res.redirect(`${urlRes.url}`);
        
        
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
        console.log(error.message);
    }

}