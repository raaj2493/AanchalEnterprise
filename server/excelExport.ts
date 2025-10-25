import ExcelJS from 'exceljs';
import { promises as fs } from 'fs';
import path from 'path';
import type { InsertContactInquiry } from '@shared/schema';

const EXCEL_FILE_PATH = path.join(process.cwd(), 'contact_inquiries.xlsx');

// Initialize or load the Excel workbook
async function getWorkbook(): Promise<ExcelJS.Workbook> {
  const workbook = new ExcelJS.Workbook();
  
  try {
    // Try to load existing workbook
    await workbook.xlsx.readFile(EXCEL_FILE_PATH);
  } catch (error) {
    // If file doesn't exist, create a new worksheet with headers
    const worksheet = workbook.addWorksheet('Contact Inquiries');
    
    // Set up column headers
    worksheet.columns = [
      { header: 'Timestamp', key: 'timestamp', width: 20 },
      { header: 'Name', key: 'name', width: 25 },
      { header: 'Email', key: 'email', width: 30 },
      { header: 'Phone', key: 'phone', width: 15 },
      { header: 'Message', key: 'message', width: 50 }
    ];
    
    // Style the header row
    worksheet.getRow(1).font = { bold: true };
    worksheet.getRow(1).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFE0E0E0' }
    };
  }
  
  return workbook;
}

// Export contact inquiry data to Excel
export async function appendToExcel(data: InsertContactInquiry): Promise<void> {
  try {
    const workbook = await getWorkbook();
    const worksheet = workbook.getWorksheet('Contact Inquiries') || workbook.addWorksheet('Contact Inquiries');
    
    // Add new row with data
    worksheet.addRow({
      timestamp: new Date().toISOString(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message
    });
    
    // Save the workbook
    await workbook.xlsx.writeFile(EXCEL_FILE_PATH);
    
    console.log(`Successfully appended contact inquiry to Excel: ${data.email}`);
  } catch (error) {
    console.error('Error appending to Excel:', error);
    throw new Error('Failed to export to Excel');
  }
}
