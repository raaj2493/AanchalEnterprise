import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";
import { appendToExcel } from "./excelExport";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact inquiry submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      
      // Also append to Excel file
      try {
        await appendToExcel(validatedData);
      } catch (excelError) {
        // Log the error but don't fail the request
        console.error('Failed to export to Excel:', excelError);
      }
      
      res.json({ success: true, inquiry });
    } catch (error) {
      res.status(400).json({ success: false, error: "Invalid data" });
    }
  });

  // Get all contact inquiries (for admin/debugging purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const inquiries = await storage.getAllContactInquiries();
      res.json({ success: true, inquiries });
    } catch (error) {
      res.status(500).json({ success: false, error: "Server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
