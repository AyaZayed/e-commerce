import React, { createContext } from "react";

export const CompanyContext = createContext();

const logoSVG = new URL('../assets/logo.svg', import.meta.url);

export const CompanyProvider = ({ children }) => {
    const company = {
        name: "Cedar Tech",
        location: "Egypt",
        phone: "0111-555-5555",
        email: "cedar@gmail.com",
        logo: logoSVG,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        social: {
            facebook: "https://www.facebook.com",
            twitter: "https://www.twitter.com",
            instagram: "https://www.instagram.com",
        },
        delivery:
            `<div>
                <header>
                    <h1>Delivery and Return policy</h1>
                </header>

                <div>
                    <p>We offer delivery services throughout the&nbsp;Egypt for all orders placed on our website. We use reputable courier companies to ensure your order arrives in a timely and secure manner. Here are some important points to note:</p>
                    <ol>
                        <li>
                            <p>Delivery timeframes may vary depending on your location and the availability of the product. We aim to deliver your order within 2-5 business days.</p>
                        </li>
                        <li>
                            <p>Delivery charges&nbsp;are different from state to another</p>
                        </li>
                        <li>Confirmation call will be done in 24h from submitting your order.</li>
                        <li>After 4 attemps for calling you order will be cancelled if you didnt confirm it.</li>
                        <li>
                            <p>All orders will be dispatched within 24 hours from&nbsp;confirming yourorder, except for weekends and public holidays.</p>
                        </li>
                        <li>
                            <p>Once your order has been dispatched, we will provide you with a tracking number so you can monitor the progress of your delivery.</p>
                        </li>
                        <li>
                            <p>Please ensure that someone is available to receive the delivery at the specified address. In case of a missed delivery, a second attempt will be made. If the second attempt is unsuccessful, your order will be returned to us and you will be responsible for any additional delivery charges.</p>
                        </li>
                    </ol>
                    <p>Return Policy</p>
                    <p>We want you to be completely satisfied with your purchase. If you are not happy with your order for any reason, we offer a 7-day return policy. Here are some important points to note:</p>
                    <ol>
                        <li>
                            <p>All products must be returned in their original condition and packaging, with all accessories and tags attached.</p>
                        </li>
                        <li>
                            <p>We reserve the right to refuse any returns that do not meet our requirements.</p>
                        </li>
                        <li>
                            <p>To initiate a return, please contact us via email or phone and provide your order number and reason for the return.</p>
                        </li>
                        <li>
                            <p>Once your return is approved, we will provide you with instructions on how to send the product back to us.</p>
                        </li>
                        <li>
                            <p>Once we receive the product and verify that it meets our return policy requirements, we will issue a refund to your original payment method within 7-10 business days.</p>
                        </li>
                        <li>
                            <p>Please note that shipping charges are non-refundable and you will be responsible for any return shipping costs.</p>
                        </li>
                    </ol>
                    <p>If you have any questions or concerns about our delivery and return policy, please don't hesitate to contact us.</p>
                    <p>&nbsp; +555-555-555</p>
                    <p>Instagram: @Korean_beauty_sh0p_</p>
                    <p>Contact@Koreanbeautys.com</p>
                    <p>We are committed to providing our customers with a positive shopping experience and will do everything we can to ensure your satisfaction.</p>
                </div>
            </div>`
        ,
        privacy:
            `<div>
                <header>
                    <h1>Privacy Policy</h1>
                </header>

                <div>
                    <p>We take your privacy seriously and are committed to protecting your personal information. This policy explains how we collect, use, and protect your information when you use our website or purchase our products. By using our website or purchasing our products, you agree to the terms of this policy.</p>
                    <p>Information We Collect</p>
                    <p>We may collect the following information when you use our website or purchase our products:</p>
                    <ul>
                        <li>
                            <p>Personal information: This may include your name, email address, phone number, and shipping address.</p>
                        </li>
                        <li>
                            <p>Payment information: This may include your credit card number and billing address.</p>
                        </li>
                        <li>
                            <p>Usage information: This may include information about how you use our website, such as your browsing history and preferences.</p>
                        </li>
                    </ul>
                    <p>How We Use Your Information</p>
                    <p>We use your information for the following purposes:</p>
                    <ul>
                        <li>
                            <p>To process your orders and payments.</p>
                        </li>
                        <li>
                            <p>To communicate with you about your orders, including shipping and delivery updates.</p>
                        </li>
                        <li>
                            <p>To personalize your shopping experience by providing product recommendations and promotions.</p>
                        </li>
                        <li>
                            <p>To improve our website and services by analyzing usage data and customer feedback.</p>
                        </li>
                        <li>
                            <p>To comply with legal and regulatory requirements.</p>
                        </li>
                    </ul>
                    <p>We will never sell or share your information with third parties for marketing purposes.</p>
                    <p>How We Protect Your Information</p>
                    <p>We take reasonable measures to protect your information from unauthorized access, use, and disclosure. This includes using secure servers, encryption, and password protection.</p>
                    <p>However, no security system is completely foolproof, and we cannot guarantee the security of your information. You are responsible for maintaining the confidentiality of your account information and password.</p>
                    <p>Cookies and Other Technologies</p>
                    <p>We may use cookies and other tracking technologies to improve your browsing experience and provide personalized content and promotions. You can disable cookies in your browser settings, but this may limit your access to certain features of our website.</p>
                    <p>Third-Party Websites</p>
                    <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to review the privacy policies of any third-party websites you visit.</p>
                    <p>Changes to this Policy</p>
                    <p>We reserve the right to modify this privacy policy at any time. We will notify you of any changes by posting the updated policy on our website. Your continued use of our website or products after the changes are posted constitutes your acceptance of the revised policy.</p>
                    <p>Contact Us</p>
                    <p>If you have any questions or concerns about our privacy policy, please don't hesitate to contact us at&nbsp;Contact@Koreanbeautys.com</p>
                </div>
            </div>`,
    };

    return (
        <CompanyContext.Provider value={company}>
            {children}
        </CompanyContext.Provider>
    )
}
