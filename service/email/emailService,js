import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.FROM_MAIL_ID,
        pass: process.env.FROM_MAIL_PASSWORD
    }
});


export const sendEmail = async ({ to, subject, html }) => {
    try {
        const mailOptions = {
            from: process.env.FROM_MAIL_ID,
            to,
            subject,
            html
        };

        const info = await transporter.sendMail(mailOptions);
        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

// Email templates
export const emailTemplates = {
    passwordChange: (userName) => {
        return `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px; background-color: #f9f9f9;">
        <div style="text-align: center; margin-bottom: 20px;">
            <h2 style="color: #333; margin: 0; padding: 20px 0; border-bottom: 2px solid #eee;">Password Change Notification</h2>
        </div>
        
        <div style="padding: 20px; color: #555; line-height: 1.5;">
            <p style="font-size: 16px;">Hello ${userName},</p>
            
            <p style="font-size: 16px;">Your password has been successfully changed. This email is to confirm that this change was made to your account.</p>
            
            <div style="background-color: #e8f0fe; padding: 20px; border-radius: 5px; text-align: center; margin: 30px 0;">
                <div style="font-size: 24px; font-weight: bold; color: #1a73e8;">
                    Password Successfully Changed
                </div>
                <p style="font-size: 12px; color: #666; margin-top: 10px;">If this wasn't you, please contact support immediately</p>
            </div>

            <div style="background-color: #fff3e0; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <p style="color: #e65100; margin: 0; font-size: 14px;">
                    <strong>Security Tips:</strong>
                </p>
                <ul style="color: #795548; font-size: 14px; margin: 10px 0;">
                    <li>Keep your password secure and never share it with others</li>
                    <li>Use a unique password for each of your accounts</li>
                </ul>
            </div>

            <p style="color: #666; font-size: 14px;">If you did not make this change, please contact our support team immediately.</p>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #888; font-size: 14px; margin: 0;">Best regards,<br> SCF Team</p>
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
                <p style="color: #888; font-size: 12px; margin: 0;">
                    This is an automated message, please do not reply directly to this email.
                </p>
            </div>
        </div>
    </div>
        `;
    },
    sendOTP: (userName, otp) => {
        return `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px; background-color: #f9f9f9;">
                <div style="text-align: center; margin-bottom: 20px;">
                    <h2 style="color: #333; margin: 0; padding: 20px 0; border-bottom: 2px solid #eee;">Password Reset OTP</h2>
                </div>
                
                <div style="padding: 20px; color: #555; line-height: 1.5;">
                    <p style="font-size: 16px;">Hello ${userName},</p>
                    
                    <p style="font-size: 16px;">You have requested to reset your password. Please use the following OTP to continue with the password reset process:</p>
                    
                    <div style="background-color: #e8f0fe; padding: 20px; border-radius: 5px; text-align: center; margin: 30px 0;">
                        <div style="font-size: 32px; font-weight: bold; color: #1a73e8; letter-spacing: 5px;">
                            ${otp}
                        </div>
                        <p style="font-size: 12px; color: #666; margin-top: 10px;">This OTP is valid for 5 minutes</p>
                    </div>

                    <div style="background-color: #fff3e0; padding: 15px; border-radius: 5px; margin: 20px 0;">
                        <p style="color: #e65100; margin: 0; font-size: 14px;">
                            <strong>Security Tips:</strong>
                        </p>
                        <ul style="color: #795548; font-size: 14px; margin: 10px 0;">
                            <li>Never share your OTP with anyone</li>
                    </div>

                    <p style="color: #666; font-size: 14px;">If you didn't request this password reset, please ignore this email or contact support if you have concerns.</p>
                </div>

                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                    <p style="color: #888; font-size: 14px; margin: 0;">Best regards,<br>SCF Team</p>
                    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
                        <p style="color: #888; font-size: 12px; margin: 0;">
                            This is an automated message, please do not reply directly to this email.<br>
                            If you need assistance, please contact our support team.
                        </p>
                    </div>
                </div>
            </div>
        `;
    },
    passwordResetSuccess: (userName) => {
        return `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px; background-color: #f9f9f9;">
                <div style="text-align: center; margin-bottom: 20px;">
                    <h2 style="color: #333; margin: 0; padding: 20px 0; border-bottom: 2px solid #eee;">Password Reset Successful</h2>
                </div>
                
                <div style="padding: 20px; color: #555; line-height: 1.5;">
                    <p style="font-size: 16px;">Hello ${userName},</p>
                    
                    <p style="font-size: 16px;">Your password has been successfully reset. You can now use your new password to log in to your account.</p>
                    
                    <div style="background-color: #e8f0fe; padding: 20px; border-radius: 5px; text-align: center; margin: 30px 0;">
                        <div style="font-size: 24px; font-weight: bold; color: #1a73e8;">
                            Password Reset Complete
                        </div>
                        <p style="font-size: 12px; color: #666; margin-top: 10px;">You can now login with your new password</p>
                    </div>

                    <div style="background-color: #fff3e0; padding: 15px; border-radius: 5px; margin: 20px 0;">
                        <p style="color: #e65100; margin: 0; font-size: 14px;">
                            <strong>Security Tips:</strong>
                        </p>
                        <ul style="color: #795548; font-size: 14px; margin: 10px 0;">
                            <li>Keep your new password secure and never share it</li>
                            <li>Use a unique password for each of your accounts</li>
                        </ul>
                    </div>

                    <p style="color: #666; font-size: 14px;">If you did not reset your password, please contact our support team immediately.</p>
                </div>

                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                    <p style="color: #888; font-size: 14px; margin: 0;">Best regards,<br>SCF Team</p>
                    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
                        <p style="color: #888; font-size: 12px; margin: 0;">
                            This is an automated message, please do not reply directly to this email.<br>
                            If you need assistance, please contact our support team.
                        </p>
                    </div>
                </div>
            </div>
        `;
    },


}