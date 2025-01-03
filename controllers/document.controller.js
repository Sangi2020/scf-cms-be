import prisma from "../helpers/prisma.js";



const validTypes = ['PRIVACY', 'TERMS', 'DISCLAIMER'];

/**
 * Controller to create a document.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {void}
 */


export const createDocument = async (req, res) => {
    const { title, content, type } = req.body;
console.log(req.body,"bodyyy");
    // Validate inputs
    if (!title || !content || !type) {
        return res.status(400).json({ error: "Title, content, and type are required." });
    }

    if (!validTypes.includes(type.toUpperCase())) {
        return res.status(400).json({ error: `Invalid type. Valid types are: ${validTypes.join(', ')}` });
    }

    try {
        // Create document in the database
        const document = await prisma.documents.create({
            data: {
                title : title,
                content : content,
                type: type.toUpperCase(), // Ensure consistent casing for type
            },
        });

        return res.status(201).json({
            message: "Document created successfully.",
            document,
        });
    } catch (error) {
        console.error("Error creating document:", error);
        return res.status(500).json({ error: "Internal Server Error. Failed to create document." });
    }
};



export const getDocumentByType = async (req, res) => {
    const { type } = req.params;
  
    // Validate the document type
    if (!type) {
      return res.status(400).json({ error: "Document type is required." });
    }
  
    if (!validTypes.includes(type.toUpperCase())) {
      return res.status(400).json({ error: `Invalid type. Valid types are: ${validTypes.join(', ')}` });
    }
  
    try {
      // Fetch the document by type
      const document = await prisma.documents.findFirst({
        where: { type: type.toUpperCase() },
      });
  
      if (!document) {
        return res.status(404).json({ error: "Document not found for the given type." });
      }
  
      return res.status(200).json({
        message: "Document retrieved successfully.",
        document,
      });
    } catch (error) {
      console.error("Error fetching document by type:", error);
      return res.status(500).json({ error: "Internal Server Error. Failed to fetch document." });
    }
  };