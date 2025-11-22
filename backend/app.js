import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/contact", async (req, res) => {
  const { fullName, email, phone, subject, message, serviceType } = req.body;

  try {
  const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER || "resicode003@gmail.com",
    pass: process.env.EMAIL_PASS || "rxidvxuynogcyodn",
  },
});


    const mailOptions = {
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL || "resicode003@gmail.com",
      subject: `New Contact Message: ${subject || "No Subject"}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not Provided"}</p>
        <p><strong>Service Type:</strong> ${serviceType || "Not Provided"}</p>
        <p><strong>Subject:</strong> ${subject}</p>

        <h3>Message:</h3>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.json({ success: true, message: "Email Sent Successfully!" });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: "Failed to send email" });
  }
});

// Run Backend Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log("Backend running on port " + PORT);
});
