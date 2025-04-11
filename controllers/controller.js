import model from '../models/model.js';
export const createDocument = async (req, res) => {
   try {
       const newDocument = new model(req.body);
       await newDocument.save();
       res.status(201).json(newDocument);
   } catch (error) {
       res.status(400).json({ message: error.message });
   }
};
export const getDocuments = async (req, res) => {
   try {
       const documents = await model.find();
       res.status(200).json(documents);
   } catch (error) {
       res.status(500).json({ message: error.message });
   }
};