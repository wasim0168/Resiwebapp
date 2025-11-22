import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, email, phone, subject, message, serviceType } = body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.EMAIL_TO || "",
      subject: `New Contact Form: ${subject || "No Subject"}`,
      text: `
Full Name: ${fullName}
Email: ${email}
Phone: ${phone}
Service: ${serviceType}
Message:
${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.log("EMAIL ERROR:", error);
    return Response.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
