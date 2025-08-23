export async function generateWordDocument() {
    // In a real implementation, you would use a library like docx.js to generate a Word document
    // For this example, we'll just create a simple text blob
  
    const blob = new Blob(
      [
        `
      TO WHOMSOEVER IT MAY CONCERN
      
      This is to certify that Mrs. Isha Srabani, a student of the BBA (3rd Year), bearing Registration No.- 22040006391510007 from Rajdhani College, Bhubaneswar successfully completed her internship on 'Training Need Identification Through Competency Mapping' under the guidance of Mr Samit Kumar Madhukar (Dy.Manager-HR&ES) from 02.02.2025 to 08.03.2025 at our company.
      
      We wish Mrs. Isha Srabani all the best in her future endeavours.
      `,
      ],
      { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" },
    )
  
    return blob
  }
  
  