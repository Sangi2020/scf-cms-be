import cloudinary from 'cloudinary';
import 'dotenv/config';

// Cloudinary configuration
cloudinary.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

// Image upload function
const imageUpload = async (file, folderPath) => {
    try {
        if (!file) {
            throw new Error("No image file provided.");
        }

        // Convert the file buffer to base64
        const b64 = Buffer.from(file.buffer).toString("base64");
        const image = "data:" + file.mimetype + ";base64," + b64;

        // Upload to Cloudinary
        const result = await cloudinary.v2.uploader.upload(image, {
            folder: folderPath,
            tags: "product",
            resource_type: "auto",
        });

        // Return result
        return result;
    } catch (error) {
        console.error('Error during image upload:', error);
        throw new Error('Something went wrong while uploading the image.');
    }
};

export default imageUpload



// Example usage:



// if (!req.file) {
//     return res.status(400).json({ message: 'No image provided', success: false });
// }

// const folderPath = 'scf/logo';  // Specify your folder path here
// const result = await imageUpload(req.file, folderPath);
// console.log(result.secure_url);
// return res.status(200).json({
//     message: 'Image uploaded successfully',
//     success: true,
//     imageUrl: result.secure_url
// });
