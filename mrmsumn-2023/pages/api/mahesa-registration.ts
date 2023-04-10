import { profile } from "console";
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import { use } from "react";
const formidable = require('formidable');
const path = require('path');
const fs = require('fs/promises');
const filesys = require('fs');

export const config = {
    api : {
        bodyParser : false
    }
}


// File Uploads
// New Path jadi nama file db nya 
const processInput = (req : NextApiRequest, saveLocally: boolean) => {
    const options : any = {};
    if (saveLocally){
        options.uploadDir = path.join(process.cwd(), '/public/images');        
        options.filename = (name : any, ext : any, path : any, form : any) => {
            return Date.now().toString()  + "_" + path.originalFilename;
        }
        options.multiples = true;
    }

    const form = formidable(options);
    return new Promise((resolve, reject) => {
        form.parse(req, async (err : any, fields : any, files : any) => {
            const validationErrorList = [];

            const userData : any = {};

            let {
                name = '',
                nim = '',
                email_student = '',
                birth_date = '',
                birth_place = '',
                gender = '',
                address = '',
                phone_number = '',
                line_id = '',
                instagram_username = '',
                tiktok_username = '',
                major = '',
                year = '',
                gpa = '',
                height = '',
                weight = '',
                clothes_size = '',
                shoe_size = '',
                pants_size = '',
                about_me = '',
                motivation = '',
                personality = '',
                talents = '',
                achievements = ''
            } = fields;

            const hasLetter = /[^\d]/;

            // XXX - ID (auto-increment / NIM) ------------------------------------------------------------------------------


            // Name -------------------------------------------------
            // Check for empty entry
            if (!name || name == ''){
                validationErrorList.push({errorType : "EMPTY_NAME", message : "Nama tidak boleh kosong."});
            }     
            userData.name = name;       
                    
            // NIM ---------------------------------------------------
            // - Check for empty entry
            nim = nim.toString();
            if (!nim || nim == ''){
                validationErrorList.push({errorType : "EMPTY_NIM", message : "NIM tidak boleh kosong."});
            }          
            // - Check if nim has character other than numbers  
            else if (hasLetter.test(nim)){
                validationErrorList.push({errorType : "INVALID_NIM", message : "Format NIM tidak valid."});                
            }            
            userData.nim = nim;
            
            // Email -------------------------------------------------
            // - Check for empty entry
            const studentEmailPattern = /^(\w+(.\w+)*)(@student.umn.ac.id)$/gm;
            if (!email_student || email_student == ''){
                validationErrorList.push({errorType : "EMPTY_EMAIL", message : "Email tidak boleh kosong."});
            } 
            // - Check if input ends with @student.umn.ac.id
            else if (!studentEmailPattern.test(email_student)) {
                validationErrorList.push({errorType : "INVALID_EMAIL", message : "Harus menggunakan email student."});                
            }
            userData.email_student = email_student;

            // Birth Date ------------------------------------------------------------------------------            
            // - Check for empty entry
            if (!birth_date || birth_date == ''){
                validationErrorList.push({errorType : "EMPTY_BIRTH_DATE", message : "Tanggal lahir tidak boleh kosong."});
            }
            // - Check for format validity
            const tempBirthDate = new Date(birth_date);
            if (isNaN(tempBirthDate.getDay())|| isNaN(tempBirthDate.getMonth())){
                validationErrorList.push({errorType : "INVALID_BIRTH_DATE", message : "Format tanggal lahir tidak valid."});                
            }
            userData.birth_date = tempBirthDate;             
               
            
            // Birth Place ------------------------------------------------------------------------------
            // - Check for empty entry
            if (!birth_place || birth_place == ''){
                validationErrorList.push({errorType : "EMPTY_BIRTH_PLACE", message : "Tempat lahir tidak boleh kosong."});
            }    
            userData.birth_place = birth_place;
            
            
            // Gender ------------------------------------------------------------------------------                        
            // - Check for empty entry
            if (!gender || gender == ''){
                validationErrorList.push({errorType : "EMPTY_GENDER", message : "Jenis kelamin tidak boleh kosong."});
            } 
            // - Check for invalid entry            
            else if (gender != 'm' && gender != 'f'){
                validationErrorList.push({errorType : "INVALID_GENDER", message : "Jenis kelamin tidak valid."});
            } 
            userData.gender = gender;

                    
            // Address ------------------------------------------------------------------------------                       // - Check for empty entry
            // - Check for empty entry
            if (!address || address == ''){
                validationErrorList.push({errorType : "EMPTY_ADDRESS", message : "Alamat tidak boleh kosong."});
            }   
            userData.address = address;
            
            
            // Phone Number (mungkin depannya kasi prepend +62) ------------------------------------------------------------------------------            
            // - Check for empty entry
            phone_number = phone_number.toString();            
            if (!phone_number || phone_number == ''){
                validationErrorList.push({errorType : "EMPTY_PHONE_NUMBER", message : "Nomor telepon tidak boleh kosong."});
            }
            // - Check if phone number has other character other than numbers
            else if (hasLetter.test(phone_number)){
                validationErrorList.push({errorType : "INVALID_PHONE_NUMBER", message : "Format nomor telepon tidak valid."});                
            }
            userData.phone_number = phone_number;

            // Line ID ------------------------------------------------------------------------------            
            // - Check for empty entry
            if (!line_id || line_id == ''){
                validationErrorList.push({errorType : "EMPTY_LINE_ID", message : "ID Line tidak boleh kosong."});
            }             
            userData.line_id = line_id;

            // Instagram Username ------------------------------------------------------------------------------            
            // - Check for empty entry
            if (!instagram_username || instagram_username == ''){
                validationErrorList.push({errorType : "EMPTY_INSTAGRAM_USERNAME", message : "Username Instagram tidak boleh kosong."});
            }          
            userData.instagram_username = instagram_username;   

            // Tiktok Username ------------------------------------------------------------------------------                    
            userData.tiktok_username = tiktok_username;            

            // Major ------------------------------------------------------------------------------            
            // - Check for empty entry
            if (!major || major == ''){
                validationErrorList.push({errorType : "EMPTY_MAJOR", message : "Jurusan tidak boleh kosong."});
            }             
            userData.major = major;

            // Year  ------------------------------------------------------------------------------            
            // - Check for empty entry
            year = year.toString();
            if (!year || year == ''){
                validationErrorList.push({errorType : "EMPTY_YEAR", message : "Tahun tidak boleh kosong."});
            }             
            // - Check if year has other character other than numbers            
            else if (hasLetter.test(year)){
                validationErrorList.push({errorType : "INVALID_YEAR", message : "Format tahun tidak valid."});                
            }
            userData.year = year;


            // GPA ------------------------------------------------------------------------------            
            // - Check for empty entry 
            const gpaPattern = /(^(4)$|^(4.0)$)|(^[0-3]([.]+[0-9]+)*$)/gm;
            gpa = gpa.toString();
            if (!gpa || gpa == ''){
                validationErrorList.push({errorType : "EMPTY_GPA", message : "IPK tidak boleh kosong."});
            }             
            // - Check if GPA has other character other than numbers            
            else if (!gpaPattern.test(gpa)){
                validationErrorList.push({errorType : "INVALID_GPA", message : "Format IPK tidak valid."});                
            }            
            userData.gpa = gpa;

            // Height ------------------------------------------------------------------------------            
            // - Check for empty entry            
            height = height.toString();
            if (!height || height == ''){
                validationErrorList.push({errorType : "EMPTY_HEIGHT", message : "Tinggi badan tidak boleh kosong."});
            }        
            // - Check if height has other character other than numbers                 
            else if (hasLetter.test(height)){
                validationErrorList.push({errorType : "INVALID_HEIGHT", message : "Format tinggi badan tidak valid."});                
            }  
            userData.height = height;
            
            
            // Weight ------------------------------------------------------------------------------            
            // - Check for empty entry            
            weight = weight.toString();
            if (!weight || weight == ''){
                validationErrorList.push({errorType : "EMPTY_WEIGHT", message : "Berat badan tidak boleh kosong."});
            }       
            // - Check if weight has other character other than numbers                  
            else if (hasLetter.test(weight)){
                validationErrorList.push({errorType : "INVALID_WEIGHT", message : "Format berat badan tidak valid."});                
            }              
            userData.weight = weight;



            // Clothes Size ------------------------------------------------------------------------------            
           // - Check for empty entry            
           clothes_size = clothes_size.toString();
           if (!clothes_size || clothes_size == ''){
               validationErrorList.push({errorType : "EMPTY_CLOTHES_SIZE", message : "Ukuran baju tidak boleh kosong."});
           }       
           // - Check if clothes size has other character other than numbers                  
           else if (hasLetter.test(clothes_size)){
               validationErrorList.push({errorType : "INVALID_CLOTHES_SIZE", message : "Format ukuran baju tidak valid."});                
           }   
           userData.clothes_size = clothes_size;
           
           
            // Shoe Size ------------------------------------------------------------------------------            
           // - Check for empty entry            
           shoe_size = shoe_size.toString();
           if (!shoe_size || shoe_size == ''){
               validationErrorList.push({errorType : "EMPTY_SHOE_SIZE", message : "Ukuran sepatu tidak boleh kosong."});
           }       
           // - Check if shoe size has other character other than numbers                  
           else if (hasLetter.test(shoe_size)){
               validationErrorList.push({errorType : "INVALID_SHOE_SIZE", message : "Format ukuran sepatu tidak valid."});                
           }
           shoe_size = Number(shoe_size);
           userData.shoe_size = shoe_size;


            // Pants Size ------------------------------------------------------------------------------            
           // - Check for empty entry            
           pants_size = pants_size.toString();
           if (!pants_size || pants_size == ''){
               validationErrorList.push({errorType : "EMPTY_PANTS_SIZE", message : "Ukuran celana tidak boleh kosong."});
           }       
           // - Check if pants size has other character other than numbers                  
           else if (hasLetter.test(pants_size)){
               validationErrorList.push({errorType : "INVALID_PANTS_SIZE", message : "Format ukuran celana tidak valid."});                
           }     
           userData.pants_size = pants_size;          

            // About Me ------------------------------------------------------------------------------            
            // - Check for empty entry
            if (!about_me || about_me == ''){
                validationErrorList.push({errorType : "EMPTY_ABOUT_ME", message : "Deskripsi diri tidak boleh kosong."});
            }
            userData.about_me = about_me;        

            // Motivation ------------------------------------------------------------------------------            
            // - Check for empty entry
            if (!motivation || motivation == ''){
                validationErrorList.push({errorType : "EMPTY_MOTIVATION", message : "Motivasi diri tidak boleh kosong."});
            }     
            userData.motivation = motivation;           

            // Personality ------------------------------------------------------------------------------            
            // - Check for empty entry
            if (!personality || personality == ''){
                validationErrorList.push({errorType : "EMPTY_PERSONALITY", message : "Kepribadian diri tidak boleh kosong."});
            } 
            userData.personality = personality;             
            
            // Talents ------------------------------------------------------------------------------            
            // - Check for empty entry
            if (!talents || talents == ''){
                validationErrorList.push({errorType : "EMPTY_TALENT", message : "Talenta diri tidak boleh kosong."});
            }   
            userData.talents = talents;            

            // Achievements (opsional?) ------------------------------------------------------------------------------              
            userData.achievements = achievements; 

            // -----------------------------------------------
            // FILE INPUTS
            // -----------------------------------------------
            const validImageExtensions = ['jpg', 'jpeg','png', 'webp'];               
            const validGPAScreenshotExtensions = ['jpg', 'jpeg','png', 'webp', 'zip', 'pdf'];
            const validStudentCardFileExtensions = ['jpg', 'jpeg','png', 'webp', 'pdf'];            
            const validFileExtensions = ['pdf', 'docx'];            

            // Picture ------------------------------------------------------------------------------            
            const picture = files.picture;              
            // - Check if picture is empty
            if (!picture){
                validationErrorList.push({errorType : "EMPTY_PICTURE", message : "Foto tidak boleh kosong."});                   
            } 
            // - Check extension            
            else {
                const pictureExtension = picture.filepath.split('.').pop();                       
                if (!validImageExtensions.includes(pictureExtension)) {
                    validationErrorList.push({errorType : "INVALID_PICTURE_EXTENSION", message : "Jenis file tidak sesuai (harus .jpg, .png, .webp, atau .gif)"});                        
                } else {
                    // SUCCESS
                    const pictureTargetDirectory = path.join(process.cwd(), '/public/images/pictures');
                    if (!filesys.existsSync(pictureTargetDirectory)){
                        filesys.mkdirSync(pictureTargetDirectory);
                    }
                    const pictureOldPath = picture.filepath;
                    const pictureNewPath = path.join(pictureTargetDirectory, picture.newFilename);
                    filesys.renameSync(pictureOldPath, pictureNewPath);
                    userData.picture = path.join("/public/images/pictures", picture.newFilename);
                }
            }            

        
            // Personality Screenshot ------------------------------------------------------------------------------            
            const personalityScreenshot = files.personality_screenshot;              
            // - Check if personality screenshot is empty
            if (!personalityScreenshot){
                validationErrorList.push({errorType : "EMPTY_PERSONALITY_SCREENSHOT", message : "Foto tidak boleh kosong."});                   
            } 
            // - Check extension            
            else {
                const personalityScreenshotExtension = personalityScreenshot.filepath.split('.').pop();                       
                if (!validImageExtensions.includes(personalityScreenshotExtension)) {
                    validationErrorList.push({errorType : "INVALID_PERSONALITY_SCREENSHOT_EXTENSION", message : "Jenis file tidak sesuai (harus .jpg, .png, atau .webp)"});                        
                } else {
                    // SUCCESS
                    const personalityScreenshotTargetDirectory = path.join(process.cwd(), '/public/images/personality_screenshots');
                    if (!filesys.existsSync(personalityScreenshotTargetDirectory)){
                        filesys.mkdirSync(personalityScreenshotTargetDirectory);
                    }
                    const personalityScreenshotOldPath = personalityScreenshot.filepath;
                    const personalityScreenshotNewPath = path.join(personalityScreenshotTargetDirectory, personalityScreenshot.newFilename);
                    filesys.renameSync(personalityScreenshotOldPath, personalityScreenshotNewPath);
                    userData.personality_screenshot = path.join("/public/images/personality_screenshots", personalityScreenshot.newFilename);
                }
            }             

        
            // Grades Screenshot ------------------------------------------------------------------------------            
            const gradesScreenshot = files.grades_screenshot;              
            // - Check if grades screenshot is empty
            if (!gradesScreenshot){
                validationErrorList.push({errorType : "EMPTY_GRADES_SCREENSHOT", message : "Foto tidak boleh kosong."});                   
            } 
            // - Check extension            
            else {
                const gradesScreenshotExtension = gradesScreenshot.filepath.split('.').pop();                       
                if (!validGPAScreenshotExtensions.includes(gradesScreenshotExtension)) {
                    validationErrorList.push({errorType : "INVALID_GRADES_SCREENSHOT_EXTENSION", message : "Jenis file tidak sesuai (harus .jpg, .png, .webp, atau .gif)"});                        
                } else {
                    // SUCCESS
                    const gradesScreenshotTargetDirectory = path.join(process.cwd(), '/public/images/grades_screenshots');
                    if (!filesys.existsSync(gradesScreenshotTargetDirectory)){
                        filesys.mkdirSync(gradesScreenshotTargetDirectory);
                    }
                    const gradesScreenshotOldPath = gradesScreenshot.filepath;
                    const gradesScreenshotNewPath = path.join(gradesScreenshotTargetDirectory, gradesScreenshot.newFilename);
                    filesys.renameSync(gradesScreenshotOldPath, gradesScreenshotNewPath);
                    userData.grades_screenshot = path.join("/public/images/grades_screenshots", gradesScreenshot.newFilename);
                }
            }

            // Student Card Screenshot ------------------------------------------------------------------------------            
            const studentCardScreenshot = files.student_card_screenshot;              
            // - Check if student card screenshot is empty
            if (!studentCardScreenshot){
                validationErrorList.push({errorType : "EMPTY_STUDENT_CARD_SCREENSHOT", message : "Foto tidak boleh kosong."});                   
            } 
            // - Check extension            
            else {
                const studentCardScreenshotExtension = studentCardScreenshot.filepath.split('.').pop();                       
                if (!validStudentCardFileExtensions.includes(studentCardScreenshotExtension)) {
                    validationErrorList.push({errorType : "INVALID_STUDENT_CARD_SCREENSHOT_EXTENSION", message : "Jenis file tidak sesuai (harus .jpg, .png, .webp, atau .gif)"});                        
                } else {
                    // SUCCESS
                    const studentCardScreenshotTargetDirectory = path.join(process.cwd(), '/public/images/student_card_screenshots');
                    if (!filesys.existsSync(studentCardScreenshotTargetDirectory)){
                        filesys.mkdirSync(studentCardScreenshotTargetDirectory);
                    }
                    const studentCardScreenshotOldPath = studentCardScreenshot.filepath;
                    const studentCardScreenshotNewPath = path.join(studentCardScreenshotTargetDirectory, studentCardScreenshot.newFilename);
                    filesys.renameSync(studentCardScreenshotOldPath, studentCardScreenshotNewPath);
                    userData.student_card_screenshot = path.join("/public/images/student_card_screenshots", studentCardScreenshot.newFilename);
                }
            }              

            // XXX Created At (NOW()) ------------------------------------------          

            // DATA VALIDITY CHECK
            if (validationErrorList.length < 1){
                try {
                    const createUser = await prisma.peserta_2023.create({
                        data : userData
                    });
                } catch(err : any){
                    throw reject({code : 500, message : err});
                }
            } else {
                throw reject({code : 400, message : "Gagal melakukan pendaftaran.", errors : validationErrorList});
            }            
    
            resolve(userData);
        });
    });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse){

    if (req.method !== "POST") {
        return res.status(400).json({
          status: "FAIL",
          code: 404,
          message: "Page not found",
        });
    }    


    try {
        await fs.readdir(path.join(process.cwd() + "/public", "/images"));
    } catch (err){
        await fs.mkdir(path.join(process.cwd() + "/public", "/images"));
    }

    try {
        await fs.readdir(path.join(process.cwd() + "/public", "/files"));
    } catch (err){
        await fs.mkdir(path.join(process.cwd() + "/public", "/files"));
    }    

    await processInput(req, true)
        .then((result) => {
            const APP_URL = process.env.NODE_ENV == 'production' ? process.env.APP_URL : 'http://localhost:3000';            
            const data : any = result;
            data.picture = APP_URL + data.picture;
            data.personality_screenshot = APP_URL + data.personality_screenshot;            
            data.grades_screenshot = APP_URL + data.grades_screenshot;
            data.student_card_screenshot = APP_URL + data.student_card_screenshot;
            return res.status(200).json({
                status : "SUCCESS",
                code : 200,
                message : "Berhasil daftar",
                data
            });              
        }).catch((err) => {
            const {code, message, errors} = err;
            return res.status(500).json({
                status : "FAIL",
                code,
                message,
                errors
            })              
        })
}